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
            <div className="form-visual-side">
              <div className="form-visual-content">
                <svg viewBox="0 0 300 300" className="form-svg">
                  <defs>
                    <linearGradient id="formGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  {/* Abstract communication design */}
                  <circle cx="150" cy="100" r="40" fill="url(#formGradient)" opacity="0.3" className="pulse-circle" />
                  <circle cx="150" cy="100" r="25" fill="url(#formGradient)" opacity="0.5" className="pulse-circle" style={{ animationDelay: '0.5s' }} />
                  <circle cx="150" cy="100" r="10" fill="url(#formGradient)" className="pulse-circle" style={{ animationDelay: '1s' }} />
                  {/* Connection nodes */}
                  <circle cx="80" cy="200" r="15" fill="url(#formGradient)" opacity="0.6" />
                  <circle cx="220" cy="200" r="15" fill="url(#formGradient)" opacity="0.6" />
                  {/* Connecting paths */}
                  <path d="M 150 140 L 95 185" stroke="url(#formGradient)" strokeWidth="3" opacity="0.5" />
                  <path d="M 150 140 L 205 185" stroke="url(#formGradient)" strokeWidth="3" opacity="0.5" />
                  {/* Data flow indicators */}
                  <circle cx="60" cy="200" r="4" fill="url(#formGradient)" className="data-flow" />
                  <circle cx="70" cy="200" r="4" fill="url(#formGradient)" className="data-flow" style={{ animationDelay: '0.2s' }} />
                  <circle cx="240" cy="200" r="4" fill="url(#formGradient)" className="data-flow" />
                  <circle cx="250" cy="200" r="4" fill="url(#formGradient)" className="data-flow" style={{ animationDelay: '0.2s' }} />
                </svg>
                <div className="form-info-cards">
                  <div className="info-card">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="url(#formGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Email Us</h3>
                    <p>hello@websidy.com</p>
                  </div>
                  <div className="info-card">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" stroke="url(#formGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Response Time</h3>
                    <p>Within 24 hours</p>
                  </div>
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

        {/* Additional Info Section */}
        <section className="contact-info-section">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="infoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="24" fill="none" stroke="url(#infoGradient1)" strokeWidth="3" />
                  <circle cx="32" cy="32" r="8" fill="url(#infoGradient1)" />
                </svg>
              </div>
              <h3>Quick Response</h3>
              <p>We typically respond within 24 hours during business days.</p>
            </div>
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="infoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <rect x="12" y="20" width="40" height="28" rx="4" fill="none" stroke="url(#infoGradient2)" strokeWidth="3" />
                  <path d="M 20 20 L 20 12 L 44 12 L 44 20" stroke="url(#infoGradient2)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="20" y1="32" x2="44" y2="32" stroke="url(#infoGradient2)" strokeWidth="2" />
                </svg>
              </div>
              <h3>Free Consultation</h3>
              <p>Let's discuss your project and see how we can help.</p>
            </div>
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="infoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <path d="M 32 12 L 40 28 L 56 30 L 44 42 L 48 58 L 32 50 L 16 58 L 20 42 L 8 30 L 24 28 Z" fill="url(#infoGradient3)" opacity="0.6" />
                </svg>
              </div>
              <h3>No Commitment</h3>
              <p>Reach out with any questions—no strings attached.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage

