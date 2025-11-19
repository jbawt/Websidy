import React from 'react'
import { useSelector } from 'react-redux'
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
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className="home-page">
      <HomeHeader />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDividerReversed />
      <PricingSection />
      <SimpleDivider />
      <TestimonialsCarousel />
    </div>
  )
}

export default HomePage

