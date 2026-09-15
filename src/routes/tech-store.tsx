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
  "Tablets",
  "Smartwatches",
  "Earbuds and Headphones",
  "Wireless Microphones",
  "Slides",
  "Chargers",
  "Power Banks",
  "Cables",
  "Accessories",
] as const;

type Product = { name: string; category: string; spec: string; image: string };

const products: Product[] = [
  {
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    spec: "Pro camera • Premium finish",
    image: "/Benovertech%27s%20iphone%2015pro%20max%20for%20sale.jpeg",
  },
  {
    name: "iPhone 15",
    category: "Smartphones",
    spec: "Latest design • Great everyday phone",
    image: "/Benovertech%27s%20iphone%2015%20for%20sale.jpeg",
  },
  {
    name: "iPhone 14 Pro Max",
    category: "Smartphones",
    spec: "Pro camera • Large display",
    image: "/Benovertech%27s%20iphone%2014pro%20max%20for%20sale.jpeg",
  },
  {
    name: "iPhone 16 Pro",
    category: "Smartphones",
    spec: "Pro performance • Premium finish",
    image: "/Benovertech%27s%20iphone%2016pro%20for%20sale.jpeg",
  },
  {
    name: "Premium Laptop 14",
    category: "Laptops",
    spec: "i7 • 16GB • 512GB",
    image: "/benovertech%20Laptops%20in%20showglass",
  },
  {
    name: "Student Laptop 15",
    category: "Laptops",
    spec: "i5 • 8GB • 256GB",
    image: "/benovertech%20Laptops%20in%20showglass",
  },
  {
    name: "Business Tablet 11",
    category: "Tablets",
    spec: "11in • Wi‑Fi + LTE",
    image: "/All%20phone%20accosseries.png",
  },
  {
    name: "Compact Tablet 8",
    category: "Tablets",
    spec: "8in • 64GB",
    image: "/All%20phone%20accosseries.png",
  },
  {
    name: "Garmin Forerunner",
    category: "Smartwatches",
    spec: "GPS • HR • 5ATM",
    image: "/benovertech%20smart%20watches.png",
  },
  {
    name: "Amazfit Bip 5",
    category: "Smartwatches",
    spec: "BT • Sleep • 7 days",
    image: "/benovertech%20smart%20watches.png",
  },
  {
    name: "JBL Tune Buds",
    category: "Earbuds and Headphones",
    spec: "ANC • 24h • BT5.3",
    image: "/benovertech%20earbuds.png",
  },
  {
    name: "Oraimo FreePods",
    category: "Earbuds and Headphones",
    spec: "Bass • Fold • 30h",
    image: "/benovertech%20earbuds.png",
  },
  {
    name: "Wireless Microphone",
    category: "Wireless Microphones",
    spec: "Wireless audio • Portable kit",
    image: "/Benovertech%27s%20wireless%20mic%20for%20sale.jpeg",
  },
  {
    name: "Phone Tripod Stand",
    category: "Accessories",
    spec: "Stable selfie tripod • Portable",
    image: "/Benovertech%27s%20Tripod%20stand%20for%20sale.jpeg",
  },
  {
    name: "Fashion Slides",
    category: "Slides",
    spec: "Comfortable everyday footwear",
    image: "/Benovertech%27earbud%20cases%20for%20sale.jpeg",
  },
  {
    name: "Huawei 65W Charger",
    category: "Chargers",
    spec: "65W • USB‑C",
    image: "/Benovertech%27s%20super%20phone%20chargers%20for%20sale.jpeg",
  },
  {
    name: "Baseus 100W Charger",
    category: "Chargers",
    spec: "100W • Multi‑port",
    image: "/Benovertech%27s%20super%20phone%20chargers%20for%20sale.jpeg",
  },
  {
    name: "20,000mAh Power Bank",
    category: "Power Banks",
    spec: "3.5 charges • Fast power backup",
    image: "/Benovertech%27spowerbank%20for%20sale.jpeg",
  },
  {
    name: "Ugreen 20K",
    category: "Power Banks",
    spec: "20,000mAh • Fast charge",
    image: "/All%20phone%20accosseries.png",
  },
  {
    name: "USB‑C Cable 1M",
    category: "Cables",
    spec: "1m • Fast charge",
    image: "/Benovertech%27s%20super%20cords%20for%20sale.jpeg",
  },
  {
    name: "Phone Cable Kit",
    category: "Cables",
    spec: "Mixed plugs • 2‑in‑1",
    image: "/Benovertech%27s%20super%20cords%20for%20sale.jpeg",
  },
  {
    name: "Phone Stand",
    category: "Accessories",
    spec: "Foldable • Desk",
    image: "/Benovertech%27s%20Tripod%20stand%20for%20sale.jpeg",
  },
  {
    name: "Screen Guard Kit",
    category: "Accessories",
    spec: "Glass • Case",
    image: "/All%20phone%20accosseries.png",
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
