import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { COURSE_CONFIG, MODE } from "../data/courseData"

const earlyBirdFeatures = [
  "วิดีโอ recording จากการสอน live จริง",
  "เรียน Claude · Claude Code",
  "ดูซ้ำได้ไม่จำกัด ไม่มีวันหมดอายุ",
  "Pre-setup guide พร้อม Claude Code Skills แจก",
  "ได้ระบบจัดการสต็อกของจริงในมือ",
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-panel border-t border-black/5 py-24 px-6">
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
            ราคา Early Bird<br className="hidden md:block" />ก่อนขึ้นราคาปกติ
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
            {MODE.seats && (
              <div className="absolute -top-3 left-6">
                <span className="font-body text-xs font-bold bg-brand-orange text-white px-3 py-1">
                  🔥 {MODE.seats} ที่นั่งแรกเท่านั้น
                </span>
              </div>
            )}

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
              {MODE.ctaLabel} →
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
            className="border border-black/10 bg-black/3 p-8 flex flex-col gap-6 opacity-60"
          >
            <div>
              <p className="font-body text-brand-warm/50 text-sm font-semibold mb-2">ราคาปกติ</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-display font-extrabold text-5xl text-brand-warm/60">
                  {COURSE_CONFIG.pricing.regular.toLocaleString()}
                </span>
                <span className="font-body text-brand-warm/40 mb-2">฿</span>
              </div>
              <p className="font-body text-brand-warm/30 text-sm">เมื่อ Early Bird หมด</p>
            </div>

            <ul className="flex flex-col gap-3">
              {earlyBirdFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center bg-black/10 text-brand-warm/40">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-body text-brand-warm/40 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="mt-auto block font-display font-bold text-center py-4 border border-black/20 text-brand-warm/30 cursor-not-allowed"
            >
              เปิดเมื่อ Early Bird เต็ม
            </button>
          </motion.div>
        </div>

        {/* Upsell note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 border border-brand-yellow/20 bg-brand-yellow/5 px-6 py-4 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold mb-1">
            ⚠️ ราคานี้จะขึ้นในอนาคต
          </p>
          <p className="font-body text-brand-warm/60 text-sm">
            คอร์สนี้กำลังจะมีของแถมและเนื้อหาเพิ่มเติม — ราคาจะปรับขึ้นตามมูลค่าที่เพิ่ม
            <br />
            คนที่ซื้อตอนนี้ได้ราคานี้ไปตลอด และได้รับของแถมใหม่ทุกอย่างฟรี
          </p>
        </motion.div>

        {/* Guarantee note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-brand-warm/40 text-sm mt-4"
        >
          {MODE.notice}
        </motion.p>
      </div>
    </section>
  )
}
