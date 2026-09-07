const STEPS = [
  {
    title: 'Connect Brokerage',
    desc: 'Link Schwab for market data and WeBull for positions. Your dashboard starts streaming SPX/VIX prices and live holdings in seconds.',
  },
  {
    title: 'Build Strategy',
    desc: 'Drag strikes on the iron condor builder — the P&L curve, Greeks, breakevens, and probability of profit update in real time.',
  },
  {
    title: 'Monitor & Manage',
    desc: 'Watch live P&L across every position, get chaos-scored news before it moves the market, and let your AI agent check in via the API.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title">From zero to trading desk in minutes</h2>
          <p className="section-sub">Three steps. No order execution — OptionsDash is your analysis and monitoring cockpit.</p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={s.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
