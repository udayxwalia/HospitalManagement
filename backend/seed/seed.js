const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Department = require("../models/Department");
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const bcrypt = require("bcrypt");

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Department.deleteMany({});
    await Doctor.deleteMany({});
    await User.deleteMany({});

    // ---------------------------
    // Departments (with images)
    // ---------------------------
    const d1 = await Department.create({
      name: "Cardiology",
      description: "Heart-related treatments and cardiac care.",
      image:
        "https://images.unsplash.com/photo-1580281657520-5e316f3a1e4b?q=80&w=1200",
    });

    const d2 = await Department.create({
      name: "Neurology",
      description: "Brain, spine, and nervous system treatments.",
      image:
        "https://images.unsplash.com/photo-1581091870622-df7c56d04063?q=80&w=1200",
    });

    const d3 = await Department.create({
      name: "Orthopedics",
      description: "Bone, joint, and muscle treatment.",
      image:
        "https://images.unsplash.com/photo-1579154203451-0f625f3b4e78?q=80&w=1200",
    });

    // ---------------------------
    // Doctors (with images)
    // ---------------------------
    await Doctor.create({
      name: "Dr. Anil Kumar",
      specialization: "Cardiologist",
      department: d1._id,
      phone: "1234567890",
      email: "doctor1@example.com",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600",
    });

    await Doctor.create({
      name: "Dr. Sneha Sharma",
      specialization: "Neurologist",
      department: d2._id,
      phone: "9876543210",
      email: "doctor2@example.com",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=600",
    });

    await Doctor.create({
      name: "Dr. Rohan Gupta",
      specialization: "Orthopedic Surgeon",
      department: d3._id,
      phone: "9988776655",
      email: "doctor3@example.com",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b9642733?q=80&w=600",
    });

    // ---------------------------
    // Users (Admin + Patient)
    // ---------------------------

    const adminPass = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: adminPass,
      role: "admin",
    });

    const patientPass = await bcrypt.hash("patient123", 10);
    await User.create({
      name: "Patient User",
      email: "patient@example.com",
      password: patientPass,
      role: "patient",
    });

    console.log("✔ Seed completed successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
})();
