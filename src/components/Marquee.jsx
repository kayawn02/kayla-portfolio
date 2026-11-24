import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Figma',
  'Flutter',
  'Dart',
  'ESP32 Mikrokontroler',
  'Arduino',
  'HTML5 & CSS3',
  'WordPress',
  'Git & GitHub',
  'Canva',
  'UI/UX Design',
  'Interactive Prototyping',
  'Smart Agriculture IoT',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-4 border-y border-[#4A74A7]/20 bg-[#081426]/80 backdrop-blur-md overflow-hidden font-heading">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold tracking-wider text-neutral-300 flex items-center gap-8 uppercase"
          >
            <span className="hover:text-[#DCEAF7] transition-colors">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A74A7] shadow-[0_0_8px_rgba(74,116,167,0.8)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
