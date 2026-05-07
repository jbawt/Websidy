import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ContactPage.css'
import websidyLogo from '../assets/websidy_logo_transparent.png'

function ContactPage() {
  const FORM_NAME = 'contact'
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

    const payload = new URLSearchParams({
      'form-name': FORM_NAME,
      ...formData,
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  return (
    <main className={`contact-page ${theme}`} id="contact">
      <div className="contact-page-container">
        <section className="contact-main">
          <div className="contact-intro">
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
              Have a project in mind? Serving Sylvan Lake and Central Alberta, we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-card">
              <form
                className="contact-form"
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p hidden>
                  <label>
                    Don’t fill this out if you’re human:
                    <input name="bot-field" />
                  </label>
                </p>
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
                {submitStatus === 'error' && (
                  <div className="submit-success submit-error" role="alert">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Something went wrong. Please try again in a moment.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContactPage

