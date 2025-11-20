import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import GalleryModal from '../components/GalleryModal'
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
  ]

  return (
    <div className={`gallery-page ${theme}`}>
      <div className="gallery-page-container">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <span className="gallery-hero-eyebrow">Our Work</span>
            <h1>Portfolio Gallery</h1>
            <p className="gallery-hero-description">
              Explore the websites we've built for our clients. Each project is crafted with attention
              to detail, performance, and user experience.
            </p>
          </div>
          <div className="gallery-hero-visual">
            <svg viewBox="0 0 400 300" className="gallery-hero-svg">
              <defs>
                <linearGradient id="galleryHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              {/* Multiple browser windows */}
              <rect x="20" y="20" width="160" height="120" rx="6" stroke="url(#galleryHeroGradient)" strokeWidth="2.5" fill="none" />
              <line x1="20" y1="50" x2="180" y2="50" stroke="url(#galleryHeroGradient)" strokeWidth="2" />
              <circle cx="35" cy="35" r="3" fill="url(#galleryHeroGradient)" />
              <rect x="30" y="70" width="40" height="30" rx="3" fill="url(#galleryHeroGradient)" opacity="0.3" />
              <rect x="80" y="70" width="50" height="30" rx="3" fill="url(#galleryHeroGradient)" opacity="0.2" />
              
              <rect x="220" y="40" width="160" height="120" rx="6" stroke="url(#galleryHeroGradient)" strokeWidth="2.5" fill="none" />
              <line x1="220" y1="70" x2="380" y2="70" stroke="url(#galleryHeroGradient)" strokeWidth="2" />
              <circle cx="235" cy="55" r="3" fill="url(#galleryHeroGradient)" />
              <rect x="230" y="90" width="50" height="30" rx="3" fill="url(#galleryHeroGradient)" opacity="0.3" />
              <rect x="290" y="90" width="40" height="30" rx="3" fill="url(#galleryHeroGradient)" opacity="0.2" />
              
              {/* Connecting lines */}
              <path d="M 100 140 Q 200 160 300 160" stroke="url(#galleryHeroGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5" />
              
              {/* Floating elements */}
              <circle cx="50" cy="200" r="4" fill="url(#galleryHeroGradient)" opacity="0.6" className="float-element" />
              <circle cx="350" cy="220" r="3" fill="url(#galleryHeroGradient)" opacity="0.5" className="float-element" style={{ animationDelay: '0.3s' }} />
              <circle cx="200" cy="250" r="5" fill="url(#galleryHeroGradient)" opacity="0.4" className="float-element" style={{ animationDelay: '0.6s' }} />
            </svg>
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
                    <iframe
                      src={project.url}
                      title={project.name}
                      className="project-iframe"
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
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
    </div>
  )
}

export default GalleryPage

