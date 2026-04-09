import { motion } from "framer-motion"

const pains = [
  {
    emoji: "😤",
    text: "เคยลอง Claude แล้ว แต่ยังมองภาพไม่ออกว่าจะเอาไปใช้ในธุรกิจยังไง",
  },
  {
    emoji: "⏰",
    text: "งานที่ทำซ้ำๆ ทุกวัน ยังทำด้วยมืออยู่ ทั้งที่ Claude ทำแทนได้",
  },
  {
    emoji: "💸",
    text: "อยากสร้าง prototype หรือหน้าเว็บ แต่ไม่รู้ code และไม่อยากจ้าง dev",
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
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Pain Point
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight mb-4">
            คุณอยู่ตรงนี้ไหม?
          </h2>
          <p className="font-body text-brand-warm/50 text-lg mb-12 max-w-xl">
            คนส่วนใหญ่อยู่ใน zone นี้ —&nbsp;
            <span className="text-brand-warm/80 font-medium italic">"aware but stuck"</span>
            &nbsp;รู้จัก Claude อยู่แล้ว แต่ใช้ได้ไม่ถึง 10% ของที่มันทำได้
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
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
              <p className="font-body text-brand-warm/80 text-base leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-display font-bold text-xl md:text-2xl text-brand-yellow mt-12 text-center"
        >
          Live นี้สร้างมาเพื่อคุณโดยเฉพาะ
        </motion.p>
      </div>
    </section>
  )
}
