import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Laptop,
  Lightbulb,
  Palette,
  Printer,
  ShieldCheck,
  Smartphone,
  Star,
  Timer,
  Wallet,
  Watch,
} from "lucide-react";
import pPhone from "@/assets/p-phone.jpg";
import pLaptop from "@/assets/p-laptop.jpg";
import pWatch from "@/assets/p-watch.jpg";
import pAudio from "@/assets/p-audio.jpg";
import { Reveal } from "@/components/site/Reveal";
import {
  ContactStrip,
  HoursStrip,
  Section,
  SectionHead,
  WhatsAppButton,
} from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BENOVERTECH — Design, Printing & Tech Gadgets in Lagos" },
      {
        name: "description",
        content:
          "Creative graphic design, quality printing and reliable phones, laptops and accessories from BENOVERTECH, Lagos, Nigeria.",
      },
      { property: "og:title", content: "BENOVERTECH — Design, Printing & Tech Gadgets in Lagos" },
      {
        property: "og:description",
        content:
          "Creative graphic design, quality printing and reliable phones, laptops and accessories in Lagos.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    text: "Logos, brand identity, flyers, social media designs and adverts that help your business stand out.",
    image: "/Graphic%20designing%20samples.png",
    to: "/graphics" as const,
  },
  {
    icon: Printer,
    title: "Printing Press",
    text: "Large format printing, banners, business cards, brochures, stickers and branded souvenirs, all done neatly.",
    image: "/benovertech%20printing%20press%20snap.jpeg",
    to: "/printing" as const,
  },
  {
    icon: Smartphone,
    title: "Tech Store",
    text: "Phones, laptops, tablets, smartwatches, earbuds, chargers and other everyday accessories.",
    image: "/overall%20shop%20snap.png",
    to: "/tech-store" as const,
  },
];

const reasons = [
  { icon: BadgeCheck, title: "Quality first", text: "Sharp designs and clean prints you will be proud to show off." },
  { icon: Timer, title: "Quick delivery", text: "We work with your deadline and keep you posted." },
  { icon: Wallet, title: "Fair prices", text: "Straightforward prices that work for your budget." },
  { icon: ShieldCheck, title: "Trusted gadgets", text: "Reliable devices from suppliers we trust." },
  { icon: Lightbulb, title: "Fresh ideas", text: "Good ideas that make your brand look solid and established." },
  { icon: Headphones, title: "Real support", text: "Speak with a real person on WhatsApp or phone during the week." },
];

const gadgets = [
  { image: pPhone, name: "Smartphones", spec: "Latest and neat pre-owned devices", icon: Smartphone },
  { image: pLaptop, name: "Laptops", spec: "Work, school and business machines", icon: Laptop },
  { image: pWatch, name: "Smartwatches", spec: "Fitness tracking and notifications", icon: Watch },
  { image: pAudio, name: "Earbuds & Headphones", spec: "Wireless sound with strong bass", icon: Headphones },
];

const featured = [
  { image: "/Printed%20banner.jpg", alt: "Printed banner by BENOVERTECH" },
  { image: "/printed%20crads.jpeg", alt: "Printed cards by BENOVERTECH" },
  { image: "/printed%20flyers.jpeg", alt: "Printed flyers by BENOVERTECH" },
  { image: "/printed%20job%201.jpeg", alt: "Completed printing job by BENOVERTECH" },
];

const testimonials = [
  {
    name: "Chidinma O.",
    role: "Fashion brand owner",
    rating: 4,
    text: "They designed my logo and printed my labels perfectly. My brand finally looks professional.",
  },
  {
    name: "Emeka A.",
    role: "Event planner",
    rating: 3,
    text: "My banners and invitation cards were ready before the deadline. Very neat finishing.",
  },
  {
    name: "Blessing T.",
    role: "Student",
    rating: 5,
    text: "I bought my laptop here. Good condition, fair price, and they explained everything.",
  },
  {
    name: "Mr. Tunde S.",
    role: "Church administrator",
    rating: 4,
    text: "Flyers, souvenirs and a new sound of customer service. BENOVERTECH is now our go-to.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-midnight">
        <span className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 rounded-full bg-teal/10 blur-[120px]" />
        <span className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-full w-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Good design. <span className="text-gold-deep">Neat printing.</span> Home of Quality Gadgets.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              From brand designs and quality printing to phones, laptops, and accessories, we help
              you bring your ideas to life, get your work printed neatly, and stay connected with
              the right gadgets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto shadow-glow-teal">Chat with us</WhatsAppButton>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-gold/40 sm:w-auto"
              >
                See what we do
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <img
                src="/overall%20shop%20snap.png"
                alt="BENOVERTECH gadget and phone shop in Lagos"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <HoursStrip />

      <Section id="services">
        <SectionHead
          eyebrow="What we do"
          title="Three things we do well, all in one place"
          text="We design, print, and help you choose the right technology."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Link to={s.to} className="card-surface group block h-full overflow-hidden">
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <s.icon className="h-6 w-6 text-gold-deep" />
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    See how we can help
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHead
          eyebrow="Why people choose us"
          title="Good work, honest service"
          text="Straightforward service from a team that takes your work seriously."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="card-surface h-full p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground shadow-glow-gold">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Tech store"
          title="Featured gadgets and accessories"
          text="Available in our shop at fair prices. Message us for today’s price and availability."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gadgets.map((g, i) => (
            <Reveal key={g.name} delay={i * 70}>
              <div className="card-surface h-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full bg-secondary object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-semibold">{g.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{g.spec}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    Available in our shop
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/tech-store"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-gold transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Visit our tech shop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHead
          eyebrow="Our work"
          title="Some of our design and printing work"
          text="Have a look at the kind of work we do for brands, businesses, and events."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featured.map((work, i) => (
            <Reveal key={work.image} delay={i * 70}>
              <div className="group overflow-hidden rounded-2xl border border-border shadow-soft">
                <img
                  src={work.image}
                  alt={work.alt}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40"
          >
            See all our work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Section>
        <SectionHead eyebrow="What people are saying" title="What our customers say" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure className="card-surface h-full p-6">
                <div className="flex gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactStrip />
    </>
  );
}
