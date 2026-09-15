import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section } from "@/components/site/ui";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio, BENOVERTECH Design & Print Work" },
      {
        name: "description",
        content:
          "Branding, graphic design, print work and web projects delivered by BENOVERTECH in Lagos.",
      },
      { property: "og:title", content: "Portfolio, BENOVERTECH" },
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
  { image: "/printed%20crads.jpeg", title: "Printed card designs", category: "Branding" },
  { image: "/gadget%20flyer%201.jpg", title: "Poster and flyer designs", category: "Graphic Design" },
  { image: "/Printed%20banner.jpg", title: "Printed banner design", category: "Print Work" },
  { image: "/Graphic%20designing%20samples.png", title: "Graphic designing samples", category: "Graphic Design" },
  { image: "/printed%20flyers.jpeg", title: "Completed flyer print job", category: "Print Work" },
  {
    image: "/project-babc.svg",
    title: "B.A.B.C Official Site",
    category: "Web Projects",
    description: "Official brand website for B.A.B.C, designed to showcase the business and its offerings.",
    href: "https://babcofficialsite.vercel.app/",
  },
  {
    image: "/project-school.svg",
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
          {shown.map((w, i) => {
            const card = (
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
            );

            if ("href" in w && typeof w.href === "string") {
              return (
                <a key={w.title} href={w.href} target="_blank" rel="noreferrer" className="block">
                  {card}
                </a>
              );
            }

            return card;
          })}
        </div>
        <p className="mt-6 text-center text-[0.7rem] text-muted-foreground">
          More BENOVERTECH projects will be added here as they are completed and delivered.
        </p>
      </Section>

      <ContactStrip />
    </>
  );
}
