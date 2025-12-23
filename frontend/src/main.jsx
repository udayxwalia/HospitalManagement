import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // 🔥 MUST (Tailwind loads here)
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";

import App from "./App";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "doctors", element: <Doctors /> },
      { path: "book-appointment", element: <BookAppointment /> },
      { path: "book-appointment/:id", element: <BookAppointment /> },

      // 👇 AUTH ROUTES (FIX)
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "verify-otp", element: <VerifyOtp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
