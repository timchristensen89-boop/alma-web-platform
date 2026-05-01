import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "../../components/TrackedLink";
import {
  CalendarDays,
  Fish,
  GlassWater,
  PartyPopper,
  Salad,
  Utensils,
  UsersRound,
  Waves,
} from "lucide-react";

const bookingUrl =
  "https://www.sevenrooms.com/explore/almaavalon/reservations/create/search";

const signatures = [
  { label: "Guacamole", Icon: Salad, href: "/menu" },
  { label: "Salmon Sashimi Taco", Icon: Fish, href: "/menu" },
  { label: "Agave Beef Ribs", Icon: Utensils, href: "/menu" },
  { label: "Coconut margarita", Icon: GlassWater, href: "/menu" },
];

const occasions = [
  { label: "Long lunches", Icon: Waves, href: bookingUrl },
  { label: "Group dinners", Icon: UsersRound, href: bookingUrl },
  { label: "Birthdays", Icon: PartyPopper, href: bookingUrl },
  { label: "Weekend bookings", Icon: CalendarDays, href: bookingUrl },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F6F1] text-[#1F3524]">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
                <Fish size={18} strokeWidth={1.6} />
              </span>
              Alma Avalon
            </p>

            <h1 className="font-serif text-[52px] leading-[0.95] tracking-tight text-black md:text-[72px] lg:text-[88px]">
              Coastal Mexican,
              <br />
              Avalon energy.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Shared plates, fresh seafood, margaritas and long lunches that
              roll into lively dinners.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TrackedLink
                href={bookingUrl}
                eventName="booking_click"
                eventParams={{ location: "venue_hero", venue: "alma_avalon", destination: bookingUrl }}
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
              src="/images/alma-avalon-hero.jpg"
              alt="Alma Avalon restaurant"
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
          Relaxed early. Lively late. Always built around the table.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">
            Avalon Beach
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
            Long lunches,
            <br />
            full tables,
            <br />
            good energy.
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-black/60">
          Alma is made for the kind of booking that starts with a few plates and
          ends with another round. Come for seafood, tacos and margaritas, then
          see where the night takes you.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-6 pb-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="group mt-8 overflow-hidden rounded-2xl lg:mt-12">
          <Image
            src="/images/alma-avalon-food.jpg"
            alt="Food and drinks at Alma Avalon"
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
              Start with
              <br />
              the signatures.
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
              Big table,
              <br />
              birthday,
              <br />
              long lunch.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              Alma works best when the table is full. For larger bookings,
              celebrations and group dining, enquire with the team and we will
              help shape the booking properly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/contact"
                eventName="enquiry_click"
                eventParams={{ location: "venue_groups", venue: "alma_avalon", destination: "/contact" }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Start an enquiry
              </TrackedLink>

              <TrackedLink
                href={bookingUrl}
                eventName="booking_click"
                eventParams={{ location: "venue_groups", venue: "alma_avalon", destination: bookingUrl }}
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
            “The kind of Avalon booking that feels easy, polished and fun.”
          </blockquote>

          <blockquote className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 font-serif text-2xl leading-tight text-black">
            “Margaritas, seafood and shared plates without overthinking it.”
          </blockquote>

          <blockquote className="rounded-2xl border border-[#1F3524]/10 bg-white/45 p-8 font-serif text-2xl leading-tight text-black">
            “Perfect for a long lunch that turns into dinner.”
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
              Lock in the table.
              <br />
              Let the night happen.
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
                eventParams={{ location: "venue_final_cta", venue: "alma_avalon", destination: bookingUrl }}
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
