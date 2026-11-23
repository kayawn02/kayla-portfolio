import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
            <span className="text-xs font-mono tracking-widest text-crimson-400 uppercase">
              // Portofolio Proyek
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Koleksi Karya &amp;{' '}
            <span className="bg-gradient-to-r from-crimson-400 to-rose-500 bg-clip-text text-transparent">
              Studi Kasus Terpilih
            </span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            Proyek pengembangan perangkat lunak, perancangan antarmuka pengguna interaktif, dan sistem telemetri mikrokontroler.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-crimson-600 to-crimson-700 text-white font-semibold shadow-[0_0_15px_rgba(225,29,72,0.45)]'
                    : 'bg-[#120a14]/70 border border-crimson-500/20 text-neutral-400 hover:text-white hover:border-crimson-500/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Projects 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
