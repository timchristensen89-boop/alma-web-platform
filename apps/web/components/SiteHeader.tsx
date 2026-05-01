"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { track } from "../lib/track";

const navItems = [
  { label: "Venues", href: "/venues" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Catering", href: "/catering" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#FAF8F3]/95 shadow-[0_1px_0_rgba(31,53,36,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="relative h-12 w-28">
          <Image
            src="/images/alma-group-logo.png"
            alt="Alma Group"
            fill
            sizes="112px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3524] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="smooth hover:opacity-55">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          onClick={() => track("header_book_now_clicked")}
          className="hidden rounded-full bg-[#1F3524] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:opacity-85 lg:inline-flex"
        >
          Book now
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="button-hover smooth rounded-full border border-[#1F3524] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524] lg:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#1F3524]/10 bg-[#FAF8F3] px-6 py-6 md:px-10 lg:hidden">
          <nav className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.18em] text-[#1F3524]">
            <Link
              href="/book"
              onClick={() => {
                track("mobile_menu_book_now_clicked");
                setIsOpen(false);
              }}
            >
              Book now
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
