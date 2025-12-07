import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

export default function HomePage() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getFeaturedCharacters();
  }, []);

  const getFeaturedCharacters = async () => {
    // Mengambil 3 karakter saja sebagai "sampel" untuk list halaman utama
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .limit(3); // Cuma ambil 3 biar beda sama halaman Characters

    if (data) {
      setFeatured(data);
    }
  };

  return (
    <div className="min-h-screen text-white px-6 pt-12 pb-24">
      
      {/* 1. HERO SECTION (Banner Judul) */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tighter text-red-600 drop-shadow-lg">
          LA CASA DE PAPEL
        </h1>
        <p className="text-xl text-gray-300 max-w-lg mx-auto">
          "The most important thing is not the money, but the message."
        </p>
        <div className="mt-8">
            <Link to="/characters" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                JOIN THE RESISTANCE
            </Link>
        </div>
      </div>

      {/* 2. FEATURED LIST (Ini Syarat Lulus Revisi: List Kedua) */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6 border-b border-gray-600 pb-2">
            <h2 className="text-2xl font-bold text-white">Top Wanted</h2>
            <Link to="/characters" className="text-red-500 hover:text-red-400 text-sm">See All &rarr;</Link>
        </div>

        {/* Grid List 3 Karakter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((char) => (
            <Link key={char.id} to={`/character/${char.id}`} className="group">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-red-600 transition duration-300 transform hover:-translate-y-1">
                {/* Gambar */}
                <div className="h-48 overflow-hidden">
                    <img 
                        src={char.image_url} 
                        alt={char.name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                    />
                </div>
                {/* Text Nama */}
                <div className="p-4 text-center">
                    <h3 className="text-xl font-bold group-hover:text-red-500 transition">{char.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">Click for details</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}