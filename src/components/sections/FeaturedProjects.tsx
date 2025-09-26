import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Featured Projects Section Component
 * 
 * Features:
 * - Project filtering and search
 * - Glassmorphism cards with hover effects
 * - Animated project showcase
 * - Responsive grid layout
 */
const FeaturedProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with React, TypeScript, and Stripe integration',
      longDescription: 'A comprehensive e-commerce solution featuring product catalog, shopping cart, secure checkout, user authentication, and admin dashboard.',
      image: '/img/Screenshot 2025-05-25 140623.jpg',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/NOVAShop',
      liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Memory Card Game',
      description: 'Interactive memory game with smooth animations and score tracking',
      longDescription: 'An engaging card-matching game that tests memory and concentration with multiple difficulty levels and responsive design.',
      image: '/img/Screenshot 2025-05-14 022208.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      category: 'game',
      githubUrl: 'https://github.com/Calson974/Memory-Magic-Memory-Game',
      liveUrl: 'https://memory-magic-memory-game-git-master-calson974s-projects.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Clean and intuitive to-do application with local storage persistence',
      longDescription: 'A minimal yet powerful task management application with add, complete, and delete functionality, all saved locally.',
      image: '/img/Screenshot 2025-05-17 140117.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
      liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-app', name: 'Web Apps' },
    { id: 'game', name: 'Games' },
    { id: 'ui-ux', name: 'UI/UX' }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
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

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20" />
      
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
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my recent work and contributions to the development community
          </motion.p>
        </motion.div>

        {/* Filter and Search */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <Link to="/projects">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View All Projects
                <ExternalLink className="w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects