"use client";

import { useState } from "react";
import { submitLead, LeadData } from "@/services/leadService";
import { captureEvent, identifyUser, setPersonProperties } from "@/services/posthog";

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

        // Capture full form details
        captureEvent("lead_form_submitted", {
          services: formData.services,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          has_mobile: !!formData.mobile,
        });

        // Identify the user and mark is_lead at the person level when mobile is present
        if (formData.mobile) {
          const distinctId = formData.email || formData.mobile;
          identifyUser(distinctId, {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            is_lead: true,
          });
        } else if (formData.email) {
          // No mobile — still identify by email and set person properties
          identifyUser(formData.email, {
            name: formData.name,
            email: formData.email,
          });
          setPersonProperties({ is_lead: true });
        }

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
