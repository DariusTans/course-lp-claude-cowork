import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { COURSE_CONFIG, MODE, ACTIVE_PRICE } from "../data/courseData"
import { ToolBadge } from "./ClaudeIcons"

function Countdown({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: "วัน", value: timeLeft.days },
    { label: "ชั่วโมง", value: timeLeft.hours },
    { label: "นาที", value: timeLeft.minutes },
    { label: "วินาที", value: timeLeft.seconds },
  ]

  return (
    <div className="flex gap-3 md:gap-4">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display font-bold text-2xl md:text-3xl text-brand-yellow tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
          <span className="font-body text-brand-warm/50 text-xs mt-0.5">{label}</span>
        </div>
      ))}
    </div>
  )
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
      {/* Grid dot background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,197,66,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-yellow/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5">
              {MODE.badge}{MODE.seats ? ` · ${MODE.seats} ที่นั่งแรก` : ""}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="font-display font-extrabold leading-none tracking-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-brand-warm">{COURSE_CONFIG.title}</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-brand-yellow mt-4">{COURSE_CONFIG.tagline}</span>
          </motion.h1>

          {/* Tools badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {COURSE_CONFIG.tools.map((tool) => (
              <ToolBadge key={tool} tool={tool} size="md" />
            ))}
          </motion.div>

          {/* Sub-headline */}
          <motion.p variants={fadeUp} className="font-body text-brand-warm/70 text-lg md:text-xl max-w-xl leading-relaxed">
            สำหรับคนที่อยากสร้างเว็บและระบบของตัวเองได้จริง… ตั้งแต่หน้าบ้านถึงหลังบ้าน ด้วย Claude Code
          </motion.p>

          {/* Pre-register banner — โชว์เฉพาะรอบลงทะเบียนล่วงหน้า */}
          {MODE.preRegisterBanner && (
            <motion.div
              variants={fadeUp}
              className="max-w-xl border border-brand-yellow/30 bg-brand-yellow/10 px-5 py-3"
            >
              <p className="font-body text-brand-warm/80 text-sm leading-relaxed">
                {MODE.preRegisterBanner}
              </p>
            </motion.div>
          )}

          {/* Date + countdown */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="font-body text-brand-warm/60 text-sm">
              <span className="text-brand-warm font-semibold">{MODE.date}</span>
              <span className="ml-2 text-brand-warm/40">· {MODE.platform}</span>
            </div>
            {MODE.showCountdown && (
              <div className="flex flex-col gap-1">
                <span className="font-body text-brand-warm/30 text-xs">
                  {MODE.priceMode === "earlyBird" ? "จะปรับราคาขึ้นใน" : "ปิดรับใน"}
                </span>
                <Countdown target={COURSE_CONFIG.eventDate} />
              </div>
            )}
          </motion.div>

          {/* Platform note */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="text-brand-warm/30 text-sm">🎬</span>
            <p className="font-body text-brand-warm/40 text-xs">{MODE.platformNote}</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
            <motion.a
              href={COURSE_CONFIG.registerUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block font-display font-bold text-base md:text-lg px-8 py-4 bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors"
            >
              {MODE.ctaLabel} {ACTIVE_PRICE.toLocaleString()} ฿ →
            </motion.a>
            <div className="font-body text-brand-warm/50 text-sm self-center">
              {MODE.priceMode === "earlyBird" && (
                <s className="text-brand-warm/30">ปกติ {COURSE_CONFIG.pricing.regular.toLocaleString()} ฿</s>
              )}
              {MODE.seats && (
                <span className="ml-2 text-brand-warm/60">· รับ {MODE.seats} ที่นั่งแรกเท่านั้น</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
