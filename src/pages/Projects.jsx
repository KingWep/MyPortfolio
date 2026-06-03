import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Room Rental Management System",
    desc: "Full-stack rental system with admin/user roles, booking management, payments, and cloud image storage.",
    image: "../src/assets/images/roomrentalsproject.png",
    stack: ["Laravel", "PostgreSQL", "Bootstrap", "Tailwind CSS", "Cloudinary", "Render"],
    gradient: "from-[#8B5CF6] to-[#3B82F6]",
    github: "https://github.com/KingWep/KhmerRoom",
    demo: "https://khmer-room.onrender.com",
  },
  {
    title: "Burger King Clone",
    desc: "Modern restaurant web UI featuring product showcase, smooth interactions, and responsive design for an engaging user experience.",
    image: "../src/assets/images/burgerkingproject.png",
    stack: ["React", "Tailwind", "Swipper"],
    gradient: "from-[#F97316] to-[#EF4444]",
    github: "https://github.com/KingWep/BugerKing",
    demo: "https://buger-king-3jlt.vercel.app/"
  },
  {
    title: "Eshop Admin Panel",
    desc: "Admin dashboard for managing products, orders, and users with Java Spring Boot API integration and secure data handling.",
    image: "../src/assets/images/eshopproject.png",
    stack: ["React", "Tailwind", "Spring Boot(API)", "Framer Motion"],
    gradient: "from-[#A855F7] to-[#EC4899]",
    github: "https://github.com/KingWep/EShop",
    demo: "https://e-shop-seven-swart.vercel.app/",
  },
  {
    title: "LENG-CHANTHA Portfolio",
    desc: "Personal portfolio showcasing projects, skills, and experience with smooth animations.",
    image: "../src/assets/images/lengchanthaportfolio.png",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-[#10B981] to-[#3B82F6]",
    github: "https://github.com/KingWep/MyPortfolio",
    demo: "https://leng-chanthaportfolio.vercel.app/",
  },
  {
    title: "Velora Shop",
    desc: "Modern e-commerce UI built with React and Tailwind for seamless browsing experience.",
    image: "../src/assets/images/velorashopproject.png",
    stack: ["React.js", "Tailwind CSS"],
    gradient: "from-[#06B6D4] to-[#3B82F6]",
    github: "https://github.com/KingWep/VeloraShop",
    demo: "https://velora-shop-three.vercel.app/",
  },
  {
    title: "Ceramic Shop",
    desc: "Static website with authentication flow including login, register, and password reset.",
    image: "../src/assets/images/ceramicshopproject.png",
    stack: ["HTML", "CSS", "JavaScript"],
    gradient: "from-[#F97316] to-[#EF4444]",
    github: "https://github.com/KingWep/Ceramic-Shop",
    demo: "https://ceramic-shop-sand.vercel.app/",
  }
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
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              image={p.image}
              stack={p.stack}
              gradient={p.gradient}
              github={p.github}
              demo={p.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}