import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ScrollContextType {
  scrollY: number
  isScrolled: boolean
  scrollDirection: 'up' | 'down' | null
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
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
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
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
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
  }, [lastScrollY])

  const value = {
    scrollY,
    isScrolled,
    scrollDirection,
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