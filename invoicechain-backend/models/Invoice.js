const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  title: String,
  buyer: String,
  amount: String,
  status: { type: String, default: "Uploaded" },
  sellerEmail: String,
  nftMinted: { type: Boolean, default: false },
  escrowStage: { type: String, default: "Not Started" }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
