# Course Player — Planning

## Overview
หน้าสำหรับให้ลูกค้าที่ซื้อ course แล้วเข้ามาดูวิดีโอ
แยกออกจาก landing page (course-lp) โดยสิ้นเชิง

## Stack
- React + Vite + TypeScript
- TailwindCSS
- Vercel Edge Functions (password verification)
- Deploy: Vercel free tier

## URL Structure
```
/                        → redirect ไป /course/claude-cowork (ตอนนี้มีแค่ course เดียว)
/course/:slug            → หน้า password gate
/course/:slug/watch      → หน้าดูวิดีโอ (เข้าได้หลัง verify แล้ว)
```

## Flow
```
ลูกค้าได้รับ link + password ทาง DM/email
    → เปิด /course/claude-cowork
    → ใส่ password
    → POST /api/verify (Edge Function)
        → ถูก → return session token → เก็บใน sessionStorage → redirect /watch
        → ผิด → แสดง error
    → ดูวิดีโอแต่ละ chapter ได้
```

## Security
- Password เก็บใน Vercel Environment Variable (`COURSE_PASSWORD_<SLUG>`)
- Edge Function เป็น middleware check ก่อนส่ง chapter data กลับ
- YouTube video ID ไม่อยู่ใน client bundle — ส่งกลับมาจาก Edge Function หลัง verify เท่านั้น
- Session token เก็บใน sessionStorage (หมดเมื่อปิด browser tab)

## Data Structure
```ts
// ใน Edge Function (ไม่ expose ฝั่ง client)
const courses = [
  {
    slug: "claude-cowork",
    title: "Build & Sell AI Business ของคุณภายใน 1 วัน",
    password: process.env.COURSE_PASSWORD_CLAUDE_COWORK,
    chapters: [
      { title: "Part 1 — Pre-Setup & Introduction", videoId: "yt_xxxx" },
      { title: "Part 2 — Basic Claude & Claude Cowork", videoId: "yt_xxxx" },
      { title: "Part 3 — Basic Claude Code", videoId: "yt_xxxx" },
      { title: "Part 4 — How to Design Product with Claude Code", videoId: "yt_xxxx" },
      { title: "Part 5 — Payment with Stripe", videoId: "yt_xxxx" },
      { title: "Part 6 — Roadmap & Next Steps", videoId: "yt_xxxx" },
    ],
  },
  // เพิ่ม course ใหม่ตรงนี้ในอนาคต
]
```

## Pages / Components
```
src/
  pages/
    CoursePage.tsx         → password gate UI
    WatchPage.tsx          → video player + chapter list
  components/
    PasswordGate.tsx       → form ใส่ password
    VideoPlayer.tsx        → YouTube embed
    ChapterList.tsx        → sidebar รายการ chapter
  api/
    verify.ts              → Edge Function: verify password + return chapters
  data/
    courses.ts             → course metadata ฝั่ง client (ไม่มี password/videoId)
```

## Vercel Environment Variables
```
COURSE_PASSWORD_CLAUDE_COWORK=xxxx
SESSION_SECRET=xxxx
```

## Design
- Theme เดียวกับ landing page (dark background, สีเหลือง/ส้ม)
- Simple และ clean — เน้น UX การดูวิดีโอ
- Responsive (ดูบน mobile ได้)

## Out of Scope (ตอนนี้)
- ไม่มี login/account
- ไม่มี database
- ไม่มี progress tracking
- ไม่มี payment integration

## Deployment
- Vercel project ใหม่แยกจาก landing
- Domain: `learn.claudecowork.com` หรือ subdomain ของ Vercel ก็ได้
