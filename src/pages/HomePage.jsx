import React from 'react'
import HomeHeader from '../components/HomeHeader'
import ServicesSection from '../components/ServicesSection'
import SectionDivider from '../components/SectionDivider'
import AboutSection from '../components/AboutSection'
import SectionDividerReversed from '../components/SectionDividerReversed'
import PricingSection from '../components/PricingSection'
import '../pages/HomePage.css'

function HomePage() {
  return (
    <main className="home-page">
      <HomeHeader />
      <ServicesSection />
      <SectionDivider />
      <PricingSection />
      <SectionDividerReversed />
      <AboutSection />
      {/* SimpleDivider + TestimonialsCarousel — restore together when reviews are ready */}
    </main>
  )
}

export default HomePage

