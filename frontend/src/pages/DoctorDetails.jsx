import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${id}`)
      .then(res => setDoctor(res.data))
      .catch(console.error);
  }, [id]);

  if (!doctor) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-white rounded-xl shadow p-6 flex gap-6">
        <img
          src={doctor.image}
          className="w-48 h-48 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-gray-600">{doctor.degree}</p>
          <p className="mt-2">{doctor.experience} years experience</p>
          <p className="mt-2">⭐ {doctor.rating}</p>
          <p className="mt-2 font-semibold">₹{doctor.fee}</p>
        </div>
      </div>
    </div>
  );
}
