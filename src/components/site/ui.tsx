import { Phone, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { site, telLink, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function WhatsAppButton({
  message,
  children,
  className = "",
}: {
  message?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {children}
    </a>
  );
}

export function GoldButton({
  href,
  to,
  children,
  className = "",
}: {
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift ${className}`;
  return (
    <a href={href ?? to} className={cls}>
      {children}
    </a>
  );
}

export function ContactStrip() {
  return (
    <Section className="pt-0">
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-gradient-midnight p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let's get started today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Send us a message on WhatsApp or call directly. We reply quickly during opening hours —{" "}
            {site.hours.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton className="w-full sm:w-auto">Chat on WhatsApp</WhatsAppButton>
            <a
              href={telLink(site.phones[0])}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call {site.phones[0]}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function HoursStrip() {
  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm font-medium sm:px-6">
        <span className="text-gold-deep">●</span> {site.hours}
      </div>
    </div>
  );
}
