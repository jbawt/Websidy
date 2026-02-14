import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './PricingCalculator.css'

function PricingCalculator({ isOpen, onClose }) {
  const theme = useSelector((state) => state.theme.mode)
  const [selections, setSelections] = useState({
    website: false,
    pages: 3,
    hostingOnServers: false,
    socialSetup: false,
    socialManagement: false,
    addons: {
      widgets: 0,
      forms: 0,
    },
  })

  // Pricing constants
  const PRICING = {
    website: {
      base: 1200,
      additionalPage: 200,
    },
    hosting: {
      monthly: 50,
    },
    social: {
      setup: 400,
      management: 150,
    },
    addons: {
      widgets: 100,
      forms: 100,
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

    // Hosting cost (available when website service is selected)
    if (selections.website && selections.hostingOnServers) {
      total += PRICING.hosting.monthly
    }

    // Social media cost
    if (selections.socialSetup) {
      total += PRICING.social.setup
    }
    if (selections.socialManagement) {
      total += PRICING.social.management
    }

    // Add-ons
    total += selections.addons.widgets * PRICING.addons.widgets
    total += selections.addons.forms * PRICING.addons.forms

    return total
  }

  const total = calculateTotal()
  const recurringMonthly =
    (selections.website && selections.hostingOnServers ? PRICING.hosting.monthly : 0) +
    (selections.socialManagement ? PRICING.social.management : 0)
  const additionalPages = selections.website ? Math.max(0, selections.pages - 3) : 0

  const buildQuotePrefill = () => {
    const lines = [
      'Hi Websidy team,',
      '',
      'I would like a quote for the following selections:',
      '',
    ]

    if (selections.website) {
      lines.push('- Website Design & Development (3-page base): $1,200')
      if (additionalPages > 0) {
        lines.push(
          `- Additional Pages: ${additionalPages} x $${PRICING.website.additionalPage.toLocaleString()} = $${(
            additionalPages * PRICING.website.additionalPage
          ).toLocaleString()}`
        )
      }
      if (selections.hostingOnServers) {
        lines.push(`- Hosting on your servers: $${PRICING.hosting.monthly.toLocaleString()}/month`)
      }
    }

    if (selections.addons.widgets > 0) {
      lines.push(
        `- Custom Widgets: ${selections.addons.widgets} x $${PRICING.addons.widgets.toLocaleString()} = $${(
          selections.addons.widgets * PRICING.addons.widgets
        ).toLocaleString()}`
      )
    }

    if (selections.addons.forms > 0) {
      lines.push(
        `- Custom Forms: ${selections.addons.forms} x $${PRICING.addons.forms.toLocaleString()} = $${(
          selections.addons.forms * PRICING.addons.forms
        ).toLocaleString()}`
      )
    }

    if (selections.socialSetup) {
      lines.push(`- Social Media Setup & Training: $${PRICING.social.setup.toLocaleString()} (one-time)`)
    }

    if (selections.socialManagement) {
      lines.push(`- Social Media Monthly Management: $${PRICING.social.management.toLocaleString()}/month`)
    }

    lines.push('')
    lines.push(`Estimated total from calculator: $${total.toLocaleString()}`)
    if (recurringMonthly > 0) {
      lines.push(`Estimated recurring monthly total: $${recurringMonthly.toLocaleString()}/month`)
    }
    lines.push('')
    lines.push('Please contact me with next steps.')

    return lines.join('\n')
  }

  const handleChange = (field, value) => {
    setSelections((prev) => {
      if (field === 'website') {
        return {
          ...prev,
          website: value,
          hostingOnServers: value ? prev.hostingOnServers : false,
        }
      }
      return {
        ...prev,
        [field]: value,
      }
    })
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

  const handleAddonQuantityChange = (addon, value) => {
    const parsed = Number.isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10)
    handleAddonChange(addon, Math.max(0, parsed))
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
                <label className="calculator-checkbox">
                  <input
                    type="checkbox"
                    checked={selections.hostingOnServers}
                    onChange={(e) => handleChange('hostingOnServers', e.target.checked)}
                  />
                  <span className="checkbox-label">
                    <span className="service-name">Host on our servers</span>
                    <span className="service-price">+$50/month</span>
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Website Add-ons */}
          {selections.website && (
            <div className="calculator-section">
              <h3 className="section-subtitle">Website Add-ons</h3>
              <div className="addons-grid">
                <div className="addon-quantity-item">
                  <div className="addon-meta">
                    <span className="service-name">
                      Custom Widgets
                      <span
                        className="addon-tooltip"
                        title="A custom widget is a tailored interactive component built for your workflow. The pricing calculator on this page is a great example."
                      >
                        i
                      </span>
                    </span>
                    <span className="service-price">${PRICING.addons.widgets.toLocaleString()} each</span>
                  </div>
                  <label className="addon-qty-control">
                    Qty
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={selections.addons.widgets}
                      onChange={(e) => handleAddonQuantityChange('widgets', e.target.value)}
                      className="addon-qty-input"
                    />
                  </label>
                </div>
                <div className="addon-quantity-item">
                  <div className="addon-meta">
                    <span className="service-name">
                      Custom Forms
                      <span
                        className="addon-tooltip"
                        title="A custom form includes tailored fields, questions, and submission logic for your process (for example, a custom contact form with specific intake questions)."
                      >
                        i
                      </span>
                    </span>
                    <span className="service-price">${PRICING.addons.forms.toLocaleString()} each</span>
                  </div>
                  <label className="addon-qty-control">
                    Qty
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={selections.addons.forms}
                      onChange={(e) => handleAddonQuantityChange('forms', e.target.value)}
                      className="addon-qty-input"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

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
            {recurringMonthly > 0 && (
              <span className="total-note">+ ${recurringMonthly.toLocaleString()}/month recurring</span>
            )}
          </div>
          <div className="calculator-actions">
            <Link
              to="/contact"
              state={{ quotePrefill: buildQuotePrefill(), quoteSubject: 'Quote Request' }}
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

