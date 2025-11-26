import React from "react"
import { Link } from "react-router-dom"

export default function CardCharacter({ c }) {
  return (
    <Link to={`/character/${c.id}`} className="block">
      <div className="card">
        <div className="char-row">
          <div className="avatar">{c.codename[0]}</div>

          <div>
            <div className="card-title">{c.codename}</div>
            <div className="card-sub">{c.role}</div>
          </div>
        </div>

        <p className="card-desc">{c.description}</p>
      </div>
    </Link>
  )
}
