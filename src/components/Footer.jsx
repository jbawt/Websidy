import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Footer.css'

function Footer() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-copyright">
            <p className="copyright">© {new Date().getFullYear()} Websidy · Sylvan Lake, Alberta</p>
          </div>

          <nav className="footer-section footer-nav">
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://itflow.websidy.ca/client/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  )
}

export default Footer

