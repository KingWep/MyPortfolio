import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap, FiHeart } from "react-icons/fi";

const items = [
  { Icon: FiCode, title: "Clean Code", desc: "Maintainable, scalable, well-structured codebases." },
  { Icon: FiLayers, title: "Fullstack", desc: "Frontend with React, backend with Laravel & PHP." },
  { Icon: FiZap, title: "Performance", desc: "Optimized, responsive, fast user experiences." },
  { Icon: FiHeart, title: "Passion", desc: "Driven by curiosity and great UI/UX craft." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* floating shapes */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-[oklch(0.65_0.25_295/0.18)] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[oklch(0.62_0.22_260/0.18)] blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            A bit about <span className="text-gradient">who I am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-2xl glass-strong neon-border p-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hello, I'm <span className="text-foreground font-semibold">Leng Chantha</span>, a software
              development student passionate about frontend and backend technologies. I enjoy building
              modern UI/UX websites, responsive applications, and interactive web experiences using{" "}
              <span className="text-[oklch(0.78_0.18_295)] font-medium">React JS</span> and{" "}
              <span className="text-[oklch(0.78_0.18_240)] font-medium">Laravel</span>.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              I love turning complex problems into simple, beautiful and intuitive interfaces — and I'm
              always learning something new to push the limits of what the web can do.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-muted-foreground">Name:</span> <span className="font-medium">Leng Chantha</span></div>
              <div><span className="text-muted-foreground">Role:</span> <span className="font-medium">Junior Developer</span></div>
              <div><span className="text-muted-foreground">Location:</span> <span className="font-medium">Cambodia</span></div>
              <div><span className="text-muted-foreground">Status:</span> <span className="font-medium text-emerald-400">Available</span></div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {items.map((it, i) => {
              const Icon = it.Icon;

              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl glass p-5 hover:glow-purple transition-shadow"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] text-white shadow-[0_0_20px_oklch(0.65_0.25_295/0.5)]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-3 font-semibold">{it.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}