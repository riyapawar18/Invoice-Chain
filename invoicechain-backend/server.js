require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Root check route
app.get("/", (req, res) => {
  res.send("InvoiceChain API is running");
});

// File path
const DATA_FILE = path.join(process.cwd(), "data.json");

// Initialize file if not present or empty
if (!fs.existsSync(DATA_FILE) || fs.readFileSync(DATA_FILE, "utf8").trim() === "") {
  const initStructure = { users: [], invoices: [] };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initStructure, null, 2));
}

// Helpers
const readData = () => {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(raw || `{"users":[],"invoices":[]}`);
  } catch {
    return { users: [], invoices: [] };
  }
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Register user
app.post("/api/auth/register", (req, res) => {
  const data = readData();
  const { name, email, password, country } = req.body;

  if (data.users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  data.users.push({ name, email, password, country, walletAddress: "", reputation: 0, nftCount: 0 });
  writeData(data);
  res.json({ message: "Registered Successfully" });
});

// Login user
app.post("/api/auth/login", (req, res) => {
  const data = readData();
  const { email, password } = req.body;

  const user = data.users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ message: "Login Success", user });
});

// Upload invoice
app.post("/api/invoices/upload", (req, res) => {
  const data = readData();
  const invoice = { id: Date.now(), ...req.body, escrowStage: "Uploaded", mintedNFT: false };
  data.invoices.push(invoice);
  writeData(data);
  res.json({ message: "Invoice Uploaded", invoice });
});

// List invoices
app.get("/api/invoices/list", (req, res) => {
  const data = readData();
  res.json(data.invoices);
});

// Mock mint NFT
app.post("/api/invoices/mint", (req, res) => {
  const data = readData();
  const { title, email } = req.body;

  const invoice = data.invoices.find(inv => inv.title === title);
  const user = data.users.find(u => u.email === email);

  if (!invoice || !user) {
    return res.status(400).json({ message: "Invoice or user not found" });
  }

  invoice.escrowStage = "Verified";
  invoice.mintedNFT = true;
  user.nftCount += 1;

  writeData(data);
  res.json({ message: "NFT Minted (Mock)", escrowStage: invoice.escrowStage, nftCount: user.nftCount });
});

// Escrow stage update (mock funding process)
app.post("/api/invoices/escrow/update", (req, res) => {
  const data = readData();
  const { title, stage } = req.body;

  const invoice = data.invoices.find(inv => inv.title === title);
  if (!invoice) return res.status(400).json({ message: "Invoice not found" });

  invoice.escrowStage = stage;
  writeData(data);

  res.json({ message: "Escrow stage updated", escrowStage: invoice.escrowStage });
});

// Get escrow status
app.get("/api/invoices/escrow/:title", (req, res) => {
  const data = readData();
  const invoice = data.invoices.find(inv => inv.title === req.params.title);
  res.json({ escrowStage: invoice ? invoice.escrowStage : "Not Started" });
});

// Save wallet address after Web3 connect
app.post("/api/users/wallet", (req, res) => {
  const data = readData();
  const { email, walletAddress } = req.body;
  const user = data.users.find(u => u.email === email);

  if (!user) return res.status(400).json({ message: "User not found" });

  user.walletAddress = walletAddress;
  writeData(data);

  res.json({ message: "Wallet saved", walletAddress });
});

// Start server
app.listen(5000, () => console.log("Backend running on port 5000"));
