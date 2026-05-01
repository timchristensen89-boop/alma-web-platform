import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  GlassWater,
  HandPlatter,
  MapPin,
  PartyPopper,
  Sparkles,
  UsersRound,
  Utensils,
} from "lucide-react";
import { GoogleReviews } from "../components/GoogleReviews";
import { TrackedLink } from "../components/TrackedLink";
import { venues } from "../data/venues";

const venueCards = [
  {
    slug: "alma-avalon",
    name: "Alma Avalon",
    eyebrow: "Avalon Beach",
    image: "/images/alma-avalon-terrace.jpg",
    line: "Long lunches, seafood, margaritas and nights that roll on.",
    cta: "View Avalon",
  },
  {
    slug: "st-alma",
    name: "St Alma",
    eyebrow: "Freshwater",
    image: "/images/st-alma-interior.jpg",
    line: "Casual enough for Tuesday. Special enough for Saturday.",
    cta: "View St Alma",
  },
];

const quickLinks = [
  { label: "Book a table", Icon: CalendarDays, href: "/book" },
  { label: "View menus", Icon: Utensils, href: "/menu" },
  { label: "Groups and catering", Icon: UsersRound, href: "/catering" },
  { label: "What’s on", Icon: Sparkles, href: "/events" },
];

const groupMoments = [
  { label: "Long tables", Icon: UsersRound, href: "/catering" },
  { label: "Birthdays", Icon: PartyPopper, href: "/contact" },
  { label: "Work lunches", Icon: HandPlatter, href: "/catering" },
  { label: "Margarita nights", Icon: GlassWater, href: "/events" },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8F6F1] text-[#1F3524]">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
              Alma Group
            </p>

            <h1 className="font-serif text-[52px] leading-[0.95] tracking-tight text-black md:text-[72px] lg:text-[88px]">
              Coastal Mexican,
              <br />
              good tables,
              <br />
              proper nights.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Two Northern Beaches venues built around shared food, margaritas,
              warm service and nights that start around the table.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TrackedLink
                href="/book"
                eventName="booking_click"
                eventParams={{ location: "home_hero", venue: "group", destination: "/book" }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
              >
                Book now
              </TrackedLink>

              <Link
                href="/menu"
                className="button-hover smooth rounded-full border border-[#1F3524]/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                View menu
              </Link>

              <Link
                href="/catering"
                className="button-hover smooth rounded-full border border-[#1F3524]/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Groups
              </Link>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Alma Group dining room"
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
          Start with snacks. Add tacos. Order another margarita.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-black/50">
              Venues
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Choose the table,
              <br />
              choose the night.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-black/60">
            Alma Avalon is for long lunches, bigger tables and nights that keep
            moving. St Alma is your Freshwater local, easy early and special
            when it needs to be.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {venueCards.map((venue) => (
            <TrackedLink
              key={venue.slug}
              href={`/${venue.slug}`}
              eventName="venue_click"
              eventParams={{
                location: "home_venue_cards",
                venue: venue.slug === "alma-avalon" ? "alma_avalon" : "st_alma",
                destination: `/${venue.slug}`,
              }}
              className="group overflow-hidden rounded-2xl border border-[#1F3524]/10 bg-white/40 p-3 transition duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} strokeWidth={1.8} />
                    <p className="text-xs uppercase tracking-[0.35em] text-white/85">
                      {venue.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-4 font-serif text-5xl leading-none">
                    {venue.name}
                  </h3>

                  <div className="mt-7 flex items-center justify-between gap-6 border-t border-white/25 pt-5">
                    <p className="max-w-sm text-sm leading-6 text-white/85">
                      {venue.line}
                    </p>

                    <span className="shrink-0 border-b border-white/60 pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                      {venue.cta}
                    </span>
                  </div>
                </div>
              </div>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="bg-[#F1EBE3] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-black/50">
              Groups
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Bigger table,
              <br />
              birthday,
              <br />
              catered event.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              From long lunches and birthdays to work events, catering and
              private bookings, we will help shape the table around the moment.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {groupMoments.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl bg-[#F8F6F1] px-5 py-4 text-sm font-bold text-[#1F3524] transition hover:bg-white"
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

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/catering"
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Catering and groups
              </Link>

              <TrackedLink
                href="/contact"
                eventName="enquiry_click"
                eventParams={{ location: "home_groups", venue: "group", destination: "/contact" }}
                className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Start an enquiry
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews
        venues={venues}
        intro="Recent Google snapshots across Alma Avalon and St Alma"
      />

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-black/50">
                Story
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
                Started in Avalon,
                <br />
                still built around
                <br />
                the table.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/70">
                Alma began in Avalon in 2017 with Mexican food, warm service and
                the relaxed rhythm of the Northern Beaches. St Alma followed in
                Freshwater. Same standard, different venue, both built for good
                food and good nights.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex border-b border-[#1F3524] pb-1 text-xs font-bold uppercase tracking-[0.18em]"
              >
                Read the story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-[#EEF0E9] p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
              Choose your night
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Book a table,
              <br />
              plan a group,
              <br />
              or just start with a menu.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              Choose a venue, view the menus, book direct or talk to us about
              something bigger.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/book"
                eventName="booking_click"
                eventParams={{ location: "final_cta", venue: "group", destination: "/book" }}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Book now
              </TrackedLink>

              <Link
                href="/menu"
                className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                View menu
              </Link>

              <TrackedLink
                href="/contact"
                eventName="enquiry_click"
                eventParams={{ location: "final_cta", venue: "group", destination: "/contact" }}
                className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Contact us
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
