import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import PainSection from "./components/PainSection"
import WhatYouGetSection from "./components/WhatYouGetSection"
import SkillSection from "./components/SkillSection"
import CurriculumSection from "./components/CurriculumSection"
import InstructorSection from "./components/InstructorSection"
import PricingSection from "./components/PricingSection"
import FAQSection from "./components/FAQSection"
import CTAFooter from "./components/CTAFooter"

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-warm font-body">
      <Navbar />
      <HeroSection />
      <PainSection />
      <WhatYouGetSection />
      <SkillSection />
      <CurriculumSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <CTAFooter />
    </div>
  )
}
