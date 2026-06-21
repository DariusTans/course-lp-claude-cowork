import { useState } from "react"
import { motion } from "framer-motion"
import { ClipboardList, LayoutDashboard, Store } from "lucide-react"

// ───────────────────────────────────────────────────────────
// วางรูป screenshot จริงใน /public ตามชื่อด้านล่าง แล้วรูปจะขึ้นเอง
// ถ้ายังไม่มีรูป จะแสดง placeholder ให้อัตโนมัติ
// ───────────────────────────────────────────────────────────
const shots = [
  {
    src: "/demo-form.png",
    Icon: ClipboardList,
    label: "หน้าฟอร์มรับเข้า-จ่ายออก",
    desc: "พนักงานกรอกของเข้า-ออก เชื่อมกับข้อมูลหลังบ้านทันที",
  },
  {
    src: "/demo-dashboard.png",
    Icon: LayoutDashboard,
    label: "แดชบอร์ดสรุปสต็อก",
    desc: "ยอดคงเหลือ + มูลค่าสต็อกรวม เห็นครบในจอเดียว",
  },
  {
    src: "/demo-shop.png",
    Icon: Store,
    label: "หน้าร้านเชื่อมสต็อกโดยตรง",
    desc: "เว็บหน้าบ้านดึงข้อมูลจากสต็อกหลังบ้านแบบ real-time ลูกค้าเห็นของที่มีจริงทุกครั้ง",
  },
]

function Shot({ src, Icon, label, desc, i }: (typeof shots)[number] & { i: number }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className="border border-black/10 bg-black/3 overflow-hidden flex flex-col"
    >
      {/* Screenshot area */}
      <div className="relative aspect-[4/3] bg-black/5 flex items-center justify-center overflow-hidden">
        {!failed && (
          <img
            src={src}
            alt={label}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        )}

        {/* Placeholder — โชว์เมื่อยังไม่มีรูป */}
        {(failed || !loaded) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-warm/40">
            <Icon className="w-10 h-10 text-brand-yellow/60" />
            <p className="font-mono text-xs text-brand-warm/40 px-3 text-center">{src}</p>
            <span className="font-body text-[11px] uppercase tracking-widest text-brand-warm/30">
              รอใส่ screenshot
            </span>
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="font-display font-bold text-brand-warm text-base mb-1">{label}</p>
        <p className="font-body text-brand-warm/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function DemoSection() {
  return (
    <section id="demo" className="bg-brand-dark border-t border-black/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-body text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Demo
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-warm leading-tight mb-4">
            ระบบสต็อกที่คุณจะได้สร้าง — ของจริง ไม่ใช่สไลด์
          </h2>
          <p className="font-body text-brand-warm/60 text-lg max-w-2xl leading-relaxed">
            นี่คือหน้าจอจริงของระบบที่คุณจะสร้างได้เองในคอร์ส — ครบทั้งหน้าฟอร์ม แดชบอร์ด และระบบแจ้งเตือน
          </p>
        </motion.div>

        {/* Screenshots */}
        <div className="grid md:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <Shot key={s.src} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
