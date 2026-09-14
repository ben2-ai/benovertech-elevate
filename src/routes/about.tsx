import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Palette, Printer, Smartphone, Target } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BENOVERTECH, Creative, Print & Technology Company" },
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
    text: "Logos, brand identity, flyers, social media creatives, event materials, and adverts that speak clearly.",
  },
  {
    icon: Printer,
    title: "Printing Division",
    text: "Banners, business cards, brochures, stickers, invitations, and branded souvenirs with neat finishing.",
  },
  {
    icon: Smartphone,
    title: "Technology Division",
    text: "Phones, laptops, tablets, smartwatches, audio devices, chargers, power banks, and accessories you can rely on.",
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
              One trusted company. Three things we do well.
          </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              BENOVERTECH is a Nigerian company that brings together creative design, quality
              printing, and reliable tech products. We help people and businesses bring their ideas
              to life, build strong brands, get neat print materials, and find the right phones,
              laptops, gadgets, and accessories for their day-to-day needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src="/benovertech%20overall%20shop%20snap.png"
              alt="BENOVERTECH shop interior in Lagos"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={80}>
              <h2 className="text-3xl font-bold sm:text-4xl">A quick look at us</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Based in Lagos, Nigeria, BENOVERTECH brings design, professional printing, and
                dependable technology under one roof. Whether you are starting a business, planning
                an event, or upgrading your phone or laptop, you get honest advice, fair pricing,
                and work done properly.
            </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We give every job to the right hands, so you are always speaking with people who
                understand what you need and how to deliver it well.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src="/CEO%20BENOVERTECH%27S%20PHOTO.png"
                alt="E.C. Benjamin, founder of BENOVERTECH"
                width={768}
                height={1024}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Meet the founder
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">E.C. Benjamin</h2>
            <p className="mt-2 text-base font-semibold text-accent">Founder, BENOVERTECH</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a Computer Scientist with more than nine years of experience in the printing
                business and over five years in the gadget business.
              </p>
              <p>
                Over the years, I have worked with individuals, business owners, and brands that
                need quality designs, professional printing, and reliable tech solutions. That
                experience has shown me what people really value: good work, honest service,
                quality products, and a smooth customer experience.
              </p>
              <p>
                I started BENOVERTECH to bring creative design, printing, and technology together in
                one trusted place. Whether you need a clean design, quality print materials, a phone,
                a laptop, or accessories, my goal is to make the whole process easy and stress-free.
              </p>
              <p>
                At BENOVERTECH, I am committed to delivering work that looks good, works properly,
                and gives every customer real value for their money.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/50">
          <SectionHead eyebrow="Our services" title="People who know their work" />
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
                <h3 className="mt-4 text-2xl font-bold">What drives us</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To help people and businesses bring their ideas to life, build strong brands, get
                  quality printing, and find reliable technology.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-surface h-full p-8">
              <Eye className="h-6 w-6 text-gold-deep" />
                <h3 className="mt-4 text-2xl font-bold">Where we are going</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  To be the creative, printing, and technology partner people across Lagos can trust.
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
