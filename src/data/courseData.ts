export const COURSE_CONFIG = {
  title: "Build & Sell AI Business ของคุณภายใน 1 วัน",
  tagline: "จากแค่มีไอเดีย → มี Product + Sale Page + ระบบรับเงิน ที่ใช้งานได้จริง",
  tools: ["Claude", "Claude Code", "Claude Cowork"] as const,
  date: "เสาร์ที่ 25 เมษายน 2026",
  time: "10:00–16:00 น.",
  platform: "Live สอนสด ผ่าน Zoom",
  platformNote: "Zoom link จะส่งให้ทางอีเมล์ก่อนวันเรียน พร้อม guideline เตรียมตัว",
  seats: 30,
  pricing: {
    earlyBird: 1490,
    regular: 3000,
  },
  eventDate: new Date("2026-04-25T10:00:00+07:00"),
  registerUrl: "https://forms.gle/oaxYstn4rxqcU6Zc8",
  contactEmail: "phonratichai.influencer@gmail.com",
}

export const CURRICULUM = [
  {
    session: 1,
    time: "10:00–11:00",
    tool: null,
    title: "ทำไมคุณยังไม่มี Product ของตัวเอง",
    description: "เข้าใจว่าทำไมคนส่วนใหญ่มีไอเดีย แต่ไม่เคยสร้างของจริงได้ และคุณติดตรงไหน",
    outcomes: [
      "รู้ว่าปัญหาจริงไม่ใช่ skill แต่คือ lack of system",
      "เลือก idea ที่สามารถ build ได้ภายใน 1 วัน",
      "กำหนด AI Product หรือ Service ของคุณ",
    ],
  },
  {
    session: 2,
    time: "11:00–12:30",
    tool: "Claude",
    title: "ออกแบบ Product ของคุณด้วย AI",
    description: "ใช้ Claude ช่วยคิด, วาง structure และ define product ให้พร้อม build",
    outcomes: [
      "ได้ concept product ที่ชัด (ไม่ใช่ไอเดียลอยๆ)",
      "รู้ว่าต้องมีอะไรบ้าง (user, data, flow)",
      "วาง plan สำหรับ build จริง",
    ],
  },
  {
    session: 0,
    time: "12:30–13:30",
    tool: null,
    title: "พักกลางวัน",
    description: "",
    outcomes: [],
  },
  {
    session: 3,
    time: "13:30–14:30",
    tool: "Claude Code",
    title: "สร้าง Product ของคุณจริง (Prototype)",
    description: "ใช้ Claude Code build ของจริง เช่น chatbot, tool หรือระบบพื้นฐาน",
    outcomes: [
      "มี AI Product ที่ใช้งานได้จริง 1 ตัว",
      "เข้าใจ workflow การ build ด้วย AI",
      "รู้วิธีแก้ปัญหาเมื่อระบบพัง",
    ],
  },
  {
    session: 4,
    time: "14:30–15:30",
    tool: "Claude Code",
    title: "สร้าง Sale Page + ระบบรับเงิน",
    description: "เปลี่ยน product ของคุณให้พร้อมขาย มีหน้าเว็บ + ระบบจ่ายเงิน",
    outcomes: [
      "มี sale page ของตัวเอง",
      "เชื่อมต่อ Stripe เพื่อรับเงิน",
      "พร้อมนำไปทดลองขายจริง",
    ],
  },
  {
    session: 5,
    time: "15:30–16:00",
    tool: "Q&A",
    title: "Launch + Roadmap หลังจากนี้",
    description: "วางแผนว่าหลังจากนี้คุณจะเอา product ไปต่อยอดยังไง",
    outcomes: [
      "รู้ step ถัดไปในการทำเงิน",
      "มี roadmap ชัดในการพัฒนา product",
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
    a: "คุณจะมี AI Product หรือ Service ของตัวเอง 1 ตัว พร้อม Sale Page และระบบรับเงิน ที่สามารถนำไปทดลองขายได้จริง",
  },
  {
    q: "ต้องมีพื้นฐานโค้ดไหม?",
    a: "ไม่ต้องเลย ทุกอย่างสอนให้ทำได้แม้ไม่มีพื้นฐาน coding",
  },
  {
    q: "มันยากไหม?",
    a: "เรามี template และ step-by-step ให้ทำตามทุกขั้น ทำไปพร้อมกันระหว่าง live",
  },
  {
    q: "เรียนแล้วจะทำเงินได้เลยไหม?",
    a: "คอร์สนี้ไม่ได้การันตีรายได้ แต่ให้ foundation ที่ถูกต้องในการสร้าง product และนำไปทดลองขายได้จริง",
  },
  {
    q: "ถ้าตามไม่ทัน Live ทำยังไง?",
    a: "เราจะอัดวิดิโอ ไว้ให้แล้วส่งให้ทุกคนหลังจบคอร์ส สามารถกลับไปดูซ้ำได้ตลอดเวลา ไม่ต้องกลัวตามไม่ทันระหว่าง Live",
  },
  {
    q: `ทำไมจำกัด ${COURSE_CONFIG.seats} คน?`,
    a: "เพื่อให้สามารถช่วยทุกคน build ของจริงได้ระหว่าง live และตอบคำถามเฉพาะตัวได้",
  },
]