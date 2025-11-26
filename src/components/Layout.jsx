import React from 'react'
import Header from './Header'

export default function Layout({ children }){
  return (
    <div className="app-shell">
      <Header />
      <main className="app-container" style={{paddingTop:12}}>
        {children}
      </main>
    </div>
  )
}
