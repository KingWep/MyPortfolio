import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiDownload,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import {
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiCplusplus,
  SiGithub,
} from "react-icons/si";
import portrait from "../assets/Profile/leng.chantha.JPG";

const roles = [
  "React Developer",
  "Laravel Developer",
  "Fullstack Developer",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 50 : 90;

    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }

      if (del && text === "") {
        setDel(false);
        setI((x) => x + 1);
        return;
      }

      setText(
        del
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-0.5 h-[1em] -mb-1 bg-[oklch(0.65_0.25_295)] animate-pulse" />
    </span>
  );
}

const orbitIcons = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiLaravel, color: "#FF2D20" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiPhp, color: "#777BB4" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiCplusplus, color: "#00599C" },
  { Icon: SiGithub, color: "#fff" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="absolute inset-0 grid-bg -z-10" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Available for new projects
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Providing the best <br />
            <span className="text-gradient">project experience</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            I&apos;m Leng Chantha, a passionate Fullstack Developer focused on creating modern, responsive,
            and animated web applications.
          </p>

          <div className="text-lg sm:text-xl font-mono">
            &gt; <Typer />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.65_0.25_295/0.5)] hover:shadow-[0_0_45px_oklch(0.65_0.25_295/0.85)] transition"
            >
              View Projects
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              <FiDownload /> About Me
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] transition"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-8 pt-6 text-sm text-muted-foreground">
            <div>
              <span className="block text-2xl font-bold text-foreground">2+</span>
              Years coding
            </div>
            <div>
              <span className="block text-2xl font-bold text-foreground">6+</span>
              Projects built
            </div>
            <div>
              <span className="block text-2xl font-bold text-foreground">10+</span>
              Technologies
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] blur-3xl opacity-50 animate-pulse-glow" />
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-[oklch(0.65_0.25_295/0.4)] animate-spin-slower" />

          <div className="absolute inset-0 overflow-hidden rounded-full neon-border glow-purple">
            <img
              src={portrait}
              alt="Leng Chantha portrait"
              className="h-full w-full object-cover"
            />
          </div>

          {orbitIcons.map((o, idx) => {
            const angle = (idx / orbitIcons.length) * Math.PI * 2;
            const radius = 48;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;

            return (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + idx * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl glass-strong shadow-[0_0_20px_oklch(0.65_0.25_295/0.4)]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <o.Icon size={22} style={{ color: o.color }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}