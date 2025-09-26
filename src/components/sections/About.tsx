import React, { useState } from 'react'
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

  // State for managing expand highlights
  const [expandedHighlights, setExpandedHighlights] = useState<Set<number>>(new Set())

  // Utility function to truncate text
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  // Toggle expanded state for a highlight
  const toggleHighlight = (index: number) => {
    setExpandedHighlights(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

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
      description: 'I focus on writing code that is clean, reliable, and easy to understand. For me, it is not only about solving a problem quickly but also about building solutions that can grow and adapt over time. I pay close attention to structure and clarity so that my code is simple for others to read, test, and maintain. Following best practices is part of my daily approach, whether it involves organizing files, naming variables clearly, or breaking tasks into smaller, reusable components. I believe that scalable code should be able to handle new features or larger workloads without creating unnecessary complexity. This is why I rely on established patterns and principles that make projects stable in the long run. My goal is always to deliver work that balances performance with maintainability, giving teams and clients confidence that what I build today will remain useful tomorrow.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'I enjoy creating interfaces that are not only visually appealing but also meaningful to the people who use them. My design process always begins with the user in mind, aiming to understand their needs, habits, and expectations. A beautiful interface is more than colors and shapes-it should feel natural, intuitive, and comfortable to navigate. I pay attention to detail, ensuring that layouts are consistent, spacing is balanced, and typography enhances readability. At the same time, I believe usability and accessibility are just as important as aesthetics, so I strive to build designs that work well for everyone. My goal is to craft experiences that feel smooth and engaging, where every interaction feels thoughtful rather than forced. When users enjoy spending time with a product because it feels effortless and rewarding, I know I’ve succeeded. In short, I aim to blend functionality with design in a way that genuinely delights.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'I prioritize building applications that perform quickly and deliver a seamless experience for users. In today’s digital environment, speed is more than convenience, it shapes how people perceive and trust a product. I work to minimize delays, reduce unnecessary processes, and keep interactions smooth across different devices and networks. This involves careful attention to code efficiency, resource management, and smart use of modern tools and frameworks. At the same time, I never lose sight of the user’s perspective. An application should feel natural, intuitive, and responsive, allowing people to focus on their goals rather than the technology itself. By balancing technical optimization with thoughtful design, I aim to create products that not only run efficiently but also feel rewarding to use. My goal is always to provide an experience where performance and usability come together to keep users engaged and satisfied.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'I have always been drawn to technology, not only for the possibilities it creates but also for the way it constantly evolves and challenges me to grow. My passion goes beyond using tools or writing code, it lies in understanding how things work and exploring new ways to solve problems. I see every project as an opportunity to expand my knowledge, whether by learning a new language, experimenting with frameworks, or studying the principles behind effective design and development. Continuous learning is part of how I stay motivated and relevant in a fast-changing industry. I enjoy keeping up with advancements, testing ideas in my own projects, and applying what I discover to real-world solutions. For me, technology is never static, it is an open field where curiosity and dedication lead to progress. This mindset keeps me excited about both the present and the future of my work.'
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
                    src="/assets/img/Me-Rec-blur.jpg"
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
               {/* <p><span className="font-medium">🎯 Speciality:</span> React & Vue.js</p>
                <p><span className="font-medium">🚀 Status:</span> Available for projects</p> */}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="relative"
        >
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {highlights.map((highlight, index) => {
              const isExpanded = expandedHighlights.has(index)
              const shouldShowReadMore = highlight.description.length > 120
              const displayText = isExpanded ? highlight.description : truncateText(highlight.description)

              return (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="group relative"
                  style={{ perspective: '1000px' }}
                >
                  {/* Main Card Container */}
                  <motion.div
                    className="relative p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 overflow-hidden"
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(135deg,
                          rgba(59, 130, 246, 0.2) 0%,
                          rgba(147, 51, 234, 0.2) 25%,
                          rgba(219, 39, 119, 0.2) 50%,
                          rgba(59, 130, 246, 0.2) 75%,
                          rgba(147, 51, 234, 0.2) 100%)`,
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Enhanced Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent rounded-3xl" />

                    {/* Content Container */}
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                      {/* Icon with Advanced Animation */}
                      <motion.div
                        className="relative w-16 h-16 mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl"
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(59, 130, 246, 0.4)',
                              '0 0 40px rgba(147, 51, 234, 0.6)',
                              '0 0 20px rgba(59, 130, 246, 0.4)',
                            ],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="relative w-full h-full bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          >
                            <highlight.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Title with Gradient Animation */}
                      <motion.h4
                        className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                      >
                        {highlight.title}
                      </motion.h4>

                      {/* Expandable Description with Advanced Typography */}
                      <div className="min-h-[120px]">
                        <motion.div
                          className="relative"
                          animate={{ height: 'auto' }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                          <motion.p
                            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium"
                            animate={{
                              lineHeight: isExpanded ? '1.7' : '1.6',
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {displayText}
                          </motion.p>

                          {/* Advanced Read More Button */}
                          {shouldShowReadMore && (
                            <motion.div
                              className="mt-4 flex justify-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <motion.button
                                onClick={() => toggleHighlight(index)}
                                className="group/btn relative px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full text-white font-semibold text-sm shadow-lg overflow-hidden"
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {/* Button Background Animation */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                  animate={{
                                    x: ['-100%', '100%'],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                  }}
                                />

                                {/* Button Content */}
                                <div className="relative flex items-center justify-center space-x-2">
                                  <motion.span
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3, type: 'spring' }}
                                  >
                                    {isExpanded ? '▲' : '▼'}
                                  </motion.span>
                                  <span>{isExpanded ? 'Show Less' : 'Read More'}</span>

                                  {/* Sparkle Effects */}
                                  <motion.div
                                    className="absolute -top-1 -right-1"
                                    animate={{
                                      scale: [0, 1, 0],
                                      opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: Math.random() * 2,
                                    }}
                                  >
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                  </motion.div>
                                </div>
                              </motion.button>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>

                    {/* Floating Accent Elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Section Title Enhancement */}
          <motion.div
            className="text-center mb-16 relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About