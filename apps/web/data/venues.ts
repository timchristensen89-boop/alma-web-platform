export type VenueSlug = "alma-avalon" | "st-alma";

export type VenueSection = {
  title: string;
  text: string;
};

export type VenueFeature = {
  title: string;
  text: string;
  label: string;
  href: string;
};

export type VenueHours = {
  label: string;
  value: string;
};

export type Venue = {
  slug: VenueSlug;
  name: string;
  location: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  imagePlaceholder: string;
  image: string;
  landscapeImage?: string;
  foodImage?: string;
  margaritaImage?: string;
  groupImage?: string;
  bookingUrl: string;
  enquiryLabel: string;
  address: string;
  hours: VenueHours[];
  sections: VenueSection[];
  features: VenueFeature[];
};

export const venues: Venue[] = [
  {
    slug: "alma-avalon",
    name: "Alma Avalon",
    location: "Avalon Beach",
    eyebrow: "Alma Avalon",
    heroTitle: "Coastal Mexican dining in Avalon.",
    heroText:
      "Alma Avalon brings bold Mexican food, coastal energy, cocktails, catering and warm hospitality to the Northern Beaches.",
    imagePlaceholder: "Image placeholder for Alma Avalon venue photography.",
    image: "/images/Terrace.jpg",
    landscapeImage: "/images/alma-avalon.jpg",
    foodImage: "/images/alma-avalon-food.jpg",
    margaritaImage: "/images/alma-avalon-margaritas.jpg",
    groupImage: "/images/alma-avalon-group.jpg",
    bookingUrl:
      "https://www.sevenrooms.com/explore/almaavalon/reservations/create/search",
    enquiryLabel: "Enquire about catering",
    address: "47 Old Barrenjoey Road, Avalon Beach NSW 2107",
    hours: [
      { label: "Monday", value: "Closed" },
      { label: "Tuesday", value: "Closed" },
      { label: "Wednesday", value: "From 5pm" },
      { label: "Thursday", value: "From 5pm" },
      { label: "Friday", value: "From 4pm" },
      { label: "Saturday", value: "From 12pm" },
      { label: "Sunday", value: "From 12pm" },
    ],
    sections: [
      {
        title: "Dining",
        text: "Coastal Mexican food, margaritas, share plates and relaxed Avalon energy.",
      },
      {
        title: "Catering",
        text: "Packages for birthdays, private events, corporate functions and celebrations.",
      },
      {
        title: "Events",
        text: "Venue events, specials, long lunches, seasonal activations and group bookings.",
      },
    ],
    features: [
      {
        title: "Menus",
        text: "Food, drinks, cocktails and seasonal specials.",
        label: "View menu",
        href: "/menu?venue=alma-avalon",
      },
      {
        title: "What’s on",
        text: "Upcoming events, specials and venue activations.",
        label: "See events",
        href: "/events?venue=alma-avalon",
      },
      {
        title: "Catering",
        text: "Enquire about offsite catering and private celebrations.",
        label: "Enquire",
        href: "/contact",
      },
    ],
  },
  {
    slug: "st-alma",
    name: "St Alma",
    location: "Freshwater",
    eyebrow: "St Alma",
    heroTitle: "Freshwater Mexican restaurant and bar.",
    heroText:
      "St Alma is built for margaritas, shared plates, coastal nights, events and Freshwater energy.",
    imagePlaceholder: "Image placeholder for St Alma venue photography.",
    image: "/images/st-alma-interior.jpg",
    landscapeImage: "/images/st-alma.jpg",
    foodImage: "/images/st-alma-food.JPG",
    margaritaImage: "/images/st-alma-margaritas.jpeg",
    groupImage: "/images/st-alma-group.jpg",
    bookingUrl:
      "https://www.sevenrooms.com/explore/stalma/reservations/create/search",
    enquiryLabel: "Make an enquiry",
    address: "20 Albert Street, Freshwater NSW 2096",
    hours: [
      { label: "Monday", value: "Closed" },
      { label: "Tuesday", value: "5pm to late" },
      { label: "Wednesday", value: "5pm to late" },
      { label: "Thursday", value: "5pm to late" },
      { label: "Friday", value: "12pm to late" },
      { label: "Saturday", value: "12pm to late" },
      { label: "Sunday", value: "12pm to late" },
    ],
    sections: [
      {
        title: "Food",
        text: "Bold Mexican dishes, fresh coastal flavours and share-style dining.",
      },
      {
        title: "Drinks",
        text: "Margaritas, cocktails, wine and drinks built around good nights out.",
      },
      {
        title: "Functions",
        text: "Group bookings, private events and celebrations in Freshwater.",
      },
    ],
    features: [
      {
        title: "Menus",
        text: "Food, drinks, cocktails and seasonal specials.",
        label: "View menu",
        href: "/menu?venue=st-alma",
      },
      {
        title: "What’s on",
        text: "Upcoming events, specials and venue activations.",
        label: "See events",
        href: "/events?venue=st-alma",
      },
      {
        title: "Functions",
        text: "Group bookings, private events and celebrations.",
        label: "Enquire",
        href: "/contact",
      },
    ],
  },
];

export function getVenueBySlug(slug: VenueSlug) {
  return venues.find((venue) => venue.slug === slug);
}
