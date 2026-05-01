import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "../../components/TrackedLink";
import {
  GlassWater,
  HandPlatter,
  Salad,
  Utensils,
} from "lucide-react";

const orderSteps = [
  { label: "Start with something light", Icon: Salad, href: "#menus" },
  { label: "Add tacos and shared plates", Icon: Utensils, href: "#menus" },
  { label: "Order a round of margaritas", Icon: GlassWater, href: "#menus" },
  { label: "Keep the table moving", Icon: HandPlatter, href: "/book" },
];

const menus = [
  {
    title: "Alma Avalon",
    location: "Avalon Beach",
    image: "/images/alma-avalon-food-menu.jpg",
    foodHref: "/menus/alma-avalon-menu.pdf",
    drinksHref: "/menus/alma-avalon-drinks.pdf",
    setMenus: [
      { title: "Grazing", price: "49 pp" },
      { title: "Feasting", price: "79 pp" },
    ],
    sections: [
      {
        title: "To start",
        items: [
          { name: "Guacamole, corn chips, wakame", price: "16", tag: "Start here" },
          { name: "Prawn ceviche, aguachile, baby cucumbers", price: "28" },
          {
            name: "Salmon sashimi hard shell taco, pico de gallo, guacachile",
            price: "21",
            tag: "Signature",
          },
          {
            name: "Sweet corn, panko crumb, cotija cheese, chipotle",
            price: "16",
          },
          { name: "Halloumi, agave glaze, salsa macha", price: "18" },
          { name: "Chicken tinga empanadas, salsa roja", price: "21" },
        ],
      },
      {
        title: "Tacos",
        items: [
          {
            name: "Carne asada taco, guacamole, caramelised onions, radish",
            price: "8",
          },
          {
            name: "Barramundi taco, coleslaw, avocado, chipotle aioli",
            price: "8",
          },
          { name: "Pork belly taco, guacamole, pineapple salsa", price: "8", tag: "Popular" },
          {
            name: "Zucchini taco, salsa macha, avocado and pistachio salsa",
            price: "8",
          },
        ],
      },
      {
        title: "Larger plates",
        items: [
          {
            name: "Fish of the day al pastor, pico de piña, avocado mousse",
            price: "46",
          },
          {
            name: "Agave beef short ribs, grilled cos, baby carrots, tortillas",
            price: "48",
            tag: "For the table",
          },
          {
            name: "Cauliflower steak, butter bean cream, roast pepita salsa",
            price: "32",
          },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Broccolini, pipián mole, pepitas", price: "19" },
          { name: "Shoestring fries, paprika, chipotle aioli", price: "10" },
          { name: "Nashi pear, goat’s cheese, candied walnuts", price: "18" },
        ],
      },
      {
        title: "Dessert",
        items: [
          { name: "Churros, dulce de leche, chocolate ice cream", price: "18" },
          { name: "Coconut flan, citrus berry compote", price: "16" },
        ],
      },
    ],
    drinks: [
      {
        title: "Margaritas",
        items: [
          { name: "Classic margarita" },
          { name: "Tommy’s margarita" },
          { name: "Spicy margarita" },
          { name: "Coconut margarita", tag: "Signature" },
        ],
      },
      {
        title: "Fresh pours",
        items: [
          { name: "Paloma" },
          { name: "Sangria" },
          { name: "House spritz" },
        ],
      },
    ],
  },
  {
    title: "St Alma",
    location: "Freshwater",
    image: "/images/st-alma-food-menu.jpg",
    foodHref: "/menus/st-alma-menu.pdf",
    drinksHref: "/menus/st-alma-drinks.pdf",
    setMenus: [{ title: "Trust our chef", price: "79 pp" }],
    sections: [
      {
        title: "To start",
        items: [
          { name: "Guacamole, salsa macha, tostadas", price: "16", tag: "Start here" },
          {
            name: "Salmon ceviche, citrus aguachile, avocado, pickled cucumbers",
            price: "26",
          },
          {
            name: "Prawn tostada, avocado, salmon and guajillo pâté",
            price: "22",
          },
          { name: "Chicken tinga empanadas, martajada sauce", price: "21" },
        ],
      },
      {
        title: "Tacos",
        items: [
          {
            name: "Barramundi taco, guacamole, coleslaw, chipotle aioli",
            price: "8",
          },
          {
            name: "Beef birria taco, tomatillio salsa, crispy shallots",
            price: "8",
            tag: "Popular",
          },
          {
            name: "Smoked confit eggplant taco, coriander cashew salsa",
            price: "8",
          },
          {
            name: "Crispy chicken Milanesa taco, house made tomato sauce",
            price: "8",
          },
        ],
      },
      {
        title: "Larger plates",
        items: [
          { name: "Grilled snapper, chipotle and cauliflower purée", price: "39" },
          { name: "Roasted cabbage, pepita mole, shishito pepper", price: "32" },
          { name: "Grilled octopus, chimichurri, refried bean purée", price: "38" },
          { name: "Roast chicken, esquites, salsa macha", price: "42" },
          {
            name: "Agave beef short rib, grilled cos, pickled carrots, tortillas",
            price: "48",
            tag: "For the table",
          },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Polenta parmesan fries, chipotle aioli", price: "18" },
          {
            name: "Roasted baby beetroot, grapefruit, goat cheese cream",
            price: "19",
          },
          {
            name: "Green leaf salad, pistachio, orange, citrus vinaigrette",
            price: "16",
          },
          { name: "Broccolini, almond mole", price: "19" },
        ],
      },
      {
        title: "Dessert",
        items: [
          { name: "Pistachio and vanilla bean flan", price: "15" },
          {
            name: "Churros, almond and white chocolate ganache, ice cream",
            price: "18",
            tag: "Finish here",
          },
        ],
      },
    ],
    drinks: [
      {
        title: "Margaritas",
        items: [
          { name: "Classic margarita" },
          { name: "Tommy’s margarita", tag: "Popular" },
          { name: "Coconut margarita" },
          { name: "Mezcal margarita" },
        ],
      },
      {
        title: "Agave and fresh pours",
        items: [
          { name: "Paloma" },
          { name: "House spritz" },
          { name: "Tequila and mezcal" },
        ],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="bg-[#FAF8F3] px-6 pb-24 pt-36 text-[#1F3524] md:px-10">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0E9] text-[#1F3524]">
              <Utensils size={18} strokeWidth={1.6} />
            </span>
            Menus
          </p>

          <h1 className="mt-7 font-serif text-6xl leading-[0.9] text-black sm:text-7xl md:text-8xl">
            Food, drinks,
            <br />
            and good tables.
          </h1>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-black/65 md:text-xl md:leading-9">
            Current menus for Alma Avalon and St Alma. Browse below, or view the
            full PDFs for the latest offerings.
          </p>

          <p className="mt-3 text-[11px] leading-5 text-black/35">
            Menus are subject to change and may vary on the night.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-4">
          <TrackedLink
            href="/book"
            eventName="booking_click"
            eventParams={{ location: "menu_top", venue: "group", destination: "/book" }}
            className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Book a table
          </TrackedLink>

          <Link
            href="/catering"
            className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
          >
            Groups and catering
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-10 rounded-2xl border border-[#1F3524]/10 bg-[#F1EBE3] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
              How to order
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] text-black md:text-5xl">
              Built for the table.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-black/55">
              Start light, add tacos, share the larger plates and keep the
              drinks moving.
            </p>
          </div>

          <div className="grid gap-4">
            {orderSteps.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl bg-[#FAF8F3] px-5 py-4 text-sm font-bold text-[#1F3524] transition hover:bg-white"
              >
                <item.Icon
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#1F3524]"
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="menus" className="mx-auto mt-20 max-w-7xl space-y-20">
        {menus.map((menu) => (
          <article
            key={menu.title}
            className="overflow-hidden rounded-2xl border border-[#1F3524]/10 bg-white/50 shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                <Image
                  src={menu.image}
                  alt={`${menu.title} food and drinks`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.38em] text-white/70">
                    {menu.location}
                  </p>

                  <h2 className="mt-4 font-serif text-5xl leading-none md:text-6xl">
                    {menu.title}
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                    Shared plates, tacos, larger dishes and margaritas made to
                    be ordered together.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {menu.setMenus.map((setMenu) => (
                      <div
                        key={setMenu.title}
                        className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
                      >
                        {setMenu.title} {setMenu.price}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#1F3524]/10 pb-8">
                  <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/35">
                      {menu.title} Menu
                    </p>

                    <div className="mt-3">
                      <p className="text-sm leading-7 text-black/50">
                        Prices are listed below. Dietary notes and full menu
                        details are available in the PDFs.
                      </p>

                      <p className="mt-2 text-xs leading-6 text-black/40">
                        Please note that prices and dietary information are
                        subject to change.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <TrackedLink
                      href={menu.foodHref}
                      eventName="menu_pdf_click"
                      eventParams={{
                        location: "menu_card",
                        venue: menu.title === "Alma Avalon" ? "alma_avalon" : "st_alma",
                        destination: menu.foodHref,
                      }}
                      target="_blank"
                      rel="noreferrer"
                      className="button-hover smooth inline-flex justify-center rounded-full bg-[#1F3524] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
                    >
                      Food PDF
                    </TrackedLink>

                    <TrackedLink
                      href={menu.drinksHref}
                      eventName="menu_pdf_click"
                      eventParams={{
                        location: "menu_card",
                        venue: menu.title === "Alma Avalon" ? "alma_avalon" : "st_alma",
                        destination: menu.drinksHref,
                      }}
                      target="_blank"
                      rel="noreferrer"
                      className="button-hover smooth inline-flex justify-center rounded-full border border-[#1F3524]/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
                    >
                      Drinks PDF
                    </TrackedLink>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-black/35">
                    Food
                  </p>

                  <div className="grid gap-x-10 gap-y-12 xl:grid-cols-2">
                    {menu.sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-serif text-3xl leading-none text-black">
                          {section.title}
                        </h3>

                        <div className="mt-5 space-y-4">
                          {section.items.map((item) => (
                            <div
                              key={item.name}
                              className="grid grid-cols-[1fr_auto] gap-5 border-b border-[#1F3524]/10 pb-4"
                            >
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="text-sm font-medium leading-6 text-black/68">
                                    {item.name}
                                  </p>
                                  {item.tag && (
                                    <span className="rounded-full bg-[#1F3524]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1F3524]">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-sm font-bold text-black">
                                {item.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-12 border-t border-[#1F3524]/10" />

                <div>
                  <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-black/35">
                    Drinks
                  </p>

                  <div className="grid gap-x-10 gap-y-12 xl:grid-cols-2">
                    {menu.drinks.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-serif text-3xl leading-none text-black">
                          {section.title}
                        </h3>

                        <div className="mt-5 space-y-4">
                          {section.items.map((item) => (
                            <div
                              key={item.name}
                              className="grid grid-cols-[1fr_auto] gap-5 border-b border-[#1F3524]/10 pb-4"
                            >
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="text-sm font-medium leading-6 text-black/68">
                                    {item.name}
                                  </p>
                                  {item.tag && (
                                    <span className="rounded-full bg-[#1F3524]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1F3524]">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
                                PDF
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-7 text-black/45">
                    Margaritas, agave and fresh pours change regularly. See the
                    drinks PDF for the full list.
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-10 rounded-2xl bg-[#EEF0E9] p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#1F3524]/55">
            Groups
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-black md:text-6xl">
            Want the table handled?
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-black/65">
            Grazing, feasting, trust our chef menus, long tables and private
            events can all be shaped around the group.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/catering"
              className="button-hover smooth rounded-full bg-[#1F3524] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Catering and groups
            </Link>

            <TrackedLink
              href="/contact"
              eventName="enquiry_click"
              eventParams={{ location: "menu_final_cta", venue: "group", destination: "/contact" }}
              className="button-hover smooth rounded-full border border-[#1F3524]/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1F3524]"
            >
              Start an enquiry
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
