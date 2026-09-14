import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead, WhatsAppButton } from "@/components/site/ui";
import pPhone from "@/assets/p-phone.jpg";
import pLaptop from "@/assets/p-laptop.jpg";
import pTablet from "@/assets/p-tablet.jpg";
import pWatch from "@/assets/p-watch.jpg";
import pAudio from "@/assets/p-audio.jpg";
import pCharger from "@/assets/p-charger.jpg";
import pPowerbank from "@/assets/p-powerbank.jpg";
import pCable from "@/assets/p-cable.jpg";

export const Route = createFileRoute("/tech-store")({
  head: () => ({
    meta: [
      { title: "Tech Store — Phones, Laptops & Accessories in Lagos | BENOVERTECH" },
      {
        name: "description",
        content:
          "Smartphones, laptops, tablets, smartwatches, earbuds, chargers, power banks, cables and accessories. Available in store at friendly prices.",
      },
      { property: "og:title", content: "BENOVERTECH Tech Store" },
      {
        property: "og:description",
        content: "Reliable gadgets and accessories in Ago Palace, Lagos. Order on WhatsApp.",
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
  "Chargers",
  "Power Banks",
  "Cables",
  "Accessories",
] as const;

type Product = { name: string; category: string; spec: string; image: string };

const products: Product[] = [
  { name: "Flagship Android Smartphone", category: "Smartphones", spec: "6.7in AMOLED • 8GB RAM • 256GB • 5G", image: pPhone },
  { name: "Everyday Smartphone", category: "Smartphones", spec: "6.5in display • 4GB RAM • 128GB • Long battery", image: pPhone },
  { name: "Premium Slim Laptop", category: "Laptops", spec: "Core i7 • 16GB RAM • 512GB SSD • 14in", image: pLaptop },
  { name: "Student Laptop", category: "Laptops", spec: "Core i5 • 8GB RAM • 256GB SSD • 15.6in", image: pLaptop },
  { name: "Business Tablet", category: "Tablets", spec: "11in display • Stylus support • Wi-Fi + LTE", image: pTablet },
  { name: "Compact Tablet", category: "Tablets", spec: "8in display • 64GB • Great for reading", image: pTablet },
  { name: "Fitness Smartwatch", category: "Smartwatches", spec: "Heart rate • Sleep tracking • Water resistant", image: pWatch },
  { name: "Classic Smartwatch", category: "Smartwatches", spec: "Calls • Notifications • 7-day battery", image: pWatch },
  { name: "Wireless Earbuds", category: "Earbuds and Headphones", spec: "Noise cancelling • Charging case • Bluetooth 5.3", image: pAudio },
  { name: "Over-Ear Headphones", category: "Earbuds and Headphones", spec: "Deep bass • Long play time • Foldable", image: pAudio },
  { name: "Fast Charging Adapter", category: "Chargers", spec: "20W–65W USB-C • Safe charging chip", image: pCharger },
  { name: "Multi-Port Charger", category: "Chargers", spec: "Charge phone and laptop together", image: pCharger },
  { name: "Slim Power Bank", category: "Power Banks", spec: "10,000mAh • Dual output • Pocket size", image: pPowerbank },
  { name: "High Capacity Power Bank", category: "Power Banks", spec: "20,000mAh • Fast charge • LED level", image: pPowerbank },
  { name: "Braided USB-C Cable", category: "Cables", spec: "Fast data and charge • Durable braid", image: pCable },
  { name: "Lightning & Micro USB Cables", category: "Cables", spec: "Assorted lengths • Strong connectors", image: pCable },
  { name: "Phone Stand", category: "Accessories", spec: "Adjustable • Foldable aluminium", image: pCable },
  { name: "Screen Protector & Case", category: "Accessories", spec: "Tempered glass • Shock-absorbing case", image: pCable },
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
            Phones, laptops, tablets, audio, and everyday accessories, available in our shop at
            fair prices. Message us for today&apos;s price and availability.
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {p.category}
                  </p>
                  <h2 className="mt-1 text-base font-semibold">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.spec}</p>
                  <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
                    <li className="font-semibold text-foreground">Available in our shop</li>
                    <li className="font-semibold text-foreground">Fair prices</li>
                    <li>Message us for today&apos;s price and availability</li>
                  </ul>
                  <WhatsAppButton
                    className="mt-5 w-full"
                    message={`Hello BENOVERTECH, I want to order: ${p.name}. Please share today's price and availability.`}
                  >
                    Order through WhatsApp
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
