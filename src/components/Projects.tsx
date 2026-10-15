import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [ref, inView] = useInView();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { projects, personal } = portfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            Real-world applications built with modern technologies and best practices
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card overflow-hidden group border border-white/5 hover:border-orange-500/20 transition-all duration-300"
                style={{ willChange: 'transform' }}
              >
                {/* Card header / thumbnail */}
                <div className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <motion.div
                    className="text-7xl z-10"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Type badge */}
                  <div className="absolute top-3 left-3 tech-badge capitalize text-xs">{project.type}</div>

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-orange-500/50 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-orange-500/60 backdrop-blur-sm border border-orange-500/50 flex items-center justify-center text-white transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-lg font-poppins group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-orange-400 hover:bg-orange-500/10 transition-all flex-shrink-0 ml-2"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </motion.button>
                  </div>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 pt-4 space-y-4">
                          {/* Problem */}
                          <div>
                            <div className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-1">🎯 Problem</div>
                            <p className="text-[#94A3B8] text-xs leading-relaxed">{project.problem}</p>
                          </div>
                          {/* Solution */}
                          <div>
                            <div className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-1">✅ Solution</div>
                            <p className="text-[#94A3B8] text-xs leading-relaxed">{project.solution}</p>
                          </div>
                          {/* Features */}
                          <div>
                            <div className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">⭐ Features</div>
                            <ul className="space-y-1">
                              {project.features.map((f, fi) => (
                                <li key={fi} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                                  <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer buttons */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
                    <a
                      href={project.github && project.github !== '#' ? project.github : personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-[#94A3B8] text-xs font-medium hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/5 transition-all"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium hover:bg-orange-500/20 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 text-[#94A3B8] text-xs cursor-not-allowed opacity-60">
                        <ExternalLink className="w-3.5 h-3.5" /> Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#94A3B8] mb-4">More projects on my GitHub</p>
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            <FaGithub className="w-4 h-4" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

