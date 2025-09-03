import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ScrollToTop from '../components/ScrollToTop'

/**
 * Home Page Component
 * 
 * Features:
 * - SEO optimized with React Helmet
 * - Modular section components
 * - Smooth scroll navigation
 * - Performance optimized
 */
const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Calson Genesis - Frontend Developer Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio of Calson Genesis, a passionate Frontend Developer from Cameroon specializing in React, Vue.js, and modern web technologies." 
        />
        <meta name="keywords" content="Frontend Developer, React, Vue.js, TypeScript, Web Development, Portfolio" />
        <link rel="canonical" href="https://calson-genesis.dev" />
      </Helmet>

      <div className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <ScrollToTop />
      </div>
    </>
  )
}

export default Home