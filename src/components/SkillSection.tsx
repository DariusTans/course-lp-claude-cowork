import { motion } from "framer-motion"
import { SKILLS } from "../data/courseData"
import { ArrowRight, Clock, Zap } from "lucide-react"

export default function SkillSection() {
  return (
    <section id="skills" className="bg-brand-dark border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-brand-orange border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 mb-4">
            Claude Cowork — Skill System
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight mb-4">
            Skill คืออะไร — และทำไมมันถึงเปลี่ยน<br className="hidden md:block" />วิธีทำธุรกิจคุณ
          </h2>
          <p className="font-body text-brand-warm/60 text-lg max-w-2xl leading-relaxed">
            <span className="text-brand-warm font-semibold">Skill</span> ใน Claude Cowork คือชุดคำสั่งที่คุณสร้างเองและเรียกใช้ได้ทันทีด้วย&nbsp;
            <code className="font-mono text-brand-yellow bg-brand-yellow/10 px-1.5 py-0.5 text-sm">/ชื่อ-skill</code>
          </p>
        </motion.div>

        {/* Analogy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 border-l-4 border-brand-yellow pl-6 py-2"
        >
          <p className="font-body text-brand-warm/70 text-base italic leading-relaxed">
            เหมือนมีพนักงานที่จำขั้นตอนงานของคุณได้แม่นทุกครั้ง&nbsp;
            <span className="text-brand-warm not-italic font-semibold">ไม่ต้องสอนใหม่ ไม่ต้องเขียน prompt ใหม่ทุกครั้ง</span>
            &nbsp;— สร้างครั้งเดียว ทั้งทีมใช้ได้ตลอด
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.command}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-white/10 bg-white/3 p-6 flex flex-col gap-5 group hover:border-brand-orange/40 transition-all"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl mb-3 block">{skill.icon}</span>
                  <span className="font-body text-xs font-semibold text-brand-warm/40 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>
                <code className="font-mono text-xs text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2 py-1 group-hover:bg-brand-orange/20 transition-colors">
                  {skill.command}
                </code>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-brand-warm text-lg mb-2">{skill.title}</h3>
                <p className="font-body text-brand-warm/60 text-sm leading-relaxed">{skill.description}</p>
              </div>

              {/* Before / After */}
              <div className="border-t border-white/8 pt-4 flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-body text-xs text-brand-warm/40">
                  <Clock className="w-3 h-3" />
                  <s>{skill.before}</s>
                </div>
                <ArrowRight className="w-3 h-3 text-brand-warm/30" />
                <div className="flex items-center gap-1.5 font-body text-xs font-semibold text-brand-yellow">
                  <Zap className="w-3 h-3" />
                  {skill.after}
                </div>
              </div>

              {/* Use cases */}
              <div className="flex flex-wrap gap-1.5">
                {skill.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="font-body text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-brand-warm/50"
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border border-brand-yellow/30 bg-brand-yellow/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <span className="text-3xl flex-shrink-0">💡</span>
          <div className="flex-1">
            <p className="font-display font-bold text-brand-warm text-base md:text-lg mb-1">
              Skill ไม่ใช่แค่ prompt
            </p>
            <p className="font-body text-brand-warm/60 text-sm leading-relaxed">
              มันคือ workflow ที่ฝังวิธีคิดและมาตรฐานของธุรกิจคุณเข้าไปใน Claude&nbsp;
              <span className="text-brand-warm/80">สร้างครั้งเดียว ทั้งทีมใช้ได้ ไม่ต้องสอนซ้ำ</span>
            </p>
          </div>
          <div className="flex-shrink-0 border-l border-white/10 md:pl-8">
            <p className="font-body text-brand-warm/50 text-xs mb-1">เป้าหมายของคอร์สนี้</p>
            <p className="font-display font-bold text-brand-yellow text-sm">
              คุณจะสร้าง Skill ของตัวเอง<br />อย่างน้อย 1 ตัวได้เลย
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
