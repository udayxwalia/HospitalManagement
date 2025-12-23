import nodemailer from "nodemailer";

// Lazy initialization - create transporter only when first used
let transporter = null;

function getTransporter() {
  if (!transporter) {
    console.log("🔍 Creating email transporter...");
    console.log("🔍 EMAIL_USER:", process.env.EMAIL_USER);
    console.log("🔍 EMAIL_PASS:", process.env.EMAIL_PASS ? "***" + process.env.EMAIL_PASS.slice(-4) : "NOT SET");
    
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
}

export default { sendMail: (...args) => getTransporter().sendMail(...args) };
