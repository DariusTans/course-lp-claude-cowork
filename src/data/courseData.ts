export const COURSE_CONFIG = {
  title: "Build & Sell AI Business ของคุณภายใน 1 วัน",
  tagline: "จากแค่มีไอเดีย → มี Product + Sale Page + ระบบรับเงิน ที่ใช้งานได้จริง",
  tools: ["Claude", "Claude Code", "Claude Cowork"] as const,
  date: "คอร์สวิดีโออัดไว้ เรียนได้ทันที",
  time: "เรียนได้ตลอดเวลา ไม่มีหมดอายุ",
  platform: "Video Online — เรียนได้ทุกที่ทุกเวลา",
  platformNote: "เข้าถึงวิดีโอได้ทันทีหลังชำระเงิน สามารถกลับมาดูซ้ำได้ไม่จำกัด",
  seats: 50,
  pricing: {
    earlyBird: 990,
    regular: 1990,
  },
  eventDate: new Date("2026-05-31T23:59:00+07:00"),
  registerUrl: "https://forms.gle/oaxYstn4rxqcU6Zc8",
  contactEmail: "phonratichai.influencer@gmail.com",
}

export const CURRICULUM = [
  {
    session: 1,
    time: "Part 1",
    tool: null,
    title: "Pre-Setup & Introduction",
    description: "เตรียม environment ให้พร้อมก่อนเริ่ม และทำความรู้จักกับเป้าหมายของคอร์ส",
    outcomes: [
      "ติดตั้ง Claude Code, VSCode, Git, Node ครบถ้วน",
      "เข้าใจเป้าหมายหลัก — เปลี่ยน idea ให้เป็น product ที่ขายได้จริง",
      "รู้ว่าจะได้เรียนอะไรบ้างตลอดคอร์ส",
    ],
  },
  {
    session: 2,
    time: "Part 2",
    tool: "Claude",
    title: "Basic Claude & Claude Cowork",
    description: "เรียนรู้หลักการเขียน Prompt ที่ถูกต้อง และการทำงานร่วมกับ Claude แบบ workflow จริง เชื่อมต่อ MCP (Google, Calendar, Canva) และ Skills ที่น่าสนใจ",
    outcomes: [
      "เข้าใจหลักการเขียน Prompt ได้ภาพชัดเจน",
      "เชื่อมต่อ MCP ต่างๆ เข้ากับ workflow ได้",
      "รู้จัก Claude Skills และนำไปใช้งานต่อยอดได้",
    ],
  },
  {
    session: 3,
    time: "Part 3",
    tool: "Claude Code",
    title: "Basic Claude Code",
    description: "เริ่มต้นใช้งาน Claude Code ใน local machine พร้อม tips สำหรับการ optimize token ให้ประหยัดและมีประสิทธิภาพ",
    outcomes: [
      "ใช้ Claude Code ใน local ได้อย่างคล่องแคล่ว",
      "รู้เทคนิค token optimization ที่ช่วยลด cost",
      "เข้าใจ workflow การทำงานกับ Claude Code จริงๆ",
    ],
  },
  {
    session: 0,
    time: "Break",
    tool: null,
    title: "พักกลางวัน",
    description: "",
    outcomes: [],
  },
  {
    session: 4,
    time: "Part 4",
    tool: "Claude Code",
    title: "How to Design Product with Claude Code",
    description: "เรียนรู้วิธีออกแบบ product ตั้งแต่การวาง CLAUDE.md, planning idea, ไปจนถึง vibe coding — ครอบคลุม Web Sale Page, SaaS, ระบบจัดการข้อมูล พร้อม debug, Git workflow และ deploy ขึ้น Vercel",
    outcomes: [
      "วาง CLAUDE.md และ planning product ได้อย่างเป็นระบบ",
      "Vibe code จาก idea ไปถึง prototype ที่ใช้งานได้",
      "Debug, version control ด้วย Git และ deploy ขึ้น Vercel ได้จริง",
    ],
  },
  {
    session: 5,
    time: "Part 5",
    tool: "Claude Code",
    title: "Payment with Stripe",
    description: "ผสาน Stripe เข้ากับ product — ตั้งแต่พื้นฐาน Basic payment, Stripe Webhook, จนถึง guide สำหรับ production จริง",
    outcomes: [
      "เชื่อมต่อ Stripe รับเงินได้จริงทันที",
      "เข้าใจ Stripe Webhook สำหรับ flow ที่ซับซ้อนขึ้น",
      "รู้ checklist ก่อนขึ้น production payment จริง",
    ],
  },
  {
    session: 6,
    time: "Part 6",
    tool: "Q&A",
    title: "Roadmap & Next Steps",
    description: "สรุปสิ่งที่ได้เรียนและวางแผนว่าจะนำ product ไปต่อยอดอย่างไร",
    outcomes: [
      "มี product + payment ที่ deploy ขึ้น Vercel ได้จริง",
      "รู้ step ถัดไปในการพัฒนาและทำเงินจาก product",
      "มี roadmap ชัดสำหรับการต่อยอดหลังคอร์ส",
    ],
  },
]

export const SKILLS = [
  {
    command: "/build-product",
    category: "AI Product",
    icon: "🚀",
    title: "สร้าง AI Product ของคุณ",
    description: "จาก idea → ได้ tool / chatbot / system ที่ใช้งานได้จริง",
    before: "ไม่เคยเริ่ม",
    after: "มี product ภายใน 1 วัน",
    useCases: ["Chatbot ธุรกิจ", "Automation tool", "Mini SaaS"],
  },
  {
    command: "/build-sale-page",
    category: "Sales",
    icon: "💰",
    title: "สร้าง Sale Page",
    description: "มีหน้าเว็บสำหรับขาย product ของคุณทันที",
    before: "ไม่มีช่องทางขาย",
    after: "มีหน้าเว็บพร้อมขาย",
    useCases: ["Landing page", "Pre-order page", "Service page"],
  },
  {
    command: "/accept-payment",
    category: "Business",
    icon: "💳",
    title: "รับเงินผ่าน Stripe",
    description: "เชื่อมระบบจ่ายเงิน เพื่อทดลองขายได้จริง",
    before: "รับเงินไม่ได้",
    after: "มีระบบรับเงินทันที",
    useCases: ["ขาย digital product", "รับ payment ลูกค้า", "ทดสอบตลาด"],
  },
]

export const FAQS = [
  {
    q: "คอร์สนี้เหมาะกับใคร?",
    a: "สำหรับคนที่มีไอเดียอยากสร้างธุรกิจ หรืออยากมี product ของตัวเอง แต่ยังไม่เคยสร้างของจริงได้ ไม่ว่าจะเป็น dev, creator หรือคนสาย tech ที่อยากเริ่มต้น",
  },
  {
    q: "สิ่งที่ได้หลังเรียนคืออะไร?",
    a: "คุณจะมี AI Product หรือ Service ของตัวเอง 1 ตัว พร้อม Sale Page และระบบรับเงิน ที่สามารถนำไปทดลองขายได้จริง และ deploy ขึ้น Vercel แล้ว",
  },
  {
    q: "ต้องมีพื้นฐานโค้ดไหม?",
    a: "ไม่ต้องเลย ทุกอย่างสอนให้ทำได้แม้ไม่มีพื้นฐาน coding",
  },
  {
    q: "วิดีโอดูได้นานแค่ไหน?",
    a: "ดูได้ไม่จำกัดเวลา ไม่มีวันหมดอายุ สามารถกลับมาดูซ้ำได้ทุกเมื่อที่ต้องการ",
  },
  {
    q: "เรียนแล้วจะทำเงินได้เลยไหม?",
    a: "คอร์สนี้ไม่ได้การันตีรายได้ แต่ให้ foundation ที่ถูกต้องในการสร้าง product และนำไปทดลองขายได้จริง",
  },
  {
    q: "ต่างจาก Live class ยังไง?",
    a: "คอร์สนี้ใช้ recording จากการสอน live จริง ได้เห็น workflow จริงๆ รวมถึงการแก้ปัญหาแบบ real-time ข้อดีคือดูซ้ำได้ หยุดได้ และเรียนในเวลาที่สะดวกของคุณ",
  },
  {
    q: "มีอะไรต้องเตรียมก่อนเรียนไหม?",
    a: "มี Pre-setup guide ให้ในตอนแรกของคอร์ส ครอบคลุมการติดตั้ง Claude Code, VSCode, Git และ Node ตามได้ทันที",
  },
]
