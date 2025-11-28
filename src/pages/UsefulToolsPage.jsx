import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './UsefulToolsPage.css'

function UsefulToolsPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [speedUrl, setSpeedUrl] = useState('')
  const [mobileUrl, setMobileUrl] = useState('')
  const [speedResults, setSpeedResults] = useState(null)
  const [mobileResults, setMobileResults] = useState(null)

  const handleSpeedTest = (e) => {
    e.preventDefault()
    if (speedUrl) {
      // Open Google PageSpeed Insights in a new window
      const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(speedUrl)}`
      window.open(pageSpeedUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleMobileTest = (e) => {
    e.preventDefault()
    if (mobileUrl) {
      // Open Google Mobile-Friendly Test in a new window
      const mobileTestUrl = `https://search.google.com/test/mobile-friendly?url=${encodeURIComponent(mobileUrl)}`
      window.open(mobileTestUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={`useful-tools-page ${theme}`}>
      <div className="tools-page-container">
        {/* Hero Section */}
        <section className="tools-hero">
          <div className="tools-hero-content">
            <span className="tools-hero-eyebrow">Developer Tools</span>
            <h1>Useful Tools for Your Website</h1>
            <p className="tools-hero-description">
              Test your website's performance, mobile-friendliness, and more with our curated collection
              of free tools to help you optimize your online presence.
            </p>
          </div>
          <div className="tools-hero-visual">
            <svg viewBox="0 0 400 300" className="tools-hero-svg">
              <defs>
                <linearGradient id="toolsHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <filter id="toolsGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Wrench/Tool icon */}
              <path
                d="M 200 50 L 250 100 L 300 50 L 280 30 L 220 30 Z"
                fill="url(#toolsHeroGradient)"
                filter="url(#toolsGlow)"
                opacity="0.8"
                className="tool-icon"
              />
              <circle cx="200" cy="50" r="8" fill="url(#toolsHeroGradient)" filter="url(#toolsGlow)" />

              {/* Speedometer */}
              <circle cx="150" cy="200" r="50" fill="none" stroke="url(#toolsHeroGradient)" strokeWidth="4" filter="url(#toolsGlow)" />
              <path
                d="M 150 150 L 150 200 L 180 200"
                stroke="url(#toolsHeroGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#toolsGlow)"
              />
              <circle cx="150" cy="200" r="4" fill="url(#toolsHeroGradient)" />

              {/* Mobile device */}
              <rect x="250" y="150" width="80" height="120" rx="12" fill="none" stroke="url(#toolsHeroGradient)" strokeWidth="3" filter="url(#toolsGlow)" />
              <rect x="260" y="170" width="60" height="80" rx="4" fill="url(#toolsHeroGradient)" opacity="0.3" />

              {/* Floating particles */}
              <circle cx="100" cy="80" r="4" fill="url(#toolsHeroGradient)" opacity="0.6" className="tools-particle" style={{ animationDelay: '0.2s' }} />
              <circle cx="320" cy="100" r="3" fill="url(#toolsHeroGradient)" opacity="0.5" className="tools-particle" style={{ animationDelay: '0.8s' }} />
              <circle cx="80" cy="240" r="3.5" fill="url(#toolsHeroGradient)" opacity="0.4" className="tools-particle" style={{ animationDelay: '1.4s' }} />
            </svg>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UsefulToolsPage

