"use client";
import React, { useState } from 'react';
import Head from 'next/head';

export default function VibeadsLanding() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleGenerate = async (retryCount = 0) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://ileopard77.app.n8n.cloud/webhook/d260eee6-1522-4016-9e94-9657be5c9073', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productUrl: url }),
      });
      
      if (!response.ok) throw new Error('Generation Failed');
      const data = await response.json();
      setVideoUrl(data.videoLink);
    } catch (err) {
      if (retryCount < 2) { // Self-Healing: Auto-retry twice before failing
        setTimeout(() => handleGenerate(retryCount + 1), 2000);
      } else {
        setError(true);
        setLoading(false);
      }
    } finally {
      if (!error) setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Head>
        <title>Vibeads | فيبيدز - إعلانات سينمائية</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050505" />
      </Head>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-[#D4AF37] to-[#AA8B28] bg-clip-text text-transparent">
          حول روابطك إلى إعلانات سينمائية <br/> بلمسة خليجية
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          الذكاء الاصطناعي الأقوى لصناعة المحتوى التجاري الموجه للسوق الخليجي.
        </p>

        {/* Input Group */}
        <div className="w-full max-w-3xl bg-[#111] p-2 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="url" 
              placeholder="ضع رابط المنتج (Salla, Zid, Amazon)..."
              className="flex-1 bg-transparent px-6 py-4 outline-none text-right border-none focus:ring-0"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button 
              onClick={() => handleGenerate()}
              disabled={loading || !url}
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold px-10 py-4 rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? 'جاري الابتكار...' : 'ابدأ الآن'}
            </button>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border border-[#D4AF37] p-6 rounded-3xl max-w-4xl w-full relative">
            <button onClick={() => setVideoUrl(null)} className="absolute top-4 left-4 text-[#D4AF37]">إغلاق ✕</button>
            <video src={videoUrl} controls className="w-full rounded-xl aspect-video bg-black" poster="/preview.jpg" />
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#D4AF37]">جاهز للنشر!</h2>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-bold">تحميل الفيديو</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
