import express from "express";

const router = express.Router();

// MOCK DOCTOR DATA
const doctors = [
  {
    id: 1,
    name: "Dr. James Wilson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    specialization: "Orthopedics",
    rating: 4.7,
    degree: "MD, Yale School of Medicine",
    experience: 18,
    reviews: 198,
    fee: 180,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    specialization: "Dermatology",
    rating: 4.8,
    degree: "MD, Columbia University",
    experience: 8,
    reviews: 289,
    fee: 130,
  },
  {
    id: 3,
    name: "Dr. Robert Kim",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    specialization: "General Medicine",
    rating: 4.9,
    degree: "MD, UCLA School of Medicine",
    experience: 20,
    reviews: 567,
    fee: 100,
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    specialization: "Cardiology",
    rating: 4.9,
    degree: "MD, Harvard Medical School",
    experience: 15,
    reviews: 328,
    fee: 200,
  },
  {
    id: 5,
    name: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    specialization: "Neurology",
    rating: 4.8,
    degree: "MD, Johns Hopkins University",
    experience: 12,
    reviews: 256,
    fee: 220,
  },
  {
    id: 6,
    name: "Dr. Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    specialization: "Pediatrics",
    rating: 4.9,
    degree: "MD, Stanford University",
    experience: 10,
    reviews: 412,
    fee: 150,
  },
];

// GET ALL DOCTORS
router.get("/", (req, res) => {
  res.status(200).json(doctors);
});

// GET DOCTOR BY ID
router.get("/:id", (req, res) => {
  const doctorId = parseInt(req.params.id, 10);
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.status(200).json(doctor);
});

export default router;
