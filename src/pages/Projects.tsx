import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, Github, Search, Filter } from 'lucide-react'

/**
 * Projects Page Component
 * 
 * Features:
 * - Advanced filtering and search
 * - Project categorization
 * - Detailed project cards
 * - SEO optimization
 */
const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const allProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform with React, TypeScript, and Stripe integration',
      image: '/assets/img/Screenshot 2025-05-25 140623.jpg',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Stripe'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/NOVAShop',
      liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Memory Card Game',
      description: 'Interactive memory game with smooth animations and score tracking',
      image: '/assets/img/Screenshot 2025-05-14 022208.jpg',
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
      image: '/assets/img/Screenshot 2025-05-17 140117.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
      liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: allProjects.length },
    { id: 'web-app', name: 'Web Apps', count: allProjects.filter(p => p.category === 'web-app').length },
    { id: 'game', name: 'Games', count: allProjects.filter(p => p.category === 'game').length },
    { id: 'ui-ux', name: 'UI/UX', count: allProjects.filter(p => p.category === 'ui-ux').length }
  ]

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesFilter && matchesSearch
    })
  }, [filter, searchTerm])

  return (
    <>
      <Helmet>
        <title>Projects - Calson Genesis</title>
        <meta name="description" content="Explore my portfolio of frontend development projects including web applications, games, and UI/UX designs." />
      </Helmet>

      <div className="min-h-screen pt-20 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my frontend development skills and creativity
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Category Filters */}
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
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full md:w-80 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
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
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setFilter('all')
                  setSearchTerm('')
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects