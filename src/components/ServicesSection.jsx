import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesSection.css'

const services = [
  {
    title: 'Website Design & Development',
    description:
      'Custom websites for Central Alberta businesses, responsive, fast, and SEO-friendly. Packages from 3 pages with optional hosting and ongoing support.',
    features: ['Strategic branding and visual identity for your business', 'Custom-built responsive websites (no generic templates)', 'Managed hosting and ongoing support for peace of mind'],
    icon: 'design',
    badge: 'Pricing',
    cta: 'See website pricing',
  },
  {
    title: 'Social Media Setup & Training',
    description:
      'Get your social presence launched with on-brand profiles, content templates, and training so you can post and engage with confidence.',
    features: ['Full channel setup and audit', 'Content playbooks and hands-on training', 'Growth and engagement coaching for local reach'],
    icon: 'social',
    badge: 'Engagement',
    cta: 'See training details',
  },
]

const IconDesign = () => (
  <svg
    className="service-icon-svg"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="designGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="55%" stopColor="#ff6f61" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
    </defs>
    {/* Browser window */}
    <rect x="8" y="12" width="48" height="40" rx="4" stroke="url(#designGradient1)" strokeWidth="2.5" />
    <line x1="8" y1="24" x2="56" y2="24" stroke="url(#designGradient1)" strokeWidth="2" />
    <circle cx="14" cy="18" r="2" fill="url(#designGradient1)" />
    <circle cx="22" cy="18" r="2" fill="url(#designGradient1)" opacity="0.5" />
    <circle cx="30" cy="18" r="2" fill="url(#designGradient1)" opacity="0.3" />
    {/* Design elements */}
    <rect x="16" y="32" width="12" height="8" rx="2" fill="url(#designGradient1)" opacity="0.6" />
    <rect x="32" y="32" width="12" height="8" rx="2" fill="url(#designGradient1)" opacity="0.4" />
    <rect x="16" y="44" width="28" height="4" rx="2" fill="url(#designGradient1)" opacity="0.5" />
    {/* Palette */}
    <circle cx="50" cy="38" r="6" stroke="url(#designGradient1)" strokeWidth="2" fill="none" />
    <circle cx="48" cy="36" r="1.5" fill="url(#designGradient1)" />
    <circle cx="52" cy="36" r="1.5" fill="url(#designGradient1)" opacity="0.7" />
    <circle cx="50" cy="40" r="1.5" fill="url(#designGradient1)" opacity="0.5" />
  </svg>
)

const IconSocial = () => (
  <svg
    className="service-icon-svg"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="socialGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="55%" stopColor="#ff6f61" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
    </defs>
    {/* Share/network nodes */}
    <circle cx="32" cy="20" r="6" fill="url(#socialGradient1)" />
    <circle cx="18" cy="40" r="5" fill="url(#socialGradient1)" opacity="0.8" />
    <circle cx="46" cy="40" r="5" fill="url(#socialGradient1)" opacity="0.8" />
    <circle cx="32" cy="50" r="4" fill="url(#socialGradient1)" opacity="0.6" />
    {/* Connecting lines */}
    <line x1="32" y1="26" x2="22" y2="35" stroke="url(#socialGradient1)" strokeWidth="2" opacity="0.5" />
    <line x1="32" y1="26" x2="42" y2="35" stroke="url(#socialGradient1)" strokeWidth="2" opacity="0.5" />
    <line x1="32" y1="46" x2="22" y2="45" stroke="url(#socialGradient1)" strokeWidth="2" opacity="0.4" />
    <line x1="32" y1="46" x2="42" y2="45" stroke="url(#socialGradient1)" strokeWidth="2" opacity="0.4" />
    {/* Signal waves */}
    <path
      d="M 32 20 Q 40 16 48 20"
      stroke="url(#socialGradient1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M 32 20 Q 24 16 16 20"
      stroke="url(#socialGradient1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.3"
    />
  </svg>
)

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-intro">
        <p className="eyebrow">What We Do</p>
        <h2>Web design and social media services for Sylvan Lake & Central Alberta</h2>
        <p>
          We help Central Alberta businesses launch and grow online with strategic websites and social media. Every project includes clear handoff, documentation, and training so you can maintain and scale with confidence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="card-glow" />
            <div className="card-content">
              <span className="service-badge">{service.badge}</span>
              <div className="service-icon">
                {service.icon === 'design' ? <IconDesign /> : <IconSocial />}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link 
                to={
                  service.icon === 'design'
                    ? '/services#website-design'
                    : '/services#social-media'
                } 
                className="service-cta"
              >
                {service.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

