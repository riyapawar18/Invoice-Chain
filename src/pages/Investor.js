import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WalletConnect from "../components/WalletConnect";
import InvoiceCard from "../components/InvoiceCard";
import NFTMintModal from "../components/NFTMintModal";
import EscrowStatus from "../components/EscrowStatus";
import Toast from "../components/Toast";

export default function Investor() {
  const [openMint, setOpenMint] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [toastMsg, setToastMsg] = useState("");
  const [invoices, setInvoices] = useState([]);

  // Load invoices from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/invoices/list")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.log("Fetch error:", err));
  }, []);

  function handleMint(invoice) {
    setSelectedInvoice(invoice);
    setOpenMint(true);
  }

  function handleFund(invoice) {
    setSelectedInvoice(invoice);
    setToastMsg("Funding initiated (Demo Mode)");
    setTimeout(() => setToastMsg(""), 3000);
  }

  function handleMintSuccess() {
    setToastMsg("NFT Minted Successfully!");
    setTimeout(() => setToastMsg(""), 3000);
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <Navbar />

      <div className="flex justify-end p-4">
        <WalletConnect />
      </div>

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Fundable Invoices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {invoices.map((inv) => (
            <div key={inv.id} className="relative bg-[#111] p-2 rounded-2xl shadow-md border border-green-900">
              <InvoiceCard {...inv} />

              <button
                onClick={() => handleMint(inv)}
                className="absolute top-3 right-3 bg-green-700 hover:bg-green-600 px-2 py-1 rounded-lg text-[10px] font-semibold"
              >
                Mint NFT
              </button>

              <button
                onClick={() => handleFund(inv)}
                className="mt-2 bg-green-800 hover:bg-green-700 w-full py-2 rounded-xl text-[10px] font-semibold"
              >
                Fund Invoice
              </button>
            </div>
          ))}
        </div>

        {/* Escrow Status UI */}
        <div className="mt-4">
          <EscrowStatus stage={selectedInvoice?.escrowStage || "Not Started"} />
        </div>

        {/* NFT Mint Modal */}
        <NFTMintModal
          open={openMint}
          setOpen={setOpenMint}
          invoice={selectedInvoice}
          onMint={handleMintSuccess}
        />

        {/* Toast Notification */}
        {toastMsg && <Toast msg={toastMsg} />}
      </main>

      <Footer />
    </div>
  );
}
