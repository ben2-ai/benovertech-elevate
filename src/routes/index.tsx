import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Lightbulb,
  Palette,
  Printer,
  ShieldCheck,
  Smartphone,
  Star,
  Timer,
  Wallet,
} from "lucide-react";
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
      { title: "BENOVERTECH | Graphic Design, Printing & Tech Gadgets Nationwide" },
      {
        name: "description",
        content:
          "BENOVERTECH brings creative graphic design, quality printing, and reliable phones, laptops and accessories to customers across Nigeria.",
      },
      { property: "og:title", content: "BENOVERTECH | Graphic Design, Printing & Tech Gadgets Nationwide" },
      {
        property: "og:description",
        content:
          "Creative design, quality printing, and reliable tech gadgets for customers across Nigeria.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    text: "Strong brand visuals, logos, flyers, social media creatives, and adverts that make your business stand out.",
    image: "/Graphic%20designing%20samples.png",
    to: "/graphics" as const,
  },
  {
    icon: Printer,
    title: "Printing Press",
    text: "Banners, business cards, brochures, stickers, and branded souvenirs, printed clean and delivered the right way.",
    image: "/benovertech%20printing%20press%20snap.jpeg",
    to: "/printing" as const,
  },
  {
    icon: Smartphone,
    title: "Tech Store",
    text: "Phones, laptops, tablets, smartwatches, earbuds, chargers, and everyday accessories you can trust.",
    image: "/benovertech%20overall%20shop%20snap.png",
    to: "/tech-store" as const,
  },
];

const reasons = [
  { icon: BadgeCheck, title: "Quality first", text: "Clean work, sharp finishing, and results that look professional from the first glance." },
  { icon: Timer, title: "Fast service", text: "We understand deadlines and keep you updated from start to finish." },
  { icon: Wallet, title: "Fair prices", text: "Straightforward pricing that makes sense for your budget." },
  { icon: ShieldCheck, title: "Trusted gadgets", text: "Reliable devices from suppliers we stand behind." },
  { icon: Lightbulb, title: "Fresh ideas", text: "We help brands look well established and easy to trust." },
  { icon: Headphones, title: "Real support", text: "Talk to a real person on WhatsApp or phone whenever you need help." },
];

const gadgets = [
  {
    image: "/Benovertech%27s%20iphone%2015pro%20max%20for%20sale.jpeg",
    name: "iPhones",
    spec: "Real devices available now",
    icon: Smartphone,
  },
  {
    image: "/Benovertech%27s%20iphone%2016pro%20for%20sale.jpeg",
    name: "Premium phones",
    spec: "Clean, tested devices\nfor everyday life",
    icon: Smartphone,
    featureCard: true,
  },
  {
    image: "/Benovertech%27s%20wireless%20mic%20for%20sale.jpeg",
    name: "Wireless microphones",
    spec: "Clear audio for content\nand events",
    icon: Headphones,
    featureCard: true,
  },
  {
    image: "/Benovertech%27spowerbank%20for%20sale.jpeg",
    name: "Power banks",
    spec: "Reliable backup power\nwhen you need it",
    icon: Wallet,
    featureCard: true,
  },
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
      <section className="aurora-glow relative overflow-hidden bg-gradient-midnight">
        <span className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 rounded-full bg-teal/10 blur-[140px]" />
        <span className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-full w-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="glass-sheen gentle-pulse premium-glass inline-flex items-center rounded-full border border-white/20 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black shadow-soft">
              BENOVERTECH Lagos
            </p>
            <h1 className="hero-reveal mt-5 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              <span className="block text-gradient-aurora">We Design,</span>
              <span className="mt-1 block">We print,</span>
              <span className="mt-1 block text-white">We sell!</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-white/70">
              This is the official Benovertech website. We handle brand design, quality printing,
              and supply phones, laptops, and accessories for everyday life and business.
              <span className="mt-3 block">
                We help bring your ideas to life. Choose Benovertech, choose quality.
              </span>
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
            <div className="soft-float premium-glass overflow-hidden rounded-[2rem] border border-white/15 p-2 shadow-lift ring-1 ring-white/10">
              <img
                src="/benovertech%20overall%20shop%20snap.png"
                alt="BENOVERTECH gadget and phone shop in Lagos"
                width={1600}
                height={1200}
                className="h-full w-full rounded-[1.4rem] object-cover"
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
                    alt={s.title === "Graphic Design" ? "Graphic designing samples" : s.title}
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
              <div
                className={`group h-full overflow-hidden ${
                  g.featureCard
                    ? "rounded-[2rem] border border-sky-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,247,255,0.92))] p-2 shadow-[0_20px_40px_-26px_rgba(59,130,246,0.35)]"
                    : "card-surface"
                }`}
              >
                <img
                  src={g.image}
                  alt={g.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className={
                    g.featureCard
                      ? "aspect-[1.55] w-full rounded-[1.55rem] border border-[#dfeafb] bg-[#f5f7fb] object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      : "aspect-[1.08] w-full bg-secondary object-cover transition duration-500 group-hover:scale-[1.04]"
                  }
                />
                <div className={`p-5 ${g.featureCard ? "px-3 pb-4 pt-4" : ""}`}>
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      g.featureCard ? "text-[#1c79e6]" : "text-gold-deep"
                    }`}
                  >
                    Available in our shop
                  </p>
                  <h3 className={`mt-2 font-semibold ${g.featureCard ? "text-[1.8rem] leading-[1.05] text-foreground" : "text-base"}`}>
                    {g.name}
                  </h3>
                  <p className={`mt-2 text-sm text-muted-foreground ${g.featureCard ? "whitespace-pre-line text-[1.02rem] leading-[1.25] text-foreground/80" : ""}`}>
                    {g.spec}
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
