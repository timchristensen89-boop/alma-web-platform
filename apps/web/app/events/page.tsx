import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { TrackedLink } from "../../components/TrackedLink";

const events = [
  {
    title: "Happy Hour",
    kicker: "Early drinks",
    venue: "Alma Avalon",
    venueHref: "/alma-avalon",
    date: "Tue to Thu",
    time: "5pm to 6pm",
    extra: "Fri to Sun 4pm to 6pm",
    description: "Bar seats, cold drinks and Avalon afternoons that roll neatly into dinner.",
    image: "/images/alma-avalon-happy-hour.jpg",
  },
  {
    title: "Taco Tuesday",
    kicker: "Midweek tacos",
    venue: "St Alma",
    venueHref: "/st-alma",
    date: "Every Tuesday",
    time: "From 5pm",
    extra: "$5 tacos and cheap margaritas",
    description: "Tacos, margaritas and the easiest reason to get the group together midweek.",
    image: "/images/st-alma-taco-tuesday.jpg",
  },
  {
    title: "Acoustic Wednesdays",
    kicker: "Live music",
    venue: "St Alma",
    venueHref: "/st-alma",
    date: "Every Wednesday",
    time: "From 5:30pm",
    extra: "Live local acoustic set",
    description: "Local acoustic music, candlelight, shared plates and a slower night in Freshwater.",
    image: "/images/st-alma-events.jpg",
  },
  {
    title: "Bottomless Lunch",
    kicker: "Long lunch",
    venue: "St Alma",
    venueHref: "/st-alma",
    date: "Friday to Sunday",
    time: "12pm to 4pm",
    extra: "Bottomless margaritas and shared plates",
    description: "Margaritas, plates for the table and nowhere better to be after midday.",
    image: "/images/st-alma-bottomless.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-[#F8F6F1] px-6 pb-24 pt-36 text-[#1F3524] md:px-10 lg:pt-40">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
              <Sparkles size={18} strokeWidth={1.6} />
            </span>
            What’s on
          </p>

          <h1 className="mt-7 font-serif text-6xl font-normal leading-[0.9] text-black sm:text-7xl md:text-8xl">
            What’s happening this week.
          </h1>
        </div>

        <div className="max-w-2xl lg:justify-self-end">
          <p className="text-lg leading-8 text-black/65 md:text-xl md:leading-9">
            Happy hour, tacos, acoustic nights and long lunches across Alma Avalon and St Alma.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <TrackedLink
              href="/book"
              eventName="booking_click"
              eventParams={{ location: "events_top", venue: "group", destination: "/book" }}
              className="rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Book a table
            </TrackedLink>

            <Link
              href="/catering"
              className="rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
            >
              Plan an event
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6">
        {events.map((event, index) => (
          <article
            key={`${event.venue}-${event.title}`}
            className="grid overflow-hidden rounded-2xl border border-[#1F3524]/10 bg-white/50 lg:grid-cols-[0.34fr_1fr]"
          >
            <div className="relative min-h-[240px] overflow-hidden lg:min-h-[300px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/70">
                  0{index + 1} / {event.kicker}
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-none md:text-5xl">
                  {event.title}
                </h2>
              </div>
            </div>

            <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div>
                <Link
                  href={event.venueHref}
                  className="text-xs font-bold uppercase tracking-[0.32em] text-[#684A4A] underline-offset-4 hover:underline"
                >
                  {event.venue}
                </Link>

                <p className="mt-5 font-serif text-4xl leading-none text-black">
                  {event.date}
                </p>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                  {event.time}
                </p>

                <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">
                  {event.extra}
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-black/65">
                  {event.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <TrackedLink
                    href="/book"
                    eventName="booking_click"
                    eventParams={{
                      location: "event_card",
                      venue: event.venue === "Alma Avalon" ? "alma_avalon" : "st_alma",
                      destination: "/book",
                    }}
                    className="rounded-full bg-[#1F3524] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  >
                    Book now
                  </TrackedLink>

                  <Link
                    href={event.venueHref}
                    className="rounded-full border border-[#1F3524]/35 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
                  >
                    Venue info
                  </Link>

                  <TrackedLink
                    href="/contact"
                    eventName="enquiry_click"
                    eventParams={{
                      location: "event_card",
                      venue: event.venue === "Alma Avalon" ? "alma_avalon" : "st_alma",
                      destination: "/contact",
                    }}
                    className="border-b border-[#1F3524] pb-1 text-xs font-bold uppercase tracking-[0.18em]"
                  >
                    Enquire
                  </TrackedLink>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-10 rounded-2xl bg-[#EEF0E9] p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
            Private events
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-black md:text-6xl">
            Planning something bigger?
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-black/65">
            Long tables, private events, group bookings and venue experiences can be shaped across both locations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catering"
              className="rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Catering and events
            </Link>

            <TrackedLink
              href="/contact"
              eventName="enquiry_click"
              eventParams={{ location: "events_final_cta", venue: "group", destination: "/contact" }}
              className="rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
            >
              Make an enquiry
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
