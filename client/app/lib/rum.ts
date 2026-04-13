import { onCLS, onINP, onLCP } from "web-vitals";
import * as Sentry from "@sentry/nextjs";

export function initRUM() {
  const send = (metric: any) => {
    const data = {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      route: window.location.pathname,
      device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
      timestamp: Date.now(),
    };

    console.log("RUM:", data);

    navigator.sendBeacon("/api/rum", JSON.stringify(data));

    const info = {
      level: "info" as Sentry.SeverityLevel,
      extra: data,
      tags: {
        metric: metric.name,
        route: data.route,
        device: data.device,
      },
    };
    

    if (metric.name === "LCP" && metric.value > 2500) {
      Sentry.captureMessage("web-vital", info);
    } else if (metric.name === "INP" && metric.value > 200) {
      Sentry.captureMessage("web-vital", info);
    } else if (metric.name === "CLS" && metric.value > 0.1) {
      Sentry.captureMessage("web-vital", info);
    }
  };

  onCLS(send);
  onINP(send);
  onLCP(send);
}
