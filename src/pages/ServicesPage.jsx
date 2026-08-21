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
            From custom website design to digital presence and brand consistency, we help Sylvan Lake and Central Alberta businesses look professional, credible, and open for business online.
          </p>
        </section>

        {/* Website Design & Development */}
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
                We design and build custom websites for Central Alberta businesses that look credible, load fast, and guide visitors toward action. No page builders or bloated templates, just clean code, clear structure, and a site that works as hard as you do.
              </p>
              <p className="service-detail-highlight">
                Every build is brand-first, mobile-ready, and optimized for search so your business shows up looking professional from the first click.
              </p>
            </div>

            <div className="service-tier-grid">
              <article className="service-tier-card service-tier-card--onetime">
                <span className="service-tier-badge">One-Time Project</span>
                <h3>Custom Static Website</h3>
                <p className="service-tier-pitch">
                  A conversion-focused site built from scratch: your brand, your content, and a foundation you can grow on.
                </p>
                <ul className="service-tier-features">
                  <li>
                    <strong>Brand-First Design</strong>
                    <span>Layout, typography, and visuals aligned with your identity so the site feels unmistakably yours.</span>
                  </li>
                  <li>
                    <strong>Custom-Coded Static Build</strong>
                    <span>Hand-developed pages for speed and reliability, no drag-and-drop builders.</span>
                  </li>
                  <li>
                    <strong>SEO & Content Integration</strong>
                    <span>On-page SEO, semantic structure, and your text and media formatted and optimized for the web.</span>
                  </li>
                  <li>
                    <strong>3-Page Starter Base</strong>
                    <span>Home, services, and about/contact included. Additional pages available as your business grows.</span>
                  </li>
                </ul>
              </article>

              <article className="service-tier-card service-tier-card--monthly">
                <span className="service-tier-badge">Monthly Add-On</span>
                <h3>Hosting & Maintenance</h3>
                <p className="service-tier-pitch">
                  Peace of mind after launch: we host, monitor, and maintain your site so it stays fast and online.
                </p>
                <ul className="service-tier-features">
                  <li>
                    <strong>Managed Hosting</strong>
                    <span>Deployment and hosting for static and custom projects, handled by the same team that built your site.</span>
                  </li>
                  <li>
                    <strong>Performance & Uptime</strong>
                    <span>Routine checks and updates so your site stays fast and visitors always reach a live page.</span>
                  </li>
                  <li>
                    <strong>Ongoing Support</strong>
                    <span>One point of contact for web and hosting questions, updates, and fixes when you need them.</span>
                  </li>
                </ul>
              </article>
            </div>

            <p className="service-detail-disclaimer">
              Need more pages or a custom quote?{' '}
              <Link to="/pricing">View full website pricing</Link>
              {' '}or{' '}
              <Link to="/contact">get in touch</Link>
              {' '}to scope your project.
            </p>
          </div>
        </section>

        {/* Digital Presence & Brand Consistency */}
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
              <h2>Digital Presence & Brand Consistency</h2>
              <p className="service-detail-subtitle">
                Foundation maintenance for Central Alberta businesses: professional, credible, and never closed for business
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We help local businesses look active, trustworthy, and open for business across the web. This is not growth hacking or viral engagement. We focus on digital presence, brand consistency, and foundation maintenance so customers see proof of life when they find you online.
              </p>
              <p className="service-detail-highlight">
                Keeping your digital lights on saves you time and builds trust through consistency, so you never look closed for business.
              </p>
            </div>

            <div className="service-tier-grid">
              <article className="service-tier-card service-tier-card--onetime">
                <span className="service-tier-badge">One-Time Setup</span>
                <h3>The Digital Foundation Package</h3>
                <p className="service-tier-pitch">
                  A digital health check: we clean up, align, and professionalize your brand across the web so every profile tells the same story.
                </p>
                <ul className="service-tier-features">
                  <li>
                    <strong>Social Architecture</strong>
                    <span>Creation or optimization of up to 3–4 key platforms where your customers already look.</span>
                  </li>
                  <li>
                    <strong>The &ldquo;Digital Twin&rdquo; Alignment</strong>
                    <span>Bios, profile photos, business hours, and links matched perfectly across every site, critical for local trust and SEO.</span>
                  </li>
                  <li>
                    <strong>The Content Blueprint</strong>
                    <span>A customized tip sheet with 3–5 industry-specific content pillars and a simple mobile-shooting checklist so you can capture your own photos.</span>
                  </li>
                </ul>
              </article>

              <article className="service-tier-card service-tier-card--monthly">
                <span className="service-tier-badge">Monthly Add-On</span>
                <h3>The &ldquo;Always On&rdquo; Presence Add-On</h3>
                <p className="service-tier-pitch">
                  Hands-off baseline consistency. We keep your channels showing proof of life while you run the business.
                </p>
                <ul className="service-tier-features">
                  <li>
                    <strong>8 Scheduled Posts per Month</strong>
                    <span>Roughly two posts per week, cross-posted across your active channels.</span>
                  </li>
                  <li>
                    <strong>Professional Content Mix</strong>
                    <span>Alternating core business info, customer reviews, and general industry tips so feeds stay credible, not salesy.</span>
                  </li>
                  <li>
                    <strong>Zero-Effort Automation</strong>
                    <span>Content is batched, approved, and scheduled ahead of time. You stay in the loop without living on social media.</span>
                  </li>
                </ul>
              </article>
            </div>

            <p className="service-detail-disclaimer">
              We do not promise leads, followers, or viral engagement. We promise you look professional, credible, active, and open for business.
            </p>
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
