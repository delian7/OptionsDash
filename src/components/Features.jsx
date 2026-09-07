function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const FEATURES = [
  {
    icon: 'M3 17l5-6 4 4 6-8 3 3M3 21h18M7 3v4M17 3v4',
    title: 'Iron Condor Builder',
    desc: 'Interactive P&L curve chart with real-time Greeks (delta, theta, vega), breakeven calculations, and probability of profit.',
  },
  {
    icon: 'M4 7h16v12H4zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M4 12h16',
    title: 'Live Positions',
    desc: 'Real-time SPX/SPXW position tracking from Schwab and WeBull with live P&L monitoring across every open trade.',
  },
  {
    icon: 'M4 5h16v11H4zM4 19h16M8 8h8M8 11h5',
    title: 'News & Chaos Scoring',
    desc: 'Aggregated RSS from WSJ, NYT, BBC, and FT with chaos scoring and sentiment analysis on every headline.',
  },
  {
    icon: 'M5 4h14v16H5zM5 9h14M9 4v16M15 4v16',
    title: 'Macro Calendar',
    desc: 'White House iCal integration shows upcoming events with impact levels — high, medium, or low — right on your expiration calendar.',
  },
  {
    icon: 'M5 7l3-3 3 3M19 17l-3 3-3-3M8 4v10M16 20V10M4 12h16',
    title: 'Agent API',
    desc: 'AI agents query the full dashboard — prices, positions, news, strategies — through simple HTTP calls with LLM-friendly text output.',
  },
  {
    icon: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
    title: 'Multi-Strategy Support',
    desc: 'Iron Condor, Short Straddle, and Calendar Spread builders with Black-Scholes pricing and saved scenario management.',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">Features</span>
          <h2 className="section-title">Everything you need to trade SPX</h2>
          <p className="section-sub">
            A purpose-built options desk for iron condor traders — from strategy construction to
            macro-aware monitoring.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card reveal" key={f.title} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="feature-icon">
                <Icon d={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
