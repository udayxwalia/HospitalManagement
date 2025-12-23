import axios from "axios";
import { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {doctors.map(doc => (
        <div key={doc.id}>
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
        </div>
      ))}
    </div>
  );
}
