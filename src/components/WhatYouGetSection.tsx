import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { ToolBadge, ClaudeIcon, AnthropicIcon } from "./ClaudeIcons"

const outcomes = [
  { tool: "Claude" as const, text: "ใช้ Claude เป็นผู้ช่วยที่รู้จักธุรกิจคุณจริงๆ ไม่ใช่ตอบ generic" },
  { tool: "Claude Code" as const, text: "ใช้ Claude Code สร้าง landing page / prototype จริงโดยไม่ต้องรู้ code" },
  { tool: "Claude Cowork" as const, text: "เข้าใจ Claude Cowork workflow ตั้งแต่คิด → วางแผน → build → launch" },
  { tool: "Skill" as const, text: "สร้าง Skill ของตัวเองใน Cowork — ระบบงานที่ทำซ้ำได้อัตโนมัติ" },
  { tool: null, text: "Prompt ที่ใช้ซ้ำได้ — เขียนครั้งเดียว ใช้ทุกวัน" },
  { tool: null, text: "งานที่เคยใช้เวลาหลายชั่วโมง เสร็จในไม่กี่นาที" },
]

export default function WhatYouGetSection() {
  return (
    <section className="bg-brand-panel border-t border-black/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            What You Get
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight">
            จบแล้วคุณจะได้อะไร
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Checklist */}
          <div className="flex flex-col gap-4">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                  <Check className="w-3 h-3" />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {item.tool && <ToolBadge tool={item.tool} />}
                  <span className="font-body text-brand-warm/80 text-base">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-black/10 bg-black/3 p-8 flex flex-col gap-6"
          >
            <p className="font-display font-bold text-brand-warm text-lg">เครื่องมือที่คุณจะได้เรียน</p>
            {[
              { name: "Claude", desc: "ผู้ช่วยที่รู้จักบริบทธุรกิจคุณ", iconColor: "#D97757", bgClass: "bg-blue-500/20", Icon: ClaudeIcon },
              { name: "Claude Code", desc: "Build prototype โดยไม่ต้องรู้ code", iconColor: "#a78bfa", bgClass: "bg-purple-500/20", Icon: AnthropicIcon },
              { name: "Claude Cowork", desc: "Workflow อัตโนมัติสำหรับทีมและธุรกิจ", iconColor: "#D97757", bgClass: "bg-brand-yellow/20", Icon: AnthropicIcon },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-4">
                <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center ${tool.bgClass}`}>
                  <tool.Icon size={20} color={tool.iconColor} />
                </div>
                <div>
                  <p className="font-body font-semibold text-brand-warm text-sm">{tool.name}</p>
                  <p className="font-body text-brand-warm/50 text-xs">{tool.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
