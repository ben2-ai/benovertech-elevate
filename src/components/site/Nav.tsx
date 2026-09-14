import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/graphics", label: "Design" },
  { to: "/printing", label: "Printing" },
  { to: "/tech-store", label: "Tech shop" },
  { to: "/portfolio", label: "Our work" },
  { to: "/contact", label: "Reach us" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 px-4 py-3 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 lg:px-6 ${
          scrolled
            ? "border-white/15 bg-black shadow-lift backdrop-blur-xl"
            : "border-white/15 bg-black backdrop-blur-md"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center">
            <img src="/Brand%20logo.png" alt="BENOVERTECH logo" className="h-9 w-9 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold tracking-tight text-white">
              BENOVERTECH
            </span>
            <span className="block truncate text-[11px] text-white/75">
              Creative • Print • Technology
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-white bg-white/15" }}
              inactiveProps={{ className: "text-white/75" }}
              className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3f3f3] hover:shadow-lift"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/15 bg-black p-4 shadow-lift backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-white/15 text-white" }}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-base font-semibold text-black shadow-soft"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
