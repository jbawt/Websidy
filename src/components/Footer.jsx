import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Footer.css'

function Footer() {
  const theme = useSelector((state) => state.theme.mode)
  const location = useLocation()

  const handleLinkClick = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')?.substring(1)
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
      window.location.href = `/${targetId}`
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        {/* SVG Animation Section */}
        <div className="footer-svg-section">
          <svg
            className="footer-animation"
            viewBox="0 0 400 120"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="footerGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            
            {/* Animated waves */}
            <path
              d="M0,60 Q100,40 200,60 T400,60"
              className="wave wave-1"
              fill="none"
              strokeWidth="2"
            />
            <path
              d="M0,80 Q100,60 200,80 T400,80"
              className="wave wave-2"
              fill="none"
              strokeWidth="2"
            />
            
            {/* Floating particles */}
            <circle cx="50" cy="40" r="3" className="particle particle-1" />
            <circle cx="150" cy="30" r="2.5" className="particle particle-2" />
            <circle cx="250" cy="45" r="2" className="particle particle-3" />
            <circle cx="350" cy="35" r="2.5" className="particle particle-4" />
            
            {/* Connecting nodes */}
            <circle cx="100" cy="60" r="4" className="node node-1" />
            <circle cx="200" cy="60" r="4" className="node node-2" />
            <circle cx="300" cy="60" r="4" className="node node-3" />
            
            {/* Connecting lines */}
            <line x1="100" y1="60" x2="200" y2="60" className="connection connection-1" strokeWidth="1.5" />
            <line x1="200" y1="60" x2="300" y2="60" className="connection connection-2" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
         <div className="footer-section footer-copyright">
            <p className="copyright">© 2025 Websidy.</p>
          </div>

          <nav className="footer-section footer-nav">
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer-section footer-social">
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg
                  className="social-icon facebook-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg
                  className="social-icon instagram-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

