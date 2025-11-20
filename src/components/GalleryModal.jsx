import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './GalleryModal.css'

function GalleryModal({ isOpen, onClose, project }) {
  const theme = useSelector((state) => state.theme.mode)
  const [activeDevice, setActiveDevice] = useState('desktop')

  const devices = [
    { id: 'desktop', name: 'Desktop', width: '1920px', height: '1080px', icon: '🖥️' },
    { id: 'tablet', name: 'Tablet', width: '768px', height: '1024px', icon: '📱' },
    { id: 'mobile', name: 'Mobile', width: '375px', height: '667px', icon: '📱' },
  ]

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const currentDevice = devices.find((d) => d.id === activeDevice)

  return (
    <div className={`gallery-modal-overlay ${theme}`} onClick={onClose}>
      <div className={`gallery-modal ${theme}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-header-content">
            <h2>{project.name}</h2>
            <p className="modal-description">{project.description}</p>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-content">
          {/* Device Selector */}
          <div className="device-selector">
            {devices.map((device) => (
              <button
                key={device.id}
                className={`device-button ${activeDevice === device.id ? 'active' : ''}`}
                onClick={() => setActiveDevice(device.id)}
                aria-label={`View ${device.name} version`}
              >
                <span className="device-icon">{device.icon}</span>
                <span className="device-name">{device.name}</span>
              </button>
            ))}
          </div>

          {/* Device Mockup */}
          <div className="device-mockup-container">
            <div className={`device-mockup device-${activeDevice}`}>
              {/* Desktop Mockup */}
              {activeDevice === 'desktop' && (
                <div className="desktop-frame">
                  <div className="desktop-top-bar">
                    <div className="desktop-controls">
                      <span className="control-dot red"></span>
                      <span className="control-dot yellow"></span>
                      <span className="control-dot green"></span>
                    </div>
                    <div className="desktop-url-bar">
                      <span className="url-text">{project.url}</span>
                    </div>
                  </div>
                  <div className="desktop-screen">
                    <iframe
                      src={project.url}
                      title={`${project.name} - Desktop`}
                      className="device-iframe"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                </div>
              )}

              {/* Tablet Mockup */}
              {activeDevice === 'tablet' && (
                <div className="tablet-frame">
                  <div className="tablet-screen">
                    <iframe
                      src={project.url}
                      title={`${project.name} - Tablet`}
                      className="device-iframe"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                </div>
              )}

              {/* Mobile Mockup */}
              {activeDevice === 'mobile' && (
                <div className="mobile-frame">
                  <div className="mobile-notch"></div>
                  <div className="mobile-screen">
                    <iframe
                      src={project.url}
                      title={`${project.name} - Mobile`}
                      className="device-iframe"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                  <div className="mobile-home-indicator"></div>
                </div>
              )}
            </div>
          </div>

          {/* Device Info */}
          <div className="device-info">
            <p>
              Viewing <strong>{currentDevice.name}</strong> version ({currentDevice.width} × {currentDevice.height})
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-visit-button"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="15 3 21 3 21 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="10"
                y1="14"
                x2="21"
                y2="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Visit Live Site
          </a>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal

