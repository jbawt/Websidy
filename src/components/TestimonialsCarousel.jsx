import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './TestimonialsCarousel.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content:
      'Websidy transformed our online presence. The website they built is not only beautiful but also incredibly fast and easy to manage. Their team was professional and responsive throughout the entire process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Local Bakery Co.',
    role: 'Owner',
    content:
      'The social media training was exactly what we needed. We went from having no online presence to confidently managing our accounts. The setup was seamless and the ongoing support has been invaluable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Agency',
    role: 'Marketing Director',
    content:
      'Working with Websidy was a game-changer. They understood our brand immediately and delivered a website that perfectly represents who we are. The attention to detail and design quality is outstanding.',
    rating: 5,
  },
]

function TestimonialsCarousel() {
  const theme = useSelector((state) => state.theme.mode)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className={`testimonials-carousel ${theme}`} id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">What Clients Say</span>
          <h2>Trusted by businesses like yours</h2>
        </div>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="star-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id={`starGradient-${testimonial.id}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill={`url(#starGradient-${testimonial.id}-${i})`}
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="testimonial-content">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="carousel-button carousel-button-prev"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="carousel-button carousel-button-next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="testimonials-cta">
          <Link to="/gallery" className="testimonials-cta-button">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel

