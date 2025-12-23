import { Link } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-50 bg-blue-600 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          🏥 Hospital
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 text-white">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/doctors" className="hover:underline">Doctors</Link>
          <Link to="/book-appointment" className="hover:underline">
            Appointments
          </Link>

          {/* 🌙 DARK MODE ICON (LIKE LOVABLE) */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            title="Toggle Dark Mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
