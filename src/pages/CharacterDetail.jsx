import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  const fetchDetail = async () => 
  {
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) setChar(data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (!char) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={char.image_url} className="w-full rounded mb-4" />
      <h1 className="text-2xl font-bold">{char.name}</h1>
    </div>
  );
}
