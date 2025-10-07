import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * About Section Component - Sophisticated Design
 * 
 * Features:
 * - Innovative visual storytelling
 * - Organic geometric patterns
 * - Layered visual hierarchy
 * - Sophisticated micro-interactions
 * - Unique content presentation
 */
const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeHighlight, setActiveHighlight] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500/10 to-indigo-500/10',
        border: 'border-blue-500/20',
        text: 'from-blue-600 to-indigo-600',
        accent: 'from-blue-400 to-indigo-400',
        glow: 'shadow-blue-500/25'
      },
      purple: {
        bg: 'from-purple-500/10 to-pink-500/10',
        border: 'border-purple-500/20',
        text: 'from-purple-600 to-pink-600',
        accent: 'from-purple-400 to-pink-400',
        glow: 'shadow-purple-500/25'
      },
      emerald: {
        bg: 'from-emerald-500/10 to-teal-500/10',
        border: 'border-emerald-500/20',
        text: 'from-emerald-600 to-teal-600',
        accent: 'from-emerald-400 to-teal-400',
        glow: 'shadow-emerald-500/25'
      },
      amber: {
        bg: 'from-amber-500/10 to-orange-500/10',
        border: 'border-amber-500/20',
        text: 'from-amber-600 to-orange-600',
        accent: 'from-amber-400 to-orange-400',
        glow: 'shadow-amber-500/25'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const highlights = [
    {
      title: 'Code Excellence',
      color: 'blue',
      description: 'I focus on writing code that is clean, reliable, and easy to understand. For me, it is not only about solving a problem quickly but also about building solutions that can grow and adapt over time. I pay close attention to structure and clarity so that my code is simple for others to read, test, and maintain. Following best practices is part of my daily approach, whether it involves organizing files, naming variables clearly, or breaking tasks into smaller, reusable components. I believe that scalable code should be able to handle new features or larger workloads without creating unnecessary complexity. This is why I rely on established patterns and principles that make projects stable in the long run. My goal is always to deliver work that balances performance with maintainability, giving teams and clients confidence that what I build today will remain useful tomorrow.',
      shortDesc: 'Clean, maintainable, and scalable code architecture'
    },
    {
      title: 'Design Philosophy',
      color: 'purple',
      description: 'I enjoy creating interfaces that are not only visually appealing but also meaningful to the people who use them. My design process always begins with the user in mind, aiming to understand their needs, habits, and expectations. A beautiful interface is more than colors and shapes - it should feel natural, intuitive, and comfortable to navigate. I pay attention to detail, ensuring that layouts are consistent, spacing is balanced, and typography enhances readability. At the same time, I believe usability and accessibility are just as important as aesthetics, so I strive to build designs that work well for everyone. My goal is to craft experiences that feel smooth and engaging, where every interaction feels thoughtful rather than forced. When users enjoy spending time with a product because it feels effortless and rewarding, I know I\'ve succeeded. In short, I aim to blend functionality with design in a way that genuinely delights.',
      shortDesc: 'User-centered design with aesthetic and functional balance'
    },
    {
      title: 'Performance Optimization',
      color: 'emerald',
      description: 'I prioritize building applications that perform quickly and deliver a seamless experience for users. In today\'s digital environment, speed is more than convenience - it shapes how people perceive and trust a product. I work to minimize delays, reduce unnecessary processes, and keep interactions smooth across different devices and networks. This involves careful attention to code efficiency, resource management, and smart use of modern tools and frameworks. At the same time, I never lose sight of the user\'s perspective. An application should feel natural, intuitive, and responsive, allowing people to focus on their goals rather than the technology itself. By balancing technical optimization with thoughtful design, I aim to create products that not only run efficiently but also feel rewarding to use. My goal is always to provide an experience where performance and usability come together to keep users engaged and satisfied.',
      shortDesc: 'Optimized applications for seamless user experiences'
    },
    {
      title: 'Continuous Learning',
      color: 'amber',
      description: 'I have always been drawn to technology, not only for the possibilities it creates but also for the way it constantly evolves and challenges me to grow. My passion goes beyond using tools or writing code - it lies in understanding how things work and exploring new ways to solve problems. I see every project as an opportunity to expand my knowledge, whether by learning a new language, experimenting with frameworks, or studying the principles behind effective design and development. Continuous learning is part of how I stay motivated and relevant in a fast-changing industry. I enjoy keeping up with advancements, testing ideas in my own projects, and applying what I discover to real-world solutions. For me, technology is never static - it is an open field where curiosity and dedication lead to progress. This mindset keeps me excited about both the present and the future of my work.',
      shortDesc: 'Embracing technology evolution through curiosity and growth'
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Flowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-900 dark:via-indigo-900/10 dark:to-purple-900/5" />
        
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Sophisticated Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="relative inline-block">
                  About
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
                <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-100 dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent">
                  My Journey
            </span>
              </h2>
            </div>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A passionate frontend developer crafting exceptional digital experiences through innovative solutions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated background layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-2 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-70"
                  animate={{ rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-800/20 backdrop-blur-sm transform rotate-3">
                  <img
                    src="/img/Me-Rec-blur.jpg"
                    alt="Calson Genesis - About"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
              Frontend Developer from{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cameroon
              </span>
            </h3>
            
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
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
            </div>

            {/* Enhanced Info Card */}
            <motion.div
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quick Info
              </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300">
                <p><span className="font-medium">📍 Location:</span> Bamenda, Cameroon</p>
                <p><span className="font-medium">💼 Focus:</span> Frontend Development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {highlights.map((highlight, index) => {
              const colors = getColorClasses(highlight.color)
              const isActive = activeHighlight === index

              return (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveHighlight(isActive ? null : index)}
                  style={{ perspective: '1000px' }}
                >
                  {/* Main Card Container */}
                  <motion.div
                    className="relative h-full transform transition-all duration-500 cursor-pointer"
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Background with organic shape */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl border ${colors.border} backdrop-blur-sm transition-all duration-500`} />
                    
                    {/* Floating accent elements */}
                    <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${colors.accent} rounded-xl opacity-20 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`} />
                    <div className={`absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br ${colors.accent} rounded-full opacity-15 transform -rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500`} />
                    
                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Geometric Icon */}
                      <div className="mb-6">
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${colors.accent} rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                          <div className="absolute inset-2 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center">
                            <div className={`w-3 h-3 bg-gradient-to-r ${colors.text} rounded-full`} />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className={`text-xl font-bold mb-4 bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                        {highlight.title}
                      </h4>

                      {/* Description */}
                      <div className="flex-1">
                        <AnimatePresence mode="wait">
                          {isActive ? (
                        <motion.div
                              key="expanded"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {highlight.description}
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="collapsed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {highlight.shortDesc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div className="mt-6 flex justify-center">
                        <motion.div
                          className={`w-8 h-8 bg-gradient-to-r ${colors.accent} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3, type: 'spring' }}
                        >
                          {isActive ? '−' : '+'}
                        </motion.div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About