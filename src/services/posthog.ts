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

/**
 * Request precise GPS location from the browser.
 * Fires once per session (stored in sessionStorage).
 * Sets lat/lng as person properties so they appear on the person record.
 * PostHog also auto-captures approximate location from IP ($geoip_city etc.)
 */
export function requestAndCaptureLocation() {
  if (!initialized || typeof window === "undefined") return;
  if (!navigator.geolocation) return;

  // Only ask once per session — avoid repeat permission prompts
  if (sessionStorage.getItem("ph_location_asked")) return;
  sessionStorage.setItem("ph_location_asked", "1");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;

      // Attach to the current event stream
      captureEvent("location_captured", {
        latitude,
        longitude,
        accuracy_metres: Math.round(accuracy),
      });

      // Persist on the person record so it shows in People
      setPersonProperties({
        last_known_latitude: latitude,
        last_known_longitude: longitude,
      });
    },
    () => {
      // Permission denied or unavailable — silently skip
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
}
