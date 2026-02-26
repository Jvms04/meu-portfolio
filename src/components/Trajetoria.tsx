'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  pt: {
    sectionTitle: 'TRAJETÓRIA',
    journeyLabel: 'Minha Jornada',
    journeyDesc:
      'Conheço meus Projetos. Minha trajetória é guiada pela curiosidade e pela busca constante por novas experiências e habilidades.',
    timeline: [
      {
        year: '2025 — Presente',
        role: 'FULL STACK & IT OPS',
        company: 'CENTAURO ENGENHARIA',
        description:
          'Liderança técnica do novo site comercial da empresa, do zero ao deploy com Next.js e TypeScript. Atuação simultânea no suporte à infraestrutura corporativa, incluindo Active Directory, segurança de dados e Microsoft 365.',
      },
      {
        year: '2022 — 2025',
        role: 'CIÊNCIA DA COMPUTAÇÃO',
        company: 'IBMR',
        description:
          'Graduação em Ciência da Computação com imersão em fundamentos sólidos de engenharia de software, algoritmos e arquitetura de sistemas. A base teórica que dá sustentação a cada decisão técnica no campo profissional.',
      },
    ],
  },
  en: {
    sectionTitle: 'JOURNEY',
    journeyLabel: 'My Journey',
    journeyDesc:
      'Explore my Projects. My path is driven by curiosity and a constant pursuit of new experiences and skills.',
    timeline: [
      {
        year: '2025 — Present',
        role: 'FULL STACK & IT OPS',
        company: 'CENTAURO ENGENHARIA',
        description:
          'Technical lead for the company\'s new commercial website, built from scratch to deployment with Next.js and TypeScript. Simultaneously supporting corporate IT infrastructure, including Active Directory, data security, and Microsoft 365.',
      },
      {
        year: '2022 — 2025',
        role: 'COMPUTER SCIENCE',
        company: 'IBMR',
        description:
          'Bachelor\'s degree in Computer Science with deep immersion in software engineering fundamentals, algorithms, and system architecture — the theoretical foundation behind every professional technical decision.',
      },
    ],
  },
};

export default function Trajetoria() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="trajetoria" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="font-serif text-7xl md:text-[8vw] text-editorial-orange leading-none mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.sectionTitle}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Left Column - Description */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="block text-editorial-orange text-xs font-bold tracking-widest uppercase mb-4">
              {t.journeyLabel}
            </span>
            <p className="text-editorial-orange text-base md:text-lg leading-snug font-normal max-w-sm">
              {t.journeyDesc}
            </p>
          </motion.div>

          {/* Right Column - Timeline */}
          <div className="md:w-3/5">
            <div className="relative">
              {/* Vertical Line */}
              <motion.div
                className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-editorial-orange/30"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ transformOrigin: 'top' }}
              />

              <div className="space-y-16">
                {t.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.2 }}
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-editorial-orange bg-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.2, type: 'spring' }}
                    />

                    <div className="space-y-3">
                      <h3 className="font-serif text-3xl md:text-4xl text-editorial-orange leading-tight">
                        {item.year}
                      </h3>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-editorial-orange">
                        {item.role} — {item.company}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
