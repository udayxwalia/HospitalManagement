const express = require("express");
const router = express.Router();

// demo controllers (safe)
const register = (req, res) => {
  res.json({ message: "Register OK" });
};

const login = (req, res) => {
  res.json({ message: "Login OK" });
};

// routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;
