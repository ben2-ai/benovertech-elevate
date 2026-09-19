import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead, WhatsAppButton } from "@/components/site/ui";

export const Route = createFileRoute("/tech-store")({
  head: () => ({
    meta: [
      { title: "Tech Store, Phones, Laptops & Accessories in Lagos | BENOVERTECH" },
      {
        name: "description",
        content:
          "Smartphones, laptops, tablets, smartwatches, earbuds, chargers, power banks, cables and accessories. Available in our shop at fair prices.",
      },
      { property: "og:title", content: "BENOVERTECH Tech Store" },
      {
        property: "og:description",
        content: "Reliable gadgets and accessories from BENOVERTECH, Lagos, Nigeria. Order on WhatsApp.",
      },
    ],
  }),
  component: TechStore,
});

const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Earbuds and Headphones",
  "Wireless Microphones",
  "Chargers",
  "Batteries",
  "Power Banks",
  "Cables",
  "Accessories",
  "Fans",
  "Car Accessories",
] as const;

type Product = { name: string; category: string; spec: string; description: string; image: string };

const products: Product[] = [
  {
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    spec: "Pro camera • Premium finish",
    description: "A flagship iPhone for sharp photos, smooth performance, and a premium everyday experience.",
    image: "/Benovertech%27s%20iphone%2015pro%20max%20for%20sale.jpeg",
  },
  {
    name: "iPhone 15",
    category: "Smartphones",
    spec: "Latest design • Great everyday phone",
    description: "A stylish everyday iPhone with a bright display and dependable performance.",
    image: "/Benovertech%27s%20iphone%2015%20for%20sale.jpeg",
  },
  {
    name: "iPhone 14 Pro Max",
    category: "Smartphones",
    spec: "Pro camera • Large display",
    description: "A large-screen Pro model for photography, streaming, work, and everyday use.",
    image: "/Benovertech%27s%20iphone%2014pro%20max%20for%20sale.jpeg",
  },
  {
    name: "iPhone 16 Pro",
    category: "Smartphones",
    spec: "Pro performance • Premium finish",
    description: "Premium Pro performance in a clean, modern design. Ask us about current availability.",
    image: "/Benovertech%27s%20iphone%2016pro%20for%20sale.jpeg",
  },
  {
    name: "Laptops",
    category: "Laptops",
    spec: "Work, study, and business-ready options",
    description: "Browse our available laptop options for school, work, business, and everyday productivity.",
    image: "/benovertech%20Laptops%20in%20showglass",
  },
  {
    name: "JBL Tune Buds",
    category: "Earbuds and Headphones",
    spec: "ANC • 24h • BT5.3",
    description: "Wireless earbuds for focused listening, calls, and commutes. Ask for today's stock.",
    image: "/benovertech%20earbuds.png",
  },
  {
    name: "Car Bluetooth MP3 Player",
    category: "Car Accessories",
    spec: "Bluetooth audio • Hands-free calls • FM support",
    description: "A convenient in-car audio accessory for streaming music and handling calls through your vehicle sound system.",
    image: "/image-1789811357696.png",
  },
  {
    name: "Y10 HiFi Wired Earphones",
    category: "Earbuds and Headphones",
    spec: "YSD BBC • In-ear wired audio",
    description: "Simple wired earphones for music, calls, and daily listening without charging.",
    image: "/image-1789811368543.png",
  },
  {
    name: "Wireless Microphone",
    category: "Wireless Microphones",
    spec: "Wireless audio • Portable kit",
    description: "A portable microphone kit for content, presentations, interviews, and events.",
    image: "/Benovertech%27s%20wireless%20mic%20for%20sale.jpeg",
  },
  {
    name: "Tarrot R-58 Car Charger",
    category: "Chargers",
    spec: "Power 3.0 • 2 USB outputs",
    description: "A practical in-car charger with two USB outputs and included charging leads.",
    image: "/image-1789811381285.png",
  },
  {
    name: "SHPLUS SH-A625T 42W Charger",
    category: "Chargers",
    spec: "42W • Dual USB output",
    description: "A dual-port wall charger for powering phones and other everyday USB devices.",
    image: "/image-1789811391488.png",
  },
  {
    name: "SHPLUS SH-A919T Speed Energy Station",
    category: "Chargers",
    spec: "Fast USB charging • Compact wall design",
    description: "A compact SHPLUS wall charger designed for quick everyday phone charging.",
    image: "/image-1789811405165.png",
  },
  {
    name: "BL-5C Replacement Battery",
    category: "Batteries",
    spec: "Rechargeable • BL-5C format",
    description: "Replacement BL-5C batteries for compatible phones and small electronics. Confirm fit before purchase.",
    image: "/image-1789811416962.png",
  },
  {
    name: "Lamac Desktop Battery Charger",
    category: "Chargers",
    spec: "Universal charging station • Multiple battery sizes",
    description: "A compact desktop charger for compatible rechargeable batteries. Confirm battery compatibility before purchase.",
    image: "/image-1789811429530.png",
  },
  {
    name: "SHPLUS Micro-USB Cable Pack",
    category: "Cables",
    spec: "SH-B033 • 30-piece pack",
    description: "A bulk pack of Micro-USB charge and sync cables for home, office, and resale needs.",
    image: "/image-1789811508438.png",
  },
  {
    name: "Universal Phone Cables",
    category: "Cables",
    spec: "Charge and sync • Mixed device support",
    description: "Everyday replacement cables for keeping phones and accessories powered and connected.",
    image: "/Benovertech%27super%20cords%20for%20sale.jpeg",
  },
  {
    name: "Digital Handheld Fan",
    category: "Fans",
    spec: "Portable • Digital display",
    description: "A compact rechargeable handheld fan for personal cooling at home, work, or on the move.",
    image: "/image-1789811460935.png",
  },
  {
    name: "iPhone 17 Pro Max Case",
    category: "Accessories",
    spec: "Camera lens protection • Magnetic design",
    description: "New-arrival protective cases for iPhone 17 Pro Max, with a clean look and camera coverage.",
    image: "/image-1789811489382.png",
  },
];

function TechStore() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (q === "" || `${p.name} ${p.spec} ${p.category}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Tech store</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Gadgets that keep you connected
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Phones, laptops, tablets, audio devices, and everyday accessories, all available in our
            shop at fair prices. Send us a message for today&apos;s price and availability.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              maxLength={80}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, e.g. laptop or earbuds"
              aria-label="Search for products"
              className="w-full rounded-full border border-input bg-card py-3 pl-11 pr-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
            />
          </div>
          <p className="text-sm text-muted-foreground md:text-right">
            {filtered.length} product{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                category === c
                  ? "bg-gradient-gold text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={(i % 6) * 50}>
              <article className="card-surface flex h-full flex-col overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full bg-secondary object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    {p.category}
                  </p>
                  <h2 className="mt-2 text-[1.05rem] font-semibold leading-tight">{p.name}</h2>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{p.spec}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 space-y-1 text-[11px] text-muted-foreground">
                    <li className="font-semibold text-foreground">In stock</li>
                    <li className="font-semibold text-foreground">Fair prices</li>
                    <li>Message for today&apos;s price</li>
                  </ul>
                  <WhatsAppButton
                    className="mt-5 w-full"
                    message={`Hello BENOVERTECH, I want to order: ${p.name}. Please share today's price and availability.`}
                  >
                    Order now
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            We could not find that product. Message us on WhatsApp and we will help you check.
          </p>
        )}
      </Section>

      <Section className="bg-secondary/50">
        <SectionHead eyebrow="For your peace of mind" title="Returns and warranty" center={false} />
        <Reveal className="mt-8">
          <div className="card-surface flex gap-4 p-6 sm:p-8">
            <ShieldCheck className="hidden h-6 w-6 shrink-0 text-gold-deep sm:block" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Please check gadgets and accessories before you pay. We may accept returns or
              exchanges within 48 hours for items with confirmed faults, as long as the item is
              unused, in its original packaging, and you have proof of purchase. Items damaged by
              misuse, accidents, liquid, software changes, or physical damage cannot be returned.
              Where a warranty is available, the manufacturer or supplier terms will be explained
              to you before purchase.
            </p>
          </div>
        </Reveal>
      </Section>

      <ContactStrip />
    </>
  );
}
