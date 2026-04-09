import { motion } from "framer-motion"

// ─── Config — swap these out when ready ───────────────────────────────────────
const VIDEO_SRC = "/review.mp4" // put your .mp4 in /public
const REVIEW_IMAGE = "/review1.jpg"   // put your image in /public

const reviews = [
  { name: "ปุ้ม", role: "พนักงานออฟฟิศ", text: "ชอบทุกอย่าง ในหลักสูตร สามารถอธิบายเรื่องยากให้เป็นเรื่องที่เข้าใจได้ง่ายมาก" },
  { name: "เอ็ม", role: "Freelance Marketer", text: "Content calendar ทั้งอาทิตย์เสร็จใน 10 นาที ตอนนี้มีเวลาไปโฟกัสงานที่สำคัญกว่า" },
  { name: "ต้น", role: "เจ้าของธุรกิจส่วนตัว", text: "Claude Code ช่วย build landing page ให้ได้ภายในวันเดียว ไม่ต้องจ้าง developer เลย" },
]
// ─────────────────────────────────────────────────────────────────────────────

function VideoBlock() {
  return (
    <div className="w-full h-[480px] bg-black border border-white/10 flex items-center justify-center overflow-hidden">
      <video
        src={VIDEO_SRC}
        controls
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  )
}

export default function ReviewSection() {
  return (
    <section className="bg-[#0D0D0D] border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            รีวิว
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight">
            class อื่นๆ ของเรา<br className="hidden md:block" /> การสอนเป็นยังไงบ้าง
          </h2>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — Video + text reviews */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Video */}
            <VideoBlock />

            {/* Quote cards below video */}
            <div className="flex flex-col gap-4">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-4 border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
                >
                  {/* Avatar initial */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center">
                    <span className="font-display font-bold text-brand-yellow text-sm">{r.name[0]}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-body text-brand-warm/80 text-sm leading-relaxed">"{r.text}"</p>
                    <p className="font-body text-brand-warm/30 text-xs mt-1">{r.name} · {r.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="w-full h-[480px] border border-white/10 overflow-hidden">
                <img
                  src={REVIEW_IMAGE}
                  alt="Review"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-brand-dark/80 backdrop-blur-sm border border-brand-yellow/20 px-4 py-2">
                  <span className="text-brand-yellow text-lg">⭐</span>
                  <p className="font-body text-brand-warm/80 text-sm">ผู้เรียนจริง · ผลลัพธ์จริง</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
