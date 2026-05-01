"use client";

import { useState } from "react";

export function CateringEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    const message = `
Date and preferred time: ${formData.get("date")}
Guest numbers: ${formData.get("guests")}
Venue or offsite location: ${formData.get("location")}
Food style: ${formData.get("foodStyle")}
Drinks package or bar tab: ${formData.get("drinks")}
Dietary requirements: ${formData.get("dietaries")}

Extra notes:
${formData.get("message")}
    `.trim();

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      venue: "Catering",
      enquiryType: "catering",
      message,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok || result?.error) {
        throw new Error(result?.error || "Unable to submit enquiry");
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit enquiry");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {[
        ["date", "Date and preferred time"],
        ["guests", "Guest numbers"],
        ["location", "Venue or offsite location"],
        ["foodStyle", "Food style"],
        ["drinks", "Drinks package or bar tab"],
        ["dietaries", "Dietary requirements"],
      ].map(([name, placeholder]) => (
        <input
          key={name}
          name={name}
          type="text"
          placeholder={placeholder}
          className="rounded-full border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35"
        />
      ))}

      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        className="rounded-full border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-full border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        className="rounded-full border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35 sm:col-span-2"
      />

      <textarea
        name="message"
        placeholder="Anything else?"
        rows={5}
        className="rounded-3xl border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35 sm:col-span-2"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Sending..." : "Send catering enquiry"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#1F3524] sm:col-span-2">
          Enquiry sent.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#684A4A] sm:col-span-2">
          {errorMessage || "Unable to submit enquiry"}
        </p>
      )}
    </form>
  );
}
