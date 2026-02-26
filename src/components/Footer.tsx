'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  pt: {
    tagline: 'criado com paixão e código.',
    rights: 'Todos os direitos reservados',
  },
  en: {
    tagline: 'crafted with passion and code.',
    rights: 'All rights reserved',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <motion.footer
      className="px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-gray-500 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div>
        &copy; 2026 João Vítor Moço Santos
      </div>
      
      <motion.div
        className="mt-4 md:mt-0 italic font-serif text-editorial-orange lowercase tracking-normal text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.tagline}
      </motion.div>

      <div className="mt-4 md:mt-0">
        {t.rights}
      </div>
    </motion.footer>
  );
}
