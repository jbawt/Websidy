import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PricingCalculator from '../components/PricingCalculator'
import './PricingPage.css'

function PricingPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <div className={`pricing-page ${theme}`}>
      <div className="pricing-page-container">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="pricing-hero-content">
            <span className="pricing-hero-eyebrow">Pricing</span>
            <h1>Simple, Transparent Pricing</h1>
            <p className="pricing-hero-description">
              No hidden fees, no surprises. Our pricing is straightforward and designed to scale with
              your business needs. Choose the services that work for you.
            </p>
            <button
              className="pricing-calculator-button"
              onClick={() => setIsCalculatorOpen(true)}
            >
              Calculate Your Price
            </button>
          </div>
          <div className="pricing-hero-visual">
            <svg viewBox="0 0 400 400" className="pricing-hero-svg">
              <defs>
                <linearGradient id="pricingHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              {/* Price tag design */}
              <rect x="120" y="100" width="160" height="200" rx="8" fill="none" stroke="url(#pricingHeroGradient)" strokeWidth="4" className="price-tag" />
              <path d="M 200 100 L 200 60 L 180 60 L 200 40 L 220 60 L 200 60" fill="url(#pricingHeroGradient)" opacity="0.6" />
              {/* Dollar sign */}
              <text x="200" y="200" fontSize="80" fill="url(#pricingHeroGradient)" textAnchor="middle" className="dollar-sign">$</text>
              {/* Floating coins */}
              <circle cx="80" cy="120" r="20" fill="url(#pricingHeroGradient)" opacity="0.3" className="float-coin" />
              <circle cx="320" cy="150" r="18" fill="url(#pricingHeroGradient)" opacity="0.3" className="float-coin" style={{ animationDelay: '0.3s' }} />
              <circle cx="90" cy="280" r="15" fill="url(#pricingHeroGradient)" opacity="0.3" className="float-coin" style={{ animationDelay: '0.6s' }} />
              <circle cx="310" cy="300" r="22" fill="url(#pricingHeroGradient)" opacity="0.3" className="float-coin" style={{ animationDelay: '0.9s' }} />
            </svg>
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
                Custom websites built to your specifications
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid">
              <div className="pricing-detail-card">
                <h3>Base Package</h3>
                <div className="pricing-amount">$1,200</div>
                <p className="pricing-includes">Includes 3 pages:</p>
                <ul className="pricing-features-list">
                  <li>Home page</li>
                  <li>About page</li>
                  <li>Contact page</li>
                  <li>Responsive design</li>
                  <li>SEO optimization</li>
                  <li>Content integration</li>
                  <li>Basic animations</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <h3>Additional Pages</h3>
                <div className="pricing-amount">$200/page</div>
                <p className="pricing-includes">Each additional page includes:</p>
                <ul className="pricing-features-list">
                  <li>Custom design</li>
                  <li>Content integration</li>
                  <li>SEO optimization</li>
                  <li>Responsive layout</li>
                  <li>Consistent branding</li>
                </ul>
              </div>
            </div>
            <div className="pricing-addons">
              <h3>Optional Add-ons</h3>
              <div className="addon-grid">
                <div className="addon-item">
                  <span className="addon-name">E-commerce Integration</span>
                  <span className="addon-price">+$500</span>
                </div>
                <div className="addon-item">
                  <span className="addon-name">Blog Setup</span>
                  <span className="addon-price">+$300</span>
                </div>
                <div className="addon-item">
                  <span className="addon-name">Advanced Animations</span>
                  <span className="addon-price">+$400</span>
                </div>
                <div className="addon-item">
                  <span className="addon-name">Custom Forms</span>
                  <span className="addon-price">+$200</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Pricing */}
        <section className="pricing-detail-section">
          <div className="pricing-detail-header">
            <div className="pricing-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hostDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect x="12" y="20" width="40" height="32" rx="3" stroke="url(#hostDetailGradient)" strokeWidth="2.5" />
                <line x1="12" y1="32" x2="52" y2="32" stroke="url(#hostDetailGradient)" strokeWidth="2" />
                <line x1="12" y1="44" x2="52" y2="44" stroke="url(#hostDetailGradient)" strokeWidth="2" />
                <circle cx="32" cy="14" r="4" fill="url(#hostDetailGradient)" />
                <path d="M 28 14 L 32 10 L 36 14" stroke="url(#hostDetailGradient)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="pricing-detail-title">
              <h2>Web Hosting & Maintenance</h2>
              <p className="pricing-detail-subtitle">
                Reliable hosting with ongoing support
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid">
              <div className="pricing-detail-card featured">
                <div className="featured-badge">Best Value</div>
                <h3>Monthly Plan</h3>
                <div className="pricing-amount">$25<span className="pricing-period">/month</span></div>
                <ul className="pricing-features-list">
                  <li>Fast SSD hosting</li>
                  <li>SSL certificate</li>
                  <li>CDN included</li>
                  <li>Daily backups</li>
                  <li>24/7 monitoring</li>
                  <li>Email support</li>
                  <li>99.9% uptime guarantee</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <h3>Annual Plan</h3>
                <div className="pricing-amount">$240<span className="pricing-period">/year</span></div>
                <div className="savings-badge">Save 20%</div>
                <ul className="pricing-features-list">
                  <li>Everything in Monthly</li>
                  <li>Priority support</li>
                  <li>Free domain renewal</li>
                  <li>Extended backup retention</li>
                  <li>Performance optimization</li>
                  <li>Security updates</li>
                  <li>Monthly reports</li>
                </ul>
              </div>
            </div>
            <div className="hosting-note">
              <p>
                All hosting plans include automatic updates, security patches, and performance monitoring.
                No setup fees or hidden charges.
              </p>
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
                Get your social presence up and running
              </p>
            </div>
          </div>

          <div className="pricing-detail-content">
            <div className="pricing-detail-grid">
              <div className="pricing-detail-card">
                <h3>Setup & Training</h3>
                <div className="pricing-amount">$400</div>
                <p className="pricing-includes">One-time setup includes:</p>
                <ul className="pricing-features-list">
                  <li>Account setup & optimization</li>
                  <li>Brand profile creation</li>
                  <li>Content templates (10+)</li>
                  <li>2-hour training session</li>
                  <li>Content playbook</li>
                  <li>Best practices guide</li>
                  <li>30 days of support</li>
                </ul>
              </div>
              <div className="pricing-detail-card">
                <h3>Monthly Management</h3>
                <div className="pricing-amount">$150<span className="pricing-period">/month</span></div>
                <p className="pricing-includes">Ongoing management includes:</p>
                <ul className="pricing-features-list">
                  <li>8 posts per month</li>
                  <li>Content creation</li>
                  <li>Engagement monitoring</li>
                  <li>Analytics reporting</li>
                  <li>Strategy adjustments</li>
                  <li>Community management</li>
                  <li>Monthly strategy call</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pricing-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and find the perfect package for your needs.</p>
          <div className="pricing-cta-buttons">
            <Link to="/contact" className="pricing-cta-button">
              Get in Touch
            </Link>
            <Link to="/faq" className="pricing-cta-button pricing-cta-button-secondary">
              View FAQ
            </Link>
          </div>
        </section>
      </div>
      <PricingCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  )
}

export default PricingPage

