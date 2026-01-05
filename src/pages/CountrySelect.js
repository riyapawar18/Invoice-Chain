import React from "react";
import { useNavigate } from "react-router-dom";

export default function CountrySelect() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-5">Select Your Country</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <button onClick={() => nav("/dashboard")} className="p-4 bg-green-900 rounded-2xl border border-green-700 font-semibold">
          🇮🇳 India
        </button>
        <button onClick={() => nav("/dashboard")} className="p-4 bg-green-900 rounded-2xl border border-green-700 font-semibold">
          🌍 Abroad
        </button>
      </div>
    </div>
  );
}
