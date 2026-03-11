"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { TransitronSection } from "@/components/transitron-section"
import { SpinovateSection } from "@/components/spinovate-section"
import { ThemesSection } from "@/components/themes-section"
import { RulebookSection } from "@/components/rulebook-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <EventsSection />
      <TransitronSection />
      <SpinovateSection />
      <ThemesSection />
      <RulebookSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
