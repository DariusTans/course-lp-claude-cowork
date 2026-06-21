import { motion } from "framer-motion"
import { Check } from "lucide-react"

const outcomes = [
  {
    title: "ระบบจัดการสต็อกใช้งานได้จริง 1 ระบบ",
    desc: "ของจริงที่รันได้ในมือ มีครบทั้งหน้าบ้านและหลังบ้าน ไม่ใช่แค่ตัวอย่างในสไลด์",
  },
  {
    title: "หน้าบ้านที่พนักงานกดใช้ได้เลย",
    desc: "ฟอร์มกรอกของเข้า-ออกที่ใช้งานจริง เชื่อมกับข้อมูลหลังบ้าน ยอดตรงกับของจริงทุกครั้ง",
  },
  {
    title: "หลังบ้านที่เก็บข้อมูลไม่หาย",
    desc: "ที่เก็บข้อมูลสต็อกที่ปลอดภัย ไม่หายเกลี้ยงเหมือนตอนทำใน Excel",
  },
  {
    title: "แดชบอร์ด + แจ้งเตือนอัตโนมัติ",
    desc: "เห็นยอดคงเหลือและมูลค่าสต็อกรวมในจอเดียว ของใกล้หมดระบบเตือนเอง ออกรายงานส่งหัวหน้าได้ในไม่กี่คลิก",
  },
  {
    title: "สั่ง Claude Code ให้ถูก จากมุมคนสร้างจริง",
    desc: "รู้วิธีสั่งงานให้ได้ของที่ต้องการ ไม่ใช่ vibe มั่ว ๆ แล้วค้างกลางทาง",
  },
  {
    title: "แก้บั๊กเป็น — หัวใจจริงของการมีระบบใช้เอง",
    desc: "พอระบบพังคุณรู้ว่าเริ่มแก้ตรงไหน ไม่เสียเวลาทั้งวันกับ bug เดียว",
  },
  {
    title: "Pattern ที่ต่อยอดได้ไม่จำกัด",
    desc: "ทำสต็อกได้ ก็เอาวิธีเดียวกันไปทำระบบลูกค้า ออเดอร์ นัดหมายได้เลย",
  },
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

        <div className="grid md:grid-cols-2 gap-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`border border-black/10 bg-black/3 p-6 flex items-start gap-4 hover:border-brand-yellow/40 transition-colors ${
                i === 0 ? "md:col-span-2 border-brand-yellow/40 bg-brand-yellow/5" : ""
              }`}
            >
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                <Check className="w-3.5 h-3.5" />
              </span>
              <div>
                <p className="font-display font-bold text-brand-warm text-base md:text-lg mb-1">
                  {item.title}
                </p>
                <p className="font-body text-brand-warm/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
