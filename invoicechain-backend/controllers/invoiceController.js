const Invoice = require("../models/Invoice");
const User = require("../models/User");

exports.uploadInvoice = async (req, res) => {
  await Invoice.create(req.body);
  res.json({ message: "Invoice uploaded" });
};

exports.getInvoices = async (req, res) => {
  const list = await Invoice.find();
  res.json(list);
};

exports.mintNFT = async (req, res) => {
  const { email } = req.body;
  await User.updateOne({ email }, { $inc: { nftCount: 1 } });
  await Invoice.updateOne({ title: req.body.title }, { nftMinted: true, escrowStage: "Verified" });
  res.json({ message: "NFT minted (mock)" });
};

exports.getEscrowStatus = async (req, res) => {
  const inv = await Invoice.findOne({ title: req.body.title });
  res.json({ escrowStage: inv.escrowStage });
};
