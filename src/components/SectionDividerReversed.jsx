import React from 'react'
import './SectionDividerReversed.css'
import rocketLaunchFull from '../assets/rocket-launch-full.png'

function SectionDividerReversed() {
  return (
    <section className="section-divider-reversed" aria-hidden="true">
      <div className="divider-visual-reversed">
        <img
          src={rocketLaunchFull}
          alt=""
          className="divider-rocket-launch-icon"
        />
      </div>

      <div className="divider-content-reversed">
        <div className="divider-eyebrow-reversed">After Launch</div>
        <h3>We're here beyond go-live</h3>
        <p>
          Your project doesn't end at launch. We offer ongoing support, content updates, and training so you can grow your site with confidence. Serving Sylvan Lake and Central Alberta, we're just a message away when you need a hand.
        </p>
      </div>
    </section>
  )
}

export default SectionDividerReversed
