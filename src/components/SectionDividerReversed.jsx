import React, { useRef, useState, useEffect } from 'react'
import './SectionDividerReversed.css'
import afterLaunchIcon from '../assets/after-launch-icon.png'
import rocketIcon from '../assets/Rocket-Icon.png'

function SectionDividerReversed() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`section-divider-reversed ${inView ? 'in-view' : ''}`}
      aria-hidden="true"
    >
      <div className="divider-visual-reversed">
        <img
          src={afterLaunchIcon}
          alt=""
          className="divider-after-launch-icon"
        />
      </div>

      <div className="divider-rocket-wrapper">
        <img
          src={rocketIcon}
          alt=""
          className="divider-rocket-icon"
          aria-hidden="true"
        />
      </div>

      <div className="divider-content-reversed">
        <div className="divider-eyebrow-reversed">After Launch</div>
        <h3>We're here beyond go-live</h3>
        <p>
          Your project doesn't end at launch. We offer ongoing support, content updates, and training so you can grow your site with confidence—and we're just a message away when you need a hand.
        </p>
      </div>
    </section>
  )
}

export default SectionDividerReversed
