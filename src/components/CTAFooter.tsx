import { motion } from "framer-motion"
import { COURSE_CONFIG } from "../data/courseData"

export default function CTAFooter() {
  return (
    <>
      {/* Final CTA section */}
      <section
        id="register"
        className="bg-[#0D0D0D] border-t border-white/5 py-24 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] rounded-full bg-brand-orange/5 blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-brand-warm leading-tight mb-4">
              จองที่นั่ง —<br />
              <span className="text-brand-yellow">ก่อนที่คนอื่น</span>จะเห็นภาพ<br />
              ก่อนคุณ
            </h2>
            <p className="font-body text-brand-warm/50 text-lg">
              {COURSE_CONFIG.date} · {COURSE_CONFIG.time}
              <br />
              Early Bird เหลือ <span className="text-brand-yellow font-semibold">50 ที่</span> · ราคา{" "}
              <span className="text-brand-orange font-semibold">1,490 ฿</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href={COURSE_CONFIG.registerUrl}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="inline-block font-display font-bold text-lg md:text-xl px-10 py-5 bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors"
            >
              จองที่นั่ง Early Bird 1,490 ฿ →
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-brand-warm/30 text-xs"
          >
            🔒 Refund เต็มจำนวนหากยกเลิกก่อน 7 วัน · PromptPay · โอนธนาคาร · บัตรเครดิต
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-brand-yellow text-lg">CLAUDE COWORK</p>
            <p className="font-body text-brand-warm/30 text-xs mt-1">
              เรียนรู้ Claude · Claude Code · Claude Cowork
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href={`mailto:${COURSE_CONFIG.contactEmail}`}
              className="font-body text-brand-warm/40 hover:text-brand-warm text-sm transition-colors"
            >
              {COURSE_CONFIG.contactEmail}
            </a>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LINE"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-brand-warm/40 hover:text-brand-warm text-sm transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <p className="font-body text-brand-warm/20 text-xs">
            © 2026 Claude Cowork. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
