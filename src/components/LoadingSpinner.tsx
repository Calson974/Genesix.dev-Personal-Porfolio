import React from 'react'
import { motion } from 'framer-motion'

/**
 * Loading Spinner Component
 * 
 * Features:
 * - Smooth gradient animation
 * - Responsive sizing
 * - Accessible loading state
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Inner gradient ring */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  )
}

export default LoadingSpinner