const Doctor = require("../models/Doctor");

// Add doctor
const addDoctor = async (req, res) => {
  const { name, specialization, fee } = req.body;

  res.json({
    message: "Doctor added successfully",
    doctor: { name, specialization, fee },
  });
};

// Get all doctors
const getDoctors = async (req, res) => {
  res.json([
    {
      name: "Dr. Sharma",
      specialization: "Cardiologist",
      fee: 500,
    },
    {
      name: "Dr. Gupta",
      specialization: "Dermatologist",
      fee: 400,
    },
  ]);
};

module.exports = {
  addDoctor,
  getDoctors,
};
