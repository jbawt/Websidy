import React from 'react'
import './ServicesSection.css'

const services = [
  {
    title: 'Website Design & Branding',
    description:
      'Custom, responsive websites that showcase your brand, built with modern design systems and attention to detail.',
    features: ['Brand strategy workshops', 'High-converting landing pages', 'Design systems & component libraries'],
    icon: '🎨',
    badge: 'Experience',
    cta: 'Explore design process',
  },
  {
    title: 'Social Media Setup & Training',
    description:
      'From account creation to on-brand content templates, we equip you with everything you need to show up consistently.',
    features: ['Channel setup & audit', 'Content playbooks & training', 'Growth and engagement coaching'],
    icon: '📢',
    badge: 'Engagement',
    cta: 'See training details',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-intro">
        <p className="eyebrow">What We Do</p>
        <h2>Services built to launch, scale, and stand out</h2>
        <p>
          We pair strategy with execution to launch websites and social channels that feel cohesive, performant, and easy
          to maintain. Every engagement comes with thoughtful handoff, documentation, and coaching.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="card-glow" />
            <div className="card-content">
              <span className="service-badge">{service.badge}</span>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta" type="button">
                {service.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

