const bookAppointment = (req, res) => {
  const { doctor, specialization, date, time } = req.body;

  res.json({
    message: "Appointment booked successfully",
    appointment: {
      doctor,
      specialization,
      date,
      time,
      fee: 500,
      currency: "INR",
      status: "Confirmed"
    }
  });
};

module.exports = { bookAppointment };
