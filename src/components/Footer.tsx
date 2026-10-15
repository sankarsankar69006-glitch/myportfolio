import { motion } from 'framer-motion';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#080D1A]">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent)' }} />
        <div className="absolute inset-0 bg-mesh opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-glow">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-space font-bold text-lg text-white">
                Sankar<span className="text-orange-400">.</span>dev
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Java Full Stack Developer passionate about building scalable, 
              efficient applications. Open to new opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { href: personal.github, icon: <FaGithub className="w-4 h-4" />, label: 'GitHub' },
                { href: personal.linkedin, icon: <FaLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[#94A3B8] hover:text-orange-400 hover:border-orange-500/30 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#94A3B8] hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-orange-500/30 group-hover:w-6 group-hover:bg-orange-500 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${personal.email}`} className="text-[#94A3B8] hover:text-orange-400 text-sm transition-colors break-all">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-sm mt-0.5">📞</span>
                <a href={`tel:${personal.phone}`} className="text-[#94A3B8] hover:text-orange-400 text-sm transition-colors">
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-sm mt-0.5">📍</span>
                <span className="text-[#94A3B8] text-sm">{personal.location}</span>
              </div>
              <div className="mt-4 glass-card px-3 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm flex items-center gap-2">
            © {year} Sankar S. Made with{' '}
            <Heart className="w-3 h-3 text-orange-400 fill-orange-400" />{' '}
            and lots of ☕
          </p>
          <div className="flex items-center gap-2 text-[#94A3B8] text-xs">
            <span>Built with React + TypeScript + Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(234,88,12,0.4)' }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl btn-primary flex items-center justify-center z-50 shadow-glow"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

