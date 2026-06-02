import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { SiGithub, SiX, SiFacebook, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { Icon: SiGithub, href: "#", label: "GitHub" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: SiTelegram, href: "#", label: "Telegram" },
  { Icon: SiFacebook, href: "#", label: "Facebook" },
  { Icon: SiX, href: "#", label: "X" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let&apos;s <span className="text-gradient">build something</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind? Drop me a message.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { Icon: FiMail, label: "Email", val: "lengchantha@email.com" },
              { Icon: FiPhone, label: "Phone", val: "+855 12 345 678" },
              { Icon: FiMapPin, label: "Location", val: "Phnom Penh, Cambodia" },
            ].map((it) => {
              const Icon = it.Icon;

              return (
                <div key={it.label} className="flex items-center gap-4 rounded-2xl glass p-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] text-white shadow-[0_0_18px_oklch(0.65_0.25_295/0.5)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{it.label}</div>
                    <div className="font-medium">{it.val}</div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl glass p-5">
              <div className="text-sm text-muted-foreground mb-3">Find me on</div>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => {
                  const Icon = s.Icon;

                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-foreground transition hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] hover:shadow-[0_0_18px_oklch(0.65_0.25_295/0.6)]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2500);
            }}
            className="lg:col-span-3 rounded-2xl glass-strong neon-border p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@email.com" />
            </div>

            <Field label="Subject" id="subject" placeholder="Project inquiry" />

            <div>
              <label
                htmlFor="msg"
                className="mb-1.5 block text-xs font-medium text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="msg"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.65_0.25_295)] focus:shadow-[0_0_0_3px_oklch(0.65_0.25_295/0.18)] focus:bg-white/[0.07]"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.65_0.25_295/0.55)] transition hover:shadow-[0_0_45px_oklch(0.65_0.25_295/0.9)]"
            >
              {sent ? (
                "Message sent ✓"
              ) : (
                <>
                  Send Message <FiSend className="transition group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.65_0.25_295)] focus:shadow-[0_0_0_3px_oklch(0.65_0.25_295/0.18)] focus:bg-white/[0.07]"
      />
    </div>
  );
}