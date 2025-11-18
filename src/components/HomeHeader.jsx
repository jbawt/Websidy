import React from 'react'
import { useSelector } from 'react-redux'
import './HomeHeader.css'

function HomeHeader() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <header className={`home-header ${theme}`}>
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Welcome to Websidy</h1>
          <p className="header-subtitle">
            Building amazing web experiences with modern technology
          </p>
        </div>
        <div className="header-graphic">
          <svg
            viewBox="0 0 400 400"
            className="header-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animated circles */}
            <circle
              cx="200"
              cy="200"
              r="80"
              className="svg-circle circle-1"
              fill="none"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              className="svg-circle circle-2"
              fill="none"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="160"
              className="svg-circle circle-3"
              fill="none"
              strokeWidth="2"
            />
            
            {/* Geometric shapes */}
            <polygon
              points="200,120 240,200 200,280 160,200"
              className="svg-polygon polygon-1"
              fill="none"
              strokeWidth="3"
            />
            <polygon
              points="200,140 220,200 200,260 180,200"
              className="svg-polygon polygon-2"
              fill="none"
              strokeWidth="2"
            />
            
            {/* Decorative lines */}
            <line
              x1="200"
              y1="40"
              x2="200"
              y2="120"
              className="svg-line line-1"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="280"
              x2="200"
              y2="360"
              className="svg-line line-2"
              strokeWidth="2"
            />
            <line
              x1="40"
              y1="200"
              x2="120"
              y2="200"
              className="svg-line line-3"
              strokeWidth="2"
            />
            <line
              x1="280"
              y1="200"
              x2="360"
              y2="200"
              className="svg-line line-4"
              strokeWidth="2"
            />
            
            {/* Floating particles */}
            <circle cx="100" cy="100" r="4" className="svg-particle particle-1" />
            <circle cx="300" cy="100" r="4" className="svg-particle particle-2" />
            <circle cx="100" cy="300" r="4" className="svg-particle particle-3" />
            <circle cx="300" cy="300" r="4" className="svg-particle particle-4" />
            <circle cx="150" cy="150" r="3" className="svg-particle particle-5" />
            <circle cx="250" cy="250" r="3" className="svg-particle particle-6" />
          </svg>
        </div>
      </div>
      
      {/* Wave SVG at the bottom */}
      <div className="header-wave">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            className="wave-path"
            fill="currentColor"
          />
        </svg>
      </div>
    </header>
  )
}

export default HomeHeader

