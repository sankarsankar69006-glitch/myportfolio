import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import JavaExpertise from './components/JavaExpertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Loading Screen
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0F172A]"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Logo animation */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-4xl shadow-glow-lg"
        >
          ☕
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold font-poppins text-white"
          >
            Sankar<span className="text-gradient">.</span>dev
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#94A3B8] text-sm mt-1"
          >
            Java Full Stack Developer
          </motion.p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #EA580C, #F97316, #FB923C)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0F172A] min-h-screen"
        >
          {/* Noise overlay for premium feel */}
          <div className="noise-overlay" />

          {/* Main content */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <JavaExpertise />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
