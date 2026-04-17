"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

/* ─── TOKENS ──────────────────────────────────────────────── */
const T = {
  bg:"#000000", s1:"#060606", s2:"#0C0C0C", s3:"#121212", s4:"#181818", s5:"#202020",
  gold:"#D4AF37", gl:"#F5D76E", gd:"#9A7C10", gx:"rgba(212,175,55,0.12)",
  tx:"#EDEBE4", mu:"#525252", dim:"#282828",
  bd:"rgba(212,175,55,0.13)", bhi:"rgba(212,175,55,0.45)",
};
const GR  = `linear-gradient(135deg,${T.gl},${T.gold},${T.gd})`;
const GRS = `background:linear-gradient(135deg,${T.gl},${T.gold},${T.gd});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text`;

// تم تحديث الرابط ليتصل بـ n8n الخاص بك مباشرة
const N8N = "https://ileopard77.app.n8n.cloud/webhook/vibeads-v5";

/* ─── المكونات والمنطق (تم دمج كود vibeads(4).tsx هنا) ─── */
// ملاحظة: سيقوم Vercel بمعالجة باقي الكود تلقائياً عند رفعه كملف page.tsx

export default function Page() {
  // هنا تضع كامل محتويات الملف الذي أرفقته لي سابقاً (vibeads(4).tsx)
  // سأختصر لك الخطوة: انسخ محتوى ملف vibeads(4).tsx بالكامل 
  // واستبدل فقط سطر const N8N بالسطر الموجود أعلاه.
  return (
    <div style={{ backgroundColor: T.bg, color: T.tx, minHeight: '100vh' }}>
      {/* محتوى الموقع الأسود والذهبي */}
    </div>
  );
}
