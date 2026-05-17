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
    socialPresenceManagement: false,
  })

  // Text input values (parsed to numbers on blur/valid change)
  const [pagesStr, setPagesStr] = useState('3')
  const [errors, setErrors] = useState({ pages: '' })

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
      presenceManagement: 160,
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
    if (selections.socialPresenceManagement) {
      total += PRICING.social.presenceManagement
    }

    return total
  }

  const total = calculateTotal()
  const recurringMonthly =
    (selections.website && selections.hostingOnServers ? PRICING.hosting.monthly : 0) +
    (selections.socialPresenceManagement ? PRICING.presenceManagement : 0)
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

    if (selections.socialSetup) {
      lines.push(`- The Digital Foundation Package: $${PRICING.social.setup.toLocaleString()} (one-time)`)
    }

    if (selections.socialPresenceManagement) {
      lines.push(`- The "Always On" Presence Add-On: $${PRICING.social.presenceManagement.toLocaleString()}/month`)
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

  const VALIDATION_MSG = 'Please enter a valid number'

  const parsePages = (str) => {
    const trimmed = String(str).trim()
    if (trimmed === '') return { valid: false, value: null }
    const num = parseInt(trimmed, 10)
    if (Number.isNaN(num) || num < 3) return { valid: false, value: null }
    return { valid: true, value: num }
  }

  const handlePagesChange = (e) => {
    const raw = e.target.value
    setPagesStr(raw)
    const { valid, value } = parsePages(raw)
    if (valid) {
      handleChange('pages', value)
      setErrors((prev) => ({ ...prev, pages: '' }))
    }
  }

  const handlePagesBlur = () => {
    const { valid, value } = parsePages(pagesStr)
    if (valid) {
      handleChange('pages', value)
      setPagesStr(String(value))
      setErrors((prev) => ({ ...prev, pages: '' }))
    } else {
      setErrors((prev) => ({ ...prev, pages: VALIDATION_MSG }))
      const trimmed = pagesStr.trim()
      const num = parseInt(trimmed, 10)
      if (trimmed === '' || (!Number.isNaN(num) && num < 3)) {
        handleChange('pages', 3)
        setPagesStr('3')
      }
    }
  }

  const handlePagesFocus = (e) => {
    e.target.select()
    setErrors((prev) => ({ ...prev, pages: '' }))
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
                    type="text"
                    inputMode="numeric"
                    value={pagesStr}
                    onChange={handlePagesChange}
                    onFocus={handlePagesFocus}
                    onBlur={handlePagesBlur}
                    className="pages-input"
                    aria-invalid={!!errors.pages}
                    aria-describedby={errors.pages ? 'pages-error' : undefined}
                  />
                </label>
                {errors.pages && (
                  <p id="pages-error" className="calculator-input-error" role="alert">
                    {errors.pages}
                  </p>
                )}
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

          {/* Social Media */}
          <div className="calculator-section">
            <h3 className="section-subtitle">Digital Presence Services</h3>
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.socialSetup}
                onChange={(e) => handleChange('socialSetup', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">The Digital Foundation Package</span>
                <span className="service-price">$400 (one-time)</span>
              </span>
            </label>
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.socialPresenceManagement}
                onChange={(e) => handleChange('socialPresenceManagement', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">The &ldquo;Always On&rdquo; Presence Add-On</span>
                <span className="service-price">$160/month</span>
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

