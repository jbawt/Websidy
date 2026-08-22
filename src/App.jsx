import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './store/slices/themeSlice'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const PricingPage = React.lazy(() => import('./pages/PricingPage'))
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'))

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
          <Route
            path="/"
            element={
              <Suspense fallback={null}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={null}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={null}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={null}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense fallback={null}>
                <PricingPage />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={null}>
                <GalleryPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

