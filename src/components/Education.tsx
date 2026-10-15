import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Calendar, Award } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView();
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div className="absolute inset-0 bg-mesh opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle mt-4">
            Building a strong academic foundation to fuel technical excellence
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(234,88,12,0.15)' }}
              className="glass-card p-6 transition-all duration-300 border border-white/5 hover:border-orange-500/20 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5"
                style={{ background: 'linear-gradient(135deg, #EA580C, #FB923C)' }}
              />

              {/* Status badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Completed
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-400/10 border border-orange-500/20 flex items-center justify-center text-3xl mb-5">
                {edu.icon}
              </div>

              {/* Degree */}
              <h3 className="text-white font-bold text-xl font-poppins mb-1">{edu.degree}</h3>
              <p className="text-orange-400 font-medium text-sm mb-1">{edu.field}</p>
              <p className="text-[#94A3B8] text-sm mb-4">{edu.institution}</p>

              {/* Meta row */}
              <div className="flex items-center gap-4 mb-5 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-orange-500" />
                  CGPA: <span className="text-orange-400 font-bold">{edu.cgpa}</span>
                </div>
              </div>

              {/* CGPA bar */}
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#94A3B8]">Academic Performance</span>
                  <span className="text-orange-400 font-bold">{edu.cgpa}/10</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(parseFloat(edu.cgpa) / 10) * 100}%` } : {}}
                    transition={{ duration: 1.2, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Courses */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-[#94A3B8] text-xs font-medium">Key Courses</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span key={course} className="tech-badge text-xs">{course}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: '🎓', label: 'Degree CGPA', value: '8.5/10', sub: 'B.E. CSE' },
            { icon: '📅', label: 'Completed', value: '2026', sub: 'Anna University' },
            { icon: '🏫', label: 'Diploma', value: '6.5/10', sub: 'Alagappa Polytechnic' },
            { icon: '📚', label: 'Degree', value: 'B.E. CSE', sub: 'Computer Science' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(234,88,12,0.1)' }}
              className="glass-card p-4 text-center transition-all duration-300 cursor-default"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-sm text-[#94A3B8]">{stat.label}</div>
              <div className="text-lg font-bold text-gradient my-1">{stat.value}</div>
              <div className="text-xs text-[#475569]">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

