import Image from "next/image";
import Link from "next/link";
import type { Venue } from "../../data/venues";

type VenuePageProps = {
  venue: Venue;
};

export function VenuePage({ venue }: VenuePageProps) {
  const heroImage = venue.image || venue.landscapeImage || "/images/hero.jpg";
  const landscapeImage = venue.landscapeImage || venue.image || "/images/hero.jpg";
  const foodImage = venue.foodImage || venue.image || "/images/hero.jpg";
  const margaritaImage = venue.margaritaImage || venue.image || "/images/hero.jpg";
  const groupImage = venue.groupImage || venue.image || "/images/hero.jpg";

  return (
    <main className="bg-[#F8F6F1] text-[#1F3524]">
      <section className="px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
              {venue.eyebrow}
            </p>

            <h1 className="font-serif text-6xl leading-[0.85] tracking-tight text-black md:text-8xl">
              {venue.heroTitle}
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-black/65">
              {venue.heroText}
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href={venue.bookingUrl}
                className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Book now
              </a>

              <Link
                href="/menu"
                className="button-hover smooth rounded-full border border-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                View menu
              </Link>

              <Link
                href="/catering"
                className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Groups
              </Link>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <Image
              src={heroImage}
              alt={venue.name}
              width={1400}
              height={950}
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-[540px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[640px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#1F3524]/10 bg-[#F1EBE3] px-6 py-8 text-center">
        <p className="font-serif text-2xl leading-relaxed text-black md:text-3xl">
          Good food. Good drinks. The right venue for it.
        </p>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
              Experience
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-black">
              Come for the food, stay for the feeling.
            </h2>
          </div>

          <div className="grid gap-14 md:grid-cols-2">
            {venue.sections.map((section, index) => (
              <article
                key={section.title}
                className="border-t border-[#1F3524]/10 pt-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/35">
                  0{index + 1}
                </p>

                <h3 className="mt-6 font-serif text-4xl text-black">
                  {section.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-black/60">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <Image
            src={landscapeImage}
            alt={`${venue.name} venue`}
            width={1600}
            height={900}
            sizes="100vw"
            className="h-[52vh] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#F1EBE3] px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-black/45">
              Plan your visit
            </p>

            <h2 className="font-serif text-5xl leading-tight text-black">
              Menus, bookings and what’s on.
            </h2>

            <p className="mt-8 max-w-sm text-base leading-8 text-black/60">
              Everything you need to plan your visit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {venue.features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="hover-lift rounded-2xl bg-[#FAF8F3] p-8"
              >
                <p className="font-serif text-3xl text-black">
                  {feature.title}
                </p>

                <p className="mt-5 text-sm leading-7 text-black/60">
                  {feature.text}
                </p>

                <span className="mt-9 inline-flex border-b border-[#1F3524] pb-1 text-xs font-bold uppercase tracking-[0.18em]">
                  {feature.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
                Food, drinks and good company
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-black">
                This is where it all comes together.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/60">
              The food hits the table, drinks start flowing, and the night takes care of itself.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="group overflow-hidden rounded-2xl">
              <Image
                src={foodImage}
                alt={`${venue.name} food`}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="grid gap-6">
              <div className="group overflow-hidden rounded-2xl">
                <Image
                  src={margaritaImage}
                  alt={`${venue.name} margaritas`}
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-[297px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group overflow-hidden rounded-2xl">
                <Image
                  src={groupImage}
                  alt={`${venue.name} group dining`}
                  width={800}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-[297px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 border-t border-[#1F3524]/10 pt-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-black/45">
              Hours and location
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-black">
              Find us.
            </h2>

            <p className="mt-8 max-w-sm text-base leading-8 text-black/60">
              {venue.address}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-[#F1EBE3] p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-black/45">
                Address
              </p>

              <p className="font-serif text-3xl leading-tight text-black">
                {venue.address}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F1EBE3] p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-black/45">
                Opening hours
              </p>

              <div className="space-y-4">
                {venue.hours.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-6 border-b border-[#1F3524]/10 pb-3 text-sm"
                  >
                    <span className="font-bold uppercase tracking-[0.14em]">
                      {item.label}
                    </span>

                    <span className="text-right text-black/60">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#1F3524] text-white lg:grid-cols-[1fr_1.1fr]">
          <div className="p-10 md:p-16">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-white/70">
              Visit
            </p>

            <h2 className="font-serif text-6xl">{venue.name}</h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Book a table or plan something bigger.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={venue.bookingUrl}
                className="button-hover smooth rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                Book now
              </a>

              <Link
                href="/catering"
                className="button-hover smooth rounded-full border border-white/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em]"
              >
                Groups
              </Link>

              <Link
                href="/contact"
                className="button-hover smooth rounded-full border border-white/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em]"
              >
                Enquire
              </Link>
            </div>
          </div>

          <div className="relative min-h-[460px]">
            <Image
              src={heroImage}
              alt={venue.name}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover opacity-75"
            />
          </div>
        </div>
      </section>
    </main>
  );
}