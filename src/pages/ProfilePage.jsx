import React from "react";

export default function ProfilePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-xl font-bold">Profile</h1>

        <div className="mt-3 bg-white p-4 rounded shadow">
          <p className="text-gray-600">Nama: Awallin Yusuf Ikrar Putra</p>
          <p className="text-gray-600 mt-1">Status: Logged In (placeholder)</p>
          <p className="text-gray-600 mt-1">
            Fitur ini dapat dikembangkan untuk autentikasi user.
          </p>
        </div>
      </div>
    </div>
  );
}
