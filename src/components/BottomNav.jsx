import React from 'react'

export default function BottomNav({ current, onNavigate }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'characters', label: 'Characters' },
    { id: 'about', label: 'About' },
    { id: 'profile', label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-lg p-3 flex justify-between">
      {items.map(it => (
        <button
          key={it.id}
          onClick={() => onNavigate(it.id)}
          className={`flex-1 py-2 text-center text-sm font-medium rounded-lg ${
            current === it.id ? "bg-gray-200" : ""
          }`}
        >
          {it.label}
        </button>
      ))}
    </nav>
  )
}