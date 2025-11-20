import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './SectionDivider.css'

function SectionDivider() {
  const theme = useSelector((state) => state.theme.mode)
  const [activeStep, setActiveStep] = useState(null)

  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your vision, goals, and target audience to craft a tailored strategy.',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dividerProcessGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#dividerProcessGradient1)" strokeWidth="3" />
          <path d="M 30 50 L 45 65 L 70 35" stroke="url(#dividerProcessGradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      id: 2,
      number: '02',
      title: 'Design & Prototyping',
      description: 'We bring your ideas to life with wireframes, mockups, and interactive prototypes for your feedback.',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dividerProcessGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="url(#dividerProcessGradient2)" strokeWidth="3" />
          <rect x="30" y="30" width="20" height="15" fill="url(#dividerProcessGradient2)" opacity="0.5" />
          <rect x="55" y="30" width="15" height="15" fill="url(#dividerProcessGradient2)" opacity="0.3" />
          <rect x="30" y="50" width="40" height="8" fill="url(#dividerProcessGradient2)" opacity="0.4" />
        </svg>
      ),
    },
    {
      id: 3,
      number: '03',
      title: 'Development & Testing',
      description: 'Our developers build a robust, responsive, and SEO-friendly website, rigorously tested for performance.',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dividerProcessGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <path d="M 50 20 L 70 40 L 50 60 L 30 40 Z" fill="url(#dividerProcessGradient3)" opacity="0.6" />
          <circle cx="50" cy="50" r="8" fill="url(#dividerProcessGradient3)" />
          <path d="M 50 60 L 50 80" stroke="url(#dividerProcessGradient3)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your site, provide comprehensive training, and offer ongoing support to ensure long-term success.',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dividerProcessGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="35" fill="none" stroke="url(#dividerProcessGradient4)" strokeWidth="3" />
          <path d="M 50 20 L 50 50 L 70 70" stroke="url(#dividerProcessGradient4)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="50" r="5" fill="url(#dividerProcessGradient4)" />
        </svg>
      ),
    },
  ]

  return (
    <section className={`section-divider ${theme}`}>
      <div className="divider-content">
        <div className="divider-eyebrow">How We Work</div>
        <h3>Our Process</h3>
        <p>
          From initial concept to launch, we follow a proven process that ensures quality results.
        </p>
      </div>

      <div className="divider-process-flow">
        <div className="process-flow-container">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className={`process-step-card ${activeStep === step.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p className={activeStep === step.id ? 'expanded' : ''}>{step.description}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className={`process-connector ${activeStep === step.id || activeStep === processSteps[index + 1].id ? 'active' : ''}`}>
                  <svg viewBox="0 0 100 20" className="connector-svg">
                    <defs>
                      <linearGradient id={`connectorGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#1e40af" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 Q 25 5 50 10 T 100 10"
                      fill="none"
                      stroke={`url(#connectorGradient${index})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="connector-path"
                    />
                    <circle cx="50" cy="10" r="3" fill={`url(#connectorGradient${index})`} className="connector-dot" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionDivider

