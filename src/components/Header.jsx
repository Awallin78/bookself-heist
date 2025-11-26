import React from 'react'
import Button from './ui/Button'

export default function Header() {
  return (
    <header style={{padding:'14px 20px',borderBottom:'1px solid rgba(255,255,255,0.02)',backdropFilter:'blur(6px)'}}>
      <div style={{maxWidth:980,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10,background:'linear-gradient(90deg, rgba(124,92,255,0.16), rgba(96,241,212,0.06))',fontWeight:800,color:'#08121a'}}>BH</div>
          <div>
            <div style={{fontWeight:700,fontSize:18,color:'var(--text)'}}>Bookself Heist</div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Character catalog</div>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <Button variant="ghost" size="sm">Profile</Button>
        </div>
      </div>
    </header>
  )
}
