'use client'

import { useEffect, useRef, useState } from 'react'

type Feature = {
  id: string
  label: string
  title: string
  body: string
  duration: number
}

const FEATURES: Feature[] = [
  {
    id: 'install',
    label: 'Step 1',
    title: 'Install the Chrome Extension',
    body: 'Add ConnectNova to your Chrome browser with a single click. No complex setup required.',
    duration: 5000,
  },
  {
    id: 'collect',
    label: 'Step 2',
    title: 'Search on LinkedIn & Collect Profiles',
    body: 'Run your regular search on LinkedIn and then let the ConnectNova plugin collect candidate profiles automatically.',
    duration: 6000,
  },
  {
    id: 'rank',
    label: 'Step 3',
    title: 'Enter Requirements & View Rankings',
    body: 'Input your specific search criteria and ConnectNova will intelligently re-rank the results based on the profile matches.',
    duration: 6000,
  },
]

function InstallPreview() {
  return (
    <div className="cn-preview-box">
      <div className="cn-browser">
        <div className="cn-browser-header">
          <div className="cn-dots"><span/><span/><span/></div>
          <div className="cn-url-bar">linkedin.com</div>
          <div className="cn-extensions">
            <div className="cn-ext-icon pulse">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </div>
        </div>
        <div className="cn-browser-body">
          <div className="cn-browser-bg">
            <div className="cn-skeleton-title"/>
            <div className="cn-skeleton-card"/>
            <div className="cn-skeleton-card"/>
          </div>
          <div className="cn-popup slide-up">
            <div className="cn-popup-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <h4>ConnectNova Ready</h4>
              <p>Your AI recruiting assistant is installed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CollectPreview() {
  return (
    <div className="cn-preview-box">
       <div className="cn-linkedin-mock">
          <div className="cn-li-header"><div className="cn-li-search"/></div>
          <div className="cn-li-body">
             <div className="cn-li-sidebar">
               <div className="cn-skeleton-line short"/>
               <div className="cn-skeleton-line"/>
               <div className="cn-skeleton-line"/>
             </div>
             <div className="cn-li-feed">
                <div className="cn-li-card"><div className="cn-li-av"/><div className="cn-li-lines"><div className="cn-skeleton-line"/><div className="cn-skeleton-line short"/></div></div>
                <div className="cn-li-card"><div className="cn-li-av"/><div className="cn-li-lines"><div className="cn-skeleton-line"/><div className="cn-skeleton-line short"/></div></div>
                <div className="cn-li-card"><div className="cn-li-av"/><div className="cn-li-lines"><div className="cn-skeleton-line"/><div className="cn-skeleton-line short"/></div></div>
             </div>
          </div>
          <div className="cn-scanner">
             <div className="cn-scanner-line"/>
             <div className="cn-scanner-badge">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               Collecting Profiles...
             </div>
          </div>
       </div>
    </div>
  )
}

function RankPreview() {
  return (
    <div className="cn-preview-box bg-purple-light">
      <div className="cn-rank-dashboard">
        <div className="cn-rank-prompt">
          <div className="cn-prompt-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <div className="cn-prompt-text typing">Find me a senior React developer...</div>
        </div>
        <div className="cn-rank-results">
          {[
            { num: 1, name: 'Mark Zadroga', role: 'U.S. Software Developer', score: 98 },
            { num: 2, name: 'Sarah Chen', role: 'Frontend Lead', score: 92 },
            { num: 3, name: 'Alex Johnson', role: 'Senior UI Engineer', score: 85 }
          ].map((c, i) => (
            <div key={i} className={`cn-rank-card fade-in-${i + 1}`}>
              <div className="cn-rank-num">{c.num}</div>
              <div className="cn-rank-info">
                <div className="cn-rank-name">{c.name}</div>
                <div className="cn-rank-role">{c.role}</div>
              </div>
              <div className="cn-rank-score">
                <div className="cn-score-val">{c.score}</div>
                <div className="cn-score-bar"><div className="cn-score-fill" style={{width: `${c.score}%`}}/></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false

    const updateByScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const lastIndex = FEATURES.length - 1

      if (rect.top < viewportH && rect.bottom > 0) {
        setStarted(true)
      }

      if (rect.top >= viewportH * 0.12) {
        setActive(prev => (prev === 0 ? prev : 0))
        return
      }

      if (rect.bottom <= viewportH * 0.42) {
        setActive(prev => (prev === lastIndex ? prev : lastIndex))
        return
      }

      const start = viewportH * 0.12
      const end = -(rect.height - viewportH * 0.42)
      const progress = (start - rect.top) / (start - end)
      const clamped = Math.min(1, Math.max(0, progress))
      const nextActive = Math.min(lastIndex, Math.floor(clamped * FEATURES.length))

      setActive(prev => (prev === nextActive ? prev : nextActive))
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        updateByScroll()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const handleProgressEnd = () => {
    setActive(prev => (prev + 1) % FEATURES.length)
  }

  const renderPreviewContent = (f: Feature, i: number) => {
    switch (f.id) {
      case 'install': return <InstallPreview />
      case 'collect': return <CollectPreview />
      case 'rank': return <RankPreview />
      default: return null
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .features-cn {
          background: #fafafa;
          padding: 112px 0 120px;
          min-height: 260vh;
          font-family: var(--font-body);
        }
        .features-cn-pin {
          position: sticky;
          top: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .features-cn .section-label { color: #6366f1; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; font-size: 14px; margin-bottom: 12px; }
        .features-cn .section-title { font-size: 48px; font-weight: 800; color: #111827; letter-spacing: -0.02em; }
        .features-cn .section-body { font-size: 18px; color: #4b5563; margin-top: 16px; }
        .features-cn-body {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 80px;
          align-items: start;
          margin-top: 64px;
        }
        .features-cn-list { display: flex; flex-direction: column; }
        .features-cn-item {
          display: flex;
          flex-direction: column;
          padding: 32px 0;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity 0.4s ease;
          border-bottom: 1px solid #e5e7eb;
        }
        .features-cn-item:last-child { border-bottom: none; }
        .features-cn-item.is-active { opacity: 1; cursor: default; }
        .features-cn-item-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 10px;
          transition: color 0.35s ease;
        }
        .features-cn-item.is-active .features-cn-item-label { color: #4f46e5; }
        .features-cn-item-title { font-size: 24px; font-weight: 700; color: #111827; margin: 0; line-height: 1.3; }
        .features-cn-item-desc {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease, margin-top 0.4s ease;
          margin-top: 0;
        }
        .features-cn-item.is-active .features-cn-item-desc { grid-template-rows: 1fr; margin-top: 12px; }
        .features-cn-item-desc-inner { overflow: hidden; }
        .features-cn-item-desc-inner p { font-size: 16px; line-height: 1.6; color: #4b5563; padding-bottom: 4px; }
        .features-cn-progress { height: 3px; background: #e5e7eb; border-radius: 2px; margin-top: 20px; overflow: hidden; }
        .features-cn-progress-bar { height: 100%; width: 0%; background: #4f46e5; border-radius: 2px; animation: ft-fill linear forwards; }
        
        .features-cn-preview-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          overflow: hidden;
          background: #f3f4f6;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
        }
        .features-cn-preview {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          transform: translateY(20px) scale(0.98);
        }
        .features-cn-preview.is-active { opacity: 1; pointer-events: auto; transform: translateY(0) scale(1); }
        
        /* CN Preview Custom Styles */
        .cn-preview-box { width: 100%; height: 100%; background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%); display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 40px; }
        .cn-preview-box.bg-purple-light { background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); }
        
        /* Install */
        .cn-browser { width: 100%; max-width: 480px; background: #fff; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb; display: flex; flex-direction: column; }
        .cn-browser-header { height: 40px; background: #f3f4f6; display: flex; align-items: center; padding: 0 16px; gap: 16px; border-bottom: 1px solid #e5e7eb; }
        .cn-dots { display: flex; gap: 6px; }
        .cn-dots span { width: 10px; height: 10px; border-radius: 50%; background: #d1d5db; }
        .cn-dots span:nth-child(1) { background: #fca5a5; }
        .cn-dots span:nth-child(2) { background: #fcd34d; }
        .cn-dots span:nth-child(3) { background: #86efac; }
        .cn-url-bar { flex: 1; height: 24px; background: #fff; border-radius: 4px; border: 1px solid #e5e7eb; display: flex; align-items: center; padding: 0 12px; font-size: 11px; color: #9ca3af; }
        .cn-extensions { display: flex; gap: 8px; align-items: center; }
        .cn-ext-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: #ede9fe; color: #4f46e5; border-radius: 6px; }
        .cn-browser-body { height: 280px; position: relative; padding: 24px; background: #f9fafb; display: flex; align-items: center; justify-content: center; }
        .cn-browser-bg { position: absolute; inset: 24px; display: flex; flex-direction: column; gap: 16px; opacity: 0.5; }
        .cn-skeleton-title { height: 24px; width: 40%; background: #e5e7eb; border-radius: 4px; }
        .cn-skeleton-card { height: 80px; width: 100%; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; }
        .cn-popup { position: absolute; background: #fff; border-radius: 12px; padding: 16px 20px; display: flex; gap: 16px; align-items: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; z-index: 10; width: 80%; }
        .cn-popup-icon { width: 40px; height: 40px; border-radius: 10px; background: #e0e7ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cn-popup h4 { margin: 0 0 4px 0; font-size: 15px; font-weight: 600; color: #111827; }
        .cn-popup p { margin: 0; font-size: 13px; color: #6b7280; line-height: 1.4; }
        
        /* Collect */
        .cn-linkedin-mock { width: 100%; max-width: 480px; height: 320px; background: #f3f2ef; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; position: relative; }
        .cn-li-header { height: 48px; background: #fff; display: flex; align-items: center; padding: 0 16px; border-bottom: 1px solid #e5e7eb; }
        .cn-li-search { height: 28px; width: 200px; background: #eef3f8; border-radius: 4px; }
        .cn-li-body { display: flex; gap: 16px; padding: 16px; flex: 1; }
        .cn-li-sidebar { width: 120px; background: #fff; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; gap: 12px; border: 1px solid #e5e7eb; }
        .cn-li-feed { flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .cn-li-card { background: #fff; border-radius: 8px; padding: 12px; display: flex; gap: 12px; border: 1px solid #e5e7eb; }
        .cn-li-av { width: 40px; height: 40px; border-radius: 50%; background: #e5e7eb; flex-shrink: 0; }
        .cn-li-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
        .cn-skeleton-line { height: 8px; background: #e5e7eb; border-radius: 4px; width: 100%; }
        .cn-skeleton-line.short { width: 60%; }
        .cn-scanner { position: absolute; top: 48px; left: 0; right: 0; bottom: 0; pointer-events: none; overflow: hidden; }
        .cn-scanner-line { position: absolute; left: 0; right: 0; height: 120px; background: linear-gradient(to bottom, rgba(79,70,229,0) 0%, rgba(79,70,229,0.1) 95%, rgba(79,70,229,0.8) 100%); animation: scan 3s linear infinite; }
        .cn-scanner-badge { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); background: #4f46e5; color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(79,70,229,0.4); animation: pulse-shadow 2s infinite; }
        
        /* Rank */
        .cn-rank-dashboard { width: 100%; max-width: 480px; background: #fff; border-radius: 16px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.1); padding: 24px; display: flex; flex-direction: column; gap: 20px; border: 1px solid #e5e7eb; }
        .cn-rank-prompt { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
        .cn-prompt-icon { color: #4f46e5; display: flex; align-items: center; }
        .cn-prompt-text { font-size: 14px; color: #111827; font-weight: 500; }
        .cn-rank-results { display: flex; flex-direction: column; gap: 12px; }
        .cn-rank-card { display: flex; align-items: center; gap: 16px; padding: 12px 16px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; transition: transform 0.2s, box-shadow 0.2s; }
        .cn-rank-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-color: #c7d2fe; }
        .cn-rank-num { width: 28px; height: 28px; border-radius: 6px; background: #eef2ff; color: #4f46e5; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; }
        .cn-rank-info { flex: 1; }
        .cn-rank-name { font-size: 15px; font-weight: 600; color: #111827; }
        .cn-rank-role { font-size: 13px; color: #6b7280; margin-top: 2px; }
        .cn-rank-score { width: 60px; display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .cn-score-val { font-size: 16px; font-weight: 700; color: #4f46e5; }
        .cn-score-bar { width: 100%; height: 4px; background: #e5e7eb; border-radius: 2px; overflow: hidden; }
        .cn-score-fill { height: 100%; background: #4f46e5; border-radius: 2px; }

        /* Animations */
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.8; } }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes scan { 0% { top: -120px; } 100% { top: 100%; } }
        @keyframes pulse-shadow { 0%, 100% { box-shadow: 0 4px 12px rgba(79,70,229,0.4); } 50% { box-shadow: 0 4px 20px rgba(79,70,229,0.7); } }
        .pulse { animation: pulse 2s infinite; }
        .features-cn-preview.is-active .slide-up { animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.3s; opacity: 0; }
        .features-cn-preview.is-active .fade-in-1 { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.2s; opacity: 0; }
        .features-cn-preview.is-active .fade-in-2 { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.3s; opacity: 0; }
        .features-cn-preview.is-active .fade-in-3 { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; animation-delay: 0.4s; opacity: 0; }
        
        @media (max-width: 1024px) {
          .features-cn { min-height: auto; }
          .features-cn-pin { position: static; min-height: auto; display: block; }
          .features-cn-body { grid-template-columns: 1fr; gap: 48px; }
        }
      `}} />

      <section ref={sectionRef} className="features-cn" id="features">
        <div className="features-cn-pin">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="section-label">✦ How It Works</p>
              <h2 className="section-title">Process</h2>
              <p className="section-body">
                Spend less time searching. ConnectNova surfaces top matches in minutes.
              </p>
            </div>
          </div>

          <div className="container features-cn-body">
            <div className="features-cn-list">
              {FEATURES.map((f, i) => (
                <div
                  key={f.id}
                  className={`features-cn-item${i === active ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <p className="features-cn-item-label">{f.label}</p>
                  <h3 className="features-cn-item-title">{f.title}</h3>
                  <div className="features-cn-item-desc">
                    <div className="features-cn-item-desc-inner">
                      <p>{f.body}</p>
                    </div>
                  </div>

                  <div className="features-cn-progress">
                    {started && i === active && (
                      <div
                        key={`pb-${active}`}
                        className="features-cn-progress-bar"
                        style={{ animationDuration: `${f.duration}ms` }}
                        onAnimationEnd={handleProgressEnd}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="features-cn-preview-wrap">
              {FEATURES.map((f, i) => (
                <div
                  key={f.id}
                  className={`features-cn-preview${i === active ? ' is-active' : ''}`}
                >
                  {renderPreviewContent(f, i)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
