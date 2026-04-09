import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { CURRICULUM } from "../data/courseData"
import { ToolBadge } from "./ClaudeIcons"

export default function CurriculumSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="curriculum" className="bg-[#0D0D0D] border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Curriculum
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight">
            6 ชั่วโมง เต็มๆ
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {CURRICULUM.map((item, i) => {
            const isBreak = item.session === 0
            const isOpen = openIdx === i

            if (isBreak) {
              return (
                <div
                  key={i}
                  className="border border-white/5 bg-white/2 px-6 py-4 flex items-center gap-4"
                >
                  <span className="font-mono text-xs text-brand-warm/30 w-24 flex-shrink-0">{item.time}</span>
                  <span className="font-body text-brand-warm/30 text-sm">☕ พักกลางวัน</span>
                </div>
              )
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border transition-colors ${
                  isOpen ? "border-brand-yellow/30 bg-brand-yellow/3" : "border-white/10 bg-white/3 hover:border-white/20"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start gap-4"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="font-mono text-xs text-brand-warm/30 w-24 flex-shrink-0 pt-1">{item.time}</span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {item.tool && item.tool !== "Q&A" && (
                            <ToolBadge tool={item.tool as "Claude" | "Claude Code" | "Claude Cowork"} />
                          )}
                          {item.tool === "Q&A" && (
                            <ToolBadge tool="Q&A" />
                          )}
                          <span className="font-body text-brand-warm/40 text-xs">ช่วงที่ {item.session}</span>
                        </div>
                        <p className="font-display font-bold text-brand-warm text-base md:text-lg">
                          "{item.title}"
                        </p>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-warm/40 flex-shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && item.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[7.5rem]">
                        <p className="font-body text-brand-warm/60 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        {item.outcomes.length > 0 && (
                          <div>
                            <p className="font-body text-brand-warm/40 text-xs uppercase tracking-widest mb-3">สิ่งที่จะได้</p>
                            <ul className="flex flex-col gap-2">
                              {item.outcomes.map((out, j) => (
                                <li key={j} className="flex items-start gap-2 font-body text-sm text-brand-warm/70">
                                  <span className="text-brand-yellow mt-0.5 flex-shrink-0">→</span>
                                  {out}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
