import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">InvoiceChain</h1>
      <div className="w-full max-w-sm bg-black p-6 rounded-2xl shadow-lg border border-green-900">
        <input
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-[#0d0d0d] border border-green-800 focus:outline-none"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-3 rounded-xl bg-[#0d0d0d] border border-green-800 focus:outline-none"
        />
        <button
          onClick={() => nav("/country")}
          className="w-full bg-green-700 hover:bg-green-600 p-3 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
