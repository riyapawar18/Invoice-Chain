import React from "react";

export default function InvoiceCard({ title, buyer, amount, status }) {
  return (
    <div className="bg-black p-4 rounded-2xl border border-green-900 shadow-md">
      <h3 className="text-lg font-bold text-green-400 mb-1">{title}</h3>
      <p className="text-xs text-gray-400">Buyer: {buyer}</p>
      <p className="text-sm font-semibold my-2">Amount: {amount}</p>
      <span className="text-[10px] px-2 py-1 rounded-lg bg-green-900 border border-green-700">
        {status}
      </span>
    </div>
  );
}
