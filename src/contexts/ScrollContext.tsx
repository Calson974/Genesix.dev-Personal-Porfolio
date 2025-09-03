import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ScrollContextType {
  scrollY: number
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

interface ScrollProviderProps {
  children: ReactNode
}

/**
 * Scroll Context Provider
 * 
 * Features:
 * - Tracks scroll position for header effects
 * - Smooth scroll navigation
 * - Performance optimized with throttling
 */
export function ScrollProvider({ children }: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0)
  const isScrolled = scrollY > 50

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    let ticking = false

    const updateScrollY = () => {
      setScrollY(window.scrollY)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const value = {
    scrollY,
    isScrolled,
    scrollToSection
  }

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}