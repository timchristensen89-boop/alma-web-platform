import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "../../components/TrackedLink";
import {
  CalendarDays,
  Fish,
  GlassWater,
  HandPlatter,
  Salad,
  Sparkles,
  Utensils,
  UsersRound,
} from "lucide-react";

const bookingUrl =
  "https://www.sevenrooms.com/explore/stalma/reservations/create/search";

const signatures = [
  { label: "Guacamole", Icon: Salad, href: "/menu" },
  { label: "Kingfish tostada", Icon: Fish, href: "/menu" },
  { label: "Pork belly tacos", Icon: Utensils, href: "/menu" },
  { label: "Spicy margarita", Icon: GlassWater, href: "/menu" },
];

const occasions = [
  { label: "Easy dinners", Icon: HandPlatter, href: bookingUrl },
  { label: "Local catch ups", Icon: Sparkles, href: bookingUrl },
  { label: "Family meals", Icon: UsersRound, href: bookingUrl },
  { label: "Weekend bookings", Icon: CalendarDays, href: bookingUrl },
];

function CactusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      <path d="M12 21V6.5a2.5 2.5 0 0 1 5 0V9" />
      <path d="M17 9v2.5a2.5 2.5 0 0 1-2.5 2.5H12" />
      <path d="M12 12H9.5A2.5 2.5 0 0 1 7 9.5V8" />
      <path d="M7 8V6.5a2 2 0 0 1 4 0V21" />
      <path d="M8 21h8" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#F8F6F1] text-[#1F3524]">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
                <CactusIcon />
              </span>
              St Alma Freshwater
            </p>

            <h1 className="font-serif text-[52px] leading-[0.95] tracking-tight text-black md:text-[72px] lg:text-[88px]">
              Freshwater Mexican,
              <br />
              made properly.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Shared plates, margaritas and easy neighbourhood energy for
              weeknights, weekends and everything in between.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TrackedLink
                href={bookingUrl}
                eventName="booking_click"
                eventParams={{
                  location: "venue_hero",
                  venue: "st_alma",
                  destination: bookingUrl,
                }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
              >
                Book a table
              </TrackedLink>

              <Link
                href="/menu"
                className="button-hover smooth rounded-full border border-[#1F3524]/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                View menu
              </Link>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/st-alma-hero.jpg"
              alt="St Alma Freshwater restaurant"
              width={1400}
              height={950}
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[620px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#1F3524]/10 bg-[#F1EBE3] px-6 py-8 text-center">
        <p className="font-serif text-2xl leading-relaxed text-black md:text-3xl">
          Casual enough for Tuesday. Special enough for Saturday.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">
            Freshwater
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
            Your easy local,
            <br />
            still done properly.
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-black/60">
          St Alma is the kind of place you book when you want dinner to be easy,
          but still feel like a treat. Shared plates, warm service, margaritas
          and a room that feels like Freshwater.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-6 pb-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="group mt-8 overflow-hidden rounded-2xl lg:mt-12">
          <Image
            src="/images/st-alma-food.jpg"
            alt="Food and drinks at St Alma"
            width={1300}
            height={950}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-black/50">
              What to order
            </p>

            <h3 className="mt-4 font-serif text-4xl leading-[0.95] text-black">
              Keep it easy.
              <br />
              Start here.
            </h3>

            <div className="mt-8 grid gap-3">
              {signatures.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl bg-[#F1EBE3] px-5 py-4 text-sm font-bold text-[#1F3524] transition hover:bg-white"
                >
                  <item.Icon
                    size={20}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#1F3524]"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/menu"
              className="mt-8 inline-flex border-b border-[#1F3524] pb-1 text-xs font-bold uppercase tracking-[0.18em]"
            >
              View full menu
            </Link>
          </div>

          <div className="rounded-2xl bg-[#EEF0E9] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
              Best for
            </p>

            <div className="mt-7 grid gap-4">
              {occasions.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 border-b border-[#1F3524]/15 pb-4 font-serif text-2xl leading-none text-black transition hover:text-[#1F3524] last:border-b-0 last:pb-0"
                >
                  <item.Icon
                    size={24}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#1F3524]"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1EBE3] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-black/50">
              Groups
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Small catch up,
              <br />
              full table,
              <br />
              easy night.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              St Alma works for easy dinners, birthdays, family meals and group
              bookings without making the night feel complicated.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/contact"
                eventName="enquiry_click"
                eventParams={{
                  location: "venue_groups",
                  venue: "st_alma",
                  destination: "/contact",
                }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Start an enquiry
              </TrackedLink>

              <TrackedLink
                href={bookingUrl}
                eventName="booking_click"
                eventParams={{
                  location: "venue_groups",
                  venue: "st_alma",
                  destination: bookingUrl,
                }}
                className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Book direct
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <blockquote className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 font-serif text-2xl leading-tight text-black">
            “The easy Freshwater booking when you still want it to feel
            special.”
          </blockquote>

          <blockquote className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 font-serif text-2xl leading-tight text-black">
            “Tacos, margaritas and shared plates without overthinking dinner.”
          </blockquote>

          <blockquote className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 font-serif text-2xl leading-tight text-black">
            “A local favourite for weeknights, birthdays and weekend catch ups.”
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-[#EEF0E9] p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
              Ready to book
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Make the easy call.
              <br />
              Lock in St Alma.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              Bookings are recommended for dinner, weekends and groups.
            </p>

            <div className="mt-8">
              <TrackedLink
                href={bookingUrl}
                eventName="booking_click"
                eventParams={{
                  location: "venue_final_cta",
                  venue: "st_alma",
                  destination: bookingUrl,
                }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Book now
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
