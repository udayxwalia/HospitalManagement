export const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  console.log("OTP (demo):", otp);
  res.json({ message: "OTP sent (mocked)" });
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  res.json({ message: "OTP verified", token: "demo-token" });
};
