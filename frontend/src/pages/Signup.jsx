import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [robot, setRobot] = useState(false);

  const handleSignup = async (e) => {
  e.preventDefault();

  if (!robot) {
    alert("Verify robot");
    return;
  }

  await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  localStorage.setItem("email", email);
  navigate("/verify-otp");
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

        <h2 className="text-2xl font-bold text-center mb-1">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign up to start booking appointments
        </p>

        <form onSubmit={handleSignup} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          {/* ROBOT */}
          <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
            <input
              type="checkbox"
              checked={robot}
              onChange={(e) => setRobot(e.target.checked)}
            />
            <span>I am not a robot</span>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold"
          >
            Sign Up →
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
