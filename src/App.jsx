import { useEffect } from 'react'
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

export default function App() {
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
      <Nav />
      <main>
        <Hero />
        <Features />
        <DemoGallery />
        <ApiShowcase />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
