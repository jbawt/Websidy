import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ContactPage.css'

function ContactPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [feedbackStage, setFeedbackStage] = useState(0) // 0: initial, 1: feedback, 2: revising, 3: improved
  const [isAnimating, setIsAnimating] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

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
    <div className={`contact-page ${theme}`} id="contact">
      <div className="contact-page-container">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <span className="contact-hero-eyebrow">Get in Touch</span>
            <h1>Let's Build Something Amazing Together</h1>
            <p className="contact-hero-description">
              Have a project in mind? Want to learn more about our services? We'd love to hear from you.
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="contact-hero-visual">
            <svg viewBox="0 0 500 400" className="contact-hero-svg">
              <defs>
                <linearGradient id="contactHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <filter id="contactGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Envelope/mail design */}
              <rect x="150" y="100" width="200" height="150" rx="8" fill="none" stroke="url(#contactHeroGradient)" strokeWidth="4" className="envelope-base" />
              <path d="M 150 100 L 250 180 L 350 100" fill="none" stroke="url(#contactHeroGradient)" strokeWidth="4" strokeLinecap="round" className="envelope-flap" />
              {/* Message lines */}
              <line x1="180" y1="140" x2="320" y2="140" stroke="url(#contactHeroGradient)" strokeWidth="3" opacity="0.6" className="message-line" />
              <line x1="180" y1="170" x2="280" y2="170" stroke="url(#contactHeroGradient)" strokeWidth="3" opacity="0.5" className="message-line" style={{ animationDelay: '0.2s' }} />
              <line x1="180" y1="200" x2="300" y2="200" stroke="url(#contactHeroGradient)" strokeWidth="3" opacity="0.4" className="message-line" style={{ animationDelay: '0.4s' }} />
              {/* Floating particles */}
              <circle cx="100" cy="80" r="6" fill="url(#contactHeroGradient)" className="float-particle" />
              <circle cx="400" cy="120" r="5" fill="url(#contactHeroGradient)" className="float-particle" style={{ animationDelay: '0.3s' }} />
              <circle cx="80" cy="280" r="7" fill="url(#contactHeroGradient)" className="float-particle" style={{ animationDelay: '0.6s' }} />
              <circle cx="420" cy="300" r="5" fill="url(#contactHeroGradient)" className="float-particle" style={{ animationDelay: '0.9s' }} />
              {/* Connection lines */}
              <path d="M 100 80 Q 150 50 200 100" stroke="url(#contactHeroGradient)" strokeWidth="2" opacity="0.3" fill="none" className="connection-line" />
              <path d="M 400 120 Q 350 90 300 100" stroke="url(#contactHeroGradient)" strokeWidth="2" opacity="0.3" fill="none" className="connection-line" style={{ animationDelay: '0.5s' }} />
            </svg>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="contact-form-wrapper">
            <div className="form-feedback-side">
              <div className="feedback-demo-container-inline">
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
            </div>
            <div className="form-content-side">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="button-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg viewBox="0 0 24 24" fill="none" className="send-icon">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <div className="submit-success">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage

