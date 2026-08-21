import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './PricingSection.css'

function PricingSection() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <section className={`pricing-section ${theme}`} id="pricing">
      <div className="pricing-container">
        <div className="pricing-intro">
          <span className="pricing-eyebrow">Pricing</span>
          <h2>Transparent pricing</h2>
          <p>
            Clear, competitive pricing for website design and social media services in Central Alberta, no hidden fees. Launch special: websites are $1,500 (25% off). Get a custom quote with our calculator or reach out to discuss your project.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Website Pricing */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <div className="pricing-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="55%" stopColor="#ff6f61" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="12" width="48" height="40" rx="4" stroke="url(#webGradient)" strokeWidth="2.5" />
                  <line x1="8" y1="24" x2="56" y2="24" stroke="url(#webGradient)" strokeWidth="2" />
                  <circle cx="14" cy="18" r="2" fill="url(#webGradient)" />
                  <rect x="16" y="32" width="12" height="8" rx="2" fill="url(#webGradient)" opacity="0.6" />
                  <rect x="32" y="32" width="12" height="8" rx="2" fill="url(#webGradient)" opacity="0.4" />
                </svg>
              </div>
              <h3>Website Design & Development</h3>
            </div>
            <div className="pricing-content">
              <div className="pricing-base">
                <div className="pricing-item pricing-item--sale">
                  <span className="pricing-label">
                    Custom Static Website (3 pages)
                    <span className="pricing-sale-tag">25% off</span>
                  </span>
                  <span className="pricing-value pricing-value--sale">
                    <span className="pricing-value-original">$2,000</span>
                    <span>$1,500</span>
                  </span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Additional Pages</span>
                  <span className="pricing-value">$200/page</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Hosting & Maintenance</span>
                  <span className="pricing-value">$75/month</span>
                </div>
              </div>
              <div className="pricing-features">
                <p className="pricing-note">Launch special: websites are $1,500 (25% off). Custom developed code with fast, reliable, secure static deployment and optional managed hosting.</p>
              </div>
            </div>
          </div>

          {/* Social Media Pricing */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <div className="pricing-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="55%" stopColor="#ff6f61" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="20" r="6" fill="url(#socialGradient)" />
                  <circle cx="18" cy="40" r="5" fill="url(#socialGradient)" opacity="0.8" />
                  <circle cx="46" cy="40" r="5" fill="url(#socialGradient)" opacity="0.8" />
                  <line x1="32" y1="26" x2="22" y2="35" stroke="url(#socialGradient)" strokeWidth="2" opacity="0.5" />
                  <line x1="32" y1="26" x2="42" y2="35" stroke="url(#socialGradient)" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>
              <h3>Digital Presence</h3>
            </div>
            <div className="pricing-content">
              <div className="pricing-base">
                <div className="pricing-item">
                  <span className="pricing-label">The Digital Foundation Package</span>
                  <span className="pricing-value">$400</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">The &ldquo;Always On&rdquo; Presence Add-On</span>
                  <span className="pricing-value">$160/month</span>
                </div>
              </div>
              <div className="pricing-features">
                <p className="pricing-note">Proof of life for your brand: aligned profiles, consistent posting, and never look closed for business.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-cta">
          <p className="pricing-cta-text">Ready to grow your online presence? Get a custom estimate or reach out, we'd love to hear from you.</p>
          <div className="pricing-cta-buttons">
            <Link to="/pricing" className="pricing-cta-button">View Full Pricing</Link>
            <Link to="/contact" className="pricing-cta-button">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

