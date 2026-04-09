import { motion } from "framer-motion"

export default function InstructorSection() {
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
            วิทยากร
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight">
            เรียนกับใคร
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 border border-brand-yellow/20 flex items-center justify-center">
                {/* TODO: replace with real instructor photo */}
                <span className="text-6xl">🧑‍💻</span>
              </div>
              <div className="absolute -bottom-3 -right-3 border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1.5">
                <span className="font-display font-bold text-brand-yellow text-xs">🥇 อันดับ 1 ของประเทศ</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="font-body text-brand-warm/50 text-sm mb-1">วิทยากร</p>
              {/* TODO: replace with real instructor name */}
              <h3 className="font-display font-bold text-brand-warm text-2xl md:text-3xl">
                Super AI Engineer
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-body text-2xl">🥇</span>
                <p className="font-body text-brand-warm/80">Super AI Engineer อันดับ 1 ของประเทศ</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-body text-2xl">⚙️</span>
                <p className="font-body text-brand-warm/80">ประสบการณ์ในวงการ AI และ Software มามากกว่า 10 ปี</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-body text-2xl">🤖</span>
                <p className="font-body text-brand-warm/80">ผู้เชี่ยวชาญ Claude · Claude Code · Claude Cowork จากหลักการสร้างสู้ใช้งานจริง</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-brand-yellow pl-5 py-2">
              <p className="font-body text-brand-warm/70 text-base italic leading-relaxed">
                "AI ต้องทำให้คนฉลาดขึ้น ไม่ใช่ทำให้คนโง่ลง"
              </p>
            </blockquote>

            {/* Social proof stats */}
            <div className="flex gap-8 pt-2">
              {[
                { value: "10+", label: "ปีประสบการณ์" },
                { value: "1500+", label: "นักเรียน" },
                { value: "#1", label: "Super AI Engineer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-brand-yellow text-2xl">{stat.value}</p>
                  <p className="font-body text-brand-warm/40 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
