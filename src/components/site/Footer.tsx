import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img src="/brand-logo.png" alt="BENOVERTECH logo" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
            <div className="min-w-0">
              <p className="font-display text-lg font-extrabold text-foreground">BENOVERTECH</p>
              <p className="text-xs text-muted-foreground">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.message} We serve customers across Nigeria with clear advice and work we can all
            be proud of.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/graphics", label: "Graphic Design" },
              { to: "/printing", label: "Printing Press" },
              { to: "/tech-store", label: "Tech Store" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Find us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p} href={telLink(p)} className="transition-colors hover:text-gold">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} BENOVERTECH. Good work, done properly.
        </div>
      </div>
    </footer>
  );
}
