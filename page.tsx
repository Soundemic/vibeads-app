"use client";
import React from 'react';

export default function Page() {
  const GRS = {
    background: 'linear-gradient(135deg, #F5D76E, #D4AF37, #9A7C10)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#D4AF37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0', ...GRS }}>VIBEADS</h1>
      <p style={{ color: '#fff', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '40px' }}>AI GULF VIDEO ENGINE</p>
      
      <div style={{ width: '100%', maxWidth: '500px', background: '#0C0C0C', padding: '30px', borderRadius: '15px', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <input 
          type="text" 
          placeholder="Paste Video Link Here..." 
          style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #282828', backgroundColor: '#000', color: '#fff', marginBottom: '15px', outline: 'none' }} 
        />
        <button style={{ width: '100%', padding: '15px', borderRadius: '8px', border: 'none', background: 'linear-gradient(135deg, #D4AF37, #9A7C10)', color: '#000', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
          GENERATE GULF VIDEO
        </button>
      </div>

      <footer style={{ marginTop: '60px', color: '#525252', fontSize: '0.8rem' }}>
        © 2026 VIBEADS PLATFORM | POWERED BY AI
      </footer>
    </div>
  );
}
