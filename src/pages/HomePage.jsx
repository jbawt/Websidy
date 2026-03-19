import React from 'react'
import HomeHeader from '../components/HomeHeader'
import ServicesSection from '../components/ServicesSection'
import SectionDivider from '../components/SectionDivider'
import AboutSection from '../components/AboutSection'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import SectionDividerReversed from '../components/SectionDividerReversed'
import PricingSection from '../components/PricingSection'
import SimpleDivider from '../components/SimpleDivider'
import '../pages/HomePage.css'

function HomePage() {
  return (
    <main className="home-page">
      <HomeHeader />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDividerReversed />
      <PricingSection />
      <SimpleDivider />
      <TestimonialsCarousel />
    </main>
  )
}

export default HomePage

