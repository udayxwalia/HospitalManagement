export default function Profile() {
  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-white shadow-lg rounded-2xl border">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">My Profile</h2>

      <div className="space-y-4">
        <p><span className="font-bold">Name:</span> User Example</p>
        <p><span className="font-bold">Email:</span> user@example.com</p>

        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}
