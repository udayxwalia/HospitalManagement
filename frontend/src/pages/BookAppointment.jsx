import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const doctors = [
  {
    id: 1,
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    experience: "18 years",
    fee: 180,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Dermatology",
    experience: "8 years",
    fee: 130,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Robert Kim",
    specialization: "General Medicine",
    experience: "20 years",
    fee: 100,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: "15 years",
    fee: 200,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    experience: "12 years",
    fee: 220,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 6,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    experience: "10 years",
    fee: 150,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
];

export default function BookAppointment() {
  const { id } = useParams();

  const [selectedDoctorId, setSelectedDoctorId] = useState(
    id ? Number(id) : doctors[0].id
  );
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedDoctor = doctors.find(
    (d) => d.id === Number(selectedDoctorId)
  );

  const handleSubmit = async () => {
    if (!email || !date || !selectedTime) {
      alert("Please enter email, date and select time");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/appointments", {
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        email: email.trim(),
        date,
        time: selectedTime,
      });

      alert("Appointment booked & email sent ✅");

      // Reset form
      setEmail("");
      setDate("");
      setSelectedTime("");
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Server error ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Select Doctor</h2>

          <select
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2 mb-6"
          >
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} — {doc.specialization}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-4">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{selectedDoctor.name}</h3>
              <p className="text-gray-500">{selectedDoctor.specialization}</p>
              <p className="text-sm">
                {selectedDoctor.experience} experience
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-6 font-semibold">
            <span>Consultation Fee</span>
            <span>₹{selectedDoctor.fee}</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-6"
          />

          <div className="grid grid-cols-3 gap-3 mb-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`border rounded-lg py-2 text-sm font-medium transition
                  ${
                    selectedTime === time
                      ? "bg-teal-600 text-white border-teal-600"
                      : "hover:bg-teal-50"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
          >
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
}
