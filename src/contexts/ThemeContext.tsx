import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * Theme Context Provider
 * 
 * Features:
 * - Persistent theme storage in localStorage
 * - System preference detection
 * - Smooth theme transitions
 * - CSS custom properties management
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const theme = isDark ? 'dark' : 'light'

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  useEffect(() => {
    // Update document class and localStorage
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', theme)
    
    // Update CSS custom properties for smooth transitions
    document.documentElement.style.setProperty('--theme-transition', '0.3s ease')
  }, [isDark, theme])

  const value = {
    isDark,
    toggleTheme,
    theme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}