"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initPostHog, capturePageView } from "@/services/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    capturePageView(window.location.href);
  }, [pathname]);

  return <>{children}</>;
}
