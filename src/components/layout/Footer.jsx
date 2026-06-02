import { FaLinkedin } from "react-icons/fa";
import { SiFacebook, SiGithub, SiTelegram, SiX } from "react-icons/si";

const socials = [
  { Icon: SiGithub, href: "https://github.com", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: SiTelegram, href: "https://telegram.org", label: "Telegram" },
  { Icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: SiX, href: "https://x.com", label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.65_0.25_295)] to-transparent opacity-80" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="text-gradient font-semibold">Leng Chantha</span>. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-2">
          {socials.map((social) => {
            const Icon = social.Icon;

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] hover:shadow-[0_0_18px_oklch(0.65_0.25_295/0.45)]"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}