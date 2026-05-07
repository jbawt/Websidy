import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './store/slices/themeSlice'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import GalleryPage from './pages/GalleryPage'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  useEffect(() => {
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'))
    }

    // Set initial theme based on system preference
    dispatch(setTheme(mediaQuery.matches ? 'dark' : 'light'))

    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [dispatch])

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${theme}`}>
        <Navbar />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/portfolio" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

