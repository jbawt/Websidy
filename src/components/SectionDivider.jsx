import React from 'react'
import './SectionDivider.css'

function SectionDivider() {
  return (
    <section className="section-divider" aria-hidden="true">
      <div className="divider-content">
        <div className="divider-eyebrow">Next up</div>
        <h3>From strategy to launch, we stay with you end-to-end</h3>
        <p>
          We bridge the gap between the build and your team, layering in training sessions, documentation, and tooling
          so the hand-off feels effortless.
        </p>
      </div>

      <div className="divider-visual">
        <svg viewBox="0 0 600 200" className="divider-svg">
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          <path
            className="divider-wave slow"
            d="M0 120 C150 60 300 180 450 100 C525 60 575 80 600 110"
            fill="none"
            stroke="url(#dividerGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            className="divider-wave fast"
            d="M0 140 C120 40 260 200 420 90 C500 40 560 90 600 70"
            fill="none"
            stroke="url(#dividerGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <g className="divider-particles">
            <circle cx="80" cy="60" r="6" />
            <circle cx="220" cy="150" r="5" />
            <circle cx="360" cy="40" r="7" />
            <circle cx="500" cy="120" r="5" />
          </g>
        </svg>
      </div>
    </section>
  )
}

export default SectionDivider

