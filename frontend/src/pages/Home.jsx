import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import doctorHero from "../assets/doctor-posing-portrait-free-photo.jpg";

// SAME DOCTORS AS /doctors PAGE
const doctors = [
  {
    id: 1,
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    experience: "18 years experience",
    fee: 180,
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Dermatology",
    experience: "8 years experience",
    fee: 130,
    rating: 4.6,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
  {
    id: 3,
    name: "Dr. Robert Kim",
    specialization: "General Medicine",
    experience: "20 years experience",
    fee: 100,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  // ✅ THIS IS THE REAL FIX
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">

      

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">
            Trusted by 50,000+ Patients
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health Is Our <br />
            <span className="text-teal-600">Priority</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            Experience world-class healthcare with expert doctors.
            Book appointments seamlessly and receive personalized care.
          </p>

          {/* ✅ BUTTONS BACK */}
          <div className="flex gap-4 mb-12">
            <Link
              to="/book-appointment"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
            >
              Book Appointment →
            </Link>

            <Link
              to="/doctors"
              className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50"
            >
              View Our Doctors
            </Link>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-2xl font-bold text-teal-600">50+</h3>
              <p className="text-gray-500 dark:text-gray-400">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600">100K+</h3>
              <p className="text-gray-500 dark:text-gray-400">Patients Served</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600">24/7</h3>
              <p className="text-gray-500 dark:text-gray-400">Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={doctorHero}
          alt="Doctor"
          className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
        />
      </section>

      {/* ================= FEATURES SECTION ================= */}
      {/* ================= HEALTHCARE MADE SIMPLE ================= */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Healthcare Made Simple
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We combine cutting-edge technology with compassionate care
        to provide you with the best healthcare experience.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Easy Scheduling",
          desc: "Book appointments with just a few clicks. Choose your preferred doctor, date, and time slot.",
          icon: "📅",
        },
        {
          title: "Expert Doctors",
          desc: "Access to a network of highly qualified specialists across various medical fields.",
          icon: "👨‍⚕️",
        },
        {
          title: "24/7 Support",
          desc: "Round-the-clock assistance for all your healthcare queries and emergencies.",
          icon: "🕒",
        },
        {
          title: "Secure & Private",
          desc: "Your health data is protected with industry-leading security standards.",
          icon: "🔒",
        },
        {
          title: "Personalized Care",
          desc: "Receive tailored treatment plans designed specifically for your needs.",
          icon: "❤️",
        },
        {
          title: "Digital Records",
          desc: "Access your medical history, prescriptions, and reports anytime, anywhere.",
          icon: "📱",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-100 text-2xl mb-6">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= DOCTORS SECTION ================= */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 dark:text-white">
            Meet Our Expert Doctors
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-sm text-teal-600">
                    {doc.specialization}
                  </span>

                  <h3 className="text-lg font-semibold mt-1 dark:text-white">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {doc.experience}
                  </p>

                  {/* ⭐ RATING */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium dark:text-white">
                      {doc.rating}
                    </span>
                    <span className="text-sm text-gray-400">
                      ({doc.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold dark:text-white">
                      ₹{doc.fee}
                    </p>

                    <Link
                      to={`/book-appointment?doctorId=${doc.id}`}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION (BACK) ================= */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 py-20">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">
            Need Immediate Medical Assistance?
          </h2>

          <p className="mb-8 text-lg">
            Our healthcare professionals are available 24/7 to help you.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/book-appointment"
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium"
            >
              Book Appointment →
            </Link>

            <a
              href="tel:+15551234567"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Call: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
