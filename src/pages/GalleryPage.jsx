import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import GalleryModal from '../components/GalleryModal'
import portfolioHero from '../assets/portfolio_hero_transparent.png'
import './GalleryPage.css'

function GalleryPage() {
  const theme = useSelector((state) => state.theme.mode)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      name: 'Gorillaz',
      url: 'https://gorillaz.ca',
      description: 'A modern, responsive website showcasing the iconic virtual band with dynamic visuals and engaging content.',
      tags: ['Website Design', 'Branding', 'Responsive'],
      featured: true,
    },
    {
      id: 2,
      name: 'North Point Foundations',
      url: 'https://northpointfoundations.ca',
      description:
        'A professional site for foundation and concrete services, clear service areas, quote requests, and a trustworthy presence for homeowners and builders.',
      tags: ['Website Design', 'Local Business', 'Responsive'],
      featured: true,
    }
  ]

  return (
    <main className={`gallery-page ${theme}`}>
      <div className="gallery-page-container">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <span className="gallery-hero-eyebrow">Our Work</span>
            <h1>Web Design Portfolio</h1>
            <h2>Central Alberta Businesses</h2>
            <p className="gallery-hero-description">
              See the websites we've built for businesses like yours. Each project is designed for performance, search visibility, and a great user experience.
            </p>
          </div>
          <div className="gallery-hero-visual">
            <div className="gallery-hero-image-wrap">
              <svg viewBox="0 0 400 400" className="gallery-hero-svg-bg" aria-hidden="true">
                <defs>
                  <linearGradient id="galleryHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#1e40af" />
                    <stop offset="75%" stopColor="#ff6f61" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="galleryHeroRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#ff6f61" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Pulsing rings behind the camera */}
                <circle cx="200" cy="200" r="140" fill="none" stroke="url(#galleryHeroRing)" strokeWidth="2" opacity="0.5" className="hero-ring hero-ring-1" />
                <circle cx="200" cy="200" r="165" fill="none" stroke="url(#galleryHeroRing)" strokeWidth="1.5" opacity="0.35" className="hero-ring hero-ring-2" />
                <circle cx="200" cy="200" r="190" fill="none" stroke="url(#galleryHeroRing)" strokeWidth="1" opacity="0.2" className="hero-ring hero-ring-3" />
                {/* Rotating dashed orbit */}
                <circle cx="200" cy="200" r="155" fill="none" stroke="url(#galleryHeroGradient)" strokeWidth="2" strokeDasharray="8 12" opacity="0.6" className="hero-orbit" />
                {/* Floating particles */}
                <circle cx="120" cy="160" r="4" fill="url(#galleryHeroGradient)" opacity="0.7" className="hero-particle" style={{ animationDelay: '0s' }} />
                <circle cx="280" cy="140" r="3" fill="#ff6f61" opacity="0.6" className="hero-particle" style={{ animationDelay: '0.8s' }} />
                <circle cx="130" cy="260" r="5" fill="url(#galleryHeroGradient)" opacity="0.5" className="hero-particle" style={{ animationDelay: '1.6s' }} />
                <circle cx="270" cy="250" r="3.5" fill="#ff6f61" opacity="0.5" className="hero-particle" style={{ animationDelay: '2.4s' }} />
                <circle cx="200" cy="100" r="4" fill="url(#galleryHeroGradient)" opacity="0.4" className="hero-particle" style={{ animationDelay: '3.2s' }} />
              </svg>
              <img
                src={portfolioHero}
                alt=""
                className="gallery-hero-image"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="gallery-projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                <div className="project-preview">
                  <div className="project-preview-frame">
                    <div className="project-iframe-clip">
                      <iframe
                        src={project.url}
                        title={project.name}
                        className="project-iframe"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      />
                    </div>
                    <div className="project-overlay">
                      <button
                        className="project-view-button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                          setIsModalOpen(true)
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="link-icon">
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="gallery-coming-soon">
          <div className="coming-soon-content">
            <svg viewBox="0 0 100 100" className="coming-soon-icon">
              <defs>
                <linearGradient id="comingSoonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="none" stroke="url(#comingSoonGradient)" strokeWidth="3" opacity="0.3" />
              <path d="M 30 50 L 45 65 L 70 35" stroke="url(#comingSoonGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h2>More Projects Coming Soon</h2>
            <p>
              We're constantly working on new projects. Check back soon to see more of our work, or
              <a href="/contact" className="coming-soon-link"> get in touch</a> to discuss your project.
            </p>
          </div>
        </section>
      </div>
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
        project={selectedProject}
      />
    </main>
  )
}

export default GalleryPage

