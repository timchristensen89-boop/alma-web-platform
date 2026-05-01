"use client";

import * as Popover from "@radix-ui/react-popover";
import { format } from "date-fns";
import { BriefcaseBusiness, CalendarDays, ChefHat, GlassWater, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { TrackedLink } from "../../components/TrackedLink";
import "react-day-picker/dist/style.css";

const cateringOptions = [
  {
    title: "Private catering",
    text: "Birthdays, celebrations, family lunches and special occasions with Alma food outside the venue.",
    Icon: ChefHat,
  },
  {
    title: "Corporate events",
    text: "Team lunches, launches, meetings and workplace events with shared food and drinks packages.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Group dining",
    text: "Long tables, set menus and shared plates across Alma Avalon and St Alma.",
    Icon: Users,
  },
];

const packages = [
  {
    title: "Grazing",
    price: "49 pp",
    venue: "Alma Avalon",
    text: "A lighter shared menu for groups, snacks, tacos and easy table food.",
  },
  {
    title: "Feasting",
    price: "79 pp",
    venue: "Alma Avalon",
    text: "A fuller shared menu built around starters, tacos, larger plates and sides.",
  },
  {
    title: "Trust our chef",
    price: "79 pp",
    venue: "St Alma",
    text: "A shared chef selected menu for groups who want the full St Alma experience.",
  },
];

const timeSlotsByLocation: Record<string, string[]> = {
  "Alma Avalon": [
    "12:00pm - 2:00pm",
    "2:00pm - 4:00pm",
    "4:00pm - 6:00pm",
    "6:00pm - 8:00pm",
    "8:00pm - 10:00pm",
    "Not sure yet",
  ],
  "St Alma": [
    "12:00pm - 2:00pm",
    "2:00pm - 4:00pm",
    "4:00pm - 6:00pm",
    "6:00pm - 8:00pm",
    "8:00pm - 10:00pm",
    "Not sure yet",
  ],
  Offsite: ["Morning", "Lunch", "Afternoon", "Evening"],
  "Not sure yet": ["Flexible", "Lunch", "Dinner"],
};

const fieldClass =
  "rounded-full border border-[#1F3524]/15 bg-[#FAF8F3] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black/70 outline-none placeholder:text-black/35 disabled:opacity-45";

export default function CateringPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const availableTimes = useMemo(() => {
    if (!location) return [];
    return timeSlotsByLocation[location] || [];
  }, [location]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const formattedDate = selectedDate
      ? format(selectedDate, "EEEE d MMMM yyyy")
      : "Not selected";

    const message = `
Catering enquiry

Date: ${formattedDate}
Time: ${timeSlot || "Not selected"}
Guest numbers: ${formData.get("guests")}
Venue or offsite: ${location || "Not selected"}
Drinks: ${formData.get("drinks")}
Dietary requirements: ${formData.get("dietaries")}

Anything else:
${formData.get("message")}
    `.trim();

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
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

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error(result?.error || "Failed to send enquiry");
      }

      setStatus("sent");
      setSelectedDate(undefined);
      setLocation("");
      setTimeSlot("");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit enquiry");
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#F8F6F1] px-6 pb-24 pt-32 text-[#1F3524] md:px-10">
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#1F3524]/60">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
              <GlassWater size={18} strokeWidth={1.6} />
            </span>
            Catering
          </p>

          <h1 className="font-serif text-6xl leading-[0.92] text-black md:text-8xl">
            Alma, wherever you are.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-black/65">
            Catering, group dining and private events with the same food, drinks and warmth as our venues.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <TrackedLink
              href="#enquiry"
              eventName="enquiry_click"
              eventParams={{ location: "catering_hero", venue: "group", destination: "#enquiry" }}
              className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Make an enquiry
            </TrackedLink>

            <Link
              href="/menu"
              className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
            >
              View menus
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Alma catering"
            width={1400}
            height={950}
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-[520px] w-full object-cover md:h-[620px]"
          />
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-10 md:grid-cols-3">
        {cateringOptions.map((option, index) => (
          <div key={option.title} className="rounded-2xl border border-[#1F3524]/10 bg-white/60 p-8">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-black/35">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
                <option.Icon size={18} strokeWidth={1.6} />
              </span>
              0{index + 1}
            </p>

            <h2 className="mt-5 font-serif text-3xl text-black">
              {option.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-black/60">
              {option.text}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/40">
              Packages
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-black md:text-6xl">
              Shared menus for full tables.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-black/60">
            Start with one of the set menu options, then shape the details around the group, venue and occasion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#1F3524]/10 bg-white/60 p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-black/35">
                {item.venue}
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-none text-black">
                {item.title}
              </h3>

              <p className="mt-5 font-serif text-5xl leading-none text-[#1F3524]">
                {item.price}
              </p>

              <p className="mt-6 text-base leading-8 text-black/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="enquiry"
        className="mx-auto mt-24 max-w-7xl rounded-2xl bg-[#F1EBE3] p-8 md:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-black/40">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F6F1] text-[#1F3524]">
                <CalendarDays size={18} strokeWidth={1.6} />
              </span>
              What we need
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-black">
              Start the conversation.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-8 text-black/60">
              Send the basics. We will come back with the right next step for the table, venue or event.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Name" required className={fieldClass} />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className={fieldClass}
            />

            <input name="phone" placeholder="Phone" className={fieldClass} />

            <input name="guests" placeholder="Guests" className={fieldClass} />

            <select
              name="location"
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
                setTimeSlot("");
              }}
              className={fieldClass}
            >
              <option value="">Location</option>
              <option value="Alma Avalon">Alma Avalon</option>
              <option value="St Alma">St Alma</option>
              <option value="Offsite">Offsite</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>

            <select
              name="time"
              value={timeSlot}
              onChange={(event) => setTimeSlot(event.target.value)}
              disabled={!location}
              className={fieldClass}
            >
              <option value="">
                {location ? "Preferred time" : "Select venue first"}
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <Popover.Root>
              <Popover.Trigger asChild>
                <button type="button" className={`${fieldClass} text-left`}>
                  {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Event date"}
                </button>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                  side="bottom"
                  align="start"
                  sideOffset={10}
                  className="z-50 rounded-3xl border border-[#1F3524]/15 bg-[#FAF8F3] p-5 shadow-xl"
                >
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={{ before: new Date() }}
                    className="alma-calendar"
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>

            <select name="drinks" className={fieldClass}>
              <option value="">Drinks</option>
              <option>Bar tab</option>
              <option>Drinks package</option>
              <option>Drinks on consumption</option>
              <option>No drinks needed</option>
              <option>Not sure yet</option>
            </select>

  

            <textarea
              name="message"
              placeholder="Anything helpful? Occasion, dietaries, timing, budget or mood."
              rows={2}
              className={`${fieldClass} rounded-3xl sm:col-span-2`}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white disabled:opacity-50 sm:col-span-2"
            >
              {status === "sending" ? "Sending..." : "Send enquiry"}
            </button>

            <p className="text-xs leading-6 text-black/45 sm:col-span-2">
              We usually respond within a few hours.
            </p>

            {status === "sent" ? (
              <div className="rounded-2xl bg-[#EEF0E9] p-6 text-sm leading-7 text-[#1F3524] sm:col-span-2">
                <strong>Enquiry received.</strong>
                <br />
                We’ll be in touch shortly to lock this in.
              </div>
            ) : null}

            {status === "error" ? (
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#684A4A] sm:col-span-2">
                {errorMessage || "Unable to submit enquiry"}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
