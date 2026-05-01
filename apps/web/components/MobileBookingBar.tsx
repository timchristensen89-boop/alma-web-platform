"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { TrackedLink } from "./TrackedLink";

export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1F3524]/15 bg-[#F8F6F1] p-3 md:hidden">
      <div className="flex gap-3">
        <TrackedLink
          href="/book"
          eventName="booking_click"
          eventParams={{
            location: "mobile_booking_bar",
            venue: "group",
            destination: "/book",
          }}
          className="flex-1 rounded-full bg-[#1F3524] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white"
        >
          Book now
        </TrackedLink>

        <Link
          href="tel:0414379158"
          className="flex items-center justify-center rounded-full border border-[#1F3524]/30 px-4 py-3"
        >
          <Phone size={18} />
        </Link>
      </div>
    </div>
  );
}
