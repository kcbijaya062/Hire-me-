'use client'

import React from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Install Extension',
    description: 'Add ConnectNova to your browser with a single click. Seamlessly integrated with your LinkedIn experience.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: 'var(--palette-indigo-500)',
    bg: 'var(--color-secondary-icon-bg)',
  },
  {
    number: '02',
    title: 'Search & Collect',
    description: 'Run your regular LinkedIn search. Our AI automatically scans and collects high-potential profiles for you.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    color: 'var(--color-text-green)',
    bg: 'var(--color-main-tint-sm)',
  },
  {
    number: '03',
    title: 'Rank & Insight',
    description: 'Instantly see how candidates match your specific requirements with AI-powered ranking and detailed insights.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: 'var(--palette-amber-600)',
    bg: 'var(--color-warning-bg)',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">✦ Seamless Workflow</span>
          <h2 className="section-title">How It <span className="text-accent-underline">Works</span></h2>
          <p className="section-body">
            Get from searching to hiring in three simple steps. Our AI handles the complexity so you can focus on building your team.
          </p>
        </div>

        <div className="how-it-works-grid">
          {STEPS.map((step, index) => (
            <div key={step.number} className={`how-step fade-up d${index + 1}`}>
              <div className="how-step-visual">
                <div className="how-step-icon-wrap" style={{ backgroundColor: step.bg, color: step.color }}>
                  {step.icon}
                </div>
                <div className="how-step-number-badge">
                  {step.number}
                </div>
              </div>
              <div className="how-step-content">
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.description}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="how-step-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-default)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-it-works {
          padding: 140px 0;
          background: linear-gradient(to bottom, var(--color-surface) 0%, var(--color-bg) 100%);
          position: relative;
        }
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 80px;
        }
        .how-step {
          position: relative;
          padding: 48px 32px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 32px;
          border: 1px solid var(--color-border-default);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .how-step:hover {
          transform: translateY(-12px);
          background: #fff;
          box-shadow: var(--shadow-xl);
          border-color: var(--color-main-default);
        }
        .how-step-visual {
          position: relative;
          margin-bottom: 32px;
        }
        .how-step-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .how-step-number-badge {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 32px;
          height: 32px;
          background: var(--color-text-default);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          font-family: var(--font-heading);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .how-step-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-text-default);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .how-step-desc {
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-second);
        }
        .how-step-arrow {
          position: absolute;
          top: 50%;
          right: -28px;
          transform: translateY(-50%);
          z-index: 2;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .how-step-arrow {
            top: auto;
            bottom: -36px;
            right: 50%;
            transform: translateX(50%) rotate(90deg);
          }
        }
      `}</style>
    </section>
  )
}

