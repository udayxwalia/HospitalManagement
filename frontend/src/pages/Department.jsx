import { useEffect, useState } from "react";
import api from "../api/axios";
import Spinner from "../components/Spinner";

export default function Department() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/department")
      .then(res => setDepartments(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="page-title">Hospital Departments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div key={index} className="card text-center">
            <div className="text-4xl mb-3">🏥</div>
            <h2 className="text-lg font-semibold">{dept.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
