'use client';

import { motion } from 'framer-motion';

interface ComingSoonProps {
  label?: string;
}

export default function ComingSoon({ label = "Em Desenvolvimento" }: ComingSoonProps) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#E5E0D8] flex flex-col items-center justify-center gap-6">

      {/* Animated Pulse Ring */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-editorial-orange/30"
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-editorial-orange/20"
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        />
        <div className="w-3 h-3 rounded-full bg-editorial-orange"></div>
      </div>

      {/* Text */}
      <div className="text-center space-y-2">
        <span className="block text-editorial-orange text-xs font-bold tracking-[0.3em] uppercase">
          {label}
        </span>
        <span className="block text-gray-400 text-[10px] tracking-widest uppercase">
          Lançamento em breve
        </span>
      </div>
    </div>
  );
}
