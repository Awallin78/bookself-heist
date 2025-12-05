import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const col = collection(db, "characters");
      const snapshot = await getDocs(col);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCharacters(list);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Characters</h1>

      <div className="grid grid-cols-2 gap-4">
        {characters.map((c) => (
          <div
            key={c.id}
            onClick={() => navigate(`/character/${c.id}`)}
            className="p-3 bg-white rounded-lg shadow cursor-pointer"
          >
            <img
              src={c.imageUrl}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h2 className="font-semibold mt-2">{c.name}</h2>
            <p className="text-sm text-gray-600">{c.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
