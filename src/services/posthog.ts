import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

export function initPostHog() {
  if (typeof window === "undefined" || !KEY || initialized) return;

  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false, // manual page views
    capture_pageleave: true,
    persistence: "localStorage",
  });

  initialized = true;
}

export function capturePageView(url: string) {
  if (!initialized) return;
  posthog.capture("$pageview", { $current_url: url });
}

export function captureEvent(
  name: string,
  properties?: Record<string, unknown>
) {
  if (!initialized) return;
  posthog.capture(name, properties);
}

export function identifyUser(
  userId: string,
  properties?: Record<string, unknown>
) {
  if (!initialized) return;
  posthog.identify(userId, properties);
}
