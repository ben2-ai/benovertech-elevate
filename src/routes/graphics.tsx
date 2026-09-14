import { createFileRoute } from "@tanstack/react-router";
import {
  Brush,
  CalendarHeart,
  CreditCard,
  Megaphone,
  PenTool,
  Share2,
  Shirt,
  Sparkles,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead, WhatsAppButton } from "@/components/site/ui";

export const Route = createFileRoute("/graphics")({
  head: () => ({
    meta: [
      { title: "Graphic Design in Lagos — BENOVERTECH" },
      {
        name: "description",
        content:
          "Logo design, brand identity, flyers, posters, social media designs, business cards, event designs and clothes customization.",
      },
      { property: "og:title", content: "Graphic Design — BENOVERTECH" },
      {
        property: "og:description",
        content: "Creative design that helps your brand look established and trustworthy.",
      },
    ],
  }),
  component: Graphics,
});

const services = [
  { icon: PenTool, title: "Logo Design", text: "A clear, memorable logo that fits your business." },
  { icon: Layers, title: "Brand Identity", text: "Colours, fonts, and a full brand kit that stays consistent." },
  { icon: Brush, title: "Flyers and Posters", text: "Fine artwork that is ready to print." },
  { icon: Share2, title: "Social Media Designs", text: "Post and story designs that help people notice you." },
  { icon: CreditCard, title: "Business Cards", text: "Professional cards that leave a good impression." },
  { icon: CalendarHeart, title: "Event Designs", text: "Weddings, birthdays, conferences, and church programmes." },
  { icon: Megaphone, title: "Advertising Materials", text: "Campaign artwork for online and offline adverts." },
  { icon: Shirt, title: "Clothes Customisation", text: "Custom T-shirts, polos, caps, and branded wear." },
  { icon: Sparkles, title: "Digital Marketing Creatives", text: "Ad banners and visuals made to get results." },
];

function Graphics() {
  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Creative</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Designs that make people take notice
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Tell us what you have in mind and we will turn it into a clean, professional design,
            ready for printing or posting online.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="Hello BENOVERTECH, I want to get a price for a design.">
              Ask for a design price
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="Our services" title="What we can design for you" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 55}>
              <div className="card-surface h-full p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactStrip />
    </>
  );
}
