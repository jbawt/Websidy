import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PricingCalculator from '../components/PricingCalculator'
import pricingHero from '../assets/pricing_hero.png'
import './PricingPage.css'

function PricingPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <main className={`pricing-page ${theme}`}>
      <div className="pricing-page-container">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="pricing-hero-content">
            <span className="pricing-hero-eyebrow">Pricing</span>
            <h1>Simple, Transparent Pricing</h1>
            <p className="pricing-hero-description">
              Clear, competitive pricing for website design and digital services in Sylvan Lake and across Central Alberta. Every project is custom-built for speed, security, and reliability—with no hidden fees.
            </p>
            <button
              className="pricing-calculator-button"
              onClick={() => setIsCalculatorOpen(true)}
            >
              Calculate Your Price
            </button>
          </div>
          <div className="pricing-hero-visual">
            <img src={pricingHero} alt="" className="pricing-hero-image" />
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
              <div className="pricing-detail-card">
                <h3>Custom Static Website</h3>
                <div className="pricing-amount">$1,200</div>
                <p className="pricing-includes">Includes 3 pages:</p>
                <ul className="pricing-features-list">
                  <li>Home page</li>
                  <li>Services page</li>
                  <li>About / Contact page</li>
                  <li>Responsive design</li>
                  <li>Custom developed code (no page builders)</li>
                  <li>Static architecture for speed and uptime</li>
                  <li>Smaller attack surface for better security</li>
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
                <div className="pricing-amount">$50<span className="pricing-period">/month</span></div>
                <ul className="pricing-features-list">
                  <li>Managed hosting for static and custom projects</li>
                  <li>Secure deployment and uptime checks</li>
                  <li>Routine dependency and security updates</li>
                  <li>Single-team support for web + hosting</li>
                </ul>
              </div>
            </div>
            <div className="pricing-addons">
              <h3>Optional Add-ons</h3>
              <div className="addon-grid">
                <div className="addon-item">
                  <span className="addon-name">Custom Feature Block / Widget</span>
                  <span className="addon-price">+$200</span>
                </div>
                <div className="addon-item">
                  <span className="addon-name">Custom Forms</span>
                  <span className="addon-price">+$150</span>
                </div>
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
              <h2>Social Media Setup & Management</h2>
              <p className="pricing-detail-subtitle">
                Lean monthly plans for local business consistency
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid">
              <div className="pricing-detail-card">
                <h3>Social Launch Setup</h3>
                <div className="pricing-amount">$400</div>
                <p className="pricing-includes">One-time setup includes:</p>
                <ul className="pricing-features-list">
                  <li>Account setup and profile optimization</li>
                  <li>Branded bio and highlights template</li>
                  <li>10 post templates and caption framework</li>
                  <li>90-minute training session</li>
                  <li>30 days of launch support</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <h3>Monthly Management (Lite)</h3>
                <div className="pricing-amount">$150<span className="pricing-period">/month</span></div>
                <p className="pricing-includes">Ongoing management includes:</p>
                <ul className="pricing-features-list">
                  <li>8-10 posts per month</li>
                  <li>Caption writing and scheduling</li>
                  <li>Community response guidance</li>
                </ul>
              </div>
            </div>
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

