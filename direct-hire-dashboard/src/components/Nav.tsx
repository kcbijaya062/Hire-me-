'use client'

import { useEffect, useState } from 'react'

const NAV_LOGO_ICON = '/img/nav/logo_icon.png'
const NAV_LOGO_WORDMARK = '/img/nav/logo_wordmark.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''} ${mobileMenuOpen ? 'nav--open' : ''}`}
      id="nav"
    >
      <a href="#" className="nav-brand">
        <img className="nav-brand-icon" src={NAV_LOGO_ICON} alt="JobNova icon" />
        <img className="nav-brand-wordmark" src={NAV_LOGO_WORDMARK} alt="JobNova" />
      </a>

      <div className={`nav-tabs ${mobileMenuOpen ? 'nav-tabs--open' : ''}`}>
        <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Feature</a>
        <a href="#pricing"  className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="#faq"      className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
        <div className="nav-affiliate">
          <a href="#" className="nav-link">Affiliate</a>
          <span className="nav-badge">30%</span>
        </div>
        <div className="nav-mobile-actions">
           <a href="#" className="btn btn-dark w-full">Find Talents</a>
           <a href="/jobs" className="btn btn-primary w-full">Sign Up</a>
        </div>
      </div>

      <div className="nav-actions">
        <a href="#" className="btn btn-dark">Find Talents</a>
        <div className="nav-divider" />
        <a href="/jobs" className="btn btn-ghost">Login</a>
        <a href="#" className="btn btn-primary">
          Sign Up
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <button 
        className={`nav-hamburger ${mobileMenuOpen ? 'is-active' : ''}`} 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <style jsx>{`
        .nav--scrolled {
          background: rgba(255, 255, 255, 0.78) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
          border-bottom-color: rgba(15, 23, 42, 0.08) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
        }
        
        @media (max-width: 768px) {
          .nav-tabs {
            position: fixed;
            top: 75px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 40px;
            gap: 24px;
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.4s ease, opacity 0.4s ease;
            pointer-events: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .nav-tabs--open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .nav-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            margin-top: 20px;
          }
          .nav-hamburger.is-active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }
          .nav-hamburger.is-active span:nth-child(2) {
            opacity: 0;
          }
          .nav-hamburger.is-active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
          .w-full {
            width: 100%;
          }
        }
        
        @media (min-width: 769px) {
          .nav-mobile-actions {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
