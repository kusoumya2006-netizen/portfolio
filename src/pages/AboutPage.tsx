import React from 'react'
import AboutSection from '../components/sections/AboutSection'
import EngineeringBackgroundSection from '../components/sections/EngineeringBackgroundSection'
import JourneySection from '../components/sections/JourneySection'
import SkillsSection from '../components/sections/SkillsSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutSection />
      <EngineeringBackgroundSection />
      <JourneySection />
      <SkillsSection />
    </main>
  )
}
