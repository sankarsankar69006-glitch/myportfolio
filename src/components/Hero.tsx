import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Coffee } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const FloatingIcon = ({ icon, style }: { icon: string; style: React.CSSProperties }) => (
  <motion.div
    className="absolute text-3xl opacity-10 pointer-events-none select-none"
    style={style}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.08, 0.15, 0.08],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {icon}
  </motion.div>
);

export default function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = personal.typingRoles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          typingRef.current = setTimeout(handleTyping, 80);
        } else {
          typingRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
          typingRef.current = setTimeout(handleTyping, 40);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.typingRoles.length);
        }
      }
    };

    typingRef.current = setTimeout(handleTyping, 100);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [displayedRole, isDeleting, roleIndex, personal.typingRoles]);

  const floatingIcons = [
    { icon: '☕', style: { top: '15%', left: '8%' } },
    { icon: '⚡', style: { top: '25%', right: '10%' } },
    { icon: '🌱', style: { top: '60%', left: '5%' } },
    { icon: '🔧', style: { bottom: '20%', right: '8%' } },
    { icon: '⚛️', style: { top: '40%', right: '15%' } },
    { icon: '🗄️', style: { bottom: '30%', left: '10%' } },
    { icon: '🐍', style: { top: '70%', right: '5%' } },
    { icon: '🔌', style: { top: '10%', right: '25%' } },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0 bg-mesh" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(234,88,12,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <FloatingIcon key={i} icon={item.icon} style={item.style} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Work
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#94A3B8] text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins leading-tight mb-4">
              <span className="text-white">Sankar</span>{" "}
              <span className="text-gradient">Subramaniyan</span>
            </h1>
          </motion.div>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 justify-center mb-6"
          >
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="text-xl sm:text-2xl font-space font-semibold text-[#94A3B8]">
              {displayedRole}
              <span className="terminal-cursor" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Passionate Java developer building scalable backend systems with{' '}
            <span className="text-orange-400 font-medium">Spring Boot</span>,{' '}
            <span className="text-orange-400 font-medium">React</span> &amp;{' '}
            <span className="text-orange-400 font-medium">MySQL</span>. B.E. in Computer Science &amp; Engineering graduate from Anna University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 justify-center mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </motion.a>
            <motion.a
              href={personal.resume || "/Sankar_S_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download="Sankar_S_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 justify-center"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <div className="h-px w-12 bg-white/10" />
            <span className="text-[#94A3B8] text-sm">{personal.email}</span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 w-full max-w-xl"
          >
            {[
              { value: '3+', label: 'Years Experience', icon: '🏆' },
              { value: '4+', label: 'Projects Built', icon: '🚀' },
              { value: '8.5', label: 'CGPA', icon: '🎓' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(234,88,12,0.2)' }}
                className="glass-card p-4 text-center transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-[#94A3B8] text-xs sm:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#94A3B8] text-xs font-medium">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center"
          >
            <ArrowDown className="w-4 h-4 text-orange-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

