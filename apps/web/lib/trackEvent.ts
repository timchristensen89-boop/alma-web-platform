export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params ?? {});
    return;
  }

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: eventName,
    ...(params ?? {}),
  });
}
