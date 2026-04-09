import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { COURSE_CONFIG } from "../data/courseData"

const earlyBirdFeatures = [
  "Live สอนสด 6 ชั่วโมง",
  "เรียน Claude · Claude Code · Claude Cowork",
  "สร้าง Skill ของตัวเองระหว่าง Live",
  "Recording ย้อนหลัง",
  "Q&A session ตรงๆ กับวิทยากร",
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#0D0D0D] border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight">
            Early Bird ก่อนที่คนอื่นจะ<br className="hidden md:block" />เห็นภาพก่อนคุณ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Early Bird Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative border-2 border-brand-yellow bg-brand-yellow/5 p-8 flex flex-col gap-6"
          >
            <div className="absolute -top-3 left-6">
              <span className="font-body text-xs font-bold bg-brand-orange text-white px-3 py-1">
                🔥 {COURSE_CONFIG.seats} ที่แรกเท่านั้น
              </span>
            </div>

            <div>
              <p className="font-body text-brand-yellow text-sm font-semibold mb-2">Early Bird</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-display font-extrabold text-5xl text-brand-warm">
                  {COURSE_CONFIG.pricing.earlyBird.toLocaleString()}
                </span>
                <span className="font-body text-brand-warm/60 mb-2">฿</span>
              </div>
              <p className="font-body text-brand-warm/40 text-sm">
                <s>ปกติ {COURSE_CONFIG.pricing.regular.toLocaleString()} ฿</s>
                <span className="ml-2 text-brand-yellow font-semibold">ประหยัด {(COURSE_CONFIG.pricing.regular - COURSE_CONFIG.pricing.earlyBird).toLocaleString()} ฿</span>
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {earlyBirdFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center bg-brand-yellow/20 text-brand-yellow">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-body text-brand-warm/80 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href={COURSE_CONFIG.registerUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto block font-display font-bold text-center py-4 bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors"
            >
              จองที่นั่ง Early Bird →
            </motion.a>

            <p className="font-body text-brand-warm/40 text-xs text-center">
              PromptPay · โอนธนาคาร · บัตรเครดิต
            </p>
          </motion.div>

          {/* Regular Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-white/10 bg-white/3 p-8 flex flex-col gap-6 opacity-60"
          >
            <div>
              <p className="font-body text-brand-warm/50 text-sm font-semibold mb-2">ราคาปกติ</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-display font-extrabold text-5xl text-brand-warm/60">
                  {COURSE_CONFIG.pricing.regular.toLocaleString()}
                </span>
                <span className="font-body text-brand-warm/40 mb-2">฿</span>
              </div>
              <p className="font-body text-brand-warm/30 text-sm">เมื่อที่ Early Bird เต็ม</p>
            </div>

            <ul className="flex flex-col gap-3">
              {earlyBirdFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center bg-white/10 text-brand-warm/40">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-body text-brand-warm/40 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="mt-auto block font-display font-bold text-center py-4 border border-white/20 text-brand-warm/30 cursor-not-allowed"
            >
              เปิดเมื่อ Early Bird เต็ม
            </button>
          </motion.div>
        </div>

        {/* Guarantee note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-brand-warm/40 text-sm mt-8"
        >
          🔒 Refund เต็มจำนวนหากยกเลิกก่อน 7 วันก่อนวันงาน
        </motion.p>
      </div>
    </section>
  )
}
