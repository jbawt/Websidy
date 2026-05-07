import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ServicesPage.css'

function ServicesPage() {
  const theme = useSelector((state) => state.theme.mode)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset
          const offset = window.innerHeight / 2 - element.offsetHeight / 2
          window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <main className={`services-page ${theme}`}>
      <div className="services-page-container">
        {/* Hero Section */}
        <section className="services-hero">
          <span className="services-hero-eyebrow">Our Services</span>
          <h1>Web Design & Digital Services for Central Alberta</h1>
          <p className="services-hero-description">
            From custom website design to social media setup and training, we help Sylvan Lake and Central Alberta businesses build and grow their online presence with clear, professional solutions.
          </p>
        </section>

        {/* Website Design & Branding Section */}
        <section id="website-design" className="service-detail-section">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="webDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="55%" stopColor="#ff6f61" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect x="8" y="12" width="48" height="40" rx="4" stroke="url(#webDetailGradient)" strokeWidth="2.5" />
                <line x1="8" y1="24" x2="56" y2="24" stroke="url(#webDetailGradient)" strokeWidth="2" />
                <circle cx="14" cy="18" r="2" fill="url(#webDetailGradient)" />
                <rect x="16" y="32" width="12" height="8" rx="2" fill="url(#webDetailGradient)" opacity="0.6" />
                <rect x="32" y="32" width="12" height="8" rx="2" fill="url(#webDetailGradient)" opacity="0.4" />
              </svg>
            </div>
            <div className="service-detail-title">
              <h2>Website Design & Development</h2>
              <p className="service-detail-subtitle">
                Custom, conversion-focused websites built for Central Alberta businesses
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We design and build modern websites that communicate your brand clearly, load quickly, and guide visitors toward action. Every site is built for speed, SEO, and consistent performance across devices, so you rank better and convert more.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="service-feature-card">
                <h3>Brand-First Direction</h3>
                <p>
                  We align layout, tone, typography, and visuals with your brand identity so your site
                  feels cohesive, credible, and unmistakably yours.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Custom Page Development</h3>
                <p>
                  From landing pages to deeper service pages, we build each page with intentional
                  structure, clear content hierarchy, and conversion-oriented UX.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Performance & Reliability</h3>
                <p>
                  Your site is built for fast load times, responsive behavior, and dependable uptime
                  so visitors get a smooth experience every time.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Responsive Design</h3>
                <p>
                  Every website we build is fully responsive, ensuring a perfect experience on desktop,
                  tablet, and mobile devices. Your site will look great on any screen size.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>SEO Optimization</h3>
                <p>
                  We implement SEO best practices from the ground up, including proper meta tags,
                  semantic HTML, and performance optimization to help you rank higher in search
                  results.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Integration</h3>
                <p>
                  We handle all content integration, ensuring your text, images, and media are
                  properly formatted and optimized for the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Setup & Training Section */}
        <section id="social-media" className="service-detail-section">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="socialDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="55%" stopColor="#ff6f61" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="20" r="6" fill="url(#socialDetailGradient)" />
                <circle cx="18" cy="40" r="5" fill="url(#socialDetailGradient)" opacity="0.8" />
                <circle cx="46" cy="40" r="5" fill="url(#socialDetailGradient)" opacity="0.8" />
                <line x1="32" y1="26" x2="22" y2="35" stroke="url(#socialDetailGradient)" strokeWidth="2" opacity="0.5" />
                <line x1="32" y1="26" x2="42" y2="35" stroke="url(#socialDetailGradient)" strokeWidth="2" opacity="0.5" />
              </svg>
            </div>
            <div className="service-detail-title">
              <h2>Social Media Setup & Training</h2>
              <p className="service-detail-subtitle">
                Launch and manage your social presence with expert setup and training for Central Alberta businesses
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We don't just set up your social accounts, we train you to run them with confidence. From account creation to content strategy, we help Central Alberta businesses build an engaging, on-brand presence that grows with you.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="service-feature-card">
                <h3>Channel Setup & Audit</h3>
                <p>
                  We set up your social media accounts from scratch, ensuring proper branding,
                  optimization, and security. We also audit existing accounts to identify
                  opportunities for improvement.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Playbooks & Training</h3>
                <p>
                  Receive custom content playbooks tailored to your brand and industry. Our
                  training sessions teach you how to create engaging posts, use hashtags effectively,
                  and maintain a consistent brand voice.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Growth and Engagement Coaching</h3>
                <p>
                  Learn proven strategies to grow your following and increase engagement. We provide
                  ongoing coaching to help you understand analytics, respond to comments, and build
                  a loyal community.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Templates</h3>
                <p>
                  We provide professionally designed content templates that you can customize for
                  your posts. These templates ensure brand consistency and save you time.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Best Practices Guide</h3>
                <p>
                  Get a comprehensive guide covering best practices for each platform, including
                  optimal posting times, content types, and engagement strategies.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Ongoing Support</h3>
                <p>
                  Our support doesn't end after training. We're available to answer questions and
                  provide guidance as you grow your social media presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and how we can help your Central Alberta business grow online.</p>
          <div className="services-cta-buttons">
            <Link to="/pricing" className="services-cta-button">View Full Pricing</Link>
            <Link to="/contact" className="services-cta-button">Get in Touch</Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ServicesPage

