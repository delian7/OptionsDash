// POST /api/waitlist — collects OptionsDash waitlist signups into Notion.
// Requires Vercel env vars: NOTION_TOKEN, NOTION_WAITLIST_DB_ID
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method not allowed' })
  }

  const token = process.env.NOTION_TOKEN
  const dbId = process.env.NOTION_WAITLIST_DB_ID
  if (!token || !dbId) {
    return res.status(503).json({ ok: false, error: 'waitlist not configured yet' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  const name = String(body?.name || '').trim().slice(0, 120)
  const email = String(body?.email || '').trim().slice(0, 200)
  const reason = String(body?.reason || '').trim().slice(0, 2000)
  const features = Array.isArray(body?.features) ? body.features.map(String).slice(0, 10) : []

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'name and valid email required' })
  }

  try {
    const r = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: dbId },
        properties: {
          Name: { title: [{ text: { content: name } }] },
          Email: { email },
          Reason: { rich_text: [{ text: { content: reason } }] },
          'Favorite features': { multi_select: features.map((n) => ({ name: n })) },
        },
      }),
    })
    if (!r.ok) {
      const t = await r.text()
      console.error('notion error', r.status, t.slice(0, 300))
      return res.status(502).json({ ok: false, error: 'could not save signup' })
    }
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('waitlist error', e)
    return res.status(500).json({ ok: false, error: 'server error' })
  }
}
