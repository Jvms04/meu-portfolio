'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nav = {
    about: language === 'pt' ? 'Sobre Mim' : 'About Me',
    projects: language === 'pt' ? 'Projetos' : 'Projects',
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
      
      <nav className="flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-gray-500">
        <Link href="#trajetoria" className="hover:text-editorial-orange transition-colors">
          <AnimatePresence mode="wait">
            <motion.span
              key={nav.about}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {nav.about}
            </motion.span>
          </AnimatePresence>
        </Link>
        <Link href="#projects" className="hover:text-editorial-orange transition-colors">
          <AnimatePresence mode="wait">
            <motion.span
              key={nav.projects}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {nav.projects}
            </motion.span>
          </AnimatePresence>
        </Link>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 border border-gray-300 rounded-sm px-2 py-1 hover:border-editorial-orange transition-colors"
          aria-label="Toggle language"
        >
          <span className={`transition-colors font-bold ${language === 'pt' ? 'text-editorial-orange' : 'text-gray-400'}`}>
            PT
          </span>
          <span className="text-gray-300">|</span>
          <span className={`transition-colors font-bold ${language === 'en' ? 'text-editorial-orange' : 'text-gray-400'}`}>
            EN
          </span>
        </button>
      </nav>
    </motion.header>
  );
}
