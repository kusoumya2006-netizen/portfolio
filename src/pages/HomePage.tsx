import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import EngineeringBackgroundSection from '../components/sections/EngineeringBackgroundSection'
import WorksSection from '../components/sections/WorksSection'
import ProjectAtlas from '../components/sections/ProjectAtlas'
import DesignSection from '../components/sections/DesignSection'
import JourneySection from '../components/sections/JourneySection'
import BeyondTheCodeSection from '../components/sections/BeyondTheCodeSection'
import SkillsSection from '../components/sections/SkillsSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO — Portrait, identity, dual pathway orientation, SK monogram */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. INTRODUCTION & ENGINEERING BACKGROUND */}
      <div id="about">
        <AboutSection />
        <EngineeringBackgroundSection />
      </div>

      {/* 3. SELECTED ENGINEERING PROJECTS — Flagship landmark systems & case studies */}
      <div id="works">
        <WorksSection featured={true} />
      </div>

      {/* 4. INTERACTIVE PROJECT ATLAS — Search, filter, and inspect all verified projects */}
      <div id="atlas">
        <ProjectAtlas />
      </div>

      {/* 5. DESIGN ARCHIVE — Visual-first creative exhibition with authentic assets */}
      <div id="design">
        <DesignSection />
      </div>

      {/* 6. EXPERIENCE & LEADERSHIP — Chronological editorial timeline */}
      <div id="journey">
        <JourneySection />
      </div>

      {/* 7. BEYOND THE CODE / CREATIVE PRACTICE — 4 frequencies + Bitmoji */}
      <div id="beyond-the-code">
        <BeyondTheCodeSection />
      </div>

      {/* 8. SKILLS & CREDENTIALS — Technical constellation & verified certifications */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* 9. CONTACT — Direct communication, resume download, verified channels */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
