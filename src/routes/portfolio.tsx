import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section } from "@/components/site/ui";
import port1 from "@/assets/port-1.jpg";
import port2 from "@/assets/port-2.jpg";
import port3 from "@/assets/port-3.jpg";
import port4 from "@/assets/port-4.jpg";
import port6 from "@/assets/port-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BENOVERTECH Design & Print Work" },
      {
        name: "description",
        content:
          "Branding, graphic design, print work and web projects delivered by BENOVERTECH in Lagos.",
      },
      { property: "og:title", content: "Portfolio — BENOVERTECH" },
      {
        property: "og:description",
        content: "A selection of branding, design, print and web projects.",
      },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "Branding", "Graphic Design", "Print Work", "Web Projects"] as const;

const works = [
  { image: port1, title: "Gold foil stationery set", category: "Branding" },
  { image: port2, title: "Poster and flyer series", category: "Graphic Design" },
  { image: port3, title: "Roll-up banner and signage", category: "Print Work" },
  { image: port4, title: "Branded souvenir pack", category: "Branding" },
  { image: port6, title: "Brochures and sticker print", category: "Print Work" },
  {
    image: "https://babcquotepro.vercel.app/B.A.B.C%20LOGO.png",
    title: "B.A.B.C Quotation Studio",
    category: "Web Projects",
    description: "A quotation management platform built for smoother business operations.",
    href: "https://babcquotepro.vercel.app/",
  },
  {
    image: "https://coachzinny.vercel.app/images/coach-zinny.jpeg",
    title: "Coach Zinny",
    category: "Web Projects",
    description: "A calm online therapy and relationship coaching platform for individuals and couples.",
    href: "https://coachzinny.vercel.app/",
  },
  {
    image: "https://new-covenant-studend-reg-admin-1.onrender.com/logo.png",
    title: "New Covenant Foundation School Portal",
    category: "Web Projects",
    description: "An administrative portal for managing student registration and school records.",
    href: "https://new-covenant-studend-reg-admin-1.onrender.com/login",
  },
];

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Portfolio</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Some of our work</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Have a look at the kind of work we do across branding, design, printing, and web.
          </p>
        </div>
      </section>

      <Section className="bg-[#f5f7f9]">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "border-[#2b6ef6] bg-[#2b6ef6] text-white shadow-[0_8px_18px_rgba(43,110,246,0.18)]"
                  : "border-[#dfe6ef] bg-white text-[#2b3748] hover:border-[#c7d8f8] hover:text-[#1f2d3d]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <figure className="h-full overflow-hidden rounded-[1.3rem] border border-[#dfeaf4] bg-[#f7f9fb] shadow-[0_6px_16px_rgba(22,36,58,0.04)]">
                <img
                  src={w.image}
                  alt={w.title}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-[1.2] w-full object-cover"
                />
                <figcaption className="px-3.5 pb-4 pt-2.5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2b6ef6]">
                    {w.category}
                  </p>
                  <h2 className="mt-1 text-[0.92rem] font-semibold leading-snug text-[#1f2a37]">
                    {w.title}
                  </h2>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.7rem] text-muted-foreground">
          More BENOVERTECH projects will be added here as they are completed and delivered.
        </p>
      </Section>

      <ContactStrip />
    </>
  );
}
