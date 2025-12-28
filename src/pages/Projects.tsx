import React, { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, Github, Search, Eye, Maximize2, Code, Microscope, Sparkles, Atom, ChevronLeft, ChevronRight, Database, Globe } from 'lucide-react'

/**
 * Projects Page Component - Digital Laboratory Theme
 *
 * Features:
 * - Advanced filtering and search
 * - Project categorization with laboratory theme
 * - Detailed specimen cards matching FeaturedProjects
 * - SEO optimization
 */
const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [modalType, setModalType] = useState<'preview' | 'fullPreview' | 'code' | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeSearchIndex, setActiveSearchIndex] = useState(0)

  // Custom useInView hook with proper TypeScript types
  const useInView = (options: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
    const [inView, setInView] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting)
      }, options)

      const currentRef = ref.current
      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    }, [options])

    return [ref, inView]
  }

  const [ref, inView] = useInView({ threshold: 0.1 })

  const projects = [
    {
      id: 1,
      title: 'Vyon Video App',
      description: 'A modern YouTube-inspired video streaming platform built with Vite, JavaScript, and Firebase',
      longDescription: 'Vyon is a modern video streaming platform inspired by YouTube, built with Vite, vanilla JavaScript, and Tailwind CSS. It features a clean, responsive design and leverages Firebase for backend services, providing a seamless video watching experience.',
      images: [
        '/img/vyon%20img/managevideos-vyon.jpg',
        '/img/vyon%20img/profilepage-vyon.jpg',
        '/img/vyon%20img/watchpage-vyon.jpg',
        '/img/vyon%20img/Screenshot%202025-12-28%20093835.jpg'
      ],
      technologies: ['JavaScript', 'Vite', 'Tailwind CSS', 'Firebase', 'HTML5', 'CSS3'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/Vyon-Video-Streaming-App',
      liveUrl: 'https://vyon.vercel.app',
      featured: true,
      specimenType: 'media-stream',
      compound: 'Media Streaming Compound',
      molecularWeight: '6 Technologies',
      stability: 'Production Ready',
      implementationNotes: 'Vyon Video App was built to explore modern web technologies and create a YouTube-like experience from scratch. The project challenged me to implement complex video streaming functionality while maintaining a clean, responsive UI. Using vanilla JavaScript with Vite for the build process and Tailwind CSS for styling allowed for a fast, efficient development workflow. The app integrates with Firebase for authentication and data storage, providing a robust backend solution without the need for a custom server. This project was a great learning experience in building scalable web applications with modern tooling.'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'NOVAShop is a modern e-commerce website designed to showcase and sell premium electronics and gadgets. This project features a responsive design, dynamic product rendering, and interactive user experiences, making it a great starting point for building a professional online store.',
      longDescription: 'NOVAShop is a modern e-commerce website designed to showcase and sell premium electronics and Gadgets',
      images: [
        '/img/Nova-shop img/novashop-img1.png',
        '/img/Nova-shop img/novashop-img2.png',
        '/img/Nova-shop img/novashop-img3.png',
        '/img/Nova-shop img/novashop-img4.png',
        '/img/Nova-shop img/novashop-img5.png'
      ],
      technologies: ['HTML5','CSS3','JavaScript','Local Storage'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/NOVAShop',
      liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'web-ecosystem',
      compound: 'Front-End Compound',
      molecularWeight: '4 Technologies',
      stability: 'Production Stable',
      implementationNotes: 'NOVAShop started as a simple idea: what if I could build a shopping platform from the ground up and shape every part of the experience? I wanted to go beyond static pages and create something that felt alive, where users could browse, view products in detail, and manage a cart with ease.\n\nWhile building it, I focused on the small things that make shopping online feel natural-smooth navigation, layouts that adjust across devices, and a cart system that responds instantly to every action. Each feature taught me something about balancing design and functionality, from writing cleaner code to thinking through the flow of a customer\'s journey.\n\nFor me, NOVAShop isn\'t just a demo. It\'s a foundation that can grow into a full platform, with space for future features like accounts, payments, and product filters. More importantly, it reflects how I approach projects: start with curiosity, solve one problem at a time, and keep improving until it feels right.'
    },
    {
      id: 3,
      title: 'Memory Card Game',
      description: 'Interactive cognitive training application',
      longDescription: 'An engaging card-matching game with multiple difficulty levels, progress tracking, and cognitive skill development features with smooth animations and responsive design.',
      images: [
        '/img/Magic-card-game img/magiccard-img1.png',
        '/img/Magic-card-game img/magiccard-img2.png',
        '/img/Magic-card-game img/magiccard-img3.png'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript','Local Storage'],
      category: 'game',
      githubUrl: 'https://github.com/Calson974/Memory-Magic-Memory-Game',
      liveUrl: 'https://memory-magic-memory-game-git-master-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'neural-network',
      compound: 'Interactive Compound',
      molecularWeight: '4 Technologies',
      stability: 'Memory Optimized',
      implementationNotes: 'The Memory Card Game project began with a fascination for cognitive training and game development. I wanted to create something that was both entertaining and mentally stimulating, challenging players to improve their memory and concentration skills while having fun.\n\nThe core challenge was implementing the card-flipping mechanics with smooth animations and proper state management. I focused on creating an intuitive user experience with clear visual feedback, ensuring the game felt responsive and engaging across all devices.\n\nWhat started as a simple matching game evolved into a comprehensive cognitive training tool with multiple difficulty levels, progress tracking, and performance analytics. The project taught me valuable lessons about game design, user engagement, and the psychology of learning through play.'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Productivity application with modern UX principles',
      longDescription: 'A streamlined task management solution with intuitive drag-and-drop interface, team collaboration features, real-time updates, and comprehensive project tracking capabilities.',
      images: [
        '/img/List-it-yourself img/list-it img1.png',
        '/img/List-it-yourself img/list-it img2.png',
        '/img/List-it-yourself img/list-it img3.png'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
      liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'data-structure',
      compound: 'Real-time Compound',
      molecularWeight: '4 Technologies',
      stability: 'Highly Scalable',
      implementationNotes: 'The Task Management App was born from my own need for a simple yet powerful productivity tool. As someone who juggles multiple projects and deadlines, I wanted something that could help me stay organized without being overly complex.\n\nThe biggest challenge was creating an intuitive drag-and-drop interface that felt natural and responsive. I spent considerable time perfecting the user experience, ensuring tasks could be moved effortlessly between different states and categories.\n\nThis project reinforced my belief in the power of simplicity. Sometimes the most effective solutions are the ones that strip away unnecessary complexity and focus on what users actually need. The local storage integration ensures data persistence, while the clean, responsive design works seamlessly across all devices.'
    },
    {
      id: 5,
      title: 'Magix Plan Ahead',
      description: 'Task and event management application with a clean and intuitive interface',
      longDescription: 'Magix Plan Ahead is a comprehensive task and event management application designed to help users organize their daily activities, manage projects, and track progress with an intuitive interface and powerful features.',
      images: [
        '/img/magix img/magix img1.png',
        '/img/magix img/magix img2.png',
        '/img/magix img/magix img3.png',
        '/img/magix img/magix img4.png',
        '/img/magix img/magix img5.png'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vite', 'Shadcn-ui'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/magix-plan-ahead',
      liveUrl: 'https://magixplanahead.vercel.app',
      featured: true,
      specimenType: 'data-structure',
      compound: 'Full-Stack Compound',
      molecularWeight: '6 Technologies',
      stability: 'Production Ready',
      implementationNotes: 'Magix Plan Ahead was built to address the need for a simple yet powerful task management solution. The project combines modern web technologies to deliver a responsive and intuitive user experience. The frontend is built with React and TypeScript, ensuring type safety and maintainable code. The UI is crafted with Shadcn-ui components for a polished look and feel.\n\nOn the backend, Node.js with Express handles the API layer, while PostgreSQL provides reliable data storage. The application features real-time updates, task categorization, and progress tracking. The development workflow was streamlined with Vite, enabling fast refresh cycles and efficient bundling.\n\nThis project was a great opportunity to work with a full-stack TypeScript environment, implement clean architecture patterns, and focus on creating a delightful user experience. The result is a robust, scalable application that helps users stay organized and productive.'
    }
  ]

  const specimenTypes = {
    'web-ecosystem': { icon: Globe, color: 'from-blue-500 to-cyan-500', bg: 'from-blue-500/10 to-cyan-500/10' },
    'neural-network': { icon: Atom, color: 'from-purple-500 to-pink-500', bg: 'from-purple-500/10 to-pink-500/10' },
    'data-structure': { icon: Database, color: 'from-green-500 to-emerald-500', bg: 'from-green-500/10 to-emerald-500/10' }
  }

  const getSpecimenIcon = (type: string) => {
    const specimenType = specimenTypes[type as keyof typeof specimenTypes]
    return specimenType ? specimenType.icon : Microscope
  }

  const getSpecimenColor = (type: string) => {
    const specimenType = specimenTypes[type as keyof typeof specimenTypes]
    return specimenType ? specimenType.color : 'from-slate-500 to-gray-500'
  }

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesFilter && matchesSearch
    })
    // Sort by technologies count (descending)
    return filtered.sort((a, b) => (b.technologies?.length || 0) - (a.technologies?.length || 0))
  }, [filter, searchTerm])

  // Global keyboard shortcuts for search modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isSlash = e.key === '/'
      const isCmdOrCtrlK = (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))
      const isEscape = e.key === 'Escape'

      if (isSlash) {
        e.preventDefault()
        setIsSearchOpen(true)
        setActiveSearchIndex(0)
      }
      if (isCmdOrCtrlK) {
        e.preventDefault()
        setIsSearchOpen(true)
        setActiveSearchIndex(0)
      }
      if (isEscape && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isSearchOpen])

  // Image Slider Component
  const ImageSlider: React.FC<{
    images: string[]
    title: string
    isHovered: boolean
    disableAutoAdvance?: boolean
  }> = ({ images, title, isHovered, disableAutoAdvance = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(false)
    const intervalRef = useRef<number | null>(null)

    // Auto-advance functionality
    useEffect(() => {
      if (isHovered && images.length > 1 && !disableAutoAdvance) {
        setIsAutoPlaying(true)
        intervalRef.current = window.setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 3000)
      } else {
        setIsAutoPlaying(false)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, [isHovered, images.length, disableAutoAdvance])

    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const goToSlide = (index: number) => {
      setCurrentIndex(index)
    }

    if (images.length === 0) return null

    return (
      <div className="relative w-full h-full group">
        {/* Main Image */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              disabled={!isHovered && !isAutoPlaying}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              disabled={!isHovered && !isAutoPlaying}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Slide Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Projects - Calson Genesis</title>
        <meta name="description" content="Explore my portfolio of frontend development projects including web applications, games, and UI/UX designs." />
      </Helmet>

      <div className="min-h-screen py-20 relative overflow-hidden dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Digital Laboratory Background */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 dark:opacity-20 opacity-10" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />

          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 dark:bg-blue-400 bg-blue-500 rounded-full animate-bounce opacity-60" />
          <div className="absolute top-40 right-32 w-1 h-1 dark:bg-purple-400 bg-purple-500 rounded-full animate-pulse opacity-80" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 dark:bg-cyan-400 bg-cyan-500 rounded-full animate-ping opacity-40" />
          <div className="absolute top-1/3 right-20 w-1 h-1 dark:bg-indigo-400 bg-indigo-500 rounded-full animate-bounce opacity-70" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Laboratory Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-blue-200/60 dark:border-blue-400/30 px-6 py-3 rounded-full mb-8"
            >
              <Microscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-300 font-semibold tracking-wide">DIGITAL LABORATORY</span>
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r dark:from-white from-gray-900 via-blue-700 to-purple-700 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Project Specimens
              </span>
            </h2>

            <p className="text-xl dark:text-blue-200/80 text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Explore code as living specimens in our digital laboratory. Each project is a unique
              <span className="text-blue-700 dark:text-blue-400 font-semibold"> technological organism</span> with its own
              <span className="text-purple-700 dark:text-purple-400 font-semibold"> molecular structure</span> and
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold"> behavioral patterns</span>.
            </p>
          </motion.div>

          {/* Laboratory Control Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <div className="max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600 dark:text-blue-400" />
                <input
                  type="text"
                  placeholder="Search specimens by compound or structure..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-slate-800/50 backdrop-blur-xl border border-blue-200/80 dark:border-blue-400/30 rounded-2xl text-gray-800 dark:text-blue-100 placeholder-blue-500/60 dark:placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
              </div>
            </div>
          </motion.div>

          {/* Specimen Laboratory Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16" ref={containerRef}>
            {filteredProjects.map((project, index) => {
              const SpecimenIcon = getSpecimenIcon(project.specimenType)

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  {/* Specimen Container */}
                  <div className="relative bg-white/95 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-blue-200/80 dark:border-blue-400/20 overflow-hidden shadow-xl dark:shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Holographic Frame */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Specimen Header */}
                    <div className="relative p-6 border-b dark:border-blue-400/20 border-blue-200/60">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl bg-gradient-to-r ${getSpecimenColor(project.specimenType)}`}>
                            <SpecimenIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm dark:text-blue-300/70 text-blue-600/80">{project.compound}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs dark:text-blue-400 text-blue-600 font-mono">{project.molecularWeight}</div>
                          <div className={`px-2 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${getSpecimenColor(project.specimenType)} text-white`}>
                            {project.stability}
                          </div>
                        </div>
                      </div>

                      {/* Specimen Description */}
                      <p className="dark:text-blue-200/80 text-gray-700 text-sm leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Microscopic Viewport */}
                    <div className="relative h-48 bg-gradient-to-br dark:from-slate-900 dark:to-blue-900/30 from-blue-50 to-purple-50/30">
                      {/* Project Image Slider */}
                      <div className="absolute inset-0 overflow-hidden">
                        <ImageSlider
                          images={project.images}
                          title={project.title}
                          isHovered={hoveredProject === project.id}
                        />
                      </div>

                      {/* Scanning Lines Animation */}
                      <div className="absolute inset-0 overflow-hidden mix-blend-overlay">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
                        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>

                      {/* Specimen Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Molecular Structure */}
                          <div className="relative w-24 h-24">
                            {project.technologies.map((tech, techIndex) => {
                              const angle = (techIndex * 360) / project.technologies.length
                              const radius = 40
                              const x = Math.cos((angle * Math.PI) / 180) * radius
                              const y = Math.sin((angle * Math.PI) / 180) * radius

                              return (
                                <motion.div
                                  key={tech}
                                  className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border border-cyan-300"
                                  style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                                  }}
                                  animate={{
                                    scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                                    rotate: hoveredProject === project.id ? 360 : 0
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: hoveredProject === project.id ? Infinity : 0,
                                    ease: 'easeInOut'
                                  }}
                                />
                              )
                            })}
                          </div>

                          {/* Central Core */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                        </div>
                      </div>

                      {/* Specimen Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Technology Analysis Panel */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-wider">
                          Molecular Composition
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-lg border border-blue-200/60 dark:border-blue-400/30 hover:border-purple-300/60 dark:hover:border-purple-400/50 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Laboratory Controls */}
                      <div className="flex items-center justify-between pt-4 border-t dark:border-blue-400/20 border-blue-200/60">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <motion.button
                            className="relative p-2 group/btn touch-manipulation"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                              setModalType('preview');
                            }}
                          >
                            <div className="absolute inset-0 bg-blue-100/80 dark:bg-blue-500/20 group-hover/btn:bg-blue-200/80 dark:group-hover/btn:bg-blue-500/30 rounded-lg transition-colors" />
                            <Eye className="relative w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300 group-hover/btn:text-blue-700 dark:group-hover/btn:text-blue-200" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-10 sm:-top-8">
                              Preview Project
                            </span>
                          </motion.button>

                          <motion.button
                            className="relative p-2 group/btn touch-manipulation"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                              setModalType('fullPreview');
                            }}
                          >
                            <div className="absolute inset-0 bg-purple-100/80 dark:bg-purple-500/20 group-hover/btn:bg-purple-200/80 dark:group-hover/btn:bg-purple-500/30 rounded-lg transition-colors" />
                            <Maximize2 className="relative w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-300 group-hover/btn:text-purple-700 dark:group-hover/btn:text-purple-200" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-10 sm:-top-8">
                              Full Preview
                            </span>
                          </motion.button>

                          <motion.button
                            className="relative p-2 group/btn touch-manipulation"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                              setModalType('code');
                            }}
                          >
                            <div className="absolute inset-0 bg-purple-100/80 dark:bg-purple-500/20 group-hover/btn:bg-purple-200/80 dark:group-hover/btn:bg-purple-500/30 rounded-lg transition-colors" />
                            <Code className="relative w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-300 group-hover/btn:text-purple-700 dark:group-hover/btn:text-purple-200" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-10 sm:-top-8">
                              View Code
                            </span>
                          </motion.button>
                        </div>

                        {/* Specimen Actions */}
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative p-2 group/btn"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="absolute inset-0 bg-green-100/80 dark:bg-green-500/20 group-hover/btn:bg-green-200/80 dark:group-hover/btn:bg-green-500/30 rounded-lg transition-colors" />
                              <ExternalLink className="relative w-4 h-4 text-green-600 dark:text-green-300 group-hover/btn:text-green-700 dark:group-hover/btn:text-green-200" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                                Live Demo
                              </span>
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative p-2 group/btn"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="absolute inset-0 bg-slate-100/80 dark:bg-slate-500/20 group-hover/btn:bg-slate-200/80 dark:group-hover/btn:bg-slate-500/30 rounded-lg transition-colors" />
                              <Github className="relative w-4 h-4 text-slate-600 dark:text-slate-300 group-hover/btn:text-slate-700 dark:group-hover/btn:text-slate-200" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                                Source Code
                              </span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              )
            })}
          </div>

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

      {/* Command/Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="mt-24 w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-blue-200/60 dark:border-blue-400/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-blue-200/60 dark:border-blue-400/20">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <input
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setActiveSearchIndex(0)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      setActiveSearchIndex((prev) => Math.min(prev + 1, Math.max(filteredProjects.length - 1, 0)))
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      setActiveSearchIndex((prev) => Math.max(prev - 1, 0))
                    } else if (e.key === 'Enter') {
                      e.preventDefault()
                      const target = filteredProjects[activeSearchIndex]
                      if (target) {
                        setSelectedProject(target)
                        setModalType('preview')
                        setIsSearchOpen(false)
                      }
                    } else if (e.key === 'Escape') {
                      setIsSearchOpen(false)
                    }
                  }}
                  placeholder="Type to search projects or technologies..."
                  className="flex-1 bg-transparent outline-none text-gray-800 dark:text-blue-100 placeholder-blue-500/60 dark:placeholder-blue-300/60 py-2"
                />
                <span className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">Press Esc to close</span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {filteredProjects.length === 0 ? (
                  <div className="px-5 py-8 text-center text-gray-600 dark:text-gray-300">
                    No matches. Try a different term.
                  </div>
                ) : (
                  filteredProjects.slice(0, 20).map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedProject(p)
                        setModalType('preview')
                        setIsSearchOpen(false)
                      }}
                      className={`w-full text-left px-5 py-3 flex items-center justify-between hover:bg-blue-50/80 dark:hover:bg-slate-800/60 transition-colors ${idx === activeSearchIndex ? 'bg-blue-50 dark:bg-slate-800' : ''}`}
                    >
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{p.title}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 truncate">{p.technologies.join(', ')}</div>
                      </div>
                      <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">{p.category}</div>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {modalType === 'fullPreview' && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setModalType(null);
              setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <ImageSlider
                  images={selectedProject.images}
                  title={selectedProject.title}
                  isHovered={true}
                  disableAutoAdvance={true}
                />
                <button
                  onClick={() => {
                    setModalType(null);
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-xl z-20"
                >
                  ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {modalType === 'preview' && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setModalType(null);
              setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <ImageSlider
                    images={selectedProject.images}
                    title={selectedProject.title}
                    isHovered={true}
                  />
                </div>
                <button
                  onClick={() => {
                    setModalType(null);
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-gray-900">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code View Modal */}
      <AnimatePresence>
        {modalType === 'code' && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setModalType(null);
              setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b dark:border-gray-700 border-gray-200">
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-gray-900 flex items-center gap-3">
                  <Code className="w-6 h-6 text-purple-500" />
                  {selectedProject.title} - Code Structure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Explore the technical architecture and implementation details</p>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 dark:text-white text-gray-900">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-lg border border-purple-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 dark:text-white text-gray-900">Project Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-blue-600 dark:text-blue-400">Specimen Type:</span>
                        <span className="ml-2 dark:text-gray-300 text-gray-700 capitalize">{selectedProject.specimenType.replace('-', ' ')}</span>
                      </div>
                      <div>
                        <span className="font-medium text-green-600 dark:text-green-400">Molecular Weight:</span>
                        <span className="ml-2 dark:text-gray-300 text-gray-700">{selectedProject.molecularWeight}</span>
                      </div>
                      <div>
                        <span className="font-medium text-purple-600 dark:text-purple-400">Compound:</span>
                        <span className="ml-2 dark:text-gray-300 text-gray-700">{selectedProject.compound}</span>
                      </div>
                      <div>
                        <span className="font-medium text-cyan-600 dark:text-cyan-400">Stability:</span>
                        <span className="ml-2 dark:text-gray-300 text-gray-700">{selectedProject.stability}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 dark:text-white text-gray-900">Implementation Notes</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedProject.implementationNotes}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t dark:border-gray-700 border-gray-200 flex justify-between items-center">
                <button
                  onClick={() => {
                    setModalType(null);
                    setSelectedProject(null);
                  }}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Close
                </button>
                <div className="flex gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects