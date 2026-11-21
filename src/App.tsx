import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import GrandEntrance from './components/layout/GrandEntrance'

function ScrollToAnchor() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // If routing to section path e.g. /works
    const sectionPath = pathname.replace('/', '')
    if (sectionPath && sectionPath !== 'works/:id') {
      const element = document.getElementById(sectionPath)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  const [showEntrance, setShowEntrance] = useState(() => {
    // Check if user already experienced intro in this session
    try {
      return sessionStorage.getItem('sk_portfolio_intro_seen') !== 'true'
    } catch {
      return true
    }
  })
  const [isExitingEntrance, setIsExitingEntrance] = useState(false)

  const handleEnter = () => {
    try {
      sessionStorage.setItem('sk_portfolio_intro_seen', 'true')
    } catch {
      // ignore
    }
    setIsExitingEntrance(true)
    setTimeout(() => {
      setShowEntrance(false)
    }, 900)
  }

  const handleReplayEntrance = () => {
    setIsExitingEntrance(false)
    setShowEntrance(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0e1613] text-ivory flex flex-col justify-between selection:bg-sage selection:text-pine relative">
      {/* Cinematic Grand Entrance Fullscreen Experience */}
      {showEntrance && (
        <GrandEntrance
          onEnter={handleEnter}
          isExiting={isExitingEntrance}
        />
      )}

      <ScrollToAnchor />
      <Navigation onReplayIntro={handleReplayEntrance} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:id" element={<ProjectDetailPage />} />
          {/* Section paths gracefully map to the continuous scroll experience */}
          <Route path="/works" element={<HomePage />} />
          <Route path="/design" element={<HomePage />} />
          <Route path="/journey" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/beyond-the-code" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
