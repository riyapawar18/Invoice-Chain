import React from "react";

export default function EscrowStatus({ stage }) {
  const stages = ["Submitted", "Verified", "Funded", "Escrow Locked", "Paid"];
  const index = stages.indexOf(stage);

  return (
    <div className="bg-black p-5 rounded-2xl border border-green-900 shadow-md w-full">
      <h3 className="text-lg font-bold text-green-400 mb-4">Escrow Progress</h3>

      <div className="flex justify-between mb-2 text-[10px] text-gray-400">
        {stages.map((s, i) => (
          <span key={i} className={i <= index ? "text-green-500 font-bold" : ""}>
            {s}
          </span>
        ))}
      </div>

      <div className="w-full bg-[#0d0d0d] h-2 rounded-full overflow-hidden border border-green-900">
        <div className="h-full bg-green-600 transition-all" style={{ width: `${((index+1)/stages.length)*100}%` }} />
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Current Status: <span className="text-green-400 font-semibold">{stage}</span>
      </p>
    </div>
  );
}
