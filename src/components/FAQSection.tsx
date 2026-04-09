import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQS } from "../data/courseData"

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="bg-brand-dark border-t border-white/5 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm">คำถามที่พบบ่อย</h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`border transition-colors ${
                openIdx === i ? "border-brand-yellow/30 bg-brand-yellow/3" : "border-white/10 bg-white/3 hover:border-white/20"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-body font-semibold text-brand-warm text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-brand-warm/40 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 font-body text-brand-warm/60 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
