import React from 'react'
import { useSelector } from 'react-redux'
import HomeHeader from '../components/HomeHeader'
import ServicesSection from '../components/ServicesSection'
import SectionDivider from '../components/SectionDivider'
import AboutSection from '../components/AboutSection'
import '../pages/HomePage.css'

function HomePage() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className="home-page">
      <HomeHeader />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
    </div>
  )
}

export default HomePage

