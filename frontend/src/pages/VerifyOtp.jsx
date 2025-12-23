import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
  const email = localStorage.getItem("email");

  const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  if (res.ok) {
    alert("OTP verified ✅");
    navigate("/login");
  } else {
    alert("Invalid OTP ❌");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">
          Verify OTP
        </h2>

        <input
          type="text"
          maxLength="6"
          placeholder="Enter 6 digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-center tracking-widest mb-4"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold"
        >
          Verify OTP
        </button>

       
      </div>
    </div>
  );
}
