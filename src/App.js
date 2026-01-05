import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CountrySelect from "./pages/CountrySelect";
import Dashboard from "./pages/Dashboard";
import UploadInvoice from "./pages/UploadInvoice";
import Investor from "./pages/Investor";
import Profile from "./pages/Profile"; // ✅ Added missing route

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/country" element={<CountrySelect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadInvoice />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/profile" element={<Profile />} />  {/* ✅ Profile page route added */}
      </Routes>
    </Router>
  );
}
