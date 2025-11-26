import React, { useState } from "react";
import { Characters } from "../data/characters";
import CardCharacter from "../components/CardCharacter";

export default function CharactersPage() {
  const [q, setQ] = useState("");

  const filtered = Characters.filter(
    (c) =>
      c.codename.toLowerCase().includes(q.toLowerCase()) ||
      c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Characters</h1>

      <div style={{marginTop:12}}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search characters..."
          className="search-input"
        />
      </div>

      <div className="list" style={{marginTop:16}}>
        {filtered.map((c) => (
          <CardCharacter key={c.id} c={c} />
        ))}
      </div>
    </div>
  );
}
