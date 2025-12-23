import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 🔒 BACKEND WILL COME LATER
    alert("Login clicked (OTP + robot verification next)");

    // ✅ REDIRECT AFTER OK
    navigate("/"); // Home page
    // later you can change to: navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center">
            🩺
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-1">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Login to access your healthcare dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pl-10 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute left-3 top-3 text-gray-400">✉️</span>
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pl-10 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <span className="absolute left-3 top-3 text-gray-400">🔒</span>
            </div>
          </div>

          {/* FORGOT */}
          <div className="text-right text-sm">
            <Link to="#" className="text-teal-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login →
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* SIGNUP */}
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-teal-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
