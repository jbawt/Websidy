import React from 'react'
import './SectionDividerReversed.css'

function SectionDividerReversed() {
  return (
    <section className="section-divider-reversed" aria-hidden="true">
      <div className="divider-visual-reversed">
        <svg viewBox="0 0 600 200" className="divider-svg-reversed">
          <defs>
            <linearGradient id="dividerGradientReversed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          <path
            className="divider-wave-reversed slow"
            d="M0 120 C150 60 300 180 450 100 C525 60 575 80 600 110"
            fill="none"
            stroke="url(#dividerGradientReversed)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            className="divider-wave-reversed fast"
            d="M0 140 C120 40 260 200 420 90 C500 40 560 90 600 70"
            fill="none"
            stroke="url(#dividerGradientReversed)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <g className="divider-particles-reversed">
            <circle cx="80" cy="60" r="6" />
            <circle cx="220" cy="150" r="5" />
            <circle cx="360" cy="40" r="7" />
            <circle cx="500" cy="120" r="5" />
          </g>
        </svg>
      </div>

      <div className="divider-content-reversed">
        <div className="divider-eyebrow-reversed">Transparent Pricing</div>
        <h3>Clear costs, no surprises</h3>
        <p>
          We believe in straightforward pricing that makes it easy to plan and budget. Every project is customized to your needs with transparent costs from the start.
        </p>
      </div>
    </section>
  )
}

export default SectionDividerReversed

