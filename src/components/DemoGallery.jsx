/* Inline SVG payoff of an SPX iron condor: 7690/7695 // 7740/7745, credit 1.62 */
function CondorCurve() {
  return (
    <svg viewBox="0 0 400 210" width="100%" role="img" aria-label="Iron condor P&L curve">
      {/* profit zone */}
      <rect x="108.6" y="34.8" width="182.8" height="42.7" fill="rgba(34,197,94,0.10)" />
      {/* zero line */}
      <line x1="14" y1="77.5" x2="386" y2="77.5" stroke="#6d7490" strokeWidth="1" strokeDasharray="5 4" opacity="0.7" />
      {/* payoff */}
      <path
        d="M20,166.8 L95.8,166.8 L114.7,34.8 L285.3,34.8 L304.2,166.8 L380,166.8"
        fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round"
      />
      {/* breakevens */}
      <line x1="108.6" y1="30" x2="108.6" y2="185" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="291.4" y1="30" x2="291.4" y2="185" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="108.6" y="200" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="monospace">7693.4</text>
      <text x="291.4" y="200" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="monospace">7741.6</text>
      <text x="200" y="24" fill="#9aa1bd" fontSize="11" textAnchor="middle" fontFamily="monospace">max profit +$162</text>
      <text x="58" y="160" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="monospace">max loss</text>
      <text x="342" y="160" fill="#ef4444" fontSize="10" textAnchor="middle" fontFamily="monospace">max loss</text>
    </svg>
  )
}

export default function DemoGallery() {
  return (
    <section id="demo">
      <div className="container">
        <div className="center reveal">
          <span className="eyebrow">Product Tour</span>
          <h2 className="section-title">See the desk in action</h2>
          <p className="section-sub">
            Four views traders live in every day — strategy, income, signals, and the news that
            moves them.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="demo-card reveal">
            <div className="demo-head">
              <span className="tag tag-green">Condor Visualizer</span>
              <h3>Iron condor P&amp;L, drawn live</h3>
              <p>Interactive payoff curve with Greeks, breakevens, and probability of profit updating as you drag strikes.</p>
            </div>
            <div className="demo-body">
              <div className="demo-shot" style={{ padding: '12px' }}>
                <CondorCurve />
              </div>
            </div>
          </div>

          <div className="demo-card reveal">
            <div className="demo-head">
              <span className="tag tag-blue">Wheel Tracker</span>
              <h3>Every wheel position, tracked</h3>
              <p>Cost basis, premium collected, and assignment odds on every cash-secured put and covered call — mirrored read-only from WeBull.</p>
            </div>
            <div className="demo-body">
              <div className="demo-shot">
                <img src="/images/wheel-tracker.webp" alt="Wheel tracker showing a SOFI cash-secured put position" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="demo-card reveal">
            <div className="demo-head">
              <span className="tag tag-amber">Market Signals</span>
              <h3>A checklist before every trade</h3>
              <p>VIX, trend, IV, and macro signals scored in real time — with a trade-entry checklist that tells you when to wait or size down.</p>
            </div>
            <div className="demo-body">
              <div className="demo-shot">
                <img src="/images/signals.webp" alt="Market signals panel with trade entry checklist" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="demo-card reveal">
            <div className="demo-head">
              <span className="tag tag-green">News Panel</span>
              <h3>Chaos-scored headlines</h3>
              <p>RSS from WSJ, NYT, BBC, and FT — each story chaos-scored with sentiment badges so you read the market, not the noise.</p>
            </div>
            <div className="demo-body">
              <div className="demo-shot">
                <img src="/images/news-panel.webp" alt="News panel with chaos scoring and sentiment badges" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
