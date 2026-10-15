import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { User, Target, Lightbulb, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  const [ref, inView] = useInView();
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <User className="w-5 h-5" />,
      title: "Who I Am",
      description: "A detail-oriented Java Full Stack Developer with a passion for building scalable, efficient web applications and backend systems.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Career Goal",
      description: "To secure a position as a Software Engineer or Backend Developer where I can leverage my Java and Spring Boot skills to solve real-world problems.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "What I Bring",
      description: "3+ years of professional experience in web development, digital publishing, and customer service combined with strong Java fundamentals.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Learning Journey",
      description: "Completed B.E. in CSE (CGPA: 8.5) from Anna University while actively building full-stack projects and deepening expertise in Spring Boot & React.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile visual */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Big avatar card */}
            <div className="relative mx-auto w-fit">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-orange-600/20 to-orange-900/20 border-2 border-orange-500/30 relative shadow-2xl shadow-orange-500/10 group">
                <img
                  src={personal.avatar || "/profile.jpg"}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.3), transparent)' }} />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-3xl pointer-events-none" style={{ background: 'linear-gradient(315deg, rgba(249,115,22,0.2), transparent)' }} />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 flex items-center gap-2 text-sm z-10"
              >
                <span className="text-xl">☕</span>
                <div>
                  <div className="text-white font-semibold text-xs">Spring Boot</div>
                  <div className="text-orange-400 text-xs">Expert</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 flex items-center gap-2 text-sm z-10"
              >
                <span className="text-xl">⚛️</span>
                <div>
                  <div className="text-white font-semibold text-xs">React.js</div>
                  <div className="text-orange-400 text-xs">Proficient</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -left-8 glass-card px-3 py-2 text-sm z-10"
              >
                <div className="text-white font-semibold text-xs">CGPA</div>
                <div className="text-2xl font-bold text-gradient">8.5</div>
              </motion.div>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                { label: 'Name', value: personal.name },
                { label: 'Role', value: personal.title },
                { label: 'Email', value: personal.email, isEmail: true },
                { label: 'Location', value: 'Chennai, Tamil Nadu' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-3"
                >
                  <div className="text-[#94A3B8] text-xs">{item.label}</div>
                  {item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      title={item.value}
                      className="text-white hover:text-orange-400 font-medium text-xs sm:text-sm truncate block transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-white font-medium text-sm truncate" title={item.value}>
                      {item.value}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + Highlights */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                Building the Future with{' '}
                <span className="text-gradient">Java & Spring Boot</span>
              </h3>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                {personal.summary}
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                With a background spanning <span className="text-orange-400">digital publishing</span>, 
                <span className="text-orange-400"> data analysis</span>, and 
                <span className="text-orange-400"> customer service</span>, I bring a unique blend of 
                technical skills and real-world professional experience to every project I undertake.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={3 + i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -4, boxShadow: '0 0 20px rgba(234,88,12,0.15)' }}
                  className="glass-card p-4 transition-all duration-300 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-sm"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline text-sm"
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

