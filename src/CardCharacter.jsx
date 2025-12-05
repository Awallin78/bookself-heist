import React from "react";
import { Link } from "react-router-dom";

export default function CardCharacter({ c }) {
  const imagePath = `/images/profile_picture/${String(
    c.codename
  ).toLowerCase()}.jpg`;

  return (
    <Link to={`/character/${c.id}`} className="block">
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
        <div className="flex items-center gap-4">
          <img
            src={imagePath}
            alt={c.codename}
            onError={(e) => {
              e.target.src = "/images/default.jpg"; // Fallback image
            }}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <div className="font-bold">{c.codename}</div>
            <div className="text-sm text-gray-500">{c.role}</div>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600">{c.description}</p>
      </div>
    </Link>
  );
}
