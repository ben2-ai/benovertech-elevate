import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  CreditCard,
  FileText,
  Gift,
  Mail,
  Printer,
  ScrollText,
  Sticker,
  Flag,
  Image as ImageIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ContactStrip, Section, SectionHead, WhatsAppButton } from "@/components/site/ui";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/printing")({
  head: () => ({
    meta: [
      { title: "Printing Services in Lagos, BENOVERTECH Printing Press" },
      {
        name: "description",
        content:
          "Large format printing, flyers, posters, business cards, banners, stickers, brochures, invitations and branded souvenirs.",
      },
      { property: "og:title", content: "Printing Services, BENOVERTECH" },
      {
        property: "og:description",
        content: "Quality printing with neat finishing and quick delivery in Lagos.",
      },
    ],
  }),
  component: Printing,
});

const services = [
  { icon: ImageIcon, title: "Large Format Printing" },
  { icon: FileText, title: "Flyers" },
  { icon: ScrollText, title: "Posters" },
  { icon: CreditCard, title: "Business Cards" },
  { icon: Flag, title: "Banners" },
  { icon: Sticker, title: "Stickers" },
  { icon: BookOpen, title: "Brochures" },
  { icon: Mail, title: "Invitations" },
  { icon: Gift, title: "Branded Souvenirs" },
  { icon: Printer, title: "General Commercial Printing" },
];

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "e.g. Chidi Okeke", required: true },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "e.g. 08100000000", required: true },
  { name: "item", label: "Item needed", type: "text", placeholder: "e.g. Banner, flyers", required: true },
  { name: "quantity", label: "Quantity", type: "text", placeholder: "e.g. 500", required: false },
  { name: "size", label: "Size", type: "text", placeholder: "e.g. A5, 6ft x 3ft", required: false },
  { name: "finishing", label: "Finishing", type: "text", placeholder: "e.g. Matte, gloss, lamination", required: false },
] as const;

function Printing() {
  const [values, setValues] = useState<Record<string, string>>({});

  const update = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v.slice(0, 300) }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello BENOVERTECH, I want to get a printing price.",
      `Name: ${values["name"] ?? ""}`,
      `Phone: ${values["phone"] ?? ""}`,
      `Item: ${values["item"] ?? ""}`,
      `Quantity: ${values["quantity"] ?? ""}`,
      `Size: ${values["size"] ?? ""}`,
      `Finishing: ${values["finishing"] ?? ""}`,
      `Message: ${values["message"] ?? ""}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="bg-gradient-midnight px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Printing press</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Neat printing, ready when you need it
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            From one banner to thousands of flyers, we handle your job with sharp colour and neat
            finishing.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="Hello BENOVERTECH, I want to get a price for printing.">
              Ask for a printing price
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead eyebrow="Our services" title="What we can print for you" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 45}>
              <div className="card-surface flex h-full items-center gap-4 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-gold-deep">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="min-w-0 text-base font-semibold">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHead
          eyebrow="Get a price"
          title="Tell us what you need printed"
          text="Fill the short form and we will sort out the details with you on WhatsApp."
        />
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <form onSubmit={submit} className="card-surface space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="block text-sm font-medium">
                  {f.label}
                  {f.required && <span className="text-destructive"> *</span>}
                  <input
                    type={f.type}
                    required={f.required}
                    maxLength={120}
                    placeholder={f.placeholder}
                    value={values[f.name] ?? ""}
                    onChange={(e) => update(f.name, e.target.value)}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </label>
              ))}
            </div>
            <label className="block text-sm font-medium">
              Message
              <textarea
                rows={4}
                maxLength={1000}
                placeholder="Tell us anything else about the job"
                value={values["message"] ?? ""}
                onChange={(e) => update("message", e.target.value)}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Send request on WhatsApp
            </button>
          </form>
        </Reveal>
      </Section>

      <ContactStrip />
    </>
  );
}
