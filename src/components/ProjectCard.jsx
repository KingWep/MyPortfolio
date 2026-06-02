import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, desc, image, stack, gradient, github, demo }) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const githubHref = getSafeHref(github);
  const demoHref = getSafeHref(demo);

  // Fallback image: simple gradient placeholder
  const placeholderGradient = gradient || "from-[#8B5CF6] to-[#3B82F6]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl glass-strong neon-border transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(101,84,192,0.2)]"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br">
        {image ? (
          <>
            {/* Actual Image */}
            <motion.img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Gradient Overlay - Top to bottom */}
            <motion.div
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            />
          </>
        ) : (
          <>
            {/* Fallback Gradient Background */}
            <div className={`h-full w-full bg-gradient-to-br ${placeholderGradient}`}>
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Fallback Text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white/20">{slug.charAt(0).toUpperCase()}</div>
                <p className="mt-2 text-xs text-white/30">No image</p>
              </div>
            </div>
          </>
        )}

        {/* Project Slug Label */}
        <div className="pointer-events-none absolute bottom-3 left-4 rounded-md bg-black/30 px-2 py-1 font-mono text-xs text-white/70 backdrop-blur-sm">
          &lt;/{slug}&gt;
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.65 0.25 295 / 0.25), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4 p-5 sm:p-6">
        {/* Title */}
        <motion.h3
          className="text-lg font-semibold group-hover:text-gradient transition duration-300"
          whileHover={{ letterSpacing: "0.02em" }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] transition cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {githubHref ? (
            <motion.a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 px-3 py-2.5 text-xs font-semibold text-foreground transition hover:border-[oklch(0.65_0.25_295)] hover:text-[oklch(0.78_0.18_295)] hover:shadow-[0_0_12px_oklch(0.65_0.25_295/0.3)]"
            >
              <FiGithub size={16} /> Code
            </motion.a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-white/10 px-3 py-2.5 text-xs font-semibold text-muted-foreground opacity-60">
              <FiGithub size={16} /> Code
            </span>
          )}

          {demoHref ? (
            <motion.a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.62_0.22_260)] px-3 py-2.5 text-xs font-semibold text-white shadow-[0_0_18px_oklch(0.65_0.25_295/0.4)] transition hover:shadow-[0_0_28px_oklch(0.65_0.25_295/0.8)]"
            >
              <FiExternalLink size={16} /> Demo
            </motion.a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-white/5 px-3 py-2.5 text-xs font-semibold text-muted-foreground opacity-60">
              <FiExternalLink size={16} /> Demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function getSafeHref(value) {
  if (!value || value === "#") {
    return null;
  }

  return value;
}
