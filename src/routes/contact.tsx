import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHead, WhatsAppButton } from "@/components/site/ui";
import { site, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BENOVERTECH — Ago Palace, Lagos" },
      {
        name: "description",
        content:
          "Visit No. 14 Benson Ojukwu Street, Ago Palace, Lagos. Call 08107271610 or 09120253807, or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact BENOVERTECH" },
      {
        property: "og:description",
        content: "Address, opening hours, phone, WhatsApp and email for BENOVERTECH Lagos.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [values, setValues] = useState<Record<string, string>>({});
  const update = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v.slice(0, 1000) }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello BENOVERTECH, I would like to make an enquiry.",
      `Name: ${values.name ?? ""}`,
      `Phone: ${values.phone ?? ""}`,
      `Email: ${values.email ?? ""}`,
      `Message: ${values.message ?? ""}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Let's talk</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Visit the shop, call us, or send a WhatsApp message. We are happy to help.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full space-y-6 p-6 sm:p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">Address</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">Opening hours</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday to Saturday, 8 AM to 6 PM
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">Phone and WhatsApp</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {site.phones.map((p) => (
                      <a
                        key={p}
                        href={telLink(p)}
                        className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
                      >
                        Call {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">Email</h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block break-all text-sm text-muted-foreground hover:text-foreground"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <WhatsAppButton className="w-full">Chat on WhatsApp</WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={submit} className="card-surface space-y-5 p-6 sm:p-8">
              <h2 className="text-xl font-bold">Send a message</h2>
              <label className="block text-sm font-medium">
                Name <span className="text-destructive">*</span>
                <input
                  required
                  maxLength={100}
                  value={values.name ?? ""}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block text-sm font-medium">
                Phone number <span className="text-destructive">*</span>
                <input
                  required
                  type="tel"
                  maxLength={20}
                  value={values.phone ?? ""}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  maxLength={255}
                  value={values.email ?? ""}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block text-sm font-medium">
                Message <span className="text-destructive">*</span>
                <textarea
                  required
                  rows={5}
                  maxLength={1000}
                  value={values.message ?? ""}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Send on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/50 pt-0">
        <SectionHead eyebrow="Find us" title="Our location" text={site.address} />
        <Reveal className="mt-10">
          <div className="flex aspect-[16/9] w-full items-center justify-center rounded-3xl border border-dashed border-border bg-card text-center">
            <div className="px-6">
              <MapPin className="mx-auto h-8 w-8 text-gold-deep" />
              <p className="mt-3 text-sm font-semibold">Map placeholder</p>
              <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
