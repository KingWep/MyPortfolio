import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Student Management System",
    desc: "Full CRUD app for managing students, courses, and grades with role-based access.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    gradient: "from-[#8B5CF6] to-[#3B82F6]",
  },
  {
    title: "Product CRUD System",
    desc: "Inventory dashboard with create, read, update, delete and image uploads.",
    stack: ["React", "Laravel", "Tailwind"],
    gradient: "from-[#3B82F6] to-[#06B6D4]",
  },
  {
    title: "Portfolio Website",
    desc: "Animated, cinematic developer portfolio with Framer Motion and glassmorphism.",
    stack: ["React", "Tailwind", "Framer"],
    gradient: "from-[#A855F7] to-[#EC4899]",
  },
  {
    title: "Weather App",
    desc: "Realtime weather lookup with 7-day forecast and location-based search.",
    stack: ["React", "API", "Tailwind"],
    gradient: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    title: "Authentication System",
    desc: "Secure auth with login, register, email verification, and password reset.",
    stack: ["Laravel", "MySQL", "JWT"],
    gradient: "from-[#F97316] to-[#EF4444]",
  },
  {
    title: "Task Manager",
    desc: "Drag-and-drop kanban board with realtime updates and dark mode.",
    stack: ["React", "Node", "Postgres"],
    gradient: "from-[#10B981] to-[#3B82F6]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const slug = p.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass-strong neon-border"
              >
                {/* Preview */}
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-3 left-4 font-mono text-xs text-white/80">
                    &lt;/{slug}&gt;
                  </div>

                  <motion.div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.65 0.25 295 / 0.35), transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:text-gradient transition">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-2">
                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] transition"
                    >
                      <FiGithub /> Code
                    </a>

                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-3 py-2 text-xs font-semibold text-white shadow-[0_0_18px_oklch(0.65_0.25_295/0.5)] transition hover:shadow-[0_0_28px_oklch(0.65_0.25_295/0.8)]"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}