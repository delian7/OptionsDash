const FAQS = [
  {
    q: 'What strategies does OptionsDash support?',
    a: 'Iron condors are the specialty, with an interactive P&L visualizer, live Greeks, breakevens, and probability of profit. It also has builders for short straddles and calendar spreads with Black-Scholes pricing, plus wheel tracking for cash-secured puts and covered calls — all with saved scenario management.',
  },
  {
    q: 'Is it only for SPX?',
    a: 'No — it is optimized for SPX and SPXW iron condors with real-time Schwab data, but it also tracks single-stock positions (e.g. wheel trades) synced from WeBull.',
  },
  {
    q: 'Is this for trading or analysis?',
    a: 'Analysis and monitoring only — OptionsDash does not execute orders. You build, analyze, and track strategies here; orders stay with your broker.',
  },
  {
    q: 'Which brokerages are supported?',
    a: 'Schwab and WeBull for positions and market data. Schwab powers real-time SPX/SPXW pricing; WeBull syncs your live holdings.',
  },
  {
    q: 'Can AI agents use this?',
    a: 'Yes — the agent API provides full dashboard access via simple HTTP calls. A single request returns SPX/VIX, positions, strategies, news, and macro events, with an LLM-friendly ?format=text option.',
  },
  {
    q: 'What is Section 1256?',
    a: 'The IRS tax treatment for broad-based index options like SPX: 60% of gains are taxed at the long-term capital gains rate and 40% at the short-term rate, regardless of holding period.',
  },
]

export default function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Questions, answered</h2>
          <p className="section-sub">The essentials before you request access.</p>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <span className="chev">+</span>
              </summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
