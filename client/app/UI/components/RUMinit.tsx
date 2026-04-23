"use client";

import { useEffect } from "react";
import { initRUM } from "@/app/lib/rum";
import * as Sentry from "@sentry/nextjs";

  function RUMInit() {
  useEffect(() => {
    if(process.env.NODE_ENV === "development") return;
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