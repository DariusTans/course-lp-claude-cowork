export const COURSE_CONFIG = {
  title: "สร้างระบบใช้เองใน 1 วัน",
  tagline: "ครบจบทั้งหน้าบ้านและหลังบ้านด้วย Claude Code",
  tools: ["Claude", "Claude Code", "Claude Cowork"] as const,
  date: "คอร์สวิดีโออัดไว้ เรียนได้ทันที",
  time: "เรียนได้ตลอดเวลา ไม่มีหมดอายุ",
  platform: "Video Online — เรียนได้ทุกที่ทุกเวลา",
  platformNote: "เข้าถึงวิดีโอได้ทันทีหลังชำระเงิน สามารถกลับมาดูซ้ำได้ไม่จำกัด",
  seats: 50,
  pricing: {
    earlyBird: 1550,
    regular: 3300,
  },
  eventDate: new Date("2026-05-31T23:59:00+07:00"),
  registerUrl: "https://forms.gle/s3XrhBMUZTEJD2Lz6",
  contactEmail: "phonratichai.influencer@gmail.com",
}

export const CURRICULUM = [
  {
    session: 1,
    time: "Part 1",
    tool: null,
    title: "Pre-Setup & Introduction",
    description: "เตรียม environment ให้พร้อมก่อนเริ่ม และเห็นภาพรวมว่าตลอดคอร์สเราจะสร้างอะไรขึ้นมาบ้าง",
    outcomes: [
      "ติดตั้ง Claude Code, VSCode, Git, Node ครบถ้วน",
      "เข้าใจเป้าหมายหลัก — สร้างของจริงทั้งหน้าบ้านและหลังบ้านด้วย Claude Code",
      "เห็น outline ทั้งคอร์ส และรู้ว่าจะเอาทักษะไปต่อยอดอะไรได้บ้าง",
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
    title: "สร้าง Landing Page หน้าบ้าน (พร้อมหลักการวางแผนงาน)",
    description: "เริ่มจากวาง CLAUDE.md และ planning idea ให้เป็นระบบ แล้วลงมือ vibe code สร้าง Landing Page จริง — เน้นให้เห็น 'หลักการ' ของการแตกงาน วาง component และทำ responsive ที่นำไปสร้างเว็บแบบอื่นได้เอง",
    outcomes: [
      "วาง CLAUDE.md และ planning งานให้ Claude Code เข้าใจ context ได้",
      "สร้าง Landing Page จริงตั้งแต่ section, component จนถึง responsive",
      "จับหลักการสร้าง UI ที่ปรับไปเป็นเว็บอื่น (portfolio, สินค้า, service) ได้เอง",
    ],
  },
  {
    session: 5,
    time: "Part 5",
    tool: "Claude Code",
    title: "สร้างระบบจัดการหลังบ้าน — Stock Management",
    description: "ลงมือสร้างระบบหลังบ้านจริงด้วยตัวอย่าง Stock Management — ครอบคลุมการออกแบบ data model, CRUD, การจัดการ state และหน้าจอจัดการข้อมูล โดยเน้น pattern ที่เอาไปทำ admin / dashboard / ระบบจัดการอะไรก็ได้",
    outcomes: [
      "ออกแบบ data model และทำ CRUD (เพิ่ม/ลบ/แก้/ดู) ได้ครบ",
      "เข้าใจการจัดการ state และการเชื่อมหน้าจอกับข้อมูลจริง",
      "จับ pattern ระบบหลังบ้านที่ใช้ซ้ำได้กับ booking, CRM, order ฯลฯ",
    ],
  },
  {
    session: 6,
    time: "Part 6",
    tool: "Vercel",
    title: "Vercel Deployment (1 ชั่วโมง)",
    description: "นำงานที่สร้างขึ้น deploy ขึ้น production จริงด้วย Vercel พร้อมปูพื้นฐานสำคัญเรื่องสถาปัตยกรรมและการเลือก stack — เพื่อให้ตัดสินใจเองเป็นในโปรเจกต์ถัดไป",
    outcomes: [
      "เข้าใจความต่างของ Frontend, Backend และ Database ว่าแต่ละส่วนทำหน้าที่อะไร",
      "รู้หลักการเลือก Stack ในการพัฒนาให้เหมาะกับงาน",
      "รู้ว่า Vercel ทำอะไรได้และทำอะไรไม่ได้ — deploy งานขึ้นจริงได้สำเร็จ",
    ],
  },
  {
    session: 7,
    time: "Part 7",
    tool: "Q&A",
    title: "Roadmap & Next Steps",
    description: "สรุปสิ่งที่ได้เรียน และวางแผนว่าจะนำทักษะการสร้างหน้าบ้าน-หลังบ้านไปต่อยอดเป็นโปรเจกต์ของตัวเองอย่างไร",
    outcomes: [
      "มีทั้ง Landing Page และระบบหลังบ้านที่ deploy ขึ้นจริงแล้ว",
      "รู้ step ถัดไปในการต่อยอดไปสร้าง product อื่นๆ ด้วยตัวเอง",
      "มี roadmap ชัดสำหรับการพัฒนาต่อหลังคอร์ส",
    ],
  },
]

export const SKILLS = [
  {
    command: "/build-landing",
    category: "Frontend",
    icon: "🎨",
    title: "สร้าง Landing Page หน้าบ้าน",
    description: "จาก idea → หน้าเว็บจริง พร้อม section, component และ responsive",
    before: "ไม่มีหน้าเว็บ",
    after: "มี Landing Page ใช้งานได้จริง",
    useCases: ["Landing page", "Portfolio", "หน้าเว็บสินค้า/บริการ"],
  },
  {
    command: "/build-backend",
    category: "Backend",
    icon: "🗂️",
    title: "สร้างระบบจัดการหลังบ้าน",
    description: "ระบบ Stock Management จริง — CRUD + จัดการข้อมูลครบ",
    before: "จัดการข้อมูลด้วยมือ",
    after: "มีระบบหลังบ้านที่ใช้ซ้ำได้",
    useCases: ["Stock / Inventory", "Admin dashboard", "CRM / Booking"],
  },
  {
    command: "/deploy-vercel",
    category: "Deploy",
    icon: "🚀",
    title: "Deploy ขึ้นจริงด้วย Vercel",
    description: "นำงานขึ้น production จริง พร้อมเข้าใจการเลือก stack",
    before: "รันได้แค่ในเครื่อง",
    after: "มีลิงก์ใช้งานจริงบนเว็บ",
    useCases: ["Deploy เว็บ", "เลือก stack ให้เหมาะ", "เข้าใจ Frontend/Backend/DB"],
  },
]

export const FAQS = [
  {
    q: "คอร์สนี้เหมาะกับใคร?",
    a: "สำหรับคนที่อยากสร้างเว็บหรือระบบของตัวเองด้วย Claude Code ตั้งแต่หน้าบ้านถึงหลังบ้าน ไม่ว่าจะเป็น dev, creator หรือคนสาย tech ที่อยากเริ่มต้น",
  },
  {
    q: "สิ่งที่ได้หลังเรียนคืออะไร?",
    a: "คุณจะสร้างได้ทั้ง Landing Page หน้าบ้าน และระบบจัดการหลังบ้าน (ตัวอย่าง Stock Management) ที่ deploy ขึ้น Vercel ใช้งานได้จริง พร้อมหลักการที่นำไปต่อยอดสร้างโปรเจกต์แบบอื่นได้เอง",
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
    q: "เรียนแล้วเอาไปสร้างอย่างอื่นได้ไหม?",
    a: "ได้แน่นอน คอร์สนี้เน้นให้เห็น 'หลักการ' และ outline ของการสร้างหน้าบ้าน-หลังบ้าน ไม่ใช่แค่ทำตามตัวอย่าง คุณจะจับ pattern ไปปรับสร้างเว็บหรือระบบจัดการแบบอื่นได้เอง",
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
