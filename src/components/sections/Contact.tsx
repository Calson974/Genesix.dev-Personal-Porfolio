import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, MessageSquare, Facebook, Linkedin, Github, MessageCircle } from 'lucide-react';

// Floating elements component
const FloatingElements = () => {
  const elements = [
    { icon: <MessageSquare className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
    { icon: <Facebook className="w-5 h-5" />, color: 'from-blue-600 to-blue-400' },
    { icon: <Mail className="w-5 h-5" />, color: 'from-rose-500 to-pink-500' },
    { icon: <Linkedin className="w-5 h-5" />, color: 'from-blue-600 to-blue-400' },
    { icon: <Github className="w-5 h-5" />, color: 'from-gray-700 to-gray-500' },
    { icon: <MessageCircle className="w-5 h-5" />, color: 'from-green-500 to-green-400' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${el.color} flex items-center justify-center text-white shadow-lg`}
          initial={{
            x: Math.random() * 100 - 50 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: 0.5 + Math.random() * 1.5,
            opacity: 0.2 + Math.random() * 0.5,
          }}
          animate={{
            y: ['0%', Math.random() * 20 - 10 + '%', '0%'],
            x: [
              '0%',
              Math.random() * 10 - 5 + '%',
              Math.random() * 10 - 5 + '%',
              '0%',
            ],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 15 + Math.random() * 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Contact Section Component
 *
 * Features:
 * - Animated contact form with validation
 * - Interactive contact information cards
 * - Form submission handling with success/error states
 */
const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState<'form' | 'social'>('form');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset form state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');

      // Reset error state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      color: 'bg-gradient-to-br from-rose-500 to-pink-500',
      hover: 'hover:shadow-lg hover:shadow-rose-500/20'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: '@yourprofile',
      href: 'https://facebook.com/yourprofile',
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
      hover: 'hover:shadow-lg hover:shadow-blue-600/20'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
      hover: 'hover:shadow-lg hover:shadow-blue-600/20'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'yourusername',
      href: 'https://github.com/yourusername',
      color: 'bg-gradient-to-br from-gray-700 to-gray-500',
      hover: 'hover:shadow-lg hover:shadow-gray-500/20'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1234567890',
      href: 'https://wa.me/1234567890',
      color: 'bg-gradient-to-br from-green-500 to-green-400',
      hover: 'hover:shadow-lg hover:shadow-green-500/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'City, Country',
      href: 'https://maps.google.com',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-400',
      hover: 'hover:shadow-lg hover:shadow-emerald-500/20'
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      <FloatingElements />

      {/* Animated cursor effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 pointer-events-none z-50"
        variants={cursorVariants}
        animate={cursorVariant}
        ref={cursorRef}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'form'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Send a Message
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'social'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Find Me Online
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'form' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700/50 p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Drop Me a Line
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="relative w-full px-4 py-3 bg-white/80 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                      placeholder="John Doe"
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="relative w-full px-4 py-3 bg-white/80 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                      placeholder="john@example.com"
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="relative w-full px-4 py-3 bg-white/80 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none backdrop-blur-sm"
                      placeholder="Hello! I'd love to talk about..."
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 group relative overflow-hidden ${
                    formState === 'submitting'
                      ? 'bg-blue-600/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <span className="relative z-10 flex items-center">
                    {formState === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-6 rounded-2xl transition-all duration-300 overflow-hidden group ${item.hover}`}
                    onMouseEnter={() => {
                      setCursorVariant('hover');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                      <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`w-16 h-16 rounded-full ${item.color} opacity-10`}></div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
