import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';

export default function JavaExpertise() {
  const [ref, inView] = useInView();
  const { javaExpertise } = portfolioData;

  return (
    <section id="java" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(234,88,12,0.8) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(234,88,12,0.3), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(234,88,12,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl java-logo">☕</span>
            <div>
              <p className="text-orange-400 font-medium text-sm uppercase tracking-widest">Deep Dive</p>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Java <span className="text-gradient">Expertise</span>
              </h2>
            </div>
          </div>
          <p className="section-subtitle mt-4">
            Core Java competencies and advanced concepts that power enterprise applications
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        {/* Expertise grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {javaExpertise.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(234,88,12,0.15)',
                borderColor: 'rgba(234,88,12,0.4)',
              }}
              className="glass-card p-5 transition-all duration-300 cursor-default group border border-white/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-400/10 border border-orange-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-orange-300 transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
            <span className="text-3xl">☕</span>
            <div className="text-left">
              <div className="text-white font-semibold">Brewing expertise with every line of code</div>
              <div className="text-[#94A3B8] text-sm">Java Full Stack Developer | Spring Boot Enthusiast</div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-500"
            >
              ⚙️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

