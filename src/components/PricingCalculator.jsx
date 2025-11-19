import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './PricingCalculator.css'

function PricingCalculator({ isOpen, onClose }) {
  const theme = useSelector((state) => state.theme.mode)
  const [selections, setSelections] = useState({
    website: false,
    pages: 3,
    hosting: 'none', // 'none', 'monthly', 'annual'
    socialSetup: false,
    socialManagement: false,
    addons: {
      ecommerce: false,
      blog: false,
      animations: false,
      forms: false,
    },
  })

  // Pricing constants
  const PRICING = {
    website: {
      base: 1200,
      additionalPage: 200,
    },
    hosting: {
      monthly: 25,
      annual: 240,
    },
    social: {
      setup: 400,
      management: 150,
    },
    addons: {
      ecommerce: 500,
      blog: 300,
      animations: 400,
      forms: 200,
    },
  }

  // Calculate total
  const calculateTotal = () => {
    let total = 0

    // Website cost
    if (selections.website) {
      total += PRICING.website.base
      if (selections.pages > 3) {
        total += (selections.pages - 3) * PRICING.website.additionalPage
      }
    }

    // Hosting cost
    if (selections.hosting === 'monthly') {
      total += PRICING.hosting.monthly
    } else if (selections.hosting === 'annual') {
      total += PRICING.hosting.annual
    }

    // Social media cost
    if (selections.socialSetup) {
      total += PRICING.social.setup
    }
    if (selections.socialManagement) {
      total += PRICING.social.management
    }

    // Add-ons
    if (selections.addons.ecommerce) total += PRICING.addons.ecommerce
    if (selections.addons.blog) total += PRICING.addons.blog
    if (selections.addons.animations) total += PRICING.addons.animations
    if (selections.addons.forms) total += PRICING.addons.forms

    return total
  }

  const total = calculateTotal()

  const handleChange = (field, value) => {
    setSelections((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAddonChange = (addon, value) => {
    setSelections((prev) => ({
      ...prev,
      addons: {
        ...prev.addons,
        [addon]: value,
      },
    }))
  }

  const handlePagesChange = (e) => {
    const pages = parseInt(e.target.value) || 3
    handleChange('pages', Math.max(3, pages))
  }

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={`pricing-calculator-overlay ${theme}`} onClick={onClose}>
      <div
        className={`pricing-calculator-modal ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="calculator-close" onClick={onClose} aria-label="Close calculator">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="calculator-header">
          <h2>Pricing Calculator</h2>
          <p>Select the services you need to get an instant estimate</p>
        </div>

        <div className="calculator-content">
          {/* Website Design */}
          <div className="calculator-section">
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.website}
                onChange={(e) => handleChange('website', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">Website Design & Development</span>
                <span className="service-price">$1,200 base (3 pages)</span>
              </span>
            </label>
            {selections.website && (
              <div className="calculator-option">
                <label>
                  Number of pages:
                  <input
                    type="number"
                    min="3"
                    value={selections.pages}
                    onChange={handlePagesChange}
                    className="pages-input"
                  />
                </label>
                {selections.pages > 3 && (
                  <div className="additional-cost">
                    +${((selections.pages - 3) * PRICING.website.additionalPage).toLocaleString()} for{' '}
                    {selections.pages - 3} additional page{selections.pages - 3 > 1 ? 's' : ''}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Website Add-ons */}
          {selections.website && (
            <div className="calculator-section">
              <h3 className="section-subtitle">Website Add-ons</h3>
              <div className="addons-grid">
                <label className="calculator-checkbox">
                  <input
                    type="checkbox"
                    checked={selections.addons.ecommerce}
                    onChange={(e) => handleAddonChange('ecommerce', e.target.checked)}
                  />
                  <span className="checkbox-label">
                    <span className="service-name">E-commerce Integration</span>
                    <span className="service-price">+$500</span>
                  </span>
                </label>
                <label className="calculator-checkbox">
                  <input
                    type="checkbox"
                    checked={selections.addons.blog}
                    onChange={(e) => handleAddonChange('blog', e.target.checked)}
                  />
                  <span className="checkbox-label">
                    <span className="service-name">Blog Setup</span>
                    <span className="service-price">+$300</span>
                  </span>
                </label>
                <label className="calculator-checkbox">
                  <input
                    type="checkbox"
                    checked={selections.addons.animations}
                    onChange={(e) => handleAddonChange('animations', e.target.checked)}
                  />
                  <span className="checkbox-label">
                    <span className="service-name">Advanced Animations</span>
                    <span className="service-price">+$400</span>
                  </span>
                </label>
                <label className="calculator-checkbox">
                  <input
                    type="checkbox"
                    checked={selections.addons.forms}
                    onChange={(e) => handleAddonChange('forms', e.target.checked)}
                  />
                  <span className="checkbox-label">
                    <span className="service-name">Custom Forms</span>
                    <span className="service-price">+$200</span>
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Hosting */}
          <div className="calculator-section">
            <h3 className="section-subtitle">Web Hosting & Maintenance</h3>
            <div className="radio-group">
              <label className="calculator-radio">
                <input
                  type="radio"
                  name="hosting"
                  value="none"
                  checked={selections.hosting === 'none'}
                  onChange={(e) => handleChange('hosting', e.target.value)}
                />
                <span className="radio-label">
                  <span className="service-name">No hosting</span>
                </span>
              </label>
              <label className="calculator-radio">
                <input
                  type="radio"
                  name="hosting"
                  value="monthly"
                  checked={selections.hosting === 'monthly'}
                  onChange={(e) => handleChange('hosting', e.target.value)}
                />
                <span className="radio-label">
                  <span className="service-name">Monthly Plan</span>
                  <span className="service-price">$25/month</span>
                </span>
              </label>
              <label className="calculator-radio">
                <input
                  type="radio"
                  name="hosting"
                  value="annual"
                  checked={selections.hosting === 'annual'}
                  onChange={(e) => handleChange('hosting', e.target.value)}
                />
                <span className="radio-label">
                  <span className="service-name">Annual Plan</span>
                  <span className="service-price">$240/year (Save 20%)</span>
                </span>
              </label>
            </div>
          </div>

          {/* Social Media */}
          <div className="calculator-section">
            <h3 className="section-subtitle">Social Media Services</h3>
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.socialSetup}
                onChange={(e) => handleChange('socialSetup', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">Setup & Training</span>
                <span className="service-price">$400 (one-time)</span>
              </span>
            </label>
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.socialManagement}
                onChange={(e) => handleChange('socialManagement', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">Monthly Management</span>
                <span className="service-price">$150/month</span>
              </span>
            </label>
          </div>
        </div>

        {/* Total Section */}
        <div className="calculator-total">
          <div className="total-content">
            <span className="total-label">Estimated Total</span>
            <span className="total-amount">${total.toLocaleString()}</span>
            {selections.hosting === 'monthly' && selections.socialManagement && (
              <span className="total-note">+ $175/month recurring</span>
            )}
            {selections.hosting === 'monthly' && !selections.socialManagement && (
              <span className="total-note">+ $25/month recurring</span>
            )}
            {selections.hosting === 'annual' && selections.socialManagement && (
              <span className="total-note">+ $150/month recurring (hosting paid annually)</span>
            )}
            {selections.hosting === 'annual' && !selections.socialManagement && (
              <span className="total-note">Hosting paid annually</span>
            )}
            {selections.hosting === 'none' && selections.socialManagement && (
              <span className="total-note">+ $150/month recurring</span>
            )}
          </div>
          <div className="calculator-actions">
            <Link
              to="/contact"
              className="calculator-button calculator-button-primary"
              onClick={onClose}
            >
              Get Quote
            </Link>
            <button className="calculator-button calculator-button-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator

