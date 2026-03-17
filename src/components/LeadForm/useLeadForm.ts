"use client";

import { useState } from "react";
import { submitLead, LeadData } from "@/services/leadService";
import { captureEvent } from "@/services/posthog";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL: LeadData = {
  services: [],
  name: "",
  email: "",
  mobile: "",
};

export function useLeadForm(defaultService?: string) {
  const [formData, setFormData] = useState<LeadData>({
    ...INITIAL,
    services: defaultService ? [defaultService] : [],
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleField = (field: keyof Omit<LeadData, "services">, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const already = prev.services.includes(service);
      return {
        ...prev,
        services: already
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const ok = await submitLead(formData);
      if (ok) {
        setStatus("success");
        captureEvent("lead_submitted", { services: formData.services });
        setFormData({ ...INITIAL, services: defaultService ? [defaultService] : [] });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { formData, handleField, toggleService, handleSubmit, status, reset };
}
