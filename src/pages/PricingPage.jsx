import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PricingCalculator from '../components/PricingCalculator'
import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../config/pageMeta'
import pricingHero from '../assets/pricing_hero.webp'
import './PricingPage.css'

function PricingPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <main className={`pricing-page ${theme}`}>
      <PageMeta {...PAGE_META.pricing} />
      <div className="pricing-page-container">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="pricing-hero-content">
            <span className="pricing-hero-eyebrow">Pricing</span>
            <h1>Simple, Transparent Pricing</h1>
            <p className="pricing-hero-description">
              Clear, competitive pricing for website design and digital services in Sylvan Lake and across Central Alberta. Launch special: websites are 25% off at $1,500 (regularly $2,000). Every project is custom-built for speed and reliability, with no hidden fees.
            </p>
            <button
              className="pricing-calculator-button"
              onClick={() => setIsCalculatorOpen(true)}
            >
              Calculate Your Price
            </button>
          </div>
          <div className="pricing-hero-visual">
            <img src={pricingHero} alt="" className="pricing-hero-image" width={800} height={800} decoding="async" />
          </div>
        </section>

        {/* Website Design Pricing */}
        <section className="pricing-detail-section">
          <div className="pricing-detail-header">
            <div className="pricing-detail-icon">
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
            <div className="pricing-detail-title">
              <h2>Website Design & Development</h2>
              <p className="pricing-detail-subtitle">
                Custom-coded websites and web app foundations
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid">
              <div className="pricing-detail-card pricing-detail-card--sale">
                <span className="pricing-tier-badge pricing-tier-badge--sale">25% off</span>
                <h3>Custom Static Website</h3>
                <div className="pricing-amount pricing-amount--sale">
                  <span className="pricing-amount-original">$2,000</span>
                  <span>$1,500</span>
                </div>
                <p className="pricing-sale-note">Limited launch special</p>
                <p className="pricing-includes">Includes 3 pages:</p>
                <ul className="pricing-features-list">
                  <li>Home page</li>
                  <li>Services page</li>
                  <li>About / Contact page</li>
                  <li>Responsive design</li>
                  <li>Custom developed code (no page builders)</li>
                  <li>Static architecture built for speed</li>
                  <li>Fast load times on every device</li>
                  <li>On-page SEO setup</li>
                  <li>Content integration</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <h3>Additional Pages</h3>
                <div className="pricing-amount">$200<span className="pricing-period">/page</span></div>
                <p className="pricing-includes">Each additional page includes:</p>
                <ul className="pricing-features-list">
                  <li>Custom design</li>
                  <li>Content integration</li>
                  <li>SEO optimization</li>
                  <li>Responsive layout</li>
                  <li>Consistent branding</li>
                </ul>
              </div>
              <div className="pricing-detail-card featured">
                <h3>Hosting & Maintenance</h3>
                <div className="pricing-amount">$75<span className="pricing-period">/month</span></div>
                <ul className="pricing-features-list">
                  <li>Managed hosting for static and custom projects</li>
                  <li>Fast deployment and uptime checks</li>
                  <li>Routine updates to keep your site running smoothly</li>
                  <li>Single-team support for web + hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Pricing */}
        <section className="pricing-detail-section">
          <div className="pricing-detail-header">
            <div className="pricing-detail-icon">
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
            <div className="pricing-detail-title">
              <h2>Digital Presence & Brand Consistency</h2>
              <p className="pricing-detail-subtitle">
                Foundation maintenance and proof of life for local businesses, never look closed for business
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid pricing-detail-grid--two">
              <div className="pricing-detail-card">
                <span className="pricing-tier-badge">One-Time Setup</span>
                <h3>The Digital Foundation Package</h3>
                <div className="pricing-amount">$400</div>
                <p className="pricing-includes">Digital health check includes:</p>
                <ul className="pricing-features-list">
                  <li>Social Architecture: up to 3-4 key platforms created or optimized</li>
                  <li>Digital Twin alignment: bios, photos, hours, and links matched everywhere</li>
                  <li>Content Blueprint: 3-5 content pillars plus mobile photo checklist</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <span className="pricing-tier-badge pricing-tier-badge--monthly">Monthly Add-On</span>
                <h3>The &ldquo;Always On&rdquo; Presence Add-On</h3>
                <div className="pricing-amount">$160<span className="pricing-period">/month</span></div>
                <p className="pricing-includes">Keeping your digital lights on includes:</p>
                <ul className="pricing-features-list">
                  <li>8 scheduled posts per month (~2 per week), cross-posted</li>
                  <li>Professional mix: business info, reviews, and industry tips</li>
                  <li>Zero-effort automation: batched, approved, and scheduled ahead</li>
                </ul>
              </div>
            </div>
            <p className="pricing-presence-note">
              We do not promise leads, followers, or viral engagement. We promise you look professional, credible, active, and open for business.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pricing-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and find the right package for your Central Alberta business.</p>
          <div className="pricing-cta-buttons">
            <Link to="/contact" className="pricing-cta-button">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <PricingCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </main>
  )
}

export default PricingPage

