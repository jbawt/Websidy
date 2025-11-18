import React from 'react'
import { useSelector } from 'react-redux'
import './Logo.css'

function Logo() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className="logo-svg-container">
      <svg
        viewBox="0 0 200 200"
        className={`logo-svg ${theme}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer glow effect */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Capital W shape */}
        <path
          d="M 30 160 L 30 60 L 70 140 L 100 80 L 130 140 L 170 60 L 170 160"
          className="logo-main-path"
          fill="none"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        
        {/* Decorative accent lines */}
        <line
          x1="30"
          y1="60"
          x2="70"
          y2="140"
          className="logo-line line-1"
          strokeWidth="4"
          opacity="0.5"
        />
        <line
          x1="100"
          y1="80"
          x2="130"
          y2="140"
          className="logo-line line-2"
          strokeWidth="4"
          opacity="0.5"
        />
        <line
          x1="130"
          y1="140"
          x2="170"
          y2="60"
          className="logo-line line-3"
          strokeWidth="4"
          opacity="0.5"
        />
        
        {/* Decorative circles for depth */}
        <circle
          cx="100"
          cy="110"
          r="25"
          className="logo-circle circle-1"
          fill="none"
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="110"
          r="45"
          className="logo-circle circle-2"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

export default Logo

