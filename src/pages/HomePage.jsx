import React from 'react'
import HomeHeader from '../components/HomeHeader'
import ServicesSection from '../components/ServicesSection'
import SectionDivider from '../components/SectionDivider'
import AboutSection from '../components/AboutSection'
import SectionDividerReversed from '../components/SectionDividerReversed'
import PricingSection from '../components/PricingSection'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import { PAGE_META } from '../config/pageMeta'
import { WEBSIDY_STRUCTURED_DATA } from '../config/structuredData'
import '../pages/HomePage.css'

function HomePage() {
  return (
    <main className="home-page">
      <PageMeta {...PAGE_META.home} />
      <StructuredData data={WEBSIDY_STRUCTURED_DATA} />
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

