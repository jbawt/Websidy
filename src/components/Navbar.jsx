import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/slices/themeSlice'
import Logo from './Logo'
import './Navbar.css'

function Navbar() {
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    // Scroll to top will be handled by ScrollToTop component
  }

  const handleAnchorClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
      window.location.href = `/${hash}`
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo />
        </Link>
        <Link to="/" className="logo-text">Websidy</Link>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link>
          <Link to="/pricing" className="nav-link" onClick={handleLinkClick}>Pricing</Link>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
          <button onClick={handleToggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg
                className="theme-icon moon-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="currentColor"
                />
                <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.6" />
                <circle cx="19" cy="10" r="0.5" fill="currentColor" opacity="0.5" />
                <circle cx="17" cy="8" r="0.5" fill="currentColor" opacity="0.4" />
              </svg>
            ) : (
              <svg
                className="theme-icon sun-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

