const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, country } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed, country });
  res.json({ message: "Registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  res.json({ token, user });
};
