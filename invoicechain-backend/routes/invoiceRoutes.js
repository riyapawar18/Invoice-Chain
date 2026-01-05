const router = require("express").Router();
const { uploadInvoice, getInvoices, mintNFT, getEscrowStatus } = require("../controllers/invoiceController");
const auth = require("../middleware/authMiddleware");

router.post("/upload", uploadInvoice);
router.get("/list", getInvoices);
router.post("/mint", mintNFT);
router.post("/escrow", getEscrowStatus);

module.exports = router;
