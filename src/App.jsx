import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import DemoGallery from './components/DemoGallery.jsx'
import ApiShowcase from './components/ApiShowcase.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import WaitlistModal from './components/WaitlistModal.jsx'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const openWaitlist = () => setWaitlistOpen(true)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="app">
      <Nav onJoinWaitlist={openWaitlist} />
      <main>
        <Hero onJoinWaitlist={openWaitlist} />
        <Features />
        <DemoGallery />
        <ApiShowcase />
        <HowItWorks />
        <Pricing onJoinWaitlist={openWaitlist} />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  )
}
