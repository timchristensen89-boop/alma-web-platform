"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

const enquiryTypes = [
  { label: "General enquiry", value: "general" },
  { label: "Table booking", value: "booking" },
  { label: "Catering", value: "catering" },
  { label: "Private event", value: "event" },
  { label: "Gift cards", value: "gift-cards" },
];

const venues = [
  { label: "Both venues / not sure yet", value: "general" },
  { label: "Alma Avalon", value: "alma-avalon" },
  { label: "St Alma", value: "st-alma" },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = new FormData(formElement);

    const data = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      venue: String(form.get("venue") || "general"),
      enquiryType: String(form.get("enquiryType") || "general"),
      message: String(form.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await res.json().catch(() => null)) as { error?: string } | null;

      if (!res.ok) {
        throw new Error(result?.error || "Unable to submit enquiry");
      }

      setSuccess(true);
      formElement.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit enquiry");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#F8F6F1] px-6 pb-24 pt-32 text-[#1F3524] md:px-10">
      <section className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT SIDE */}
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#1F3524]/60">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
              <MessageCircle size={18} strokeWidth={1.6} />
            </span>
            Contact
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-[0.92] text-black md:text-8xl">
            Get in touch.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-black/65">
            Bookings, events, catering or general enquiries. Tell us what you’re planning and we’ll take it from there.
          </p>

          <div className="mt-10 grid gap-3 text-sm text-black/60">
            <p className="flex items-center gap-3 rounded-2xl bg-[#EEF0E9] px-5 py-4">
              <Phone size={17} strokeWidth={1.6} className="text-[#1F3524]" />
              0414 379 158
            </p>
            <p className="flex items-center gap-3 rounded-2xl bg-[#EEF0E9] px-5 py-4">
              <Mail size={17} strokeWidth={1.6} className="text-[#1F3524]" />
              enquiries@almagroup.com.au
            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="rounded-2xl border border-[#1F3524]/10 bg-white/60 p-7 shadow-sm md:p-10">

          <input
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
            className="w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            autoComplete="email"
            className="mt-6 w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
          />

          <input
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            className="mt-6 w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <select
              name="enquiryType"
              defaultValue="general"
              className="w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
            >
              {enquiryTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <select
              name="venue"
              defaultValue="general"
              className="w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
            >
              {venues.map((venue) => (
                <option key={venue.value} value={venue.value}>
                  {venue.label}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us what you’re planning"
            required
            rows={6}
            className="mt-6 w-full resize-none border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524]"
          />

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={loading}
              className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white disabled:cursor-not-allowed disabled:opacity-55"
            >
              {loading ? "Sending..." : "Submit enquiry"}
            </button>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              We’ll come back to you with the right next step.
            </p>
          </div>

          {success && (
            <p className="mt-6 rounded-xl bg-[#1F3524]/10 px-4 py-3 text-sm font-medium text-[#1F3524]">
              Enquiry sent. We’ll be in touch shortly.
            </p>
          )}

          {error && (
            <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

        </form>

      </section>
    </main>
  );
}
