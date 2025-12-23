import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  department: String,
  consultationFee: {
    type: Number,
    default: 500, // INR
  },
});

export default mongoose.model("Doctor", DoctorSchema);
