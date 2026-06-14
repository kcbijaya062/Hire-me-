import Nav from '@/components/Nav'
import ScrollObserver from '@/components/ScrollObserver'
import Hero from '@/components/Hero'
import Why from '@/components/Why'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import FloatingNovaChat from '@/components/FloatingNovaChat'

export default function Page() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <Hero />
      <Why />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <FloatingNovaChat />
    </>
  )
}
