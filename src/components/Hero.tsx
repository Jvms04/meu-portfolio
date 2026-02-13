'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* Main Title */}
      <h1 className="font-serif text-[11vw] leading-[0.85] tracking-tight text-editorial-orange uppercase mb-12">
        <motion.span
          className="block -ml-[1vw]"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          Desenvolvedor
        </motion.span>
        <motion.span
          className="block text-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          Full Stack
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
          <p>
            Sou Desenvolvedor Full Stack Júnior com foco em criar impacto através de código limpo e soluções escaláveis para empresas e clientes comerciais.
          </p>
        </motion.div>

        {/* Right Badge */}
        <motion.div
          className="text-right text-xs font-semibold tracking-widest uppercase text-editorial-orange flex flex-col items-end gap-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <span>Baseado no Rio de Janeiro /</span>
          <span>Remoto</span>
          <div className="w-8 h-8 rounded-full border border-editorial-orange flex items-center justify-center mt-1">
            <span className="block w-2 h-2 bg-editorial-orange rounded-full animate-pulse"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
