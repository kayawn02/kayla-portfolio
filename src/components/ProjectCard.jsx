import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Layers } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="card-glass rounded-3xl p-5 flex flex-col justify-between cursor-pointer group hover:scale-[1.01] transition-all"
    >
      <div>
        {/* Thumbnail with Aspect 16:10 */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-crimson-500/20 mb-5">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Award Ribbon if present */}
          {project.award && (
            <div className="absolute top-3 left-3 bg-[#0d0710]/90 backdrop-blur-md border border-yellow-500/40 text-yellow-300 text-[11px] font-mono font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
              <Award size={13} className="text-yellow-400 shrink-0" />
              <span className="truncate max-w-[200px]">{project.award}</span>
            </div>
          )}

          {/* Category Chip */}
          <div className="absolute bottom-3 right-3 bg-[#060608]/80 backdrop-blur-md border border-crimson-500/30 text-crimson-300 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full">
            {project.category}
          </div>
        </div>

        {/* Project Header Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>{project.role}</span>
            <span className="text-crimson-400">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-crimson-400 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-neutral-400 bg-[#08040a] border border-crimson-500/20 px-2.5 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-mono text-crimson-400 bg-crimson-950/40 px-2 py-0.5 rounded-md">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-4 border-t border-crimson-500/15 flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
          Lihat Studi Kasus
        </span>
        <div className="w-8 h-8 rounded-full bg-crimson-600/20 border border-crimson-500/30 group-hover:bg-crimson-600 group-hover:text-white flex items-center justify-center text-crimson-400 transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.div>
  );
}
