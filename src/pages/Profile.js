import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  // Demo values (replace later using smart-contract reads via ABI)
  const walletAddress = "0x12a4...89F3";
  const reputationScore = 92;
  const mintedNFTs = 5;
  const escrowStage = "Funded";

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <div className="bg-black p-6 rounded-2xl shadow border border-green-900 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Avatar Section */}
          <div className="flex flex-col items-center md:col-span-1">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Riya-Pawar"
              alt="avatar"
              className="w-24 h-24 rounded-full border-2 border-green-700 mb-3"
            />
            <h2 className="text-lg font-bold text-green-400">Riya Pawar</h2>
            <p className="text-[10px] text-gray-400">Investor</p>
          </div>

          {/* Details Section */}
          <div className="md:col-span-2 space-y-4 text-xs">
            <div>
              <h3 className="text-green-400 font-semibold">Wallet Address</h3>
              <p className="text-gray-300 break-all">{walletAddress}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0d0d0d] p-3 rounded-xl border border-green-900">
                <h4 className="text-green-400 font-semibold">Reputation Score</h4>
                <p className="text-white font-bold text-base">{reputationScore}%</p>
              </div>

              <div className="bg-[#0d0d0d] p-3 rounded-xl border border-green-900">
                <h4 className="text-green-400 font-semibold">Minted Invoice NFTs</h4>
                <p className="text-white font-bold text-base">{mintedNFTs}</p>
              </div>
            </div>

            <div className="bg-[#0d0d0d] p-3 rounded-xl border border-green-900">
              <h4 className="text-green-400 font-semibold">Escrow Status</h4>
              <p className="text-white font-bold text-sm">{escrowStage}</p>
            </div>
          </div>
        </div>

        {/* Invoice NFT Portfolio Grid */}
        <section className="mt-8">
          <h3 className="text-xl font-bold text-green-400 mb-3">Your Invoice NFT Portfolio</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5].map(i => (
              <div
                key={i}
                className="bg-black p-4 rounded-2xl border border-green-900 shadow"
              >
                <p className="text-green-400 font-bold text-sm">Invoice NFT #{i}</p>
                <p className="text-gray-400 text-[10px]">Buyer: DemoCorp</p>
                <p className="text-white font-semibold mt-2">Amount: ₹50,000</p>
                <p className="text-[10px] text-yellow-400 mt-1">Escrow: {escrowStage}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
