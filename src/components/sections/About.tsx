import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Heart } from 'lucide-react'

/**
 * About Section Component
 * 
 * Features:
 * - Intersection Observer for animations
 * - Glassmorphism cards
 * - Gradient backgrounds
 * - Responsive grid layout
 */
const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, user-centered interfaces that delight users'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and continuous learning'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-900 dark:to-blue-900/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through innovative frontend development
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-800/20 backdrop-blur-sm transform rotate-3">
                  <img
                    src="/assets/img/Me-Square-tx.jpg"
                    alt="Calson Genesis - About"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Frontend Developer from{' '}
              <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                Cameroon
              </span>
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Frontend Developer with a keen eye for creating beautiful, 
                functional web applications. My journey in tech started with curiosity about 
                how websites work, which led me to dive deep into modern web development.
              </p>
              
              <p>
                With expertise in React, Vue.js, TypeScript, and modern CSS frameworks, 
                I specialize in building responsive, accessible applications that provide 
                exceptional user experiences. I believe in writing clean, maintainable code.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm always excited to take on new challenges!
              </p>
            </div>

            {/* Quick Info Card */}
            <motion.div
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quick Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                <p><span className="font-medium">📍 Location:</span> Bamenda, Cameroon</p>
                <p><span className="font-medium">💼 Focus:</span> Frontend Development</p>
                <p><span className="font-medium">🎯 Speciality:</span> React & Vue.js</p>
                <p><span className="font-medium">🚀 Status:</span> Available for projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="group relative p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About