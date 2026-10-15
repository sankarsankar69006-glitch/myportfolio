import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView();
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle mt-4">
            Professional development certifications and training programs completed
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Certs grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(234,88,12,0.15)' }}
              className="glass-card p-6 transition-all duration-300 border border-white/5 hover:border-orange-500/20 group relative overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
              
              {/* Background icon */}
              <div className="absolute bottom-4 right-4 text-6xl opacity-5 select-none">{cert.icon}</div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>

              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-medium">Certified</span>
              </div>

              {/* Name */}
              <h3 className="text-white font-bold text-lg font-poppins mb-2 leading-tight group-hover:text-orange-300 transition-colors">
                {cert.name}
              </h3>

              {/* Provider */}
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-3.5 h-3.5 text-orange-400" />
                <p className="text-orange-400 text-sm font-medium">{cert.provider}</p>
              </div>

              {/* Description */}
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">{cert.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tech-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-center text-white font-semibold text-lg mb-8">Coding Profiles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.codingProfiles.map((profile, i) => (
              <motion.a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(234,88,12,0.2)' }}
                className="glass-card px-6 py-4 flex items-center gap-3 transition-all duration-300 border border-white/5 hover:border-orange-500/30 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl">
                  {profile.icon === 'github' ? '🐙' : profile.icon === 'linkedin' ? '💼' : '💻'}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm group-hover:text-orange-300 transition-colors">{profile.name}</div>
                  <div className="text-[#94A3B8] text-xs">{profile.description}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

