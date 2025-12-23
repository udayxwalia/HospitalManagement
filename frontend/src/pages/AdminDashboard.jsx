export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-14 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 shadow rounded-xl border">
          <h2 className="text-xl font-bold">Total Doctors</h2>
          <p className="text-3xl font-extrabold text-green-600 mt-3">12</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl border">
          <h2 className="text-xl font-bold">Departments</h2>
          <p className="text-3xl font-extrabold text-blue-600 mt-3">8</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl border">
          <h2 className="text-xl font-bold">Appointments</h2>
          <p className="text-3xl font-extrabold text-purple-600 mt-3">120</p>
        </div>

      </div>
    </div>
  );
}
