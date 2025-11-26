import React from "react";

export default function ProfilePage() {
  return (
    <div className="app-container">
      <h1 className="app-title">Profile</h1>

      <div className="card" style={{marginTop:12}}>
        <p className="muted">Nama: Pengguna</p>
        <p className="muted" style={{marginTop:8}}>Status: Logged In (placeholder)</p>
        <p className="muted" style={{marginTop:8}}>
          Fitur ini dapat dikembangkan untuk autentikasi user.
        </p>
      </div>
    </div>
  );
}
