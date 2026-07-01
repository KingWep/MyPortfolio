import { motion } from "framer-motion";
import {
  SiC, SiCplusplus, SiJavascript, SiPhp,
  SiHtml5, SiCss, SiBootstrap, SiTailwindcss, SiReact,
  SiLaravel, SiMysql, SiPostgresql, SiGithub,
} from "react-icons/si";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "C", Icon: SiC, color: "#A8B9CC", level: 75 },
      { name: "C++", Icon: SiCplusplus, color: "#00599C", level: 85 },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", level:80 },
      { name: "PHP", Icon: SiPhp, color: "#777BB4", level: 85 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26", level: 90 },
      { name: "CSS", Icon: SiCss, color: "#1572B6", level: 85 },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3", level: 75 },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8", level: 85 },
      { name: "React JS", Icon: SiReact, color: "#61DAFB", level: 85 },
    ],
  },
  {
    title: "Backend & DB",
    items: [
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20", level: 80 },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1", level: 85 },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", level: 80 },
      { name: "GitHub", Icon: SiGithub, color: "#ffffff", level: 85 }
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
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
            Tools I <span className="text-gradient">build with</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="rounded-2xl glass-strong neon-border p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">{g.title}</h3>

              <div className="space-y-4">
                {g.items.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group"
                  >
                    
                    {/* Label */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">

                        <motion.span
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="grid h-9 w-9 place-items-center rounded-lg glass transition group-hover:shadow-[0_0_18px_oklch(0.65_0.25_295/0.6)]"
                        >
                          <s.Icon size={18} style={{ color: s.color }} />
                        </motion.span>

                        <span className="text-sm font-medium">
                          {s.name}
                        </span>
                      </div>

                      <span className="text-xs text-muted-foreground font-mono">
                        {s.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] shadow-[0_0_12px_oklch(0.65_0.25_295/0.7)]"
                      />
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}