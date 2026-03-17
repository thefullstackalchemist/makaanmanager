"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  initPostHog,
  capturePageView,
  captureEvent,
  requestAndCaptureLocation,
} from "@/services/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const enteredAt = useRef<number>(0);
  const activePath = useRef<string>("");

  // Initialise once on mount, then capture first page view
  useEffect(() => {
    initPostHog();
    enteredAt.current = Date.now();
    activePath.current = pathname;
    capturePageView(window.location.href);
    requestAndCaptureLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On route change: log time spent on previous page, then track new page view
  useEffect(() => {
    const isNavigation = activePath.current && activePath.current !== pathname;
    if (!isNavigation) return;

    const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
    captureEvent("page_time_spent", { path: activePath.current, seconds });

    activePath.current = pathname;
    enteredAt.current = Date.now();
    capturePageView(window.location.href);
  }, [pathname]);

  // Track time when tab is hidden (browser close / tab switch)
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
        captureEvent("page_time_spent", { path: activePath.current, seconds });
      } else {
        // Tab became visible again — reset the clock so we don't double-count
        enteredAt.current = Date.now();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return <>{children}</>;
}
