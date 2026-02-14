import React from 'react'
import './Logo.css'
import websidyLogoNew from '../assets/websidy_logo_transparent.png'

function Logo() {
  return (
    <div className="logo-svg-container">
      <img className="logo-image" src={websidyLogoNew} alt="Websidy logo" />
    </div>
  )
}

export default Logo
