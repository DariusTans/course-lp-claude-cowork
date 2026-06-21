import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import PainSection from "./components/PainSection"
import WhatYouGetSection from "./components/WhatYouGetSection"
import DemoSection from "./components/DemoSection"
// import SkillSection from "./components/SkillSection" // ซ่อนไว้ก่อน — รอคิดเนื้อหาใหม่มาแทน
import CurriculumSection from "./components/CurriculumSection"
import InstructorSection from "./components/InstructorSection"
import ReviewSection from "./components/ReviewSection"
import FreePreviewSection from "./components/FreePreviewSection"
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
      <DemoSection />
      {/* <SkillSection /> */}
      <CurriculumSection />
      <InstructorSection />
      <ReviewSection />
      <FreePreviewSection />
      <PricingSection />
      <FAQSection />
      <CTAFooter />
    </div>
  )
}
