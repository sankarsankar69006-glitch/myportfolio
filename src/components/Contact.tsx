import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView();
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: personal.location, href: null },
    { icon: <FaGithub className="w-5 h-5" />, label: 'GitHub', value: 'sankarsankar69006-glitch', href: personal.github },
    { icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'sankar1704', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(234,88,12,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle mt-4">
            Ready to bring your next project to life? I'd love to hear from you.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg, #EA580C, #FB923C)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-poppins mb-3">
                Ready to Build Something <span className="text-gradient">Great?</span>
              </h3>
              <p className="text-[#94A3B8] leading-relaxed">
                I'm currently open to new opportunities as a Java Developer, Backend Developer, or Full Stack Engineer.
                Whether it's a full-time role, internship, or a freelance project — let's talk!
              </p>
            </div>

            {/* Open to work banner */}
            <div className="glass-card p-4 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-green-400 font-semibold text-sm">Currently Available</div>
                  <div className="text-[#94A3B8] text-xs">Open to full-time positions and internships</div>
                </div>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 glass-card p-3 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[#94A3B8] text-xs">{item.label}</div>
                        <div className="text-white text-sm font-medium group-hover:text-orange-300 transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 glass-card p-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[#94A3B8] text-xs">{item.label}</div>
                        <div className="text-white text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Message Sent! 🎉</h3>
                  <p className="text-[#94A3B8] text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-outline text-sm mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#94A3B8] text-xs mb-1.5 block">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`contact-input ${errors.name ? 'border-red-500/50' : ''}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-[#94A3B8] text-xs mb-1.5 block">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`contact-input ${errors.email ? 'border-red-500/50' : ''}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-[#94A3B8] text-xs mb-1.5 block">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Job Opportunity / Collaboration"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="text-[#94A3B8] text-xs mb-1.5 block">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about the role or project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`contact-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

