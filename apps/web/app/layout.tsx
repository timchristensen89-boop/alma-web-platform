import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { MobileBookingBar } from "../components/MobileBookingBar";

export const metadata = {
  title: "Alma Group | Coastal Mexican Restaurants, Events and Catering",
  description:
    "Alma Group is home to Alma Avalon and St Alma Freshwater. Coastal Mexican restaurants, group dining, events, catering, gift cards and good nights on the Northern Beaches.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
  <body className="bg-[#FAF8F3] pb-20 md:pb-0">
    {children}
    <MobileBookingBar />
  </body>
</html>
  );
}
