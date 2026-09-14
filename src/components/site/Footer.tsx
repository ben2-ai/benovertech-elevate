import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gradient-midnight text-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img src={logo.url} alt="BENOVERTECH logo" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
            <div className="min-w-0">
              <p className="font-display text-lg font-extrabold text-white">BENOVERTECH</p>
              <p className="text-xs text-white/60">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.message} We handle your design, printing, and gadget needs in Lagos, with clear
            advice and work we can all be proud of.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
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
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{site.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p} href={telLink(p)} className="transition-colors hover:text-gold">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} BENOVERTECH. Good work, done properly.
        </div>
      </div>
    </footer>
  );
}
