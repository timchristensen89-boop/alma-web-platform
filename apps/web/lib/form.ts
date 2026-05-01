export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char] || char;
  });
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function clean(value: unknown, fallback = "") {
  return String(value || fallback).trim();
}

export function cleanEmail(value: unknown) {
  return clean(value).toLowerCase();
}

export function numberFromForm(value: unknown) {
  const parsed = Number.parseFloat(clean(value, "0"));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}
