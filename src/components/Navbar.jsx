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
                <span>Social Media</span>
              </Link>
              <Link to="/services#web-hosting" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Web Hosting</span>
              </Link>
              <Link to="/services" className="dropdown-item dropdown-item-all" onClick={handleLinkClick}>
                <span>View All Services</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>
            <span>Portfolio</span>
          </Link>
          
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            <span>About</span>
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleDropdownMouseEnter('resources')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button 
              className={`nav-link nav-link-dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('resources')}
            >
              <span>Resources</span>
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'resources' ? 'active' : ''}`}>
              <Link to="/tools" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Tools</span>
              </Link>
              <Link to="/faq" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>FAQ</span>
              </Link>
              <Link to="/pricing" className="dropdown-item" onClick={handleLinkClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Pricing</span>
              </Link>
            </div>
          </div>

          <Link to="/contact" className="nav-link nav-link-cta" onClick={handleLinkClick}>
            <span>Contact</span>
          </Link>
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

