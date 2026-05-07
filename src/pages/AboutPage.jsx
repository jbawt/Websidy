import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import arrowsUpLogo from '../assets/arrows_up_logo.png'
import userProfileIcon from '../assets/user_profile_icon.png'
import './AboutPage.css'

function AboutPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [feedbackStage, setFeedbackStage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleFeedbackDemo = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setFeedbackStage(1)
    
    setTimeout(() => {
      setFeedbackStage(2)
      setTimeout(() => {
        setFeedbackStage(3)
        setTimeout(() => {
          setFeedbackStage(0)
          setIsAnimating(false)
        }, 3000)
      }, 2500)
    }, 3000)
  }

  return (
    <main className={`about-page ${theme}`}>
      <div className="about-page-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-hero-eyebrow">About Websidy</span>
            <h1>Web Design & Digital Marketing for Central Alberta</h1>
            <p className="about-hero-description">
              Based in Sylvan Lake, we help businesses across Central Alberta build professional websites and grow their online presence. We combine modern design with practical, results-focused solutions, so you get a site that looks great and works for your goals.
            </p>
          </div>
          <div className="about-hero-visual">
            <div className="about-hero-image-wrap">
              <svg viewBox="0 0 300 300" className="about-hero-svg-bg" aria-hidden="true">
                <defs>
                  <linearGradient id="aboutHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#1e40af" />
                    <stop offset="75%" stopColor="#ff6f61" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                {/* Rounded square frame - same as mission section */}
                <path d="M 55 150 Q 55 55 150 55 Q 245 55 245 150 Q 245 245 150 245 Q 55 245 55 150 Z" fill="none" stroke="url(#aboutHeroGradient)" strokeWidth="2" opacity="0.35" className="about-mission-square about-mission-square-1" />
                <path d="M 70 150 Q 70 70 150 70 Q 230 70 230 150 Q 230 230 150 230 Q 70 230 70 150 Z" fill="none" stroke="url(#aboutHeroGradient)" strokeWidth="1.5" strokeDasharray="6 12" opacity="0.5" className="about-mission-square about-mission-square-2" />
              </svg>
              <img src={userProfileIcon} alt="" className="about-hero-image" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission-section">
          <div className="about-mission-intro">
            <h2>Our Mission</h2>
            <p>
              To give small and medium-sized businesses in Sylvan Lake and Central Alberta a professional digital presence, without needing a technical team. We believe every local business deserves a website that reflects their brand, ranks well in search, and helps them grow.
            </p>
          </div>
          <div className="about-mission-visual">
            <div className="about-mission-image-wrap">
              <svg viewBox="0 0 300 300" className="about-mission-svg-bg" aria-hidden="true">
                <defs>
                  <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#ff6f61" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                {/* Rounded square frame */}
                <path d="M 55 150 Q 55 55 150 55 Q 245 55 245 150 Q 245 245 150 245 Q 55 245 55 150 Z" fill="none" stroke="url(#missionGradient)" strokeWidth="2" opacity="0.35" className="about-mission-square about-mission-square-1" />
                <path d="M 70 150 Q 70 70 150 70 Q 230 70 230 150 Q 230 230 150 230 Q 70 230 70 150 Z" fill="none" stroke="url(#missionGradient)" strokeWidth="1.5" strokeDasharray="6 12" opacity="0.5" className="about-mission-square about-mission-square-2" />
              </svg>
              <img src={arrowsUpLogo} alt="" className="about-mission-image" />
            </div>
          </div>
          <div className="mission-values">
              <div className="value-item">
                <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="valueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="55%" stopColor="#ff6f61" />
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
                        <stop offset="55%" stopColor="#ff6f61" />
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
                        <stop offset="55%" stopColor="#ff6f61" />
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
                <p>Your success is our success. We work with businesses across Central Alberta and are here to support you every step of the way.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="valueGradient4Mission" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="55%" stopColor="#ff6f61" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z"
                      stroke="url(#valueGradient4Mission)"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 9L12 13L17 9"
                      stroke="url(#valueGradient4Mission)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Clear Communication</h3>
                <p>We keep timelines, updates, and next steps transparent so you always know exactly where your project stands.</p>
              </div>
            </div>
        </section>

        {/* Interactive Feedback Section */}
      </div>
      <section className="about-feedback-section">
        <div className="about-feedback-container">
          <div className="feedback-demo-header">
            <span className="feedback-demo-eyebrow">Our Approach</span>
            <h2>Your Feedback Shapes Our Work</h2>
            <p className="feedback-demo-description">
              We believe the best results come from collaboration. Click the design below to see how we
              incorporate your feedback into every project.
            </p>
          </div>

          <div 
            className={`feedback-demo-interactive ${feedbackStage > 0 ? `stage-${feedbackStage}` : ''}`}
            onClick={handleFeedbackDemo}
          >
            {/* Design Mockup */}
            <div className="design-mockup">
              <div className="mockup-browser">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="browser-url">yourwebsite.com</div>
                </div>
                <div className="browser-content">
                  {/* Initial Design */}
                  <div className={`design-version design-initial ${feedbackStage === 0 ? 'active' : ''}`}>
                    <div className="design-header">
                      <div className="design-logo-placeholder"></div>
                      <nav className="design-nav">
                        <div className="nav-item"></div>
                        <div className="nav-item"></div>
                        <div className="nav-item"></div>
                      </nav>
                    </div>
                    <div className="design-hero">
                      <div className="hero-text-line"></div>
                      <div className="hero-text-line short"></div>
                    </div>
                    <div className="design-content">
                      <div className="content-card"></div>
                      <div className="content-card"></div>
                      <div className="content-card"></div>
                    </div>
                  </div>

                  {/* Broken/Feedback Design */}
                  <div className={`design-version design-broken ${feedbackStage === 1 ? 'active' : ''}`}>
                    <div className="design-header broken">
                      <div className="design-logo-placeholder broken"></div>
                      <nav className="design-nav broken">
                        <div className="nav-item broken"></div>
                        <div className="nav-item broken"></div>
                        <div className="nav-item broken"></div>
                      </nav>
                    </div>
                    <div className="design-hero broken">
                      <div className="hero-text-line broken"></div>
                      <div className="hero-text-line short broken"></div>
                    </div>
                    <div className="design-content broken">
                      <div className="content-card broken"></div>
                      <div className="content-card broken"></div>
                      <div className="content-card broken"></div>
                    </div>
                  </div>

                  {/* Revising Design */}
                  <div className={`design-version design-revising ${feedbackStage === 2 ? 'active' : ''}`}>
                    <div className="design-header revising">
                      <div className="design-logo-placeholder revising"></div>
                      <nav className="design-nav revising">
                        <div className="nav-item revising"></div>
                        <div className="nav-item revising"></div>
                        <div className="nav-item revising"></div>
                      </nav>
                    </div>
                    <div className="design-hero revising">
                      <div className="hero-text-line revising"></div>
                      <div className="hero-text-line short revising"></div>
                    </div>
                    <div className="design-content revising">
                      <div className="content-card revising"></div>
                      <div className="content-card revising"></div>
                      <div className="content-card revising"></div>
                    </div>
                    <div className="revising-indicator">
                      <div className="pulse-ring"></div>
                      <div className="pulse-ring"></div>
                      <div className="pulse-ring"></div>
                    </div>
                  </div>

                  {/* Improved Design */}
                  <div className={`design-version design-improved ${feedbackStage === 3 ? 'active' : ''}`}>
                    <div className="design-header improved">
                      <div className="design-logo-placeholder improved"></div>
                      <nav className="design-nav improved">
                        <div className="nav-item improved"></div>
                        <div className="nav-item improved"></div>
                        <div className="nav-item improved"></div>
                      </nav>
                    </div>
                    <div className="design-hero improved">
                      <div className="hero-text-line improved"></div>
                      <div className="hero-text-line short improved"></div>
                    </div>
                    <div className="design-content improved">
                      <div className="content-card improved"></div>
                      <div className="content-card improved"></div>
                      <div className="content-card improved"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Timeline */}
            <div className="feedback-timeline">
              <div className={`timeline-step ${feedbackStage >= 0 ? 'active' : ''} ${feedbackStage === 0 ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Initial Design</h4>
                  <p>We create the first version</p>
                </div>
              </div>

              <div className={`timeline-step ${feedbackStage >= 1 ? 'active' : ''} ${feedbackStage === 1 ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Your Feedback</h4>
                  <p>You share your thoughts</p>
                </div>
                {feedbackStage === 1 && (
                  <div className="feedback-bubble-timeline">
                    <div className="feedback-avatar-small">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="feedback-message">
                      "Could we adjust the spacing and alignment? The layout feels a bit off."
                    </div>
                  </div>
                )}
              </div>

              <div className={`timeline-step ${feedbackStage >= 2 ? 'active' : ''} ${feedbackStage === 2 ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>We Revise</h4>
                  <p>We implement your feedback</p>
                </div>
                {feedbackStage === 2 && (
                  <div className="revising-animation">
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                  </div>
                )}
              </div>

              <div className={`timeline-step ${feedbackStage >= 3 ? 'active' : ''} ${feedbackStage === 3 ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Improved Result</h4>
                  <p>Refined design ready for review</p>
                </div>
                {feedbackStage === 3 && (
                  <div className="success-indicator">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Click Hint */}
            {feedbackStage === 0 && !isAnimating && (
              <div className="click-hint">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Click to see the feedback process</span>
              </div>
            )}
          </div>

          <div className="feedback-demo-message">
            <p>
              <strong>We listen. We adapt. We deliver.</strong> Your input is invaluable, and we're
              committed to making revisions until you're completely satisfied with the result.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage

