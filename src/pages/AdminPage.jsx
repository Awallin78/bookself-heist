import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Pilih foto dulu");

    try {
      // Upload foto ke Firebase Storage
      const fileRef = ref(storage, `characters/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);

      // Simpan data ke Firestore
      await addDoc(collection(db, "characters"), {
        name,
        city,
        imageUrl: url,
      });

      alert("Berhasil tambah character");
      setName("");
      setCity("");
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Gagal upload karakter. Coba lagi.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin - Tambah Karakter</h1>

      <form onSubmit={handleUpload} className="space-y-3">
        <input
          type="text"
          placeholder="Nama karakter"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
