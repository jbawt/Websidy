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

        {/* Speed Test Section */}
        <section className="tool-section">
          <div className="tool-section-header">
            <div className="tool-icon-wrapper">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#speedGradient)" strokeWidth="4" />
                <path
                  d="M 50 10 L 50 50 L 75 50"
                  stroke="url(#speedGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="6" fill="url(#speedGradient)" />
              </svg>
            </div>
            <div className="tool-section-title">
              <h2>Website Speed Test</h2>
              <p>Analyze your website's loading speed and performance metrics using Google PageSpeed Insights.</p>
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-form">
              <form onSubmit={handleSpeedTest}>
                <div className="form-group">
                  <label htmlFor="speed-url">Enter Website URL</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      id="speed-url"
                      value={speedUrl}
                      onChange={(e) => setSpeedUrl(e.target.value)}
                      placeholder="https://example.com"
                      required
                      className="tool-input"
                    />
                    <button type="submit" className="tool-submit-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Test Speed
                    </button>
                  </div>
                </div>
              </form>
              <div className="tool-info">
                <p>
                  <strong>What gets tested:</strong> Page load time, Core Web Vitals, mobile performance,
                  and optimization suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Friendliness Test Section */}
        <section className="tool-section">
          <div className="tool-section-header">
            <div className="tool-icon-wrapper">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect x="30" y="20" width="40" height="60" rx="6" fill="none" stroke="url(#mobileGradient)" strokeWidth="4" />
                <rect x="38" y="30" width="24" height="40" rx="2" fill="url(#mobileGradient)" opacity="0.3" />
                <circle cx="50" cy="75" r="3" fill="url(#mobileGradient)" />
              </svg>
            </div>
            <div className="tool-section-title">
              <h2>Mobile Friendliness Test</h2>
              <p>Check if your website is optimized for mobile devices and meets Google's mobile-friendly criteria.</p>
            </div>
          </div>

          <div className="tool-card">
            <div className="tool-form">
              <form onSubmit={handleMobileTest}>
                <div className="form-group">
                  <label htmlFor="mobile-url">Enter Website URL</label>
                  <div className="input-wrapper">
                    <input
                      type="url"
                      id="mobile-url"
                      value={mobileUrl}
                      onChange={(e) => setMobileUrl(e.target.value)}
                      placeholder="https://example.com"
                      required
                      className="tool-input"
                    />
                    <button type="submit" className="tool-submit-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Test Mobile
                    </button>
                  </div>
                </div>
              </form>
              <div className="tool-info">
                <p>
                  <strong>What gets tested:</strong> Mobile usability, viewport configuration, touch target
                  sizing, and content readability on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Tools Section */}
        <section className="tool-section">
          <div className="tool-section-header">
            <h2>More Useful Tools</h2>
            <p>Additional resources to help you optimize and improve your website.</p>
          </div>

          <div className="additional-tools-grid">
            <div className="additional-tool-card">
              <div className="additional-tool-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" stroke="url(#seoGradient)" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="url(#seoGradient)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>SEO Checker</h3>
              <p>Analyze your website's SEO performance and get optimization recommendations.</p>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="tool-external-link"
              >
                Visit Google Search Console
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="15 3 21 3 21 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="additional-tool-card">
              <div className="additional-tool-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="url(#securityGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="url(#securityGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>SSL Checker</h3>
              <p>Verify your website's SSL certificate and security configuration.</p>
              <a
                href="https://www.ssllabs.com/ssltest/"
                target="_blank"
                rel="noopener noreferrer"
                className="tool-external-link"
              >
                Visit SSL Labs
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="15 3 21 3 21 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="additional-tool-card">
              <div className="additional-tool-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="accessibilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" stroke="url(#accessibilityGradient)" strokeWidth="2" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    stroke="url(#accessibilityGradient)"
                    strokeWidth="2"
                  />
                  <line x1="12" y1="2" x2="12" y2="22" stroke="url(#accessibilityGradient)" strokeWidth="2" />
                </svg>
              </div>
              <h3>Accessibility Checker</h3>
              <p>Test your website's accessibility compliance and WCAG guidelines.</p>
              <a
                href="https://wave.webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="tool-external-link"
              >
                Visit WAVE
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="15 3 21 3 21 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UsefulToolsPage

