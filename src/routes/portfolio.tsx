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

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-gradient-gold text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <figure className="card-surface h-full overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {w.category}
                  </p>
                  <h2 className="mt-1 text-base font-semibold">{w.title}</h2>
                  {"description" in w && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                  )}
                  {"href" in w && (
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                    >
                      Visit website <span aria-hidden="true">-&gt;</span>
                    </a>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          More BENOVERTECH projects will be added here as they are completed and delivered.
        </p>
      </Section>

      <ContactStrip />
    </>
  );
}
