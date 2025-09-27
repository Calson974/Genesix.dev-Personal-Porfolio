import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { useScroll } from '../../contexts/ScrollContext'

/**
 * Hero Section Component
 * 
 * Features:
 * - Animated typewriter effect
 * - Interactive profile image with easter egg
 * - Gradient backgrounds and effects
 * - Responsive design
 * - Call-to-action buttons
 */
const Hero: React.FC = () => {
  const { scrollToSection } = useScroll()
  const [showSparkles, setShowSparkles] = useState(false)

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const skills = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']
  const [currentSkill, setCurrentSkill] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleImageClick = () => {
    setShowSparkles(true)
    setTimeout(() => setShowSparkles(false), 2000)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background - Subtle animated gradients for elegance */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/25 to-purple-600/25 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/25 to-red-600/25 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                Calson Genesis
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm a{' '}
              <motion.span
                key={currentSkill}
                className="ml-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Passionate Frontend Developer from Cameroon, crafting beautiful and functional 
              web experiences with modern technologies. I transform ideas into pixel-perfect reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </motion.button>

              <motion.a
                href="/assets/Calson_Genesis_CV.pdf"
                download
                className="group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, href: 'https://github.com/Calson974', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tengu-calson-genesis-438a83277', label: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200/20 dark:border-gray-700/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative lg:mr-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative group cursor-pointer" onClick={handleImageClick}>
              {/* Organic Nature Frame - Flowing petal design */}

              {/* Main Organic Ring - Flowing petal shapes */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 20% at 10% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 20% at 90% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 20% at 20% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 20% at 80% 70%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 20% at 50% 10%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 20% at 50% 90%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)
                  `,
                  scale: 1.25,
                  filter: 'blur(1px)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0, 0, 0)'
                }}
                animate={prefersReducedMotion ? {} : {
                  scale: [1.25, 1.3, 1.25],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Flowing Vine Pattern */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background: `
                    conic-gradient(from 0deg,
                      transparent 0deg, rgba(34, 197, 94, 0.4) 60deg, transparent 120deg,
                      transparent 120deg, rgba(59, 130, 246, 0.4) 180deg, transparent 240deg,
                      transparent 240deg, rgba(168, 85, 247, 0.4) 300deg, transparent 360deg
                    )
                  `,
                  scale: 1.15,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0, 0, 0)'
                }}
                animate={prefersReducedMotion ? {} : {
                  rotate: 360,
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                }}
              />

              {/* Organic Leaf Motifs */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 80% at 15% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 70%),
                    radial-gradient(ellipse 40% 80% at 85% 35%, rgba(59, 130, 246, 0.2) 0%, transparent 70%),
                    radial-gradient(ellipse 40% 80% at 25% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 70%),
                    radial-gradient(ellipse 40% 80% at 75% 65%, rgba(251, 191, 36, 0.2) 0%, transparent 70%)
                  `,
                  scale: 1.35,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0, 0, 0)'
                }}
                animate={prefersReducedMotion ? {} : {
                  scale: [1.35, 1.4, 1.35],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Profile image container - Natural wooden frame aesthetic */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-amber-200/40"
                style={{
                  background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.3) 0%, rgba(253, 230, 138, 0.2) 100%)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 2,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  boxShadow: { duration: 0.3 }
                }}
              >
                <img
                  src="/img/Me-Square-transparent2.png"
                  alt="Calson Genesis - Frontend Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Natural light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating Nature Elements */}
              {showSparkles && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${30 + (i * 12)}%`,
                        top: `${20 + (i * 8)}%`,
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                      initial={{ scale: 0, rotate: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.2, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 0.8, 0],
                        y: [0, -25, -50]
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.15,
                        ease: 'easeOut'
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          background: `
                            radial-gradient(circle at 30% 30%,
                            ${i % 3 === 0 ? 'rgba(34, 197, 94, 0.9)' :
                              i % 3 === 1 ? 'rgba(59, 130, 246, 0.9)' :
                              'rgba(168, 85, 247, 0.9)'} 0%,
                            ${i % 3 === 0 ? 'rgba(22, 163, 74, 0.7)' :
                              i % 3 === 1 ? 'rgba(37, 99, 235, 0.7)' :
                              'rgba(139, 69, 219, 0.7)'} 100%
                          )`,
                          boxShadow: `0 0 8px ${i % 3 === 0 ? 'rgba(34, 197, 94, 0.6)' :
                            i % 3 === 1 ? 'rgba(59, 130, 246, 0.6)' :
                            'rgba(168, 85, 247, 0.6)'}`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Gentle Floating Leaves */}
              <motion.div
                className="absolute -top-3 -right-3 w-5 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full transform rotate-45"
                style={{
                  clipPath: 'ellipse(50% 80% at 50% 20%)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                animate={prefersReducedMotion ? {} : {
                  y: [-6, 6, -6],
                  rotate: [45, 50, 45],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full transform -rotate-45"
                style={{
                  clipPath: 'ellipse(50% 80% at 50% 20%)',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                animate={prefersReducedMotion ? {} : {
                  y: [6, -6, 6],
                  rotate: [-45, -40, -45],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero