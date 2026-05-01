import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "People first",
    text: "Teams who know the floor, service that feels confident, and venues with the right energy.",
  },
  {
    title: "Flavour with intent",
    text: "Modern Mexican shaped by coastal produce, seafood, agave, citrus and smoke, built for sharing.",
  },
  {
    title: "Atmosphere that carries",
    text: "Long lunches, late dinners, group tables and celebrations that feel easy from the first round.",
  },
];

const venueStories = [
  {
    name: "Alma Avalon",
    eyebrow: "Avalon Beach",
    title: "Where it all started.",
    text: "Opened in 2017, Alma Avalon brought a coastal take on modern Mexican to the Northern Beaches. Seafood led plates, bright salsas, agave drinks, and a rhythm built for long lunches.",
    image: "/images/alma-avalon-interior.jpg",
    href: "/alma-avalon",
  },
  {
    name: "St Alma",
    eyebrow: "Freshwater",
    title: "Same standard, different setting.",
    text: "St Alma carries the Alma backbone into Freshwater. Shared plates, margaritas, live music and a venue designed for easy nights and full tables.",
    image: "/images/st-alma-interior.jpg",
    href: "/st-alma",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F1] text-[#1F3524]">
      {/* HEADER */}
      <section className="px-6 pb-20 pt-36 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
              About Alma Group
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.86] tracking-tight text-black md:text-8xl">
              Built on people, flavour and atmosphere.
            </h1>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-black/65">
              Alma Group is home to Alma Avalon and St Alma Freshwater. Two Northern Beaches venues built around modern Mexican food, agave led drinks, and service that keeps things moving without getting in the way.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Book a table
              </Link>

              <Link
                href="/venues"
                className="button-hover smooth rounded-full border border-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Explore venues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SPLIT */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_0.72fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Alma Group hospitality"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-end rounded-2xl bg-[#1F3524] p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/55">
              Started in Avalon
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95]">
              Built from the Northern Beaches.
            </h2>

            <p className="mt-7 text-base leading-8 text-white/70">
              Alma Avalon opened in 2017, shaped by coastal Mexico and the rhythm of the beaches. St Alma followed in Freshwater, carrying the same standard into a different setting.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F1EBE3] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
                What we value
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-black md:text-6xl">
                Clear standards, warm venues.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/60">
              The venues are different, but the approach is shared. Good food, strong drinks and hospitality that lets the moment breathe.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl bg-[#FAF8F3] p-8">
                <h3 className="font-serif text-3xl text-black">
                  {value.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-black/60">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
                Venues
              </p>

              <h2 className="mt-5 font-serif text-5xl text-black md:text-6xl">
                Two venues, one standard.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/60">
              Avalon for long lunches. Freshwater for easy nights. Same standard across both.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {venueStories.map((venue) => (
              <Link
                key={venue.name}
                href={venue.href}
                className="group hover-lift overflow-hidden rounded-2xl border border-[#1F3524]/10 bg-white/45 p-3"
              >
                <div className="relative aspect-[1.12/1] overflow-hidden rounded-xl">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="image-hover object-cover"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/35">
                    {venue.eyebrow}
                  </p>

                  <h3 className="mt-5 font-serif text-4xl text-black">
                    {venue.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-black/60">
                    {venue.text}
                  </p>

                  <span className="mt-8 inline-flex border-b border-[#1F3524] pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                    Visit {venue.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="border-t border-[#1F3524]/10 pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <h2 className="font-serif text-4xl text-black md:text-5xl">
              Start with the venue.
            </h2>

            <div>
              <p className="mb-6 max-w-2xl text-base leading-8 text-black/60">
                Book a table, explore the venues, or start a conversation about catering and groups.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="/book" className="border-b pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                  Book a table
                </Link>

                <Link href="/catering" className="border-b pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                  Catering and functions
                </Link>

                <Link href="/contact" className="border-b pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}