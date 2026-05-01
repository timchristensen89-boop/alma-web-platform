"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

const venues = [
  { label: "Alma Avalon", value: "alma-avalon" },
  { label: "St Alma", value: "st-alma" },
  { label: "Both venues", value: "both" },
];

const employmentTypes = [
  "Casual",
  "Part time",
  "Full time",
  "Contractor",
];

const days = [
  { label: "Monday", name: "mondayHours" },
  { label: "Tuesday", name: "tuesdayHours" },
  { label: "Wednesday", name: "wednesdayHours" },
  { label: "Thursday", name: "thursdayHours" },
  { label: "Friday", name: "fridayHours" },
  { label: "Saturday", name: "saturdayHours" },
  { label: "Sunday", name: "sundayHours" },
];

type FormState = {
  loading: boolean;
  success: string;
  error: string;
};

const initialState: FormState = {
  loading: false,
  success: "",
  error: "",
};

function inputClass(extra = "") {
  return `w-full border-b border-[#1F3524]/20 bg-transparent py-4 text-base outline-none transition focus:border-[#1F3524] ${extra}`;
}

export default function StaffPage() {
  const [active, setActive] = useState<"onboarding" | "timesheet">("onboarding");
  const [onboarding, setOnboarding] = useState<FormState>(initialState);
  const [timesheet, setTimesheet] = useState<FormState>(initialState);
  const [hours, setHours] = useState<Record<string, string>>({});

  const totalHours = useMemo(
    () =>
      days.reduce((total, day) => {
        const value = Number.parseFloat(hours[day.name] || "0");
        return total + (Number.isFinite(value) ? value : 0);
      }, 0),
    [hours],
  );

  async function submitForm(
    event: FormEvent<HTMLFormElement>,
    endpoint: string,
    setState: (state: FormState) => void,
  ) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const data = Object.fromEntries(form.entries());

    setState({ loading: true, success: "", error: "" });

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await res.json().catch(() => null)) as { error?: string } | null;

      if (!res.ok) {
        throw new Error(result?.error || "Unable to submit form");
      }

      formElement.reset();
      setHours({});
      setState({
        loading: false,
        success: "Submitted. The office team will review this shortly.",
        error: "",
      });
    } catch (error) {
      setState({
        loading: false,
        success: "",
        error: error instanceof Error ? error.message : "Unable to submit form",
      });
    }
  }

  return (
    <main className="bg-[#FAF8F3] px-6 pb-24 pt-32 text-[#1F3524] md:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
              Staff
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.9] text-black md:text-8xl">
              Staff onboarding and timesheets.
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-black/65">
              Submit onboarding details or weekly hours for Alma Avalon and St Alma. Payroll fields will be synced to Xero once the secure payroll connection is configured.
            </p>

            <p className="mt-4 text-sm leading-6 text-black/45">
              Do not enter tax file numbers or bank details here yet. Those will be handled through the Xero payroll connection.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-b border-[#1F3524]/10 pb-6">
          <button
            type="button"
            onClick={() => setActive("onboarding")}
            className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${
              active === "onboarding"
                ? "bg-[#1F3524] text-white"
                : "border border-[#1F3524]/25 text-[#1F3524]"
            }`}
          >
            Onboarding
          </button>

          <button
            type="button"
            onClick={() => setActive("timesheet")}
            className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${
              active === "timesheet"
                ? "bg-[#1F3524] text-white"
                : "border border-[#1F3524]/25 text-[#1F3524]"
            }`}
          >
            Timesheet
          </button>
        </div>

        {active === "onboarding" && (
          <form
            onSubmit={(event) =>
              submitForm(event, "/api/staff/onboarding", setOnboarding)
            }
            className="mt-10 grid gap-8 rounded-2xl border border-[#1F3524]/10 bg-white/55 p-7 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input name="firstName" placeholder="First name" required autoComplete="given-name" className={inputClass()} />
              <input name="lastName" placeholder="Last name" required autoComplete="family-name" className={inputClass()} />
              <input name="preferredName" placeholder="Preferred name" className={inputClass()} />
              <input name="email" type="email" placeholder="Email" required autoComplete="email" className={inputClass()} />
              <input name="phone" placeholder="Phone" required autoComplete="tel" className={inputClass()} />
              <input name="role" placeholder="Role" required className={inputClass()} />
              <select name="venue" required defaultValue="" className={inputClass()}>
                <option value="" disabled>Venue</option>
                {venues.map((venue) => (
                  <option key={venue.value} value={venue.value}>{venue.label}</option>
                ))}
              </select>
              <select name="employmentType" required defaultValue="" className={inputClass()}>
                <option value="" disabled>Employment type</option>
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <label className="text-sm text-black/45">
                Start date
                <input name="startDate" type="date" className={inputClass("mt-1")} />
              </label>
              <label className="text-sm text-black/45">
                Date of birth
                <input name="dateOfBirth" type="date" className={inputClass("mt-1")} />
              </label>
              <label className="text-sm text-black/45">
                RSA expiry
                <input name="rsaExpiry" type="date" className={inputClass("mt-1")} />
              </label>
            </div>

            <textarea name="address" placeholder="Residential address" required rows={3} className={`${inputClass()} resize-none`} />

            <div className="grid gap-6 md:grid-cols-3">
              <input name="emergencyName" placeholder="Emergency contact name" required className={inputClass()} />
              <input name="emergencyPhone" placeholder="Emergency contact phone" required className={inputClass()} />
              <input name="emergencyRelation" placeholder="Relationship" className={inputClass()} />
            </div>

            <textarea name="notes" placeholder="Notes, availability, or anything payroll should know" rows={4} className={`${inputClass()} resize-none`} />

            <FormActions state={onboarding} label="Submit onboarding" />
          </form>
        )}

        {active === "timesheet" && (
          <form
            onSubmit={(event) =>
              submitForm(event, "/api/staff/timesheets", setTimesheet)
            }
            className="mt-10 grid gap-8 rounded-2xl border border-[#1F3524]/10 bg-white/55 p-7 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input name="employeeName" placeholder="Full name" required autoComplete="name" className={inputClass()} />
              <input name="email" type="email" placeholder="Email" required autoComplete="email" className={inputClass()} />
              <select name="venue" required defaultValue="" className={inputClass()}>
                <option value="" disabled>Venue</option>
                {venues.map((venue) => (
                  <option key={venue.value} value={venue.value}>{venue.label}</option>
                ))}
              </select>
              <label className="text-sm text-black/45">
                Week ending
                <input name="weekEnding" type="date" required className={inputClass("mt-1")} />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {days.map((day) => (
                <label key={day.name} className="text-sm text-black/45">
                  {day.label}
                  <input
                    name={day.name}
                    type="number"
                    min="0"
                    max="24"
                    step="0.25"
                    placeholder="0"
                    value={hours[day.name] || ""}
                    onChange={(event) =>
                      setHours((current) => ({
                        ...current,
                        [day.name]: event.target.value,
                      }))
                    }
                    className={inputClass("mt-1")}
                  />
                </label>
              ))}
            </div>

            <div className="rounded-2xl bg-[#EEF0E9] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/40">
                Total hours
              </p>
              <p className="mt-2 font-serif text-5xl leading-none text-black">
                {totalHours.toFixed(2)}
              </p>
            </div>

            <textarea name="notes" placeholder="Breaks, sick leave, public holiday notes, or manager comments" rows={4} className={`${inputClass()} resize-none`} />

            <FormActions state={timesheet} label="Submit timesheet" />
          </form>
        )}
      </section>
    </main>
  );
}

function FormActions({ state, label }: { state: FormState; label: string }) {
  return (
    <div>
      <button
        type="submit"
        disabled={state.loading}
        className="rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-55"
      >
        {state.loading ? "Submitting..." : label}
      </button>

      {state.success && (
        <p className="mt-6 rounded-xl bg-[#1F3524]/10 px-4 py-3 text-sm font-medium text-[#1F3524]">
          {state.success}
        </p>
      )}

      {state.error && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.error}
        </p>
      )}
    </div>
  );
}
