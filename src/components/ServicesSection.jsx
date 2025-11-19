import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesSection.css'

const services = [
  {
    title: 'Website Design & Branding',
    description:
      'Custom, responsive websites that showcase your brand, built with modern design systems and attention to detail.',
    features: ['Brand strategy workshops', 'High-converting landing pages', 'Design systems & component libraries'],
    icon: 'design',
    badge: 'Experience',
    cta: 'Explore design process',
  },
  {
    title: 'Web Hosting & Maintenance',
    description:
      'Reliable hosting solutions with ongoing maintenance, security updates, and performance monitoring to keep your site running smoothly.',
    features: ['Secure hosting infrastructure', 'Regular backups & updates', '24/7 monitoring & support for your website'],
    icon: 'hosting',
    badge: 'Reliability',
    cta: 'View hosting options',
  },
  {
    title: 'Social Media Setup & Training',
    description:
      'From account creation to on-brand content templates, we equip you with everything you need to show up consistently.',
    features: ['Channel setup & audit', 'Content playbooks & training', 'Growth and engagement coaching'],
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

const IconHosting = () => (
  <svg
    className="service-icon-svg"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="hostingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
    </defs>
    {/* Server/Cloud structure */}
    <rect x="12" y="16" width="40" height="32" rx="3" stroke="url(#hostingGradient1)" strokeWidth="2.5" fill="none" />
    <line x1="12" y1="28" x2="52" y2="28" stroke="url(#hostingGradient1)" strokeWidth="2" />
    <line x1="12" y1="40" x2="52" y2="40" stroke="url(#hostingGradient1)" strokeWidth="2" />
    {/* Server indicators */}
    <circle cx="20" cy="22" r="2" fill="url(#hostingGradient1)" />
    <circle cx="20" cy="34" r="2" fill="url(#hostingGradient1)" opacity="0.8" />
    <circle cx="20" cy="46" r="2" fill="url(#hostingGradient1)" opacity="0.6" />
    {/* Data flow lines */}
    <path
      d="M 28 22 L 44 22"
      stroke="url(#hostingGradient1)"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <path
      d="M 28 34 L 44 34"
      stroke="url(#hostingGradient1)"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <path
      d="M 28 46 L 44 46"
      stroke="url(#hostingGradient1)"
      strokeWidth="1.5"
      opacity="0.4"
    />
    {/* Cloud/Network symbol */}
    <path
      d="M 32 8 Q 38 4 44 8 Q 48 6 52 10 Q 56 8 60 12 L 60 14 Q 58 12 56 12 Q 54 10 52 10 Q 48 8 44 10 Q 40 6 32 10 Q 24 6 20 10 Q 16 8 12 12 L 12 14 Q 14 12 16 12 Q 18 10 20 10 Q 24 8 28 10 Q 30 6 32 8 Z"
      fill="url(#hostingGradient1)"
      opacity="0.4"
    />
    {/* Connection dots */}
    <circle cx="48" cy="22" r="1.5" fill="url(#hostingGradient1)" opacity="0.7" />
    <circle cx="48" cy="34" r="1.5" fill="url(#hostingGradient1)" opacity="0.6" />
    <circle cx="48" cy="46" r="1.5" fill="url(#hostingGradient1)" opacity="0.5" />
  </svg>
)

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
              <div className="service-icon">
                {service.icon === 'design' ? (
                  <IconDesign />
                ) : service.icon === 'social' ? (
                  <IconSocial />
                ) : (
                  <IconHosting />
                )}
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
                    : service.icon === 'social'
                    ? '/services#social-media'
                    : '/services#web-hosting'
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

