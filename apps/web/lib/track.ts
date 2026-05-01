import { trackEvent } from "./trackEvent";

export function track(event: string) {
  trackEvent(event);
}
