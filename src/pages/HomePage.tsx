import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import EngineeringBackgroundSection from '../components/sections/EngineeringBackgroundSection'
import WorksSection from '../components/sections/WorksSection'
import DesignSection from '../components/sections/DesignSection'
import JourneySection from '../components/sections/JourneySection'
import BeyondTheCodeSection from '../components/sections/BeyondTheCodeSection'
import SkillsSection from '../components/sections/SkillsSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO — Portrait, identity, floating annotations, CSE processor insignia */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. INTRODUCTION & ENGINEERING BACKGROUND */}
      <div id="about">
        <AboutSection />
        <EngineeringBackgroundSection />
      </div>

      {/* 3. ENGINEERING PROJECTS — Real technical projects & case studies */}
      <div id="works">
        <WorksSection featured={false} />
      </div>

      {/* 4. DESIGN ARCHIVE — Real Canva artwork previews visible immediately */}
      <div id="design">
        <DesignSection />
      </div>

      {/* 5. EXPERIENCE & JOURNEY — Internships, QCIC, CyberNova, SIH, volunteering */}
      <div id="journey">
        <JourneySection />
      </div>

      {/* 6. BEYOND THE CODE / OTHER FREQUENCIES — Writing, branding, volunteering, music */}
      <div id="beyond-the-code">
        <BeyondTheCodeSection />
      </div>

      {/* 7. SKILLS & CERTIFICATIONS — Constellation, Quantum inquiry, credentials */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* 8. CONTACT — Direct email, LinkedIn, GitHub, resume download, form */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
