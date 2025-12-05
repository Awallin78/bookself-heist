import React, { useState } from "react";
import { Link } from "react-router-dom";

const gradientMap = {
  professor: "linear-gradient(135deg,#6D28D9,#3B82F6)",
  tokyo: "linear-gradient(135deg,#F472B6,#FB923C)",
  berlin: "linear-gradient(135deg,#EF4444,#F59E0B)",
  nairobi: "linear-gradient(135deg,#10B981,#84CC16)",
  rio: "linear-gradient(135deg,#06B6D4,#8B5CF6)",
};

export default function CardCharacter({ c }) {
  const [imgOk, setImgOk] = useState(true);

  const svgPath = `/images/${String(c.codename).toLowerCase()}.svg`;
  const key = String(c.codename).toLowerCase();
  const bg = gradientMap[key] || "linear-gradient(135deg,#111827,#0f172a)";

  return (
    <Link to={`/character/${c.id}`} className="block">
      <div
        className="rounded-xl shadow p-4 hover:shadow-lg transition"
        style={{ background: "#0b1220", color: "#e6eef8" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center p-3"
            style={{ background: bg }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white/20">
              {imgOk ? (
                <img
                  src={svgPath}
                  alt={c.codename}
                  onError={() => setImgOk(false)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl font-bold text-white">
                  {c.codename[0]}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="font-bold">{c.codename}</div>
            <div className="text-sm text-gray-400">{c.role}</div>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-300">{c.description}</p>
      </div>
    </Link>
  );
}
