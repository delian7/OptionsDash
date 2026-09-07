const DASHBOARD_URL = 'https://options.delianpetrov.com'

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#232842" />
      <path d="M6 20 L12 20 L14 14 L18 14 L20 8 L22 8" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 8 L26 12 L22 16" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="6" y1="24" x2="26" y2="24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="OptionsDash home">
          <LogoMark />
          Options<span className="accent">Dash</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#api">API</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn-primary btn-sm" href={DASHBOARD_URL} target="_blank" rel="noreferrer">
            Request Access
          </a>
        </div>
      </div>
    </nav>
  )
}
