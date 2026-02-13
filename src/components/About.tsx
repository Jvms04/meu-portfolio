'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", size: "text-6xl md:text-8xl" },
  { name: "PHP", size: "text-2xl md:text-3xl" },
  { name: "Next.js", size: "text-7xl md:text-9xl" },
  { name: "SQL", size: "text-xl md:text-2xl" },
  { name: "TypeScript", size: "text-6xl md:text-8xl" },
  { name: "PostgreSQL", size: "text-2xl md:text-3xl" },
  { name: "Git", size: "text-xl md:text-2xl" },
  { name: "Node.js", size: "text-5xl md:text-7xl" },
  { name: "HTML", size: "text-2xl md:text-3xl" },
  { name: "Tailwind", size: "text-4xl md:text-6xl" },
  { name: "CSS", size: "text-xl md:text-2xl" },
  { name: "Python", size: "text-4xl md:text-6xl" },
  { name: "Javascript", size: "text-6xl md:text-8xl" },
  { name: "FastAPI", size: "text-5xl md:text-5xl" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ─── Skills Tag Cloud ─────────────────────────────── */}
        <div>
          <motion.span
            className="block text-editorial-orange text-xs font-bold tracking-widest uppercase mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Habilidades
          </motion.span>

          <div className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-4">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                className={`font-serif ${skill.size} text-editorial-orange`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ─── Sobre + Contato ─────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Sobre Text */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-editorial-orange text-xs font-bold tracking-widest uppercase mb-8">
              Sobre
            </span>

            <p className="font-serif text-3xl md:text-5xl leading-tight text-editorial-orange max-w-3xl">
              Acredito que a tecnologia deve ser invisível e o design, intencional. Como desenvolvedor full stack, busco o equilíbrio entre a estética editorial refinada e a robustez técnica necessária para o mercado moderno.
            </p>
          </motion.div>

          {/* Contato */}
          <motion.div
            className="md:w-1/3 md:pt-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <h4 className="text-editorial-orange text-xs font-bold tracking-widest uppercase mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="https://www.linkedin.com/in/joaovitormocosantos/" target="_blank" className="hover:text-editorial-orange transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Jvms04" target="_blank" className="hover:text-editorial-orange transition-colors">
                  GitHub
                </Link>
              </li>
             
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
