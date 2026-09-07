const METRICS = [
  { num: '10+', lbl: 'Track 10+ SPX positions simultaneously' },
  { num: '3×', lbl: 'Chaos score 3× faster than manual news review' },
  { num: '60/min', lbl: 'Agent API requests per minute' },
]

const QUOTES = [
  {
    quote: 'The condor builder paid for itself the first week — I finally see my breakevens before I enter, not after.',
    name: 'Placeholder Trader',
    role: 'SPX 0DTE trader',
    initials: 'PT',
  },
  {
    quote: 'Chaos scoring is the killer feature. I scan the morning headlines in two minutes and know exactly what matters.',
    name: 'Placeholder Member',
    role: 'Pro subscriber',
    initials: 'PM',
  },
  {
    quote: 'My agent checks positions and news through the API every morning and briefs me in plain text. Wild.',
    name: 'Placeholder Dev',
    role: 'API user',
    initials: 'PD',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">Social Proof</span>
          <h2 className="section-title">Traders are watching the desk</h2>
          <p className="section-sub">
            <span className="placeholder-tag" style={{ margin: '0 auto' }}>Testimonials are placeholders</span>
          </p>
        </div>
        <div className="metric-band reveal">
          {METRICS.map((m) => (
            <div className="metric" key={m.lbl}>
              <div className="num">{m.num}</div>
              <div className="lbl">{m.lbl}</div>
            </div>
          ))}
        </div>
        <div className="quotes">
          {QUOTES.map((q, i) => (
            <div className="quote reveal" key={q.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="placeholder-tag">Placeholder</span>
              <p>“{q.quote}”</p>
              <div className="who">
                <div className="avatar">{q.initials}</div>
                <div>
                  <div className="name">{q.name}</div>
                  <div className="role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
