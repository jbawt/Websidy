import React from 'react'
import './Logo.css'
import websidyLogoNew from '../assets/websidy-logo-nav.webp'

const LOGO_WIDTH = 280
const LOGO_HEIGHT = 204

function Logo() {
  return (
    <div className="logo-svg-container">
      <img
        className="logo-image"
        src={websidyLogoNew}
        alt="Websidy logo"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        decoding="async"
      />
    </div>
  )
}

export default Logo
