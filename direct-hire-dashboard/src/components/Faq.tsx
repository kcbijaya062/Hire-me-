'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How does it work?',
    a: 'JobNova uses advanced AI algorithms to match your skills and interests to global jobs that are difficult to find on mainstream job sites. You\'ll receive daily, personalized recommendations. Nearly all jobs we surface are postings listed within the past 8 hours.',
  },
  {
    q: 'Which areas and functions do you support for job searching?',
    a: 'JobNova covers 30+ industries including tech, finance, consulting, design, and marketing — across product, engineering, operations, and more. New categories are added regularly based on user demand.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes — all paid plans can be cancelled anytime. Your access remains active until the end of the current billing period, with no additional charges.',
  },
  {
    q: 'Who can I contact for support or queries?',
    a: 'You can reach our support team at support@jobnova.ai or via the in-app chat. We typically respond within a few hours on business days.',
  },
  {
    q: 'How many job recommendations will I receive?',
    a: 'Free plan users receive up to 5 curated matches daily. Pro and Pro+ users receive unlimited personalized recommendations with priority delivery before listings go public.',
  },
  {
    q: 'How often will I receive job alerts?',
    a: 'You can configure your alert frequency — instantly, daily digest, or weekly summary. Most users opt for real-time alerts so they can be first to apply.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="container">

        <div className="section-header section-header--center">
          <p className="section-label">✦ FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
