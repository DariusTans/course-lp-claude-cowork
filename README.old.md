# Claude Cowork — Landing Page

## Project Overview

Landing Page สำหรับ Live Course **"Claude ใช้เป็น ธุรกิจไปได้เอง"**
สอนการใช้ **Claude · Claude Code · Claude Cowork** จากพื้นฐานถึงใช้งานจริงในธุรกิจ
สร้างด้วย React + TypeScript พร้อม deploy บน Vercel

> **Tags:** #course #claude #live #outline #pre-register
> **วันที่:** เสาร์ที่ 25 เมษายน 2026 | 10:00–16:00 น.
> **ราคา:** Early Bird 1,490 บาท / ปกติ 3,000 บาท
> **Format:** Live สอนสด 6 ชั่วโมง | รับ 50 คนแรกเท่านั้น

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Google Fonts (ใช้ผ่าน `<link>` ใน index.html)
- **Deploy**: Vercel (static site)

---

## Getting Started

```bash
npx create-react-app claude-cowork-lp --template typescript
cd claude-cowork-lp
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm start
```

---

## Aesthetic Direction

**Dark Tech Brutalism meets Thai Startup Energy**

- Background: `#0A0A0A` (near black) with subtle grain texture overlay
- Accent: `#F5C542` (electric yellow-gold) — ใช้เป็น highlight สำคัญ
- Secondary accent: `#FF4D00` (electric orange) — CTA และ urgency
- Text: `#F0EDE8` (warm white)
- Font Display: **`"Syne"`** (bold, geometric, distinctive)
- Font Body: **`"DM Sans"`** (clean, readable)
- Layout: Asymmetric, oversized type, diagonal section breaks, sticky nav

**Mood**: "เหมือนเปิด pitch deck ของ startup ที่ออกแบบโดยคนที่รู้จัก typography"

---

## File Structure

```
src/
├── App.tsx
├── index.tsx
├── index.css
├── data/
│   └── courseData.ts
└── components/
    ├── Navbar.tsx
    ├── HeroSection.tsx
    ├── PainSection.tsx
    ├── WhatYouGetSection.tsx
    ├── CurriculumSection.tsx
    ├── InstructorSection.tsx
    ├── PricingSection.tsx
    ├── FAQSection.tsx
    └── CTAFooter.tsx
```

---

## Sections — Build ทีละ Component

### 1. `Navbar.tsx`
- Sticky top nav, background blur เมื่อ scroll
- Logo ซ้าย: "CLAUDE COWORK" ตัวใหญ่ bold สีเหลือง
- ขวา: ปุ่ม "จองที่นั่ง Early Bird" สีส้ม border-only → hover fill
- บน mobile: hamburger menu

### 2. `HeroSection.tsx`
- Full viewport height
- Headline ใหญ่มาก (text-7xl md:text-9xl), stagger animation เข้าทีละบรรทัด
- Text:
  ```
  เปิด Claude เป็น —
  แล้วธุรกิจจะ
  ไม่เหมือนเดิม
  ```
  สีขาว/เหลือง สลับกัน
- Sub-headline: `"Live สอนสด 6 ชั่วโมง | เสาร์ที่ 25 เมษายน 2026 | 10:00–16:00 น."`
- Sub-sub: `"สำหรับคนที่เปิด Claude อยู่แล้ว แต่ยังใช้ได้ไม่ถึง 10% ของที่มันทำได้"`
- Badge: `"LIVE สอนสด · 6 ชั่วโมง · จำกัด 50 ที่"`
- CTA Button: `"จองที่นั่ง Early Bird 1,490 ฿ →"` สีส้มใหญ่
- Background: grid dot pattern + subtle yellow glow ตรงกลาง
- Countdown timer ถึงวันงาน — แสดง วัน ชั่วโมง นาที วินาที

### 3. `PainSection.tsx`
- Section หัวข้อ: `"คุณอยู่ตรงนี้ไหม?"`
- Pain point หลัก: **"aware but stuck"** — รู้จัก Claude อยู่แล้ว แต่ใช้ได้ไม่ถึง 10% ของที่มันทำได้
- แสดง Pain Point เป็น card 3 ใบ:
  1. 😤 "เคยลอง Claude แล้ว แต่ยังมองภาพไม่ออกว่าจะเอาไปใช้ในธุรกิจยังไง"
  2. ⏰ "งานที่ทำซ้ำๆ ทุกวัน ยังทำด้วยมืออยู่ ทั้งที่ Claude ทำแทนได้"
  3. 💸 "อยากสร้าง prototype หรือหน้าเว็บ แต่ไม่รู้ code และไม่อยากจ้าง dev"
- Transition: `"Live นี้สร้างมาเพื่อคุณโดยเฉพาะ"`

### 4. `WhatYouGetSection.tsx`
- หัวข้อ: `"จบแล้วคุณจะได้อะไร"`
- Layout: 2 column — ซ้าย checklist ขวา mockup/visual
- เน้น 3 เครื่องมือหลักที่สอน: **Claude · Claude Code · Claude Cowork**
- Checklist items (✓ icon สีเหลือง):
  - ใช้ **Claude** เป็นผู้ช่วยที่รู้จักธุรกิจคุณจริงๆ ไม่ใช่ตอบ generic
  - ใช้ **Claude Code** สร้าง landing page / prototype จริงโดยไม่ต้องรู้ code
  - เข้าใจ **Claude Cowork** workflow ตั้งแต่คิด → วางแผน → build → launch
  - สร้าง **Skill** ของตัวเองใน Cowork — ระบบงานที่ทำซ้ำได้อัตโนมัติ
  - Prompt ที่ใช้ซ้ำได้ — เขียนครั้งเดียว ใช้ทุกวัน
  - งานที่เคยใช้เวลาหลายชั่วโมง เสร็จในไม่กี่นาที

### 4b. `SkillSection.tsx` ← section ใหม่ เพิ่มระหว่าง WhatYouGet กับ Curriculum
- หัวข้อ: `"Skill คืออะไร — และทำไมมันถึงเปลี่ยนวิธีทำธุรกิจคุณ"`
- อธิบายว่า **Skill ใน Claude Cowork** = ชุดคำสั่งที่คุณสร้างเองและเรียกใช้ได้ทันทีด้วย `/ชื่อ-skill`
- เปรียบเทียบให้เห็นภาพ: เหมือนมีพนักงานที่จำขั้นตอนงานของคุณได้แม่นทุกครั้ง ไม่ต้องสอนใหม่
- Layout: 3 card แนวนอน แต่ละ card = 1 use case จริง

**Card 1 — Skill สำหรับ Sales & Marketing**
- ชื่อ Skill ตัวอย่าง: `/draft-proposal`
- กด 1 ครั้ง → Claude เขียน proposal ลูกค้าใหม่ครบถ้วน ตามรูปแบบธุรกิจคุณ
- ประโยชน์: ลดเวลาเขียน proposal จาก 2 ชั่วโมง → 5 นาที

**Card 2 — Skill สำหรับ Content & Social**
- ชื่อ Skill ตัวอย่าง: `/content-week`
- กด 1 ครั้ง → Claude สร้าง content calendar ทั้งสัปดาห์ พร้อม caption IG / FB / LinkedIn
- ประโยชน์: ไม่ต้องนึก caption ทุกวัน ระบบทำให้ ใช้เวลา 10 นาที/สัปดาห์

**Card 3 — Skill สำหรับ Operations**
- ชื่อ Skill ตัวอย่าง: `/meeting-summary`
- กด 1 ครั้ง → วาง transcript → Claude สรุปประชุม + action items + owner ครบ
- ประโยชน์: ไม่มีประชุมที่ไม่มี followup อีกต่อไป

- ใต้ card เพิ่ม callout box:
  > 💡 **Skill ไม่ใช่แค่ prompt** — มันคือ workflow ที่ฝังวิธีคิดและมาตรฐานของธุรกิจคุณเข้าไปใน Claude
  > สร้างครั้งเดียว ทั้งทีมใช้ได้ ไม่ต้องสอนซ้ำ

- Bottom line: `"ใน Live นี้คุณจะสร้าง Skill ของตัวเองอย่างน้อย 1 ตัวก่อนกลับบ้าน"`

### 5. `CurriculumSection.tsx`
- หัวข้อ: `"Curriculum — 6 ชั่วโมง เต็มๆ"`
- Timeline / Accordion layout แบ่งช่วงตาม session
- เน้น badge ข้างชื่อ session: **[Claude]** / **[Claude Code]** / **[Claude Cowork]**

**ช่วงที่ 1 | 10:00–11:00 — [Claude Cowork]**
> "ทำไมฉันใช้ Claude มาตลอด แต่ยังรู้สึกว่าได้ไม่คุ้ม"
- เห็นภาพชัดว่า Claude ทำอะไรได้บ้างในชีวิตจริง
- รู้ว่าตัวเองอยู่จุดไหน และต้องเริ่มจากตรงไหน
- เข้าใจว่า Claude Cowork ต่างจากการใช้ Claude ทั่วไปยังไง

**ช่วงที่ 2 | 11:00–12:30 — [Claude]**
> "ใช้ Claude เป็นผู้ช่วยที่รู้จักฉันจริงๆ"
- Claude ที่ตอบในแบบที่เข้าใจบริบทธุรกิจของคุณ (ไม่ generic)
- วิธีสร้าง prompt ที่ใช้ซ้ำได้เรื่อยๆ โดยไม่ต้องพิมพ์ใหม่ทุกครั้ง
- ลองทำจริงระหว่าง Live — เสร็จก่อนพัก

**พัก | 12:30–13:30**

**ช่วงที่ 3 | 13:30–14:30 — [Claude]**
> "งานที่เคยใช้เวลาหลายชั่วโมง เสร็จในไม่กี่นาที"
- เขียน proposal, ตอบลูกค้า, สรุปประชุม — เร็วขึ้น 10 เท่า
- สร้าง content สำหรับ social media จาก idea เดียว
- เอางานจริงของตัวเองมาลองทำตอนนี้เลย

**ช่วงที่ 4 | 14:30–15:30 — [Claude Code]**
> "จาก idea ถึง prototype จริง — โดยไม่ต้องรู้ code"
- เข้าใจว่า **Claude Code** ต่างจาก Claude ปกติยังไง และใช้เมื่อไหร่
- Live demo — สร้าง landing page จริงจาก idea เปล่าๆ ภายใน 15 นาที
- สร้าง prototype / หน้า pre-register ของตัวเองได้ โดยไม่ต้องจ้าง developer
- รู้ workflow ของ **Claude + Claude Code** ต่อกัน: คิด → วางแผน → build → launch

**ช่วงที่ 5 | 15:30–16:00 — Q&A**
> Q&A + Roadmap ของคุณหลังจากนี้
- ถามเรื่องธุรกิจหรืองานของตัวเองได้ตรงๆ
- รู้ว่าขั้นต่อไปของคุณควรเป็นอะไร

- แต่ละ session คลิก expand เพื่อดูรายละเอียด
- แสดง badge **[Claude]** / **[Claude Code]** / **[Claude Cowork]** ข้างหัวข้อแต่ละ session ให้ชัดเจน

### 6. `InstructorSection.tsx`
- รูปวิทยากร (placeholder หรือใส่ path รูปจริง)
- ชื่อ + ตำแหน่ง / Bio สั้น:
  - 🥇 Super AI Engineer อันดับ 1 ของประเทศ
  - Engineer & Educator มากกว่า 10 ปี
  - Quote: *"AI ต้องทำให้คนฉลาดขึ้น ไม่ใช่แทนที่การคิด"*
- Social proof: จำนวนนักเรียน / โปรเจกต์ที่เคยสร้าง

### 7. `PricingSection.tsx`
- หัวข้อ: `"Early Bird ก่อนที่คนอื่นจะเห็นภาพก่อนคุณ"`
- 2 Card เคียงกัน

**Early Bird — 1,490 ฿** (highlighted card สีเหลือง)
- รับเพียง 50 คนแรกเท่านั้น
- Live สอนสด 6 ชั่วโมง (Claude · Claude Code · Claude Cowork)
- Recording ย้อนหลัง
- Q&A session ตรงๆ กับวิทยากร
- `[จองที่นั่ง Early Bird]` button

**ราคาปกติ — 3,000 ฿**
- เมื่อที่ Early Bird เต็ม
- ทุกอย่างเหมือนกัน
- `[แจ้งเตือนเมื่อที่ปกติเปิด]` button (disabled style)

- Early Bird Banner: `"🔥 50 ที่แรกเท่านั้น — เหลือ [X] ที่"`
- ช่องทางชำระเงิน: PromptPay / โอนธนาคาร / บัตรเครดิต

### 8. `FAQSection.tsx`
- Accordion FAQ อย่างน้อย 6 ข้อ:
  1. ต้องมีพื้นฐานโค้ดไหม? (ตอบ: ไม่ต้องเลย)
  2. Claude Cowork ต่างจาก Claude ปกติยังไง?
  3. Claude Code คืออะไร ใช้ยากไหม?
  4. ใช้ Mac หรือ Windows ได้ไหม?
  5. ถ้าตามไม่ทัน Live ทำยังไง?
  6. Refund policy เป็นอย่างไร?

### 9. `CTAFooter.tsx`
- Final CTA ก่อน footer: Headline ใหญ่ + ปุ่ม
- Headline: `"จองที่นั่ง — ก่อนที่คนอื่นจะเห็นภาพก่อนคุณ"`
- Footer: Social links, อีเมลติดต่อ, copyright

---

## Shared Config / Constants

สร้างไฟล์ `src/data/courseData.ts`:

```typescript
export const COURSE_CONFIG = {
  title: "Claude ใช้เป็น ธุรกิจไปได้เอง",
  tagline: "เปิด Claude เป็น — แล้วธุรกิจจะไม่เหมือนเดิม",
  tools: ["Claude", "Claude Code", "Claude Cowork"], // 3 เครื่องมือหลักที่สอน
  date: "เสาร์ที่ 25 เมษายน 2026",
  time: "10:00–16:00 น.",
  platform: "Live สอนสด",
  seats: 50,
  pricing: {
    earlyBird: 1490,
    regular: 3000,
  },
  registerUrl: "#", // เปลี่ยนเป็น link จริง (Eventpop / Google Form)
  contactEmail: "hello@yourdomain.com",
};
```

---

## Copy สำหรับ Pre-register Form

### Title
> เปิด Claude เป็น — แล้วธุรกิจจะไม่เหมือนเดิม

### Sub-title
> Live สอนสด 6 ชั่วโมง | เสาร์ที่ 25 เมษายน 2026 | 10:00–16:00 น.
> สำหรับคนที่เปิด Claude อยู่แล้ว แต่ยังใช้ได้ไม่ถึง 10% ของที่มันทำได้

### Body
คุณรู้จัก Claude อยู่แล้ว

แต่ส่วนใหญ่ใช้มันแค่ "ถามตอบ" — ทั้งที่จริงๆ มันทำแทนคุณได้ทั้งกระบวนการ

Live นี้ไม่ได้สอนว่า AI คืออะไร แต่จะพาคุณเห็นว่า **Claude · Claude Code · Claude Cowork**
เข้าไปนั่งอยู่ในธุรกิจหรืองานของคุณได้ตรงไหนบ้าง — แล้วลองทำจริงระหว่าง Live เลย

### วิทยากร
🥇 Super AI Engineer อันดับ 1 ของประเทศ
Engineer & Educator มากกว่า 10 ปี
*"AI ต้องทำให้คนฉลาดขึ้น ไม่ใช่แทนที่การคิด"*

### ราคา
~~ปกติ 3,000 บาท~~
**Early Bird 1,490 บาท** — รับเพียง 50 คนแรกเท่านั้น

### CTA
> จองที่นั่ง — ก่อนที่คนอื่นจะเห็นภาพก่อนคุณ

---

## IG Bio (สำหรับ Bio ใน Profile)

```
🥇 Super AI Engineer อันดับ 1 ของประเทศ
Engineer 10 ปี → ผันตัวสอนคนใช้ AI ให้เป็นระบบ
เพราะ AI ที่ดีต้องทำให้คนฉลาดขึ้น — ไม่ใช่แทนที่การคิด
↓ Pre-register คอร์สแรก
```

---

## Tailwind Config

ใน `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5C542",
          orange: "#FF4D00",
          dark: "#0A0A0A",
          warm: "#F0EDE8",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

ใน `public/index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

---

## Animation Guidelines (Framer Motion)

- **Hero text**: stagger reveal ทีละบรรทัด, delay 0.1s ต่อบรรทัด
- **Section entry**: `whileInView` fade-up, threshold 0.2, once: true
- **Cards**: stagger 0.05s ต่อ card เมื่อ scroll ถึง section
- **CTA Button**: subtle pulse animation (scale 1 → 1.03) loop
- **Navbar**: background opacity transition เมื่อ scrollY > 80
- **Tool badges** (Claude / Claude Code / Claude Cowork): highlight glow เมื่อ hover

---

## Vercel Deployment

1. Push โค้ดขึ้น GitHub
2. Import repo บน [vercel.com](https://vercel.com)
3. Framework preset: **Create React App**
4. Build command: `npm run build`
5. Output directory: `build`
6. กด Deploy → ได้ URL ทันที

---

## Notes สำหรับ Claude Code

- ทุก component ใช้ TypeScript strict mode
- ไม่ต้องใช้ Router (single page เพียงพอ)
- Mobile-first responsive ทุก section
- ใช้ `COURSE_CONFIG` จาก `courseData.ts` แทน hardcode ค่าต่างๆ
- ใส่ `// TODO: replace with real content` ตรงที่ต้องการรูปหรือข้อมูลจริง
- อย่า hardcode สีตรงๆ ให้ใช้ Tailwind class จาก config เสมอ
- **ทุก section ที่เกี่ยวกับ tool ให้แสดง badge [Claude] / [Claude Code] / [Claude Cowork] ให้ชัดเจน** — นี่คือ core message ของคอร์ส
