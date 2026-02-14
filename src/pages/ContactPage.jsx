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
                  <stop offset="75%" stopColor="#ff6f61" />
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

