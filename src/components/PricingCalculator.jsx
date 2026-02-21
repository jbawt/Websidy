import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './PricingCalculator.css'

function PricingCalculator({ isOpen, onClose }) {
  const theme = useSelector((state) => state.theme.mode)
  const [selections, setSelections] = useState({
    website: false,
    pages: 5,
    hostingOnServers: false,
    socialSetup: false,
    socialManagement: false,
    addons: {
      widgets: 0,
      forms: 0,
    },
  })

  // Text input values (parsed to numbers on blur/valid change)
  const [pagesStr, setPagesStr] = useState('5')
  const [widgetsStr, setWidgetsStr] = useState('0')
  const [formsStr, setFormsStr] = useState('0')
  const [errors, setErrors] = useState({ pages: '', widgets: '', forms: '' })

  // Pricing constants
  const PRICING = {
    website: {
      base: 1900,
      additionalPage: 225,
    },
    hosting: {
      monthly: 60,
    },
    social: {
      setup: 650,
      management: 250,
    },
    addons: {
      widgets: 200,
      forms: 150,
    },
  }

  // Calculate total
  const calculateTotal = () => {
    let total = 0

    // Website cost
    if (selections.website) {
      total += PRICING.website.base
      if (selections.pages > 5) {
        total += (selections.pages - 5) * PRICING.website.additionalPage
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
  const additionalPages = selections.website ? Math.max(0, selections.pages - 5) : 0

  const buildQuotePrefill = () => {
    const lines = [
      'Hi Websidy team,',
      '',
      'I would like a quote for the following selections:',
      '',
    ]

    if (selections.website) {
      lines.push('- Website Design & Development (5-page base): $1,900')
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

  const VALIDATION_MSG = 'Please enter a valid number'

  const parsePages = (str) => {
    const trimmed = String(str).trim()
    if (trimmed === '') return { valid: false, value: null }
    const num = parseInt(trimmed, 10)
    if (Number.isNaN(num) || num < 5) return { valid: false, value: null }
    return { valid: true, value: num }
  }

  const parseAddon = (str) => {
    const trimmed = String(str).trim()
    if (trimmed === '') return { valid: false, value: null }
    const num = parseInt(trimmed, 10)
    if (Number.isNaN(num) || num < 0) return { valid: false, value: null }
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
      if (trimmed === '' || (!Number.isNaN(num) && num < 5)) {
        handleChange('pages', 5)
        setPagesStr('5')
      }
    }
  }

  const handlePagesFocus = (e) => {
    e.target.select()
    setErrors((prev) => ({ ...prev, pages: '' }))
  }

  const handleWidgetsChange = (e) => {
    const raw = e.target.value
    setWidgetsStr(raw)
    const { valid, value } = parseAddon(raw)
    if (valid) {
      handleAddonChange('widgets', value)
      setErrors((prev) => ({ ...prev, widgets: '' }))
    }
  }

  const handleWidgetsBlur = () => {
    const { valid, value } = parseAddon(widgetsStr)
    if (valid) {
      handleAddonChange('widgets', value)
      setWidgetsStr(String(value))
      setErrors((prev) => ({ ...prev, widgets: '' }))
    } else {
      setErrors((prev) => ({ ...prev, widgets: VALIDATION_MSG }))
      if (widgetsStr.trim() === '') {
        handleAddonChange('widgets', 0)
        setWidgetsStr('0')
      }
    }
  }

  const handleWidgetsFocus = (e) => {
    e.target.select()
    setErrors((prev) => ({ ...prev, widgets: '' }))
  }

  const handleFormsChange = (e) => {
    const raw = e.target.value
    setFormsStr(raw)
    const { valid, value } = parseAddon(raw)
    if (valid) {
      handleAddonChange('forms', value)
      setErrors((prev) => ({ ...prev, forms: '' }))
    }
  }

  const handleFormsBlur = () => {
    const { valid, value } = parseAddon(formsStr)
    if (valid) {
      handleAddonChange('forms', value)
      setFormsStr(String(value))
      setErrors((prev) => ({ ...prev, forms: '' }))
    } else {
      setErrors((prev) => ({ ...prev, forms: VALIDATION_MSG }))
      if (formsStr.trim() === '') {
        handleAddonChange('forms', 0)
        setFormsStr('0')
      }
    }
  }

  const handleFormsFocus = (e) => {
    e.target.select()
    setErrors((prev) => ({ ...prev, forms: '' }))
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
                <span className="service-price">$1,900 base (5 pages value)</span>
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
                {selections.pages > 5 && (
                  <div className="additional-cost">
                    +${((selections.pages - 5) * PRICING.website.additionalPage).toLocaleString()} for{' '}
                    {selections.pages - 5} additional page{selections.pages - 5 > 1 ? 's' : ''}
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
                    <span className="service-price">+$60/month</span>
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
                      type="text"
                      inputMode="numeric"
                      value={widgetsStr}
                      onChange={handleWidgetsChange}
                      onFocus={handleWidgetsFocus}
                      onBlur={handleWidgetsBlur}
                      className="addon-qty-input"
                      aria-invalid={!!errors.widgets}
                      aria-describedby={errors.widgets ? 'widgets-error' : undefined}
                    />
                  </label>
                  {errors.widgets && (
                    <p id="widgets-error" className="calculator-input-error" role="alert">
                      {errors.widgets}
                    </p>
                  )}
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
                      type="text"
                      inputMode="numeric"
                      value={formsStr}
                      onChange={handleFormsChange}
                      onFocus={handleFormsFocus}
                      onBlur={handleFormsBlur}
                      className="addon-qty-input"
                      aria-invalid={!!errors.forms}
                      aria-describedby={errors.forms ? 'forms-error' : undefined}
                    />
                  </label>
                  {errors.forms && (
                    <p id="forms-error" className="calculator-input-error" role="alert">
                      {errors.forms}
                    </p>
                  )}
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
                <span className="service-name">Social Launch Setup</span>
                <span className="service-price">$650 (one-time)</span>
              </span>
            </label>
            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={selections.socialManagement}
                onChange={(e) => handleChange('socialManagement', e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="service-name">Monthly Management (Lite)</span>
                <span className="service-price">$250/month</span>
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

