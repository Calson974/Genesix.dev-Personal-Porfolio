import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Skills Section Component - Sophisticated Design
 * 
 * Features:
 * - Interactive skill exploration with depth
 * - Organic geometric patterns
 * - Layered visual hierarchy
 * - Unique skill representation beyond progress bars
 * - Sophisticated micro-interactions
 */
const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      color: 'emerald',
      description: 'Crafting intuitive user experiences',
      skills: [
        { name: 'React', level: 90, description: 'Building scalable component architectures' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development practices' },
        { name: 'Vue.js', level: 88, description: 'Progressive framework expertise' },
        { name: 'JavaScript', level: 92, description: 'Core language mastery' },
        { name: 'HTML/CSS', level: 95, description: 'Semantic markup & modern styling' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first design system' }
      ]
    },
    {
      title: 'Development Tools',
      color: 'violet',
      description: 'Streamlining development workflows',
      skills: [
        { name: 'Next.js', level: 80, description: 'Full-stack React applications' },
        { name: 'Vite', level: 85, description: 'Lightning-fast build tooling' },
        { name: 'Git/GitHub', level: 88, description: 'Version control & collaboration' },
        { name: 'Figma', level: 75, description: 'Design system creation' },
        { name: 'VS Code', level: 95, description: 'Productive development environment' },
        { name: 'Responsive Design', level: 92, description: 'Cross-device optimization' }
      ]
    },
    {
      title: 'Backend Systems',
      color: 'amber',
      description: 'Building robust server infrastructure',
      skills: [
        { name: 'Node.js', level: 70, description: 'JavaScript runtime expertise' },
        { name: 'Express.js', level: 65, description: 'Web framework mastery' },
        { name: 'PostgreSQL', level: 60, description: 'Relational database design' },
        { name: 'Supabase', level: 55, description: 'Backend-as-a-Service' },
        { name: 'REST APIs', level: 75, description: 'API architecture & design' },
        { name: 'Firebase', level: 65, description: 'Real-time data management' }
      ]
    }
  ]

  const additionalSkills = [
    'React Query', 'Canva', 'Vercel', 'Netlify'
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'from-emerald-500/10 to-teal-500/10',
        border: 'border-emerald-500/20',
        text: 'from-emerald-600 to-teal-600',
        accent: 'from-emerald-400 to-teal-400',
        glow: 'shadow-emerald-500/25'
      },
      violet: {
        bg: 'from-violet-500/10 to-purple-500/10',
        border: 'border-violet-500/20',
        text: 'from-violet-600 to-purple-600',
        accent: 'from-violet-400 to-purple-400',
        glow: 'shadow-violet-500/25'
      },
      amber: {
        bg: 'from-amber-500/10 to-orange-500/10',
        border: 'border-amber-500/20',
        text: 'from-amber-600 to-orange-600',
        accent: 'from-amber-400 to-orange-400',
        glow: 'shadow-amber-500/25'
      }
    }
    return colors[color as keyof typeof colors] || colors.emerald
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

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        {/* Flowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/5" />
        
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-violet-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
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
                  Technical
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                  Expertise
            </span>
              </h2>
            </div>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A curated collection of technologies and methodologies I've mastered through years of hands-on experience
          </motion.p>
        </motion.div>

        {/* Interactive Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color)
            return (
            <motion.div
              key={category.title}
              variants={itemVariants}
                className="group relative perspective-1000"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Main Card */}
                <div className="relative h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  {/* Background with organic shape */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl border ${colors.border} backdrop-blur-sm`} />
                  
                  {/* Floating accent elements */}
                  <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${colors.accent} rounded-2xl opacity-20 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`} />
                  <div className={`absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br ${colors.accent} rounded-full opacity-15 transform -rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="mb-3">
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-light">
                        {category.description}
                      </p>
                    </div>
                
                    {/* Skills List */}
                    <div className="flex-1 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="group/skill relative"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                        >
                          {/* Skill Card */}
                          <div className="relative p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 transition-all duration-300 group-hover/skill:bg-white/60 dark:group-hover/skill:bg-slate-800/60 group-hover/skill:shadow-lg">
                            
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${colors.accent} rounded-full`} />
                                <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                              </div>
                              <div className={`text-sm font-bold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                          {skill.level}%
                              </div>
                      </div>
                      
                            {/* Experience Bar */}
                            <div className="relative mb-3">
                              <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                                  className={`h-full bg-gradient-to-r ${colors.accent} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                                    duration: 1.2, 
                                    delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
                            ease: 'easeOut'
                          }}
                        >
                          <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                                      duration: 1.5, 
                              repeat: Infinity, 
                              ease: 'linear',
                                      delay: categoryIndex * 0.15 + skillIndex * 0.1 + 1.5
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                            
                            {/* Skill Description */}
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {skill.description}
                </div>
              </div>
            </motion.div>
          ))}
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Technologies - Redesigned */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="relative">
                Complementary
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
              {' '}
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
            <p className="text-slate-600 dark:text-slate-400 font-light">
              Additional tools and platforms that enhance my development workflow
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -15 }}
                transition={{ 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <div className="px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-default group-hover:scale-105 group-hover:-translate-y-1">
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills