import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <span className="about-eyebrow">Why Websidy</span>
        <h2>We combine polished visuals with practical systems</h2>
        <p>
          Websidy is a modern digital services company specializing in clean, effective website design for small and
          medium-sized businesses. We build fast, reliable static websites that help brands establish a strong online presence with ease.
        </p>
        <p>
          In addition to web design, we handle social media setup and run personalized training so your team feels confident managing
          and growing every channel we launch. Our goal: make digital presence simple, accessible, and unmistakably professional.
        </p>
        <div className="about-metrics">
          <div className="metric">
            <span className="metric-value">50+</span>
            <span className="metric-label">Sites launched</span>
          </div>
          <div className="metric">
            <span className="metric-value">2x</span>
            <span className="metric-label">Avg. lift in leads</span>
          </div>
          <div className="metric">
            <span className="metric-value">7 day</span>
            <span className="metric-label">Typical turnaround</span>
          </div>
        </div>
      </div>
      <div className="about-visual">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="about-card">
          <div className="card-header">
            <div className="status-dot" />
            <span>Launch checklist</span>
          </div>
          <ul>
            <li>Responsive layout tuning</li>
            <li>SEO + performance sweep</li>
            <li>Social profile alignment</li>
            <li>Client onboarding & training</li>
          </ul>
          <div className="card-footer">Every build ships with documentation & recorded walkthroughs.</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

