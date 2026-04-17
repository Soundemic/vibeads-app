"use client";
import React, { useState } from 'react';

export default function Page() {
  return (
    <div style={{ backgroundColor: '#000', color: '#D4AF37', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>VIBEADS</h1>
      <p style={{ color: '#fff', marginBottom: '30px' }}>AI Video Generation - Gulf Touch</p>
      <div style={{ width: '80%', maxWidth: '600px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Paste link here..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #D4AF37', backgroundColor: '#111', color: '#fff' }} 
        />
        <button style={{ padding: '15px 30px', borderRadius: '8px', border: 'none', backgroundColor: '#D4AF37', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>
          GENERATE
        </button>
      </div>
      <footer style={{ marginTop: '50px', color: '#525252' }}>© 2026 Vibeads Platform</footer>
    </div>
  );
}
