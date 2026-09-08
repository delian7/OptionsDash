import { useEffect, useState } from 'react'
import { track } from '../lib/analytics.js'

const FEATURES = [
  'Iron Condor P&L visualizer',
  'Wheel scanner',
  'Position tracker',
  'Chaos-scored news',
  'Agent API',
  'Strategy builder',
]

const STEPS = ['name', 'email', 'reason', 'feature', 'done']

export default function WaitlistModal({ open, plan, onClose }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [features, setFeatures] = useState([])
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    if (open) {
      setStep(0); setName(''); setEmail(''); setReason(''); setFeatures([]); setError(''); setSending(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open ])

  if (!open) return null

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  function toggleFeature(f) {
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))
  }

  async function submit() {
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          reason: reason.trim(),
          features,
          plan: plan || null,
        }),
      })
      if (!res.ok) throw new Error('submit failed')
      setStep(4)
      track('waitlist_completed', { plan: plan || null, features, feature_count: features.length })
    } catch {
      setError('Something went wrong — please try again in a moment.')
    } finally {
      setSending(false)
    }
  }

  function next() {
    setError('')
    const s = STEPS[step]
    if (s === 'name' && !name.trim()) return setError('Please tell us your name.')
    if (s === 'email' && !emailValid) return setError('Please enter a valid email address.')
    if (s === 'reason' && !reason.trim()) return setError('One line is plenty — what drew you in?')
    if (s === 'feature') return submit()
    track('waitlist_step_completed', { step: s, plan: plan || null })
    setStep(step + 1)
  }

  function onKey(e) {
    if (e.key === 'Enter' && STEPS[step] !== 'reason') next()
    if (e.key === 'Escape') onClose()
  }

  const pct = Math.round(((step + 1) / STEPS.length) * 100)

  return (
    <div className="wl-backdrop" onClick={onClose}>
      <div className="wl-modal" onClick={(e) => e.stopPropagation()} onKeyDown={onKey} role="dialog" aria-modal="true" aria-label="Join the OptionsDash waitlist">
        <div className="wl-progress"><div className="wl-progress-bar" style={{ width: pct + '%' }} /></div>
        <button className="wl-close" onClick={onClose} aria-label="Close">✕</button>

        {step < 4 ? (
          <div className="wl-body" key={step}>
            {STEPS[step] === 'name' && (
              <>
                <p className="wl-kicker">Step 1 of 4</p>
                <h3>What's your name?</h3>
                {plan && <p className="wl-hint">You're joining for the <strong>{plan}</strong> plan.</p>}
                <input autoFocus className="wl-input" type="text" placeholder="Alex Rivera" value={name}
                  onChange={(e) => setName(e.target.value)} />
              </>
            )}
            {STEPS[step] === 'email' && (
              <>
                <p className="wl-kicker">Step 2 of 4</p>
                <h3>Where should we send your invite?</h3>
                <input autoFocus className="wl-input" type="email" placeholder="you@example.com" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </>
            )}
            {STEPS[step] === 'reason' && (
              <>
                <p className="wl-kicker">Step 3 of 4</p>
                <h3>Why do you want to try OptionsDash?</h3>
                <textarea autoFocus className="wl-input wl-textarea" rows={4}
                  placeholder="e.g. I trade 0DTE SPX condors and want cleaner P&L visualization…"
                  value={reason} onChange={(e) => setReason(e.target.value)} />
              </>
            )}
            {STEPS[step] === 'feature' && (
              <>
                <p className="wl-kicker">Step 4 of 4</p>
                <h3>Which feature excites you most?</h3>
                <p className="wl-hint">Pick as many as you like.</p>
                <div className="wl-chips">
                  {FEATURES.map((f) => (
                    <button key={f} type="button"
                      className={'wl-chip' + (features.includes(f) ? ' selected' : '')}
                      onClick={() => toggleFeature(f)}>
                      {features.includes(f) ? '✓ ' : ''}{f}
                    </button>
                  ))}
                </div>
              </>
            )}
            {error && <p className="wl-error">{error}</p>}
            <div className="wl-actions">
              {step > 0 && <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>Back</button>}
              <button className="btn btn-primary" onClick={next} disabled={sending}>
                {sending ? 'Joining…' : STEPS[step] === 'feature' ? (features.length ? 'Join the waitlist ✓' : 'Skip & join') : 'Continue →'}
              </button>
            </div>
            <p className="wl-footnote">Press Enter to continue</p>
          </div>
        ) : (
          <div className="wl-body wl-success">
            <div className="wl-check">✓</div>
            <h3>You're on the list{name ? `, ${name.split(' ')[0]}` : ''}.</h3>
            <p>We'll email <strong>{email}</strong> as soon as your invite is ready.</p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  )
}
