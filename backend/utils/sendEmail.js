import transporter from "./emailTransporter.js";

/**
 * Send an email using configured transporter.
 * Expects EMAIL_USER/EMAIL_PASS in environment for Gmail auth.
 */
const sendEmail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: `"Hospital Appointment" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  console.log("📧 Appointment mail sent:", info.messageId);
  return info;
};

export default sendEmail;
