import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import { ScrollProvider } from './contexts/ScrollContext'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const UnderConstruction = lazy(() => import('./pages/UnderConstruction'))

/**
 * Main App Component
 * 
 * Architecture decisions:
 * - Uses React Router for SPA navigation
 * - Implements lazy loading for code splitting
 * - Provides theme and scroll contexts globally
 * - Error boundaries for graceful error handling
 * - Suspense for loading states
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ScrollProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <AnimatePresence mode="wait">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/under-construction" element={<UnderConstruction />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </main>
          </div>
        </ScrollProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App