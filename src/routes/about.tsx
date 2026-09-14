import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Palette, Printer, Smartphone, Target } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead } from "@/components/site/ui";
import design from "@/assets/service-design.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BENOVERTECH — Creative, Print & Technology Company" },
      {
        name: "description",
        content:
          "BENOVERTECH is a Lagos multiservice company with specialist divisions in graphic design, printing, and tech gadget sales.",
      },
      { property: "og:title", content: "About BENOVERTECH" },
      {
        property: "og:description",
        content:
          "One trusted company with specialist divisions in graphic design, printing, and technology gadgets.",
      },
    ],
  }),
  component: About,
});

const divisions = [
  {
    icon: Palette,
    title: "Creative Design Division",
    text: "Logos, brand identity, flyers, social media creatives, event designs and advertising materials.",
  },
  {
    icon: Printer,
    title: "Printing Division",
    text: "Large format printing, banners, business cards, brochures, stickers, invitations and souvenirs.",
  },
  {
    icon: Smartphone,
    title: "Technology Division",
    text: "Phones, laptops, tablets, smartwatches, audio, chargers, power banks, cables and accessories.",
  },
];

const values = ["Quality", "Creativity", "Reliability", "Innovation", "Customer Satisfaction"];

function About() {
  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About us</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            One trusted company. Three specialist divisions.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            BENOVERTECH is a modern multiservice company that deals in all kinds of professional
            graphic designs, quality printing, and sells reliable tech gadgets. We help individuals
            and businesses build strong brands, produce standout print materials, and access the
            right phones, laptops, gadgets, and accessories.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={design}
              alt="Design work in progress at BENOVERTECH"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-3xl font-bold sm:text-4xl">Company overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Based in Ago Palace, Lagos, BENOVERTECH brings creative design, professional printing
              and dependable technology under one roof. Whether you are starting a small business,
              planning an event, or replacing a phone or laptop, you get clear advice, honest
              pricing and work that is finished properly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every project is handled by the division that knows it best, so you always speak to
              people who understand exactly what you need.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHead eyebrow="Our divisions" title="Specialists in each area" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="card-surface h-full p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full p-8">
              <Target className="h-6 w-6 text-gold-deep" />
              <h3 className="mt-4 text-2xl font-bold">Our mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To help individuals and businesses express ideas, build brands, access quality
                printing, and find reliable technology.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-surface h-full p-8">
              <Eye className="h-6 w-6 text-gold-deep" />
              <h3 className="mt-4 text-2xl font-bold">Our vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To become a trusted creative, print, and technology partner for customers across
                Lagos and beyond.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="card-surface p-8">
            <Heart className="h-6 w-6 text-gold-deep" />
            <h3 className="mt-4 text-2xl font-bold">Our values</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <ContactStrip />
    </>
  );
}
