import React, { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected. Please install MetaMask.");
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);

      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log("Wallet Connected", provider);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={connectWallet}
      className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-xl text-sm font-semibold"
    >
      {account ? `Connected: ${account.slice(0,6)}...${account.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}
