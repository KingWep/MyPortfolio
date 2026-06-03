import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home", sectionId: "home" },
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

function baseLinkClass(isActive) {
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-[oklch(0.18_0.06_285/0.74)] shadow-[0_24px_80px_rgba(3,7,18,0.45)] backdrop-blur-2xl"
              : "border-white/10 bg-[oklch(0.18_0.06_285/0.45)] shadow-[0_10px_36px_rgba(3,7,18,0.24)] backdrop-blur-lg"
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            {/* <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] text-sm font-bold text-white shadow-[0_0_24px_oklch(0.65_0.25_295/0.5)]">
              LC
            </span> */}
            <img
              src="/images/profile.JPG"
              alt="LENG CHANTHA"
              className="h-10 w-10 rounded-full border-2 border-white/10"
            />
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground transition group-hover:text-gradient">
              LENG CHANTHA
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={baseLinkClass(activeSection === link.sectionId)}
                aria-current={activeSection === link.sectionId ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_oklch(0.65_0.25_295/0.45)] transition hover:shadow-[0_0_36px_oklch(0.65_0.25_295/0.75)] md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`mt-3 origin-top overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.18_0.06_285/0.78)] backdrop-blur-xl transition-all duration-300 md:hidden ${
            open
              ? "max-h-72 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${baseLinkClass(activeSection === link.sectionId)} block`}
                aria-current={activeSection === link.sectionId ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}