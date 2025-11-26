import React from 'react'

import Button from './ui/Button'

export default function BottomNav({ current, onNavigate }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'characters', label: 'Characters' },
    { id: 'about', label: 'About' },
    { id: 'profile', label: 'Profile' },
  ]

  return (
    <nav className="bottom-nav">
      {items.map((it) => (
        <Button
          key={it.id}
          variant={current === it.id ? 'default' : 'ghost'}
          size="sm"
          className={`bottom-nav__item ${current === it.id ? 'active' : ''}`}
          onClick={() => onNavigate(it.id)}
        >
          {it.label}
        </Button>
      ))}
    </nav>
  )
}