import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md">
        <h1 className="text-xl font-bold">About</h1>

        <p className="mt-2 text-gray-600">
          Bookself Heist adalah aplikasi katalog karakter Money Heist berbasis
          Progressive Web App (PWA). Aplikasi ini dibuat untuk keperluan tugas
          dan pembelajaran modul PWA.
        </p>

        <p className="mt-3 text-gray-600">
          Dibuat menggunakan React + Vite + TailwindCSS + vite-plugin-pwa.
        </p>
      </div>
    </div>
  );
}
