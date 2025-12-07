import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .order("id", { ascending: false });
    
    if (data) setCharacters(data);
  };

  const uploadCharacter = async () => {
    if (!name || !imageFile) {
      alert("Isi nama dan pilih gambar!");
      return;
    }

    setLoading(true);

    const fileName = `${Date.now()}-${imageFile.name}`;

    const { error: storageError } = await supabase.storage
      .from("characters")
      .upload(fileName, imageFile);

    if (storageError) {
      console.log(storageError);
      alert("Upload gambar gagal");
      setLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("characters")
      .getPublicUrl(fileName);
    const image_url = urlData.publicUrl;

    const { error: insertError } = await supabase
      .from("characters")
      .insert([{ name, image_url }]);

    if (insertError) {
      console.log(insertError);
      alert("Gagal menambahkan karakter");
    } else {
      alert("Berhasil menambah karakter!");
      setName("");
      setImageFile(null);
      fetchCharacters();
    }

    setLoading(false);
  };

  const deleteCharacter = async (id) => {
    if (!window.confirm("Yakin mau hapus karakter ini?")) return;

    const { error } = await supabase
      .from("characters")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Gagal menghapus!");
      console.log(error);
    } else {
      alert("Karakter dihapus!");
      fetchCharacters();
    }
  };

  return (
    // PERUBAHAN DI SINI: bg-gray-900 diganti jadi bg-black/60
    <div className="p-6 text-white bg-transparent/30 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

        {/* --- FORM UPLOAD --- */}
        {/* Opsional: Container ini juga bisa dibikin transparan kalau mau */}
        <div className="bg-gray-800/80 p-4 rounded-lg shadow-md mb-8 backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-4">Tambah Karakter Baru</h2>
            <input
                type="text"
                placeholder="Nama karakter"
                className="border border-gray-600 bg-gray-700/50 text-white p-2 w-full mb-3 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="file"
                className="mb-3 text-sm text-gray-300 w-full"
                onChange={(e) => setImageFile(e.target.files[0])}
            />

            <button
                onClick={uploadCharacter}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
                disabled={loading}
            >
                {loading ? "Sedang Upload..." : "Tambah Karakter"}
            </button>
        </div>

        {/* --- LIST DAFTAR KARAKTER --- */}
        <h2 className="text-xl font-bold mb-4">Daftar Karakter ({characters.length})</h2>
        <div className="space-y-3">
          {characters.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-800/80 p-3 rounded-lg border border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <img 
                    src={item.image_url} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">{item.name}</span>
              </div>
              
              <button
                onClick={() => deleteCharacter(item.id)}
                className="bg-red-500 hover:bg-red-800 text-white text-sm px-3 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          ))}
          
          {characters.length === 0 && (
            <p className="text-gray-300 text-center font-medium bg-black/30 p-2 rounded">Belum ada karakter.</p>
          )}
        </div>

      </div>
    </div>
  );
}