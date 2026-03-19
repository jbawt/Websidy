import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ContactPage.css'
import websidyLogo from '../assets/websidy_logo_transparent.png'

function ContactPage() {
  const theme = useSelector((state) => state.theme.mode)
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const quotePrefill = location.state?.quotePrefill
    if (!quotePrefill) return

    setFormData((prev) => ({
      ...prev,
      subject: prev.subject || location.state?.quoteSubject || 'Quote Request',
      message: quotePrefill,
    }))
  }, [location.state])

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
            <h1 className="message-us-title">
              <div className="message-us-container">
                <div className="logo-m-container">
                  <img
                    src={websidyLogo}
                    alt="M"
                    className="logo-w-to-m"
                  />
                </div>
                <div className="message-us-text">
                  <span className="message-letter" data-letter="e">e</span>
                  <span className="message-letter" data-letter="s">s</span>
                  <span className="message-letter" data-letter="s">s</span>
                  <span className="message-letter" data-letter="a">a</span>
                  <span className="message-letter" data-letter="g">g</span>
                  <span className="message-letter" data-letter="e">e</span>
                  <span className="message-space"> </span>
                  <span className="message-letter" data-letter="u">u</span>
                  <span className="message-letter" data-letter="s">s</span>
                </div>
              </div>
            </h1>
            <h2 className="contact-hero-subheader">Let's Build Something Great Together</h2>
            <p className="contact-hero-description">
              Have a project in mind? Serving Sylvan Lake and Central Alberta—we'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
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

