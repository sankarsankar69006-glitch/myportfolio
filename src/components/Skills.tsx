import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';

const categories = [
  { key: 'languages', label: 'Languages', emoji: '💻' },
  { key: 'frontend', label: 'Frontend', emoji: '🌐' },
  { key: 'backend', label: 'Backend', emoji: '⚙️' },
  { key: 'database', label: 'Database', emoji: '🗄️' },
  { key: 'core', label: 'Core Java', emoji: '☕' },
  { key: 'tools', label: 'Tools', emoji: '🔧' },
];

type SkillItem = { name: string; level: number; icon: string };

function SkillBar({ skill, inView, delay }: { skill: SkillItem; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-white text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-orange-400 text-xs font-bold">{skill.level}%</span>
      </div>
      <div className="skill-bar h-2">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function SoftSkillCard({ skill, inView, delay }: { skill: { name: string; icon: string; level: number }; inView: boolean; delay: number }) {
  const circumference = 2 * Math.PI * 28;
  const dashOffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: '0 0 20px rgba(234,88,12,0.2)' }}
      className="glass-card p-5 text-center transition-all duration-300 cursor-default flex flex-col items-center gap-3"
    >
      {/* Circle progress */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <motion.circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: dashOffset } : {}}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          {skill.icon}
        </div>
      </div>
      <div>
        <div className="text-white font-semibold text-sm">{skill.name}</div>
        <div className="text-orange-400 text-xs font-bold">{skill.level}%</div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState('languages');
  const { skills } = portfolioData;

  const currentSkills = skills[activeTab as keyof typeof skills] as SkillItem[];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(234,88,12,0.05) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">What I know</p>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mt-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === cat.key
                  ? 'bg-orange-500 text-white shadow-glow'
                  : 'glass-card text-[#94A3B8] hover:text-white hover:border-orange-500/30'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 sm:p-8 mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {currentSkills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} delay={i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-center text-white font-semibold text-lg mb-6">Full Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java', 'Spring Boot', 'React.js', 'MySQL', 'PostgreSQL',
              'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'JDBC',
              'REST API', 'C', 'C++', 'Git', 'GitHub',
              'VS Code', 'Eclipse', 'OOP', 'Multithreading',
              'Stream API', 'Lambda', 'Exception Handling', 'File I/O'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tech-badge cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-center text-white font-semibold text-lg mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.softSkills.map((skill, i) => (
              <SoftSkillCard key={skill.name} skill={skill} inView={inView} delay={0.6 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

