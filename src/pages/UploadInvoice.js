import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EscrowStatus from "../components/EscrowStatus";

export default function UploadInvoice() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-black p-6 rounded-2xl border border-green-900 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Upload Invoice</h2>

          <input placeholder="Invoice Title" className="w-full mb-3 p-3 rounded-xl bg-[#0d0d0d] border border-green-800"/>
          <input placeholder="Amount (₹ or $)" className="w-full mb-3 p-3 rounded-xl bg-[#0d0d0d] border border-green-800"/>
          <input placeholder="Buyer Name" className="w-full mb-3 p-3 rounded-xl bg-[#0d0d0d] border border-green-800"/>

          <div className="w-full h-32 border border-dashed border-green-700 rounded-xl flex items-center justify-center mb-4">
            <p className="text-gray-400">Drop invoice file here</p>
          </div>

          <button className="bg-green-700 w-full py-3 rounded-xl font-semibold hover:bg-green-600">
            Submit Invoice
          </button>
          <EscrowStatus stage="Submitted" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
