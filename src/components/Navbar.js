import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import WalletConnect from "./WalletConnect";

export default function Navbar() {
  const location = useLocation();
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Demo NFT mint count (later you will replace this with blockchain data)
  const [nftCount] = useState(5);

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Upload", path: "/upload" },
    { name: "Investor", path: "/investor" },
  ];

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <nav className="bg-black border-b border-green-900 p-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => nav("/dashboard")}
          className="text-xl font-bold text-green-400 cursor-pointer"
        >
          InvoiceChain
        </h1>

        {/* NFT Count Badge */}
        <div className="hidden md:block text-xs bg-green-900 px-3 py-1 rounded-xl">
          Minted NFTs: {nftCount}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.path}
              className={`transition ${
                isActive(l.path) ? "text-green-400 font-bold border-b border-green-400" : "hover:text-green-400"
              }`}
            >
              {l.name}
            </Link>
          ))}

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                className="w-7 h-7 rounded-full border border-green-700"
                alt="avatar"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-32 bg-black border border-green-900 rounded-xl shadow-lg p-2 text-xs">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => nav("/profile")}
                    className={`block w-full text-left px-2 py-1 rounded-lg ${
                      active ? "bg-green-900" : ""
                    }`}
                  >
                    View Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => nav("/")}
                    className={`block w-full text-left px-2 py-1 rounded-lg ${
                      active ? "bg-green-900" : ""
                    }`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          {/* Wallet Connect */}
          <WalletConnect />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-green-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-3 border-t border-green-900 pt-3 text-xs">
          <div className="text-xs bg-green-900 px-3 py-1 rounded-xl w-fit">
            Minted NFTs: {nftCount}
          </div>

          {links.map((l, i) => (
            <Link
              key={i}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className={`p-2 rounded-lg ${
                isActive(l.path) ? "bg-green-900 text-green-400 font-bold" : "hover:bg-green-900"
              }`}
            >
              {l.name}
            </Link>
          ))}

          <button onClick={() => { nav("/profile"); setMobileOpen(false); }} className="p-2 text-left hover:bg-green-900 rounded-lg">
            Profile
          </button>

          <WalletConnect />
        </div>
      )}
    </nav>
  );
}
