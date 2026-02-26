'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const content = {
  pt: {
    titleLine1: 'Desenvolvedor',
    titleLine2: 'Full Stack',
    description:
      'Sou Desenvolvedor Full Stack Júnior com foco em criar impacto através de código limpo e soluções escaláveis para empresas e clientes comerciais.',
    location1: 'Baseado no Rio de Janeiro /',
    location2: 'Remoto',
  },
  en: {
    titleLine1: 'Full Stack',
    titleLine2: 'Developer',
    description:
      "I'm a Junior Full Stack Developer focused on delivering impact through clean code and scalable solutions for businesses and commercial clients.",
    location1: 'Based in Rio de Janeiro /',
    location2: 'Remote',
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* Main Title */}
      <h1 className="font-serif text-[11vw] leading-[0.85] tracking-tight text-editorial-orange uppercase mb-12">
        <motion.span
          className="block -ml-[1vw]"
          key={t.titleLine1}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {t.titleLine1}
        </motion.span>
        <motion.span
          className="block text-right"
          key={t.titleLine2}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          {t.titleLine2}
        </motion.span>
      </h1>

      {/* Footer of Hero */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full mt-12 gap-10">
        
        {/* Left Text */}
        <motion.div
          className="max-w-xs text-base md:text-lg leading-snug text-editorial-orange font-normal"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <p>{t.description}</p>
        </motion.div>

        {/* Right Badge */}
        <motion.div
          className="text-right text-xs font-semibold tracking-widest uppercase text-editorial-orange flex flex-col items-end gap-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <span>{t.location1}</span>
          <span>{t.location2}</span>
          <div className="w-8 h-8 rounded-full border border-editorial-orange flex items-center justify-center mt-1">
            <span className="block w-2 h-2 bg-editorial-orange rounded-full animate-pulse"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
