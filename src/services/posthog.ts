import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

export function initPostHog() {
  if (typeof window === "undefined" || !KEY || initialized) return;

  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false,   // manual page views
    capture_pageleave: true,
    persistence: "localStorage",
    // Required in PostHog JS v1.300+ — without this, person profiles
    // are not created and the People tab stays empty.
    person_profiles: "identified_only",
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

/** Identify the user and set person-level properties. */
export function identifyUser(
  distinctId: string,
  personProperties?: Record<string, unknown>
) {
  if (!initialized) return;
  posthog.identify(distinctId, personProperties);
}

/** Set or update person-level properties without changing the distinct ID. */
export function setPersonProperties(properties: Record<string, unknown>) {
  if (!initialized) return;
  posthog.setPersonProperties(properties);
}

