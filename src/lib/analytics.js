// PostHog product analytics. Lazy-loaded so the landing page bundle stays
// lean; no-ops entirely when VITE_POSTHOG_KEY is unset (e.g. local dev).
const KEY = import.meta.env.VITE_POSTHOG_KEY
const HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

let client = null
let initPromise = null

function ensure() {
  if (!KEY || typeof window === 'undefined') return Promise.resolve(null)
  if (client) return Promise.resolve(client)
  if (!initPromise) {
    initPromise = import('posthog-js')
      .then((m) => {
        const ph = m.default
        ph.init(KEY, {
          api_host: HOST,
          // Defaults on: autocapture (clicks etc.) + automatic pageviews.
        })
        client = ph
        return ph
      })
      .catch(() => null)
  }
  return initPromise
}

export function initAnalytics() {
  ensure()
}

export function track(event, props) {
  ensure().then((ph) => {
    if (!ph) return
    try {
      ph.capture(event, props || {})
    } catch {
      // analytics must never break the page
    }
  })
}
