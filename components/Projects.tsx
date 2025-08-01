'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  StarIcon 
} from '@heroicons/react/24/outline'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  topics: string[]
}

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, and secure checkout.',
    longDescription: 'This comprehensive e-commerce solution includes user authentication, product management, order processing, and payment integration. Built with modern technologies for optimal performance and user experience.',
    image: '/assets/img/Screenshot 2025-05-25 140623.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/Calson974/NOVAShop',
    liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Memory Card Game',
    description: 'An engaging memory card game with smooth animations and score tracking.',
    longDescription: 'Memory Magic is an interactive card-matching game that tests memory and concentration. Features include multiple difficulty levels, score tracking, and responsive design for all devices.',
    image: '/assets/img/Screenshot 2025-05-14 022208.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Calson974/Memory-Magic-Memory-Game',
    liveUrl: 'https://memory-magic-memory-game-git-master-calson974s-projects.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A clean and intuitive to-do list application with local storage persistence.',
    longDescription: 'List It Yourself is a minimal yet powerful task management application. Users can add, complete, and delete tasks with all data saved locally in the browser for persistence.',
    image: '/assets/img/Screenshot 2025-05-17 140117.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
    liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
    featured: true
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null)
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([])
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Calson974/repos?sort=updated&per_page=6')
        const repos = await response.json()
        setGithubRepos(repos.filter((repo: GitHubRepo) => !repo.name.includes('Calson974')))
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      }
    }

    fetchGitHubRepos()
  }, [])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and contributions to the development community
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <EyeIcon className="w-6 h-6 text-white" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <CodeBracketIcon className="w-6 h-6 text-white" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs rounded-full"
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
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
                  >
                    Read more <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repositories */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                GitHub <span className="gradient-text">Repositories</span>
              </h3>
              <Link
                href="https://github.com/Calson974"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                View All on GitHub
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.slice(0, showAllProjects ? githubRepos.length : 6).map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold truncate">{repo.name}</h4>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
                      )}
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {repo.language}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      {repo.homepage && (
                        <Link
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700"
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Link>
                      )}
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {githubRepos.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="btn-secondary"
                >
                  {showAllProjects ? 'Show Less' : 'Show More Projects'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Link
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <EyeIcon className="w-5 h-5" />
                  Live Demo
                </Link>
                <Link
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  View Code
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}