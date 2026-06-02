import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function baseLinkClass({ isActive }) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition",
    isActive
      ? "bg-white/10 text-foreground"
      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
  ].join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong flex items-center justify-between rounded-2xl border border-white/10 px-5 py-3 shadow-[0_20px_80px_rgba(3,7,18,0.35)] backdrop-blur-xl">
          <NavLink to="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] text-sm font-bold text-white shadow-[0_0_24px_oklch(0.65_0.25_295/0.5)]">
              LC
            </span>
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground transition group-hover:text-gradient">
              LENG CHANTHA
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} to={link.href} className={baseLinkClass} end={link.href === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_oklch(0.65_0.25_295/0.45)] transition hover:shadow-[0_0_36px_oklch(0.65_0.25_295/0.75)] md:inline-flex"
          >
            Let&apos;s Talk
          </NavLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="glass-strong mt-3 rounded-2xl border border-white/10 p-3 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setOpen(false)}
                className={baseLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}