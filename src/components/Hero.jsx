const TICKS = [
  { sym: 'SPX', px: '7,741.59', chg: '+0.42%', up: true },
  { sym: 'VIX', px: '14.57', chg: '-3.10%', up: false },
  { sym: 'SPXW 0DTE', px: '7,740.25', chg: '+0.38%', up: true },
  { sym: 'NDX', px: '25,318.44', chg: '+0.61%', up: true },
  { sym: 'RUT', px: '2,412.08', chg: '-0.22%', up: false },
  { sym: 'ES FUT', px: '7,748.50', chg: '+0.35%', up: true },
]

export default function Hero({ onJoinWaitlist }) {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">SPX Iron Condor Dashboard</span>
          <h1>
            Trade SPX Iron Condors <span className="grad">with Precision</span>
          </h1>
          <p className="hero-sub">
            Real-time P&amp;L curves, chaos-scored news, and an AI-friendly API — all in one
            dashboard.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onJoinWaitlist}>
              Join the Waitlist
            </button>
            <a className="btn btn-ghost" href="#demo">
              Watch Demo
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>12</strong>
              API endpoints
            </div>
            <div>
              <strong>Real-time</strong>
              Schwab + WeBull data
            </div>
            <div>
              <strong>AI-native</strong>
              Agent API built in
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="browser">
            <div className="browser-bar">
              <span className="dot" style={{ background: '#ef4444' }} />
              <span className="dot" style={{ background: '#f59e0b' }} />
              <span className="dot" style={{ background: '#22c55e' }} />
              <span className="browser-url">options.delianpetrov.com — Iron Condor Visualizer</span>
            </div>
            <img src="/images/hero-dashboard.webp" alt="OptionsDash iron condor P&L dashboard" />
          </div>
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKS, ...TICKS].map((t, i) => (
            <span className="ticker-item" key={i}>
              <span className="sym">{t.sym}</span>
              <span className="px">{t.px}</span>
              <span className={t.up ? 'up' : 'down'}>{t.chg}</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
