"use client";

import { track } from "../lib/track";

export function MobileBookingCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white p-4 md:hidden">
      <a
        href="/book"
        onClick={() => track("mobile_sticky_book_now_clicked")}
        className="block w-full rounded-full bg-[#1F3524] py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white"
      >
        Book now
      </a>
    </div>
  );
}
