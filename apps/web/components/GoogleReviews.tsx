import type { Venue } from "../data/venues";

type GoogleReviewsProps = {
  venues: Venue[];
  intro?: string;
};

export function GoogleReviews({
  venues,
  intro = "A quick read on the rooms, food, drinks, and service from guests who have visited.",
}: GoogleReviewsProps) {
  if (!venues || venues.length === 0) return null;

  const reviews = [
    {
      venue: "Alma Avalon",
      text: "Incredible staff and service, we were so well looked after and the food was delish.",
    },
    {
      venue: "St Alma",
      text: "Food is amazing. Vibes are great and cocktails are 10 out of 10.",
    },
    {
      venue: "Alma Avalon",
      text: "Our go to for long lunches and celebrations.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <h2 className="font-serif text-4xl text-black md:text-5xl">
        The venue speaks for itself.
      </h2>

      <p className="mt-4 max-w-2xl text-black/60">{intro}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <blockquote key={i} className="relative">
            <div className="relative rounded-2xl border border-[#1F3524]/10 bg-[#FAF8F3] p-8 shadow-sm">
              <span className="absolute -top-3 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF0E9] font-serif text-3xl leading-none text-[#1F3524]">
                “
              </span>

              <p className="pt-2 text-lg leading-8 text-black/80">
                “{review.text}”
              </p>

              <span className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 border-b border-r border-[#1F3524]/10 bg-[#FAF8F3]" />
            </div>

            <footer className="mt-7 pl-8 text-xs font-bold uppercase tracking-[0.22em] text-black/40">
              {review.venue}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
