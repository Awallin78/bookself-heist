import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export default function CharactersPage() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const { data, error } = await supabase.from("characters").select("*");

    if (error) console.log(error);
    else setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Characters</h1>

      <div className="grid grid-cols-2 gap-4">
        {characters.map((c) => (
          <div
            key={c.id}
            className="border rounded p-2 cursor-pointer"
            onClick={() => navigate(`/character/${c.id}`)}
          >
            <img
              src={c.image_url}
              className="w-full h-32 object-cover rounded"
            />
            <p className="mt-2 font-semibold">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
