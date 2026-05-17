import React, { useState, useEffect, useRef } from 'react'
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
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    // Scroll to top will be handled by ScrollToTop component
  }

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleDropdownMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName)
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

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
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`} ref={dropdownRef}>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            <span>Home</span>
          </Link>

          {/* Services Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleDropdownMouseEnter('services')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button 
              className={`nav-link nav-link-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('services')}
            >
              <span>Services</span>
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
              <Link to="/services#website-design" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="1" fill="currentColor"/>
                </svg>
                <span>Website Design</span>
              </Link>
              <Link to="/services#social-media" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Digital Presence</span>
              </Link>
              <Link to="/services" className="dropdown-item dropdown-item-all" onClick={handleLinkClick}>
                <span>View All Services</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <Link to="/pricing" className="nav-link" onClick={handleLinkClick}>
            <span>Pricing</span>
          </Link>

          <Link to="/portfolio" className="nav-link" onClick={handleLinkClick}>
            <span>Portfolio</span>
          </Link>

          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            <span>About</span>
          </Link>

          <Link to="/contact" className="nav-link nav-link-cta" onClick={handleLinkClick}>
            <span>Contact</span>
          </Link>

          <div className="theme-toggle-wrapper">
            <button
              onClick={handleToggleTheme}
              className={`theme-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
              aria-label="Toggle theme"
            >
              <span className="theme-switch-track">
                <span className="theme-switch-thumb">
                  <span className="theme-switch-icon" aria-hidden="true">
                    {theme === 'dark' ? '🌙' : '☀'}
                  </span>
                </span>
              </span>
            </button>
            <span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

