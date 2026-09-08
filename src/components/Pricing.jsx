import { track } from '../lib/analytics.js'

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
    name: 'Dashboard',
    sub: 'The full manual trading desk',
    price: '$20',
    per: '/month',
    features: [
      'Iron condor builder with live P&L',
      'Short straddles & calendar spreads',
      'Wheel tracker with Webull mirror',
      'Market signals + entry checklist',
      'Chaos-scored news & macro calendar',
      'Saved strategies & scenarios',
    ],
    cta: 'Request Access',
    ghost: true,
  },
  {
    name: 'Dashboard + Agent',
    sub: 'Your AI agent, plugged into the desk',
    price: '$29',
    per: '/month',
    popular: true,
    features: [
      'Everything in Dashboard',
      'MCP server access for your AI agent',
      'Agent-built strategies & scans',
      'Automated monitoring & alerts',
      'API access',
    ],
    cta: 'Request Access',
    ghost: false,
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
            Start free. Run the desk yourself — or plug in your AI agent.
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
                onClick={() => {
                  track('plan_cta_clicked', { plan: t.name })
                  onJoinWaitlist(t.name, 'pricing')
                }}
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
