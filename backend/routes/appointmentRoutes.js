import express from "express";
import Appointment from "../models/Appointment.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { doctorId, doctorName, email, date, time } = req.body;

    const appointment = new Appointment({
      doctorId,
      doctorName,
      patientEmail: email,
      date,
      time,
    });

    await appointment.save();

    // booking mail
    await sendEmail(
      email,
      "Appointment Confirmed 🏥",
      `
      Hello,

      Your appointment has been booked successfully.

      Doctor: ${doctorName}
      Date: ${date}
      Time: ${time}

      Thank you,
      Hospital Management System
      `
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ success: false });
  }
});

export default router;
