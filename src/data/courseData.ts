export const COURSE_CONFIG = {
  title: "Claude ใช้เป็น ธุรกิจไปได้เอง",
  tagline: "เปิด Claude เป็น — แล้วธุรกิจจะไม่เหมือนเดิม",
  tools: ["Claude", "Claude Code", "Claude Cowork"] as const,
  date: "เสาร์ที่ 25 เมษายน 2026",
  time: "10:00–16:00 น.",
  platform: "Live สอนสด",
  seats: 30,
  pricing: {
    earlyBird: 1490,
    regular: 3000,
  },
  eventDate: new Date("2026-04-25T10:00:00+07:00"),
  registerUrl: "#register",
  contactEmail: "hello@claudecowork.com",
}

export const CURRICULUM = [
  {
    session: 1,
    time: "10:00–11:00",
    tool: "Claude Cowork",
    title: "ทำไมฉันใช้ Claude มาตลอด แต่ยังรู้สึกว่าได้ไม่คุ้ม",
    description: "คุณจะเข้าใจว่าที่ผ่านมาใช้ Claude แบบไหน และยังขาดอะไรอยู่ โดยไม่ต้องเดาเอง",
    outcomes: [
      "เห็นภาพชัดว่า Claude ทำอะไรได้บ้างในชีวิตจริง ทั้งงานและธุรกิจ",
      "รู้ว่าตัวเองอยู่จุดไหน และต้องเริ่มจากตรงไหน",
      "เข้าใจว่า Claude Cowork ต่างจากการใช้ทั่วไปยังไง",
    ],
  },
  {
    session: 2,
    time: "11:00–12:30",
    tool: "Claude",
    title: "ใช้ Claude เป็นผู้ช่วยที่รู้จักฉันจริงๆ",
    description: "คุณจะสร้าง Claude ที่รู้จักงานหรือธุรกิจของคุณโดยเฉพาะ ไม่ใช่ตอบแบบ generic อีกต่อไป",
    outcomes: [
      "Claude ที่ตอบคำถามในแบบที่เข้าใจบริบทของคุณ",
      "วิธีสร้าง prompt ที่ใช้ซ้ำได้เรื่อยๆ โดยไม่ต้องพิมพ์ใหม่ทุกครั้ง",
      "ลองทำจริงระหว่าง Live — เสร็จก่อนพัก",
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
    tool: "Claude",
    title: "งานที่เคยใช้เวลาหลายชั่วโมง เสร็จในไม่กี่นาที",
    description: "คุณจะเห็นว่างานประจำวันที่ทำซ้ำๆ อยู่ทุกวันนั้น Claude รับไปทำแทนได้เลย",
    outcomes: [
      "เขียน proposal, ตอบลูกค้า, สรุปประชุม — เร็วขึ้น 10 เท่า",
      "สร้าง content สำหรับ social media จาก idea เดียว",
      "เอางานจริงของตัวเองมาลองทำตอนนี้เลย ไม่ต้องรอกลับบ้าน",
    ],
  },
  {
    session: 4,
    time: "14:30–15:30",
    tool: "Claude Code",
    title: "จาก idea ถึง prototype จริง — โดยไม่ต้องรู้ code",
    description: "คุณจะเห็นว่า Claude Code เปลี่ยนวิธีสร้างของจริงไปยังไง — ไม่ใช่แค่ช่วยเขียน แต่ build ให้เลย",
    outcomes: [
      "เข้าใจว่า Claude Code ต่างจาก Claude ปกติยังไง และใช้เมื่อไหร่",
      "ดูสาธิต live — สร้าง landing page จริงจาก idea เปล่าๆ ภายใน 15 นาที",
      "สร้าง prototype / หน้า pre-register โดยไม่ต้องจ้าง developer",
      "รู้ workflow Claude + Claude Code: คิด → วางแผน → build → launch",
    ],
  },
  {
    session: 5,
    time: "15:30–16:00",
    tool: "Q&A",
    title: "Q&A + Roadmap ของคุณหลังจากนี้",
    description: "ถามเรื่องธุรกิจหรืองานของตัวเองได้ตรงๆ และรู้ว่าขั้นต่อไปของคุณควรเป็นอะไร",
    outcomes: [],
  },
]

export const SKILLS = [
  {
    command: "/draft-proposal",
    category: "Sales & Marketing",
    icon: "📝",
    title: "เขียน Proposal อัตโนมัติ",
    description: "กด 1 ครั้ง → Claude เขียน proposal ลูกค้าใหม่ครบถ้วน ตามรูปแบบธุรกิจคุณ",
    before: "2 ชั่วโมง",
    after: "5 นาที",
    useCases: ["ส่งใบเสนอราคา", "Pitch ลูกค้าใหม่", "ตอบ RFP"],
  },
  {
    command: "/content-week",
    category: "Content & Social",
    icon: "📱",
    title: "Content Calendar ทั้งสัปดาห์",
    description: "กด 1 ครั้ง → Claude สร้าง content calendar พร้อม caption IG / FB / LinkedIn",
    before: "3–4 ชั่วโมง/สัปดาห์",
    after: "10 นาที/สัปดาห์",
    useCases: ["IG Reels script", "LinkedIn post", "FB caption"],
  },
  {
    command: "/meeting-summary",
    category: "Operations",
    icon: "🎯",
    title: "สรุปประชุม + Action Items",
    description: "วาง transcript → Claude สรุปประชุม + action items + owner ครบในทีเดียว",
    before: "30–45 นาที",
    after: "2 นาที",
    useCases: ["Daily standup", "Client meeting", "Planning session"],
  },
]

export const FAQS = [
  {
    q: "ต้องมีพื้นฐานโค้ดไหม?",
    a: "ไม่ต้องเลย Live นี้ออกแบบสำหรับคนที่ไม่มีพื้นฐานโค้ด เนื้อหาเน้นการใช้งานจริงในธุรกิจ ไม่ใช่การเขียนโปรแกรม",
  },
  {
    q: "Claude Cowork ต่างจาก Claude ปกติยังไง?",
    a: "Claude Cowork คือวิธีการใช้ Claude แบบ systematic — สร้าง Skill, สร้าง workflow, ตั้งค่า context ให้ Claude รู้จักธุรกิจคุณ แทนที่จะถามทีละครั้งแบบ chatbot ทั่วไป",
  },
  {
    q: "Claude Code คืออะไร ใช้ยากไหม?",
    a: "Claude Code คือ tool ที่ให้ Claude ช่วย build ของจริง เช่น website, app, prototype — โดยคุณแค่บอกว่าอยากได้อะไร ไม่ต้องรู้ code เลย จะสาธิต live ระหว่างคอร์ส",
  },
  {
    q: "ใช้ Mac หรือ Windows ได้ไหม?",
    a: "ได้ทั้งคู่ ตราบใดที่มี browser และ internet ก็เข้าร่วมได้",
  },
  {
    q: "ถ้าตามไม่ทัน Live ทำยังไง?",
    a: "มี recording ย้อนหลังให้ดูได้ ไม่จำกัดเวลา",
  },
  {
    q: "Refund policy เป็นอย่างไร?",
    a: "สามารถขอ refund เต็มจำนวนได้ภายใน 7 วันหลังจองหากยกเลิกก่อนวันงาน",
  },
]
