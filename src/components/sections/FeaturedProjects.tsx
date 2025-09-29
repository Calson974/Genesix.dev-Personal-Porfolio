import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Search, Microscope, Beaker, Atom, Dna, Database, Globe, Eye, Code, Sparkles, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * DIGITAL LABORATORY: Revolutionary Projects Showcase
 *
 * A completely unique approach presenting projects as:
 * - Scientific specimens in digital laboratory displays
 * - Interactive microscopic code analysis
 * - Holographic data visualizations
 * - Experimental tech stack compounds
 * - Quantum field visualizations
 */
const FeaturedProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [modalType, setModalType] = useState<'preview' | 'fullPreview' | 'code' | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with modern architecture',
      longDescription: 'A comprehensive e-commerce platform featuring product catalog, secure payment processing, user authentication, inventory management, and comprehensive admin dashboard with real-time analytics.',
      images: [
        '/img/Nova-shop img/novashop-img1.png',
        '/img/Nova-shop img/novashop-img2.png',
        '/img/Nova-shop img/novashop-img3.png',
        '/img/Nova-shop img/novashop-img4.png',
        '/img/Nova-shop img/novashop-img5.png'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Next.js'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/NOVAShop',
      liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'web-ecosystem',
      compound: 'Full-Stack Compound',
      molecularWeight: '7 Technologies',
      stability: 'Production Stable'
    },
    {
      id: 2,
      title: 'Memory Card Game',
      description: 'Interactive cognitive training application',
      longDescription: 'An engaging card-matching game with multiple difficulty levels, progress tracking, and cognitive skill development features with smooth animations and responsive design.',
      images: [
        '/img/Magic-card-game img/magiccard-img1.png',
        '/img/Magic-card-game img/magiccard-img2.png',
        '/img/Magic-card-game img/magiccard-img3.png'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Local Storage', 'GSAP'],
      category: 'game',
      githubUrl: 'https://github.com/Calson974/Memory-Magic-Memory-Game',
      liveUrl: 'https://memory-magic-memory-game-git-master-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'neural-network',
      compound: 'Interactive Compound',
      molecularWeight: '6 Technologies',
      stability: 'Memory Optimized'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity application with modern UX principles',
      longDescription: 'A streamlined task management solution with intuitive drag-and-drop interface, team collaboration features, real-time updates, and comprehensive project tracking capabilities.',
      images: [
        '/img/List-it-yourself img/list-it img1.png',
        '/img/List-it-yourself img/list-it img2.png',
        '/img/List-it-yourself img/list-it img3.png'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
      category: 'web-app',
      githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
      liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
      featured: true,
      specimenType: 'data-structure',
      compound: 'Real-time Compound',
      molecularWeight: '6 Technologies',
      stability: 'Highly Scalable'
    }
  ]

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
        intervalRef.current = setInterval(() => {
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

  return (
    <section className="min-h-screen py-20 relative overflow-hidden dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
                className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-slate-800/50 backdrop-blur-xl border border-blue-200/80 dark:border-blue-400/30 rounded-2xl text-gray-800 dark:text-blue-100 placeholder-blue-500/60 dark:placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </div>
          </div>
        </motion.div>

        {/* Specimen Laboratory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16" ref={containerRef}>
          {projects.map((project, index) => {
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

                  {/* Specimen Number */}
                  <div className="absolute top-4 right-4 bg-black/60 dark:bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="text-xs text-blue-300 font-mono">#{String(project.id).padStart(3, '0')}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Laboratory Analysis Station */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-slate-800/50 dark:to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-200/60 dark:border-blue-400/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Beaker className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <Dna className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <Atom className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-gray-900">
              Ready to Synthesize Something
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h3>

            <p className="text-xl dark:text-blue-200/80 text-gray-700 mb-8 leading-relaxed">
              Let's combine our expertise in our digital laboratory to create technological compounds
              that push the boundaries of innovation and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/projects">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    View All Projects
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="group relative px-8 py-4 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-gray-800 dark:text-white rounded-2xl font-bold text-lg border border-blue-200/60 dark:border-blue-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Initiate Collaboration
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

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
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      This project demonstrates advanced {selectedProject.technologies.slice(0, 3).join(', ')} integration with a focus on scalability, performance, and user experience. The architecture follows modern best practices with clean code structure and comprehensive error handling.
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
    </section>
  )
}

export default FeaturedProjects