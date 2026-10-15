import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Moon, Sun, Download } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#java', label: 'Java' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-glow">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-space font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
                Sankar<span className="text-orange-400">.</span>dev
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-orange-400 bg-orange-500/10'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-orange-400 hover:border-orange-500/30 transition-all"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <motion.a
                href="/Sankar_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sankar_S_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline-flex btn-outline text-xs px-3.5 py-2 items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden md:flex btn-primary text-sm px-4 py-2"
              >
                <span>Hire Me</span>
              </motion.a>

              {/* Mobile menu toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0F172A]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="font-space font-bold text-lg text-white">
                Sankar<span className="text-orange-400">.</span>dev
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-4 p-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-2xl font-semibold font-poppins transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-gradient'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                <motion.a
                  href="/Sankar_S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sankar_S_Resume.pdf"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="btn-outline justify-center flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.a>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary justify-center"
                >
                  <span>Hire Me</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

