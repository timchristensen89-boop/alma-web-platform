"use client";

import Link from "next/link";
import Script from "next/script";
import { Gift } from "lucide-react";
import { TrackedLink } from "../../components/TrackedLink";
import { track } from "../../lib/track";

export default function GiftCardsPage() {
  return (
    <main className="bg-[#FAF8F3] px-6 pb-24 pt-32 text-[#1F3524] md:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/60">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
            <Gift size={18} strokeWidth={1.6} />
          </span>
          Gift Cards
        </p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h1 className="font-serif text-7xl font-normal leading-[0.86] text-black md:text-9xl">
            Gift a good table.
          </h1>

          <div>
            <p className="max-w-2xl text-xl leading-8 text-black/65">
              Send instantly or schedule for later. Gift cards can be used across Alma Avalon and St Alma.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">
              Pick an amount below and let them choose the long lunch, dinner, margaritas or celebration.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <TrackedLink
                href="/book"
            eventName="booking_click"
            eventParams={{ location: "menu_top", venue: "group", destination: "/book" }}
            className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Book a table
          </TrackedLink>

              <Link
                href="/menu"
                className="button-hover smooth inline-flex rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
              >
                View menus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <div className="rounded-2xl border border-[#1F3524]/10 bg-white p-6 shadow-sm md:p-10">
          <div
            className="gift-up-target"
            data-site-id="d139b5ef-3a66-4f9d-91c2-c4abf38248cc"
            data-platform="custom"
          />

          <div className="mt-8 border-t border-[#1F3524]/10 pt-6 text-center">
            <p className="text-sm leading-6 text-black/55">
              Having trouble? Open the gift card page directly.
            </p>

            <a
              href="https://giftup.app/place-order/d139b5ef-3a66-4f9d-91c2-c4abf38248cc"
              target="_blank"
              rel="noreferrer"
              onClick={() => track("gift_cards_fallback_clicked")}
              className="button-hover smooth mt-5 inline-flex rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Open gift card form
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-[#EEF0E9] p-7">
          <p className="font-serif text-3xl leading-none text-black">
            Instant
          </p>
          <p className="mt-4 text-sm leading-7 text-black/60">
            Send now or schedule it for the right moment.
          </p>
        </div>

        <div className="rounded-2xl bg-[#EEF0E9] p-7">
          <p className="font-serif text-3xl leading-none text-black">
            Flexible
          </p>
          <p className="mt-4 text-sm leading-7 text-black/60">
            Redeem across Alma Avalon and St Alma.
          </p>
        </div>

        <div className="rounded-2xl bg-[#EEF0E9] p-7">
          <p className="font-serif text-3xl leading-none text-black">
            Easy
          </p>
          <p className="mt-4 text-sm leading-7 text-black/60">
            Let them choose lunch, dinner, drinks or a celebration.
          </p>
        </div>
      </section>

      <Script
        src="https://cdn.giftup.app/dist/gift-up.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
