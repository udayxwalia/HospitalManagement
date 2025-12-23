# Hospital Management System

A comprehensive Hospital Management System built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **User Authentication**: Secure OTP-based signup and login
- **Appointment Booking**: Schedule appointments with doctors
- **Email Notifications**: OTP verification and appointment confirmation emails
- **Doctor Management**: Browse doctors by specialization
- **Patient Dashboard**: View and manage appointments
- **Responsive Design**: Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (Gmail integration)
- JWT Authentication
- Bcrypt for password hashing

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Gmail account with App Password for email functionality

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/udayxwalia/HospitalManagement.git
cd HospitalManagement
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hospital
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Important:** You must use a Gmail App Password, not your regular password:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password for "Mail"
5. Use the generated 16-character password in your `.env` file

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

## Project Structure

```
HospitalManagement/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Auth & error handling
│   ├── utils/           # Email utilities
│   ├── seed/            # Database seeding
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── auth/        # Authentication logic
│   │   ├── api/         # API configuration
│   │   └── App.jsx      # Main app component
│   └── index.html
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Send OTP to email
- `POST /api/auth/verify-otp` - Verify OTP code

### Appointments
- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get all appointments

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID

## Known Issues & Troubleshooting

### Email Not Sending
If OTP or appointment emails aren't sending:
1. Verify your Gmail app password is correct (16 characters, no spaces)
2. Ensure 2-Step Verification is enabled on your Google account
3. Check backend console for SMTP errors
4. Try generating a new app password
5. Check spam/promotions folder

### MongoDB Connection Error
- Ensure MongoDB is running locally on port 27017
- Or update `MONGO_URI` in `.env` with your MongoDB Atlas connection string

### Port Already in Use
- Backend (5000): `taskkill /F /IM node.exe` (Windows) or `killall node` (Mac/Linux)
- Frontend (5173): Check and kill the process using the port

## Environment Variables

### Backend `.env`
| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Backend server port | 5000 |
| MONGO_URI | MongoDB connection string | mongodb://127.0.0.1:27017/hospital |
| EMAIL_USER | Gmail address for sending emails | your@gmail.com |
| EMAIL_PASS | Gmail app password | abcdabcdabcdabcd |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE.md).

## Contact

For issues or questions, please open an issue on GitHub.

## Acknowledgments

- Built with MERN Stack
- Email functionality powered by Nodemailer
- UI components styled with Tailwind CSS
