import { motion } from "framer-motion"

const pains = [
  {
    emoji: "😤",
    heading: "คุณเคยคิดอยากทำอะไรสักอย่าง",
    items: ["chatbot สำหรับธุรกิจ", "ระบบจอง", "หรือ tool เล็กๆ ของตัวเอง"],
    punchline: "มันก็ยังเป็นแค่ ไอเดียในหัว",
  },
  {
    emoji: "⏰",
    heading: "คุณลองใช้ AI แล้ว",
    items: ["เล่น Claude", "ลอง prompt", "ดูคลิปมาเยอะ"],
    punchline: "ก็ยังงง ไม่รู้จะเริ่มตรงไหน",
  },
  {
    emoji: "🧠",
    heading: "คุณรู้สึกว่า…",
    items: ["ตัวเองก็สาย tech", "เข้าใจอะไรพวกนี้ระดับหนึ่ง"],
    punchline: "ยังไม่มี product ของตัวเองสักตัว",
  },
  {
    emoji: "💸",
    heading: "คุณอยากมีอะไรเป็นของตัวเอง แต่ติดว่า:",
    items: ["ไม่อยากเขียนโค้ดเอง", "ไม่อยากจ้าง dev หลักหมื่นหลักแสน", "และไม่อยากเสียเวลาเดาไปเรื่อย"],
    punchline: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

export default function PainSection() {
  return (
    <section className="bg-brand-dark border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            💣 Pain Point
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight mb-6">
            คุณอยู่ในจุดนี้ไหม?
          </h2>
          <p className="font-body text-brand-warm/60 text-lg max-w-xl">
            คนส่วนใหญ่ที่สนใจ AI ตอนนี้… ไม่ได้ไม่เก่ง
            <br />
            แต่ติดอยู่ในจุดที่เรียกว่า
          </p>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-yellow mt-3">
            "มีไอเดีย…แต่ไม่เคยสร้างมันออกมาได้จริง"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-white/10 bg-white/3 p-8 flex flex-col gap-4 hover:border-brand-yellow/30 transition-colors"
            >
              <span className="text-4xl">{pain.emoji}</span>
              <p className="font-body text-brand-warm font-semibold text-base">{pain.heading}</p>
              <ul className="font-body text-brand-warm/70 text-sm space-y-1">
                {pain.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 text-brand-warm/40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {pain.punchline && (
                <p className="font-body text-brand-yellow font-semibold text-sm mt-2">
                  ❗ {pain.punchline}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-white/10 bg-white/3 p-8 text-center"
        >
          <p className="font-body text-brand-warm/60 text-base mb-2">🔥 สุดท้ายมันจบที่</p>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-warm">
            คุณมี{" "}
            <span className="text-brand-yellow">"ความสามารถ"</span>
            <br />
            แต่ยังไม่มี{" "}
            <span className="text-brand-yellow">"ของจริง"</span>{" "}
            ที่ใช้ต่อยอดเป็นธุรกิจได้
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="font-body text-brand-warm/50 text-sm uppercase tracking-widest mb-3">
            🚀 Transition
          </p>
          <p className="font-body text-brand-warm/70 text-lg mb-2">
            Workshop นี้ ถูกสร้างมาเพื่อแก้ปัญหานี้โดยตรง
          </p>
          <p className="font-body text-brand-warm/60 text-base mb-4">ไม่ใช่แค่สอน AI แต่พาคุณ:</p>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-yellow">
            🔥 จาก "มีไอเดีย" → "มี AI Product + ระบบขายจริง"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
