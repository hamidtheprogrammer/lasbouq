"use client";

import { useEffect } from "react";
import { initRUM } from "@/app/lib/rum";
import * as Sentry from "@sentry/nextjs";

export default function RUMInit() {
  useEffect(() => {
    initRUM();
    Sentry.setContext("app", {
    route: window.location.pathname,
    device: /Mobi|Android/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop",
  });
  }, []);

  return null;
}