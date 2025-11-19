import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ServicesPage.css'

function ServicesPage() {
  const theme = useSelector((state) => state.theme.mode)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset
          const offset = window.innerHeight / 2 - element.offsetHeight / 2
          window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <div className={`services-page ${theme}`}>
      <div className="services-page-container">
        {/* Hero Section */}
        <section className="services-hero">
          <span className="services-hero-eyebrow">Our Services</span>
          <h1>Comprehensive Digital Solutions</h1>
          <p className="services-hero-description">
            From website design to social media management, we provide end-to-end digital services
            that help your business thrive online.
          </p>
        </section>

        {/* Website Design & Branding Section */}
        <section id="website-design" className="service-detail-section">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="webDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect x="8" y="12" width="48" height="40" rx="4" stroke="url(#webDetailGradient)" strokeWidth="2.5" />
                <line x1="8" y1="24" x2="56" y2="24" stroke="url(#webDetailGradient)" strokeWidth="2" />
                <circle cx="14" cy="18" r="2" fill="url(#webDetailGradient)" />
                <rect x="16" y="32" width="12" height="8" rx="2" fill="url(#webDetailGradient)" opacity="0.6" />
                <rect x="32" y="32" width="12" height="8" rx="2" fill="url(#webDetailGradient)" opacity="0.4" />
              </svg>
            </div>
            <div className="service-detail-title">
              <h2>Website Design & Branding</h2>
              <p className="service-detail-subtitle">
                Custom websites that reflect your brand and drive results
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We create beautiful, responsive websites that not only look great but also perform
                exceptionally. Our design process focuses on understanding your brand, your audience,
                and your goals to deliver a website that truly represents your business.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="service-feature-card">
                <h3>Brand Strategy Workshops</h3>
                <p>
                  We start with in-depth workshops to understand your brand identity, target audience,
                  and business objectives. This foundation ensures every design decision aligns with
                  your goals.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>High-Converting Landing Pages</h3>
                <p>
                  Our landing pages are designed with conversion in mind. We use proven design
                  principles and A/B testing to maximize your conversion rates and ROI.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Design Systems & Component Libraries</h3>
                <p>
                  We build scalable design systems that ensure consistency across your entire website.
                  This makes future updates and additions seamless and cost-effective.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Responsive Design</h3>
                <p>
                  Every website we build is fully responsive, ensuring a perfect experience on desktop,
                  tablet, and mobile devices. Your site will look great on any screen size.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>SEO Optimization</h3>
                <p>
                  We implement SEO best practices from the ground up, including proper meta tags,
                  semantic HTML, and performance optimization to help you rank higher in search
                  results.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Integration</h3>
                <p>
                  We handle all content integration, ensuring your text, images, and media are
                  properly formatted and optimized for the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Web Hosting & Maintenance Section */}
        <section id="web-hosting" className="service-detail-section">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hostingDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect x="12" y="16" width="40" height="32" rx="3" stroke="url(#hostingDetailGradient)" strokeWidth="2.5" fill="none" />
                <line x1="12" y1="28" x2="52" y2="28" stroke="url(#hostingDetailGradient)" strokeWidth="2" />
                <line x1="12" y1="40" x2="52" y2="40" stroke="url(#hostingDetailGradient)" strokeWidth="2" />
                <circle cx="20" cy="22" r="2" fill="url(#hostingDetailGradient)" />
                <circle cx="20" cy="34" r="2" fill="url(#hostingDetailGradient)" opacity="0.8" />
                <circle cx="20" cy="46" r="2" fill="url(#hostingDetailGradient)" opacity="0.6" />
                <path
                  d="M 28 22 L 44 22"
                  stroke="url(#hostingDetailGradient)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <path
                  d="M 28 34 L 44 34"
                  stroke="url(#hostingDetailGradient)"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <path
                  d="M 28 46 L 44 46"
                  stroke="url(#hostingDetailGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <path
                  d="M 32 8 Q 38 4 44 8 Q 48 6 52 10 Q 56 8 60 12 L 60 14 Q 58 12 56 12 Q 54 10 52 10 Q 48 8 44 10 Q 40 6 32 10 Q 24 6 20 10 Q 16 8 12 12 L 12 14 Q 14 12 16 12 Q 18 10 20 10 Q 24 8 28 10 Q 30 6 32 8 Z"
                  fill="url(#hostingDetailGradient)"
                  opacity="0.4"
                />
                <circle cx="48" cy="22" r="1.5" fill="url(#hostingDetailGradient)" opacity="0.7" />
                <circle cx="48" cy="34" r="1.5" fill="url(#hostingDetailGradient)" opacity="0.6" />
                <circle cx="48" cy="46" r="1.5" fill="url(#hostingDetailGradient)" opacity="0.5" />
              </svg>
            </div>
            <div className="service-detail-title">
              <h2>Web Hosting & Maintenance</h2>
              <p className="service-detail-subtitle">
                Reliable hosting with ongoing maintenance to keep your site running smoothly
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We provide secure, high-performance hosting solutions backed by comprehensive maintenance
                services. Your website will be fast, secure, and always up-to-date, so you can focus
                on growing your business instead of managing technical infrastructure.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="service-feature-card">
                <h3>Secure Hosting Infrastructure</h3>
                <p>
                  We use enterprise-grade hosting infrastructure with SSL certificates, DDoS protection,
                  and regular security audits. Your site and your visitors' data are protected with
                  industry-standard security measures.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Regular Backups & Updates</h3>
                <p>
                  Automated daily backups ensure your data is always safe. We handle all software
                  updates, security patches, and maintenance tasks so your site stays current and
                  secure without any effort on your part.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>24/7 Monitoring & Support</h3>
                <p>
                  Our monitoring systems watch your site around the clock, alerting us to any issues
                  before they become problems. We provide 24/7 support to address any concerns
                  immediately.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Performance Optimization</h3>
                <p>
                  We continuously optimize your site's performance with caching, image optimization,
                  and CDN integration. Your visitors will experience fast load times and smooth
                  browsing experiences.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Scalable Resources</h3>
                <p>
                  As your business grows, your hosting can grow with you. We provide scalable hosting
                  solutions that can handle traffic spikes and increased demand without performance
                  degradation.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Domain & Email Management</h3>
                <p>
                  We handle domain registration, renewal, and configuration. We also set up and manage
                  professional email accounts that match your domain, giving you a complete online
                  presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Setup & Training Section */}
        <section id="social-media" className="service-detail-section">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="socialDetailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="20" r="6" fill="url(#socialDetailGradient)" />
                <circle cx="18" cy="40" r="5" fill="url(#socialDetailGradient)" opacity="0.8" />
                <circle cx="46" cy="40" r="5" fill="url(#socialDetailGradient)" opacity="0.8" />
                <line x1="32" y1="26" x2="22" y2="35" stroke="url(#socialDetailGradient)" strokeWidth="2" opacity="0.5" />
                <line x1="32" y1="26" x2="42" y2="35" stroke="url(#socialDetailGradient)" strokeWidth="2" opacity="0.5" />
              </svg>
            </div>
            <div className="service-detail-title">
              <h2>Social Media Setup & Training</h2>
              <p className="service-detail-subtitle">
                Get your social media presence up and running with expert guidance
              </p>
            </div>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-description">
              <p>
                We don't just set up your social media accounts—we empower you to manage them
                confidently. Our comprehensive training ensures you understand how to create
                engaging content, interact with your audience, and grow your online presence.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="service-feature-card">
                <h3>Channel Setup & Audit</h3>
                <p>
                  We set up your social media accounts from scratch, ensuring proper branding,
                  optimization, and security. We also audit existing accounts to identify
                  opportunities for improvement.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Playbooks & Training</h3>
                <p>
                  Receive custom content playbooks tailored to your brand and industry. Our
                  training sessions teach you how to create engaging posts, use hashtags effectively,
                  and maintain a consistent brand voice.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Growth and Engagement Coaching</h3>
                <p>
                  Learn proven strategies to grow your following and increase engagement. We provide
                  ongoing coaching to help you understand analytics, respond to comments, and build
                  a loyal community.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Content Templates</h3>
                <p>
                  We provide professionally designed content templates that you can customize for
                  your posts. These templates ensure brand consistency and save you time.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Best Practices Guide</h3>
                <p>
                  Get a comprehensive guide covering best practices for each platform, including
                  optimal posting times, content types, and engagement strategies.
                </p>
              </div>
              <div className="service-feature-card">
                <h3>Ongoing Support</h3>
                <p>
                  Our support doesn't end after training. We're available to answer questions and
                  provide guidance as you grow your social media presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help bring your digital vision to life.</p>
          <div className="services-cta-buttons">
            <Link to="/pricing" className="services-cta-button">View Full Pricing</Link>
            <Link to="/contact" className="services-cta-button">Get in Touch</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicesPage

