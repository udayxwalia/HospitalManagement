import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-700">
          {doctor.specialization}
        </span>

        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.degree}</p>

        <p className="text-sm text-gray-500 mt-1">
          {doctor.experience} years experience • {doctor.reviews} reviews
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">₹{doctor.fee}</span>

          <Link to={`/book-appointment/${doctor.id}`}>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
