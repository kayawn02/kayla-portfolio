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
    <div className="relative py-4 border-y border-red-900/25 bg-[#0b0609]/70 backdrop-blur-md overflow-hidden">
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
            <span className="hover:text-red-400 transition-colors">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.7)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
