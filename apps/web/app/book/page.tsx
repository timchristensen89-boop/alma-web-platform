import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { TrackedLink } from "../../components/TrackedLink";

const venues = [
  {
    name: "Alma Avalon",
    location: "Avalon Beach",
    text: "Coastal Mexican dining, margaritas and group moments in Avalon.",
    image: "/images/alma-avalon.jpg",
    bookingHref:
      "https://www.sevenrooms.com/explore/almaavalon/reservations/create/search",
    infoHref: "/alma-avalon",
  },
  {
    name: "St Alma",
    location: "Freshwater",
    text: "Modern Mexican food, cocktails and relaxed hospitality in Freshwater.",
    image: "/images/st-alma.jpg",
    bookingHref:
      "https://www.sevenrooms.com/explore/stalma/reservations/create/search",
    infoHref: "/st-alma",
  },
];

export default function BookPage() {
  return (
    <main className="bg-[#F8F6F1] px-6 pb-24 pt-32 text-[#1F3524] md:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="flex items-center justify-center gap-3 text-center text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
            <CalendarDays size={18} strokeWidth={1.6} />
          </span>
          Reservations
        </p>

        <h1 className="mx-auto mt-6 max-w-5xl text-center font-serif text-6xl leading-[0.9] text-black md:text-8xl">
          Choose where you’re joining us.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-black/60">
          Book Alma Avalon or St Alma through SevenRooms.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2">
        {venues.map((venue) => (
          <article
            key={venue.name}
            className="group overflow-hidden rounded-2xl border border-[#1F3524]/10 bg-white/60 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-[360px] overflow-hidden rounded-xl">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute bottom-0 p-8 text-white">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                  <MapPin size={14} strokeWidth={1.6} />
                  {venue.location}
                </p>

                <h2 className="mt-4 font-serif text-5xl leading-none">
                  {venue.name}
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-md text-sm leading-7 text-black/60">
                {venue.text}
              </p>

              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href={venue.bookingHref}
                  eventName="booking_click"
                  eventParams={{
                    location: "book_venue_card",
                    venue: venue.name === "Alma Avalon" ? "alma_avalon" : "st_alma",
                    destination: venue.bookingHref,
                  }}
                  className="button-hover smooth inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
                >
                  Book now
                  <ArrowUpRight size={14} strokeWidth={1.7} />
                </TrackedLink>

                <Link
                  href={venue.infoHref}
                  className="button-hover smooth shrink-0 rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
                >
                  Venue info
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-7xl rounded-2xl bg-[#EEF0E9] p-8 text-center md:p-12">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F6F1] text-[#1F3524]">
          <Users size={21} strokeWidth={1.6} />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
          Groups and events
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[0.95] text-black md:text-5xl">
          Planning a bigger table or private event?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">
          For long tables, catering, private events or group menus, send us the details and we’ll help shape the right starting point.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/catering"
            className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Catering and groups
          </Link>

          <TrackedLink
            href="/contact"
            eventName="enquiry_click"
            eventParams={{ location: "book_groups_cta", venue: "group", destination: "/contact" }}
            className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
          >
            Contact
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
