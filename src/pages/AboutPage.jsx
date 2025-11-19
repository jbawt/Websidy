import React from 'react'
import { useSelector } from 'react-redux'
import './AboutPage.css'

function AboutPage() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className={`about-page ${theme}`}>
      <div className="about-page-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-hero-eyebrow">About Websidy</span>
            <h1>Building Digital Excellence, One Site at a Time</h1>
            <p className="about-hero-description">
              We're a team of designers and developers passionate about creating beautiful, functional
              websites that help businesses thrive online. Our approach combines modern design with
              practical solutions.
            </p>
          </div>
          <div className="about-hero-visual">
            <svg viewBox="0 0 400 400" className="about-hero-svg">
              <defs>
                <linearGradient id="aboutHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Central design element */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="url(#aboutHeroGradient)" strokeWidth="3" opacity="0.6" className="pulse-circle" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#aboutHeroGradient)" strokeWidth="2" opacity="0.4" className="pulse-circle" style={{ animationDelay: '0.5s' }} />
              {/* Geometric shapes */}
              <polygon points="200,120 240,180 200,240 160,180" fill="url(#aboutHeroGradient)" opacity="0.3" className="rotate-shape" />
              <polygon points="200,160 260,200 200,240 140,200" fill="none" stroke="url(#aboutHeroGradient)" strokeWidth="2" opacity="0.5" className="rotate-shape-reverse" />
              {/* Floating particles */}
              <circle cx="120" cy="120" r="4" fill="url(#aboutHeroGradient)" className="float-particle" />
              <circle cx="280" cy="150" r="3" fill="url(#aboutHeroGradient)" className="float-particle" style={{ animationDelay: '0.3s' }} />
              <circle cx="150" cy="280" r="5" fill="url(#aboutHeroGradient)" className="float-particle" style={{ animationDelay: '0.6s' }} />
              <circle cx="300" cy="280" r="4" fill="url(#aboutHeroGradient)" className="float-particle" style={{ animationDelay: '0.9s' }} />
              {/* Connecting lines */}
              <line x1="200" y1="120" x2="200" y2="280" stroke="url(#aboutHeroGradient)" strokeWidth="1" opacity="0.2" />
              <line x1="120" y1="200" x2="280" y2="200" stroke="url(#aboutHeroGradient)" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission-section">
          <div className="about-mission-visual">
            <svg viewBox="0 0 300 300" className="mission-svg">
              <defs>
                <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
              {/* Target/bullseye design */}
              <circle cx="150" cy="150" r="120" fill="none" stroke="url(#missionGradient)" strokeWidth="2" opacity="0.3" />
              <circle cx="150" cy="150" r="90" fill="none" stroke="url(#missionGradient)" strokeWidth="2" opacity="0.4" />
              <circle cx="150" cy="150" r="60" fill="url(#missionGradient)" opacity="0.2" />
              <circle cx="150" cy="150" r="30" fill="url(#missionGradient)" opacity="0.5" />
              {/* Arrow pointing to center */}
              <path d="M 150 20 L 150 60 L 145 55 L 150 60 L 155 55 Z" fill="url(#missionGradient)" className="pulse-arrow" />
            </svg>
          </div>
          <div className="about-mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower small and medium-sized businesses with professional digital presence that
              doesn't require a technical team. We believe every business deserves a website that
              reflects their brand and drives results.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="valueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#valueGradient1)" strokeWidth="2" />
                  <path d="M2 17L12 22L22 17" stroke="url(#valueGradient1)" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="url(#valueGradient1)" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Quality First</h3>
                <p>Every project meets our high standards for design and functionality.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="valueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" stroke="url(#valueGradient2)" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="url(#valueGradient2)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Fast Delivery</h3>
                <p>We work efficiently without compromising on quality or attention to detail.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="valueGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <path d="M17 21V19C17 17.9 16.1 17 15 17H5C3.9 17 3 17.9 3 19V21" stroke="url(#valueGradient3)" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" stroke="url(#valueGradient3)" strokeWidth="2" />
                    <path d="M23 21V19C23 17.9 22.1 17 21 17H20" stroke="url(#valueGradient3)" strokeWidth="2" />
                    <path d="M16 11C18.2 11 20 9.2 20 7C20 4.8 18.2 3 16 3" stroke="url(#valueGradient3)" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Client Focused</h3>
                <p>Your success is our success. We're here to support you every step of the way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="about-process-section">
          <div className="about-process-header">
            <span className="process-eyebrow">How We Work</span>
            <h2>Our Process</h2>
            <p>From initial concept to launch, we follow a proven process that ensures quality results.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-visual">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="stepGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#stepGradient1)" strokeWidth="3" />
                  <path d="M 30 50 L 45 65 L 70 35" stroke="url(#stepGradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <h3>Discovery</h3>
              <p>We start by understanding your business, goals, and target audience to create a strategy that works.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-visual">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="stepGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="url(#stepGradient2)" strokeWidth="3" />
                  <rect x="30" y="30" width="20" height="15" fill="url(#stepGradient2)" opacity="0.5" />
                  <rect x="55" y="30" width="15" height="15" fill="url(#stepGradient2)" opacity="0.3" />
                  <rect x="30" y="50" width="40" height="8" fill="url(#stepGradient2)" opacity="0.4" />
                </svg>
              </div>
              <h3>Design</h3>
              <p>Our team creates beautiful, user-friendly designs that align with your brand and convert visitors.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-visual">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="stepGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <path d="M 50 20 L 70 40 L 50 60 L 30 40 Z" fill="url(#stepGradient3)" opacity="0.6" />
                  <circle cx="50" cy="50" r="8" fill="url(#stepGradient3)" />
                  <path d="M 50 60 L 50 80" stroke="url(#stepGradient3)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Development</h3>
              <p>We build fast, responsive websites using modern technologies and best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-visual">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="stepGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="url(#stepGradient4)" strokeWidth="3" />
                  <path d="M 50 20 L 50 50 L 70 70" stroke="url(#stepGradient4)" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="5" fill="url(#stepGradient4)" />
                </svg>
              </div>
              <h3>Launch & Support</h3>
              <p>We handle deployment, provide training, and offer ongoing support to ensure your success.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="statGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <rect x="12" y="20" width="40" height="32" rx="4" stroke="url(#statGradient1)" strokeWidth="2.5" />
                  <line x1="12" y1="32" x2="52" y2="32" stroke="url(#statGradient1)" strokeWidth="2" />
                  <circle cx="20" cy="26" r="2" fill="url(#statGradient1)" />
                </svg>
              </div>
              <div className="stat-value">50+</div>
              <div className="stat-label">Sites Launched</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="statGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <path d="M 32 12 L 40 28 L 56 30 L 44 42 L 48 58 L 32 50 L 16 58 L 20 42 L 8 30 L 24 28 Z" fill="url(#statGradient2)" opacity="0.6" />
                </svg>
              </div>
              <div className="stat-value">2x</div>
              <div className="stat-label">Avg. Lift in Leads</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="statGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="20" fill="none" stroke="url(#statGradient3)" strokeWidth="3" />
                  <path d="M 32 20 L 32 32 L 42 42" stroke="url(#statGradient3)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="stat-value">7 Days</div>
              <div className="stat-label">Typical Turnaround</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="statGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="32" r="8" fill="url(#statGradient4)" opacity="0.6" />
                  <circle cx="32" cy="32" r="8" fill="url(#statGradient4)" opacity="0.8" />
                  <circle cx="44" cy="32" r="8" fill="url(#statGradient4)" />
                  <line x1="28" y1="32" x2="36" y2="32" stroke="url(#statGradient4)" strokeWidth="2" />
                  <line x1="40" y1="32" x2="48" y2="32" stroke="url(#statGradient4)" strokeWidth="2" />
                </svg>
              </div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage

