import React from "react";
import { Dialog } from "@headlessui/react";

export default function NFTMintModal({ open, setOpen, invoice }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-black p-6 rounded-2xl border border-green-800 shadow-xl w-full max-w-md">
          <Dialog.Title className="text-2xl font-bold text-green-400 mb-2">
            Mint Invoice NFT
          </Dialog.Title>

          <p className="text-xs text-gray-400 mb-4">
            Convert your verified invoice into a blockchain asset (NFT) for financing
          </p>

          <div className="bg-[#0d0d0d] p-4 rounded-xl border border-green-900 text-sm mb-4">
            <p>📄 Title: {invoice?.title}</p>
            <p>🏢 Buyer: {invoice?.buyer}</p>
            <p>💰 Amount: {invoice?.amount}</p>
          </div>

          <button className="w-full bg-green-700 hover:bg-green-600 py-3 rounded-xl font-semibold">
            Confirm & Mint NFT
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-full mt-3 text-xs text-gray-500 hover:text-gray-300"
          >
            Cancel
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
