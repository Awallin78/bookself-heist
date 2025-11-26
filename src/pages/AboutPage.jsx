import React from "react";

export default function AboutPage() {
  return (
    <div className="app-container">
      <h1 className="app-title">About</h1>

      <p className="muted" style={{marginTop:8}}>
        Bookself Heist adalah aplikasi katalog karakter Money Heist berbasis
        Progressive Web App (PWA). Aplikasi ini dibuat untuk keperluan tugas
        dan pembelajaran modul PWA.
      </p>

      <p className="muted" style={{marginTop:12}}>
        Dibuat menggunakan React + Vite + TailwindCSS + vite-plugin-pwa.
      </p>
    </div>
  );
}
