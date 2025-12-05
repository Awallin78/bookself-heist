import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const ref = doc(db, "characters", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setChar(snap.data());
      }
    };

    fetchDetail();
  }, []);

  if (!char) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img
        src={char.imageUrl}
        className="w-full h-60 object-cover rounded-xl"
      />
      <h1 className="text-2xl font-bold mt-4">{char.name}</h1>
      <p className="text-lg text-gray-600">{char.city}</p>
    </div>
  );
}
