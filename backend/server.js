import dotenv from "dotenv";
dotenv.config(); // load env before other imports that rely on it

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
// Import transporter AFTER dotenv.config()
import transporter from "./utils/emailTransporter.js";

// ✅ APP INIT (YEH MISSING THA)
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ============================
// 🔐 OTP TEMP STORAGE
// ============================
const otpStore = {};

// ============================
// 🔑 AUTH – SIGNUP (SEND OTP)
// ============================
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    console.log("🔥 OTP GENERATED:", otp);

    await transporter.sendMail({
      from: `"Hospital OTP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP",
      text: `Your OTP is ${otp}`,
    });

    console.log("✅ OTP MAIL SENT");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ OTP ERROR:", err);
    res.status(500).json({ success: false });
  }
});

// ============================
// 🔐 VERIFY OTP
// ============================
app.post("/api/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email];
    return res.json({ success: true });
  }

  res.status(400).json({ success: false });
});

// ============================
// ROUTES
// ============================
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// ============================
// DB CONNECT
// ============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

// ============================
// START SERVER
// ============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
