import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Skills Section Component
 * 
 * Features:
 * - Animated progress bars with intersection observer
 * - Glassmorphism design
 * - Responsive grid layout
 * - Hover effects and micro-interactions
 */
const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'Vue.js', level: 88, color: 'from-green-500 to-emerald-500' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-orange-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Next.js', level: 80, color: 'from-gray-700 to-gray-900' },
        { name: 'Vite', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Git/GitHub', level: 88, color: 'from-gray-600 to-gray-800' },
        { name: 'Figma', level: 75, color: 'from-purple-600 to-pink-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Responsive Design', level: 92, color: 'from-green-600 to-blue-600' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 70, color: 'from-green-600 to-green-800' },
        { name: 'Express.js', level: 65, color: 'from-gray-600 to-gray-800' },
        { name: 'PostgreSQL', level: 60, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 55, color: 'from-green-700 to-green-900' },
        { name: 'REST APIs', level: 75, color: 'from-indigo-500 to-purple-500' },
        { name: 'Firebase', level: 65, color: 'from-yellow-600 to-orange-600' }
      ]
    }
  ]

  const additionalSkills = [
    'Framer Motion', 'React Hook Form', 'Zustand', 'React Query', 'Styled Components',
    'Jest', 'Cypress', 'Webpack', 'ESLint', 'Prettier', 'Vercel', 'Netlify'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20" />
      
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
            My{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <h3 className="text-xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar container */}
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        {/* Animated progress bar */}
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut'
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: 'linear',
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Additional{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills