import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import EscrowStatus from "../components/EscrowStatus";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Seller Card */}
        <div className="bg-black p-5 rounded-2xl shadow border border-green-900">
          <h3 className="text-xl font-bold mb-2">Seller / MSME</h3>
          <p className="text-sm text-gray-400 mb-4">Upload and finance invoices</p>

          <button
            onClick={() => nav("/upload-invoice")}
            className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-xl text-sm font-semibold w-full"
          >
            Upload Invoice
          </button>

          <button
            onClick={() => nav("/investor")}
            className="mt-2 bg-green-900 hover:bg-green-800 px-4 py-2 rounded-xl text-[12px] font-semibold w-full"
          >
            View Fundable Invoices
          </button>
        </div>

        {/* Buyer Card */}
        <div className="bg-black p-5 rounded-2xl shadow border border-green-900">
          <h3 className="text-xl font-bold mb-2">Buyer</h3>
          <p className="text-sm text-gray-400 mb-4">Verify and approve invoices</p>

          <button
            onClick={() => nav("/buyer")}
            className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-xl text-sm font-semibold w-full"
          >
            Go to Buyer Panel
          </button>
        </div>

        {/* Investor Card */}
        <div className="bg-black p-5 rounded-2xl shadow border border-green-900">
          <h3 className="text-xl font-bold mb-2">Investor</h3>
          <p className="text-sm text-gray-400 mb-4">Provide liquidity & earn</p>

          <button
            onClick={() => nav("/investor")}
            className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-xl text-sm font-semibold w-full"
          >
            Go to Investor Panel
          </button>
        </div>

      </main>

      {/* Escrow Demo Section */}
      <div className="px-6 pb-4">
        <h2 className="text-lg font-bold text-green-400 mb-2">Escrow Status (Demo)</h2>
        <EscrowStatus stage="Submitted" />
      </div>

      <Footer />
    </div>
  );
}
