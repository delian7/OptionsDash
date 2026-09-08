export default function DemoCta({ onJoinWaitlist }) {
  return (
    <section id="live-demo">
      <div className="container">
        <div className="demo-cta reveal">
          <div>
            <span className="eyebrow">Live Demo</span>
            <h2 className="section-title">See it trade, live.</h2>
            <p className="section-sub">
              Interactive demos open soon for waitlist members — be first in.
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => onJoinWaitlist(null, 'demo-band')}
          >
            Notify Me
          </button>
        </div>
      </div>
    </section>
  )
}
