import { motion } from "framer-motion"
import { COURSE_CONFIG } from "../data/courseData"

export default function FreePreviewSection() {
  return (
    <section id="free-preview" className="bg-[#0D0D0D] border-t border-white/5 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            ถ้ายังไม่แน่ใจ?
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight mb-4">
            ลองดูก่อนได้เลยครับ<br className="hidden md:block" />
            <span className="text-brand-yellow">ไม่ต้องจ่ายสักบาทเดียวครับ</span>
          </h2>
          <p className="font-body text-brand-warm/60 text-lg max-w-xl mx-auto leading-relaxed">
            ไม่ต้องกังวลเรื่องสไตล์การสอนะครับ — ดูวิดีโอฟรีด้านล่างนี้ก่อนได้เลย
            สอนแบบ step-by-step เข้าใจง่าย ไม่มีศัพท์เทคนิคที่ไม่อธิบาย
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative w-full aspect-video border border-white/10 overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/PbrCzrTqMN4?start=1165"
            title="ตัวอย่างการสอนฟรี"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        {/* Reassurance + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 bg-white/3 px-6 py-5"
        >
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-body text-brand-warm/80 text-sm">
              ถ้าดูแล้วชอบสไตล์การสอน — คอร์สเต็มสอนแบบนี้ตลอด
            </p>
            <p className="font-body text-brand-warm/40 text-xs">
              step-by-step · อธิบายทุก concept · ทำตามได้เลยระหว่างดู
            </p>
          </div>
          <motion.a
            href={COURSE_CONFIG.registerUrl}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 font-display font-bold text-sm px-6 py-3 bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors whitespace-nowrap"
          >
            ซื้อคอร์สเต็ม →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
