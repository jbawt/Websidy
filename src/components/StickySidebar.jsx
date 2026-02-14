import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './StickySidebar.css'

function StickySidebar() {
  const theme = useSelector((state) => state.theme.mode)
  const location = useLocation()
  const navigate = useNavigate()

  const handlePricingClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // On home page, scroll to pricing section
      const element = document.getElementById('pricing')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On other pages, navigate to pricing page
      navigate('/pricing')
    }
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    // Navigate to contact page
    navigate('/contact')
  }

  return (
    <aside className={`sticky-sidebar ${theme}`}>
      <div className="sidebar-buttons">
        <button
          className="sidebar-button sidebar-button-pricing"
          onClick={handlePricingClick}
          aria-label="View Pricing"
        >
          <span className="sidebar-icon sidebar-icon-dollar" aria-hidden="true">$</span>
          <span className="sidebar-button-text">View Pricing</span>
        </button>
        <button
          className="sidebar-button sidebar-button-contact"
          onClick={handleContactClick}
          aria-label="Get in Touch"
        >
          <svg
            className="sidebar-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sidebarContactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="url(#sidebarContactGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sidebar-button-text">Get in Touch</span>
        </button>
      </div>
      <div className="sidebar-social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          className="sidebar-social-link"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </aside>
  )
}

export default StickySidebar

