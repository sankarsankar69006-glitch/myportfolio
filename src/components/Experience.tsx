import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom, rgba(234,88,12,0.04) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Work History</p>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle mt-4">
            3+ years of diverse professional experience across technology and services
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -ml-px"
            style={{ background: 'linear-gradient(180deg, transparent, #EA580C 10%, #F97316 50%, #EA580C 90%, transparent)' }}
          />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 -ml-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-[#0F172A] z-10`}
                  style={{ boxShadow: '0 0 10px rgba(234,88,12,0.5)', top: '24px' }}
                />

                {/* Spacer for center alignment */}
                <div className="hidden md:block w-1/2 flex-shrink-0" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'} flex-1`}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 0 30px rgba(234,88,12,0.15)' }}
                    className="glass-card p-5 transition-all duration-300 border border-white/5 hover:border-orange-500/20"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white font-poppins text-sm">{item.role}</h3>
                          <p className="text-orange-400 text-xs font-medium">{item.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[#94A3B8] text-xs whitespace-nowrap">{item.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.type === 'internship'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : 'bg-green-500/10 text-green-400 border border-green-500/20'
                        }`}>
                          {item.type === 'internship' ? 'Internship' : 'Full-time'}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#94A3B8] text-xs mb-3 leading-relaxed">{item.description}</p>

                    {/* Points */}
                    <ul className="space-y-1.5">
                      {item.points.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                          <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            { icon: <Briefcase className="w-4 h-4" />, label: '3+ Years Experience', color: 'text-orange-400' },
            { icon: <GraduationCap className="w-4 h-4" />, label: '1 Internship', color: 'text-blue-400' },
            { icon: '🏢', label: '4 Companies', color: 'text-green-400' },
          ].map((badge, i) => (
            <div key={i} className="glass-card px-4 py-2 flex items-center gap-2 text-sm">
              <span className={badge.color}>
                {typeof badge.icon === 'string' ? badge.icon : badge.icon}
              </span>
              <span className="text-white font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

