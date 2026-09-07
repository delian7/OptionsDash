function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

const TIERS = [
  {
    name: 'Free',
    sub: 'Explore the desk',
    price: '$0',
    per: 'forever',
    features: ['View-only dashboard', 'Delayed market data', 'Iron condor builder', 'Community support'],
    cta: 'Start Free',
    ghost: true,
  },
  {
    name: 'Pro',
    sub: 'For active SPX traders',
    price: '$29',
    per: '/month',
    popular: true,
    features: [
      'Real-time Schwab data',
      'Agent API access',
      'Saved scenarios & strategies',
      'Live Schwab + WeBull positions',
      'News chaos scoring',
      'Macro calendar with impact levels',
    ],
    cta: 'Request Access',
    ghost: false,
  },
  {
    name: 'Enterprise',
    sub: 'For desks & teams',
    price: 'Custom',
    per: '',
    features: ['Multi-account support', 'Custom integrations', 'Priority API rate limits', 'Dedicated support'],
    cta: 'Contact Us',
    ghost: true,
  },
]

const DASHBOARD_URL = 'https://options.delianpetrov.com'

export default function Pricing({ onJoinWaitlist }) {
  return (
    <section id="pricing">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Pick the desk that fits</h2>
          <p className="section-sub">
            Start free, upgrade when you need real-time data and the agent API.
          </p>
        </div>
        <div className="pricing-grid">
          {TIERS.map((t, i) => (
            <div className={`price-card reveal ${t.popular ? 'popular' : ''}`} key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
              {t.popular && <span className="popular-badge">Most popular</span>}
              <h3>{t.name}</h3>
              <p className="tier-sub">{t.sub}</p>
              <div className="price">
                {t.price}
                <span>{t.per}</span>
              </div>
              <ul className="price-list">
                {t.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${t.ghost ? 'btn-ghost' : 'btn-primary'}`}
                onClick={onJoinWaitlist}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
