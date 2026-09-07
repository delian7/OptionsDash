function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

const API_POINTS = [
  <>Single-call summary — <code>/api/agent/summary</code> returns SPX/VIX, positions, strategies, news, and macro events in one shot.</>,
  <>Public news endpoint — chaos-scored RSS headlines with <code>no auth required</code>.</>,
  <>Strategies CRUD — save, list, and update iron condor scenarios via Supabase-backed endpoints.</>,
  <><code>?format=text</code> — plain-text responses optimized for LLM consumption.</>,
  <>Token auth — <code>X-Agent-Token</code> header or <code>?token=</code> param, 60 req/min rate limit.</>,
  <>CORS enabled — cross-origin requests supported for agent integrations.</>,
]

export default function ApiShowcase() {
  return (
    <section id="api">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">Agent API</span>
          <h2 className="section-title">Built for humans. Native for AI agents.</h2>
          <p className="section-sub">
            Your trading copilot can read the entire dashboard — prices, positions, strategies,
            news — through simple HTTP calls.
          </p>
        </div>
        <div className="api-grid">
          <div className="terminal reveal">
            <div className="terminal-bar">
              <span className="dot" style={{ background: '#ef4444', width: 11, height: 11, borderRadius: '50%' }} />
              <span className="dot" style={{ background: '#f59e0b', width: 11, height: 11, borderRadius: '50%' }} />
              <span className="dot" style={{ background: '#22c55e', width: 11, height: 11, borderRadius: '50%' }} />
              <span style={{ marginLeft: 8 }}>agent — zsh</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="prompt">$ </span>
                <span className="cmd">curl -H "X-Agent-Token: &lt;your-token&gt;" \<br />&nbsp;&nbsp;"https://options.delianpetrov.com/api/agent/summary?format=text"</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <span className="comment"># → 200 OK · text/plain</span>
                <div className="resp">{`SPX 7741.59 (+0.42%) · VIX 14.57 (-3.10%)
Open positions: 2 · Unrealized P&L: `}<span className="hl-green">+$271</span>{`
Saved strategies: 5 iron condors
Top chaos headlines (2h):
  [`}<span className="hl-red">HIGH</span>{`] Fed officials signal September rate path — WSJ
  [`}<span className="hl-amber">MED</span>{`]  Tech earnings beat amid tariff talk — FT
Macro this week: CPI (Tue 8:30a ET) — HIGH impact`}</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="api-img">
              <img src="/images/api-terminal.webp" alt="Developer terminal showing API response with SPX data" loading="lazy" />
            </div>
            <ul className="api-list">
              {API_POINTS.map((pt, i) => (
                <li key={i}>
                  <Check />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
