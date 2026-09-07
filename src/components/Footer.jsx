const DASHBOARD_URL = 'https://options.delianpetrov.com'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <svg viewBox="0 0 32 32" width="30" height="30" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#232842" />
                <path d="M6 20 L12 20 L14 14 L18 14 L20 8 L22 8" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 8 L26 12 L22 16" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="6" y1="24" x2="26" y2="24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
              Options<span className="accent">Dash</span>
            </a>
            <p>Trade SPX iron condors with precision — real-time P&amp;L, chaos-scored news, and an AI-friendly API.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">Dashboard</a>
            <a href="#api">API Docs</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Demo</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 OptionsDash. All rights reserved.</span>
          <span>Built with <code>React + Vite + Vercel</code>. Data from <code>Schwab &amp; WeBull</code>.</span>
        </div>
      </div>
    </footer>
  )
}
