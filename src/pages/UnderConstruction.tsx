import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Construction, ArrowLeft, Download, Sparkles, Zap, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Under Construction Page Component
 *
 * Features:
 * - Stunning visual design with animated elements
 * - Particle effects and gradient backgrounds
 * - Professional messaging about CV being prepared
 * - Navigation back to main site
 * - Responsive design matching portfolio aesthetic
 */
const UnderConstruction: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Under Construction - Calson Genesis</title>
        <meta name="description" content="CV download page is under construction. Professional resume coming soon!" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 py-20 sm:py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Floating Geometric Shapes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                i % 3 === 0
                  ? 'w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20'
                  : i % 3 === 1
                  ? 'w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20'
                  : 'w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-purple-500/20'
              } backdrop-blur-sm`}
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${15 + (i * 5)}%`,
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + (i * 2),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-500/10 to-indigo-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main Icon */}
            <motion.div
              className="mb-6 sm:mb-8 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                <Construction className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>

              {/* Animated Sparkle Effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + (i * 10)}%`,
                    left: `${15 + (i * 12)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Under Construction
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              🚧 My professional CV is currently being crafted with precision and care.
              <br className="hidden sm:block" />
              <span className="sm:inline block mt-2">The download feature will be available soon!</span>
            </motion.p>

            {/* Features List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                {
                  icon: Wrench,
                  title: 'Professional Design',
                  description: 'Clean, modern layout showcasing my skills and experience',
                },
                {
                  icon: Download,
                  title: 'Easy Download',
                  description: 'One-click PDF download for your convenience',
                },
                {
                  icon: Zap,
                  title: 'Always Updated',
                  description: 'Regular updates reflecting my latest achievements',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/20 dark:border-gray-700/20 shadow-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link to="/" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Back to Portfolio
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Me Instead
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="max-w-xs sm:max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-gray-200/20 dark:border-gray-700/20">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Construction className="w-3 h-3 sm:w-4 sm:h-4" />
                  Development Progress
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 sm:h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  75% Complete • Available Soon
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default UnderConstruction
