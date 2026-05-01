import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1F3524] text-[#F6F1EA]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="relative mb-8 h-14 w-32">
              <Image
                src="/images/alma-group-logo.png"
                alt="Alma Group"
                fill
                sizes="128px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/70">
              Hospitality, events, and catering across the Northern Beaches.
            </p>
            <p className="mt-6 text-sm leading-7 text-white/70">
              Follow us: 
              <a href="https://www.instagram.com/alma_avalon/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
               @alma_avalon 
              </a>
              <a href="https://www.instagram.com/st.alma_freshwater/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
               @st.alma_freshwater
              </a>
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Venues
            </p>

            <div className="space-y-4 text-sm text-white/80">
              <Link href="/alma-avalon" className="block hover:text-white">
                Alma Avalon
              </Link>
              <Link href="/st-alma" className="block hover:text-white">
                St Alma
              </Link>
              <Link href="/book" className="block hover:text-white">
                Book a table
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Explore
            </p>

            <div className="space-y-4 text-sm text-white/80">
              <Link href="/about" className="block hover:text-white">
                About
              </Link>
              <Link href="/events" className="block hover:text-white">
                Events
              </Link>
              <Link href="/catering" className="block hover:text-white">
                Catering
              </Link>
              <Link href="/gift-cards" className="block hover:text-white">
                Gift Cards
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-white/50">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/80">
              <p>Avalon: 0414 379 158</p>
              <p>Alma: 0405 901 794</p>

              <Link
                href="/contact"
                className="inline-flex border-b border-white/40 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-white"
              >
                Enquiries
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-xs text-white/50">
          <p>&copy; Alma Group 2026</p>
        
        </div>
      </div>
    </footer>
  );
}