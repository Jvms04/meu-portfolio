'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/90 backdrop-blur-sm"
    >
      <div className="text-xs font-bold tracking-widest uppercase text-editorial-orange">
        <a href="/" onClick={scrollToTop} className="hover:text-editorial-orange transition-colors cursor-pointer">
          João Vítor Moço Santos
        </a>
      </div>
      
      <nav className="flex gap-8 text-xs font-medium tracking-widest uppercase text-gray-500">
        <Link href="#about" className="hover:text-editorial-orange transition-colors">
          Informações
        </Link>
        <Link href="#projects" className="hover:text-editorial-orange transition-colors">
          Projetos Selecionados
        </Link>
      </nav>
    </motion.header>
  );
}
