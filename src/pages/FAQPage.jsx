import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './FAQPage.css'

function FAQPage() {
  const theme = useSelector((state) => state.theme.mode)

  const faqs = [
    {
      id: 1,
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment plans for website projects over $2,000. Contact us to discuss options.',
    },
    {
      id: 2,
      question: "What's included in the base package?",
      answer: 'The base package includes 3 pages (Home, About, Contact), responsive design, SEO optimization, and content integration.',
    },
    {
      id: 3,
      question: 'Can I cancel hosting anytime?',
      answer: 'Yes, you can cancel your hosting subscription at any time. No long-term contracts required.',
    },
    {
      id: 4,
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All hosting plans include support, and we offer maintenance packages for website updates and changes.',
    },
    {
      id: 5,
      question: 'How long does it take to build a website?',
      answer: 'Typically, a website takes 2-4 weeks from start to finish, depending on the complexity and number of pages. We\'ll provide a timeline during our initial consultation.',
    },
    {
      id: 6,
      question: 'Do you provide content writing services?',
      answer: 'While we focus on design and development, we can help integrate your existing content. For content creation, we can recommend trusted copywriters.',
    },
    {
      id: 7,
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All websites we build are fully responsive and optimized for mobile, tablet, and desktop devices.',
    },
    {
      id: 8,
      question: 'What happens after my website is launched?',
      answer: 'After launch, we provide training on how to manage your site, and you can choose from our hosting and maintenance plans for ongoing support.',
    },
  ]

  return (
    <div className={`faq-page ${theme}`}>
      <div className="faq-page-container">
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="faq-hero-content">
            <span className="faq-hero-eyebrow">FAQ</span>
            <h1>Frequently Asked Questions</h1>
            <p className="faq-hero-description">
              Find answers to common questions about our services, pricing, and process. If you don't
              see what you're looking for, feel free to reach out.
            </p>
          </div>
          <div className="faq-hero-visual">
            <svg viewBox="0 0 400 300" className="faq-hero-svg">
              <defs>
                <linearGradient id="faqHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <filter id="faqGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Question mark */}
              <path
                d="M 200 50 Q 200 30 180 30 Q 160 30 160 50 Q 160 70 180 70 Q 200 70 200 90 L 200 120"
                fill="none"
                stroke="url(#faqHeroGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                filter="url(#faqGlow)"
                className="question-mark"
              />
              <circle cx="200" cy="150" r="6" fill="url(#faqHeroGradient)" filter="url(#faqGlow)" />

              {/* Speech bubbles */}
              <ellipse cx="120" cy="200" rx="40" ry="30" fill="url(#faqHeroGradient)" opacity="0.3" className="speech-bubble" />
              <path d="M 100 220 L 90 240 L 110 220 Z" fill="url(#faqHeroGradient)" opacity="0.3" />
              
              <ellipse cx="280" cy="220" rx="50" ry="35" fill="url(#faqHeroGradient)" opacity="0.3" className="speech-bubble" style={{ animationDelay: '0.3s' }} />
              <path d="M 260 240 L 250 260 L 270 240 Z" fill="url(#faqHeroGradient)" opacity="0.3" />

              {/* Floating particles */}
              <circle cx="80" cy="80" r="4" fill="url(#faqHeroGradient)" opacity="0.6" className="faq-particle" style={{ animationDelay: '0.2s' }} />
              <circle cx="320" cy="100" r="3" fill="url(#faqHeroGradient)" opacity="0.5" className="faq-particle" style={{ animationDelay: '0.8s' }} />
              <circle cx="60" cy="250" r="3.5" fill="url(#faqHeroGradient)" opacity="0.4" className="faq-particle" style={{ animationDelay: '1.4s' }} />
              <circle cx="340" cy="180" r="2.5" fill="url(#faqHeroGradient)" opacity="0.7" className="faq-particle" style={{ animationDelay: '2s' }} />
            </svg>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="faq-content-section">
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="faq-cta-section">
          <h2>Still Have Questions?</h2>
          <p>We're here to help! Get in touch and we'll answer any questions you have.</p>
          <div className="faq-cta-buttons">
            <Link to="/contact" className="faq-cta-button">
              Contact Us
            </Link>
            <Link to="/pricing" className="faq-cta-button faq-cta-button-secondary">
              View Pricing
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQPage

