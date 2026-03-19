import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <span className="about-eyebrow">Why Websidy</span>
        <h2>Professional web design and digital services for Central Alberta</h2>
        <p>
          Based in Sylvan Lake, Websidy helps small and medium-sized businesses across Central Alberta build a strong online presence. We create fast, reliable websites and handle social media setup and training so your brand stands out—without needing a technical team.
        </p>
        <p>
          From website design and development to social media launch and ongoing support, we focus on clear, results-driven solutions. Our goal is simple: make professional digital presence accessible so local businesses can compete and grow with confidence.
        </p>
        {/* <div className="about-metrics">
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
        </div> */}
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

