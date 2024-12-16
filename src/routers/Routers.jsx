import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import FindSeat from "../pages/FindSeat";
import VisualMap from "../pages/VisualMap";
import SignUpForm from "../pages/SignUpForm";
import LoginForm from "../pages/LoginForm";
import LandingPage from "../pages/LandingPage";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

function Routers() {
  const [userEmail, setUserEmail] = useState(null);

  // Function to handle logout
  const handleLogout = () => {
    setUserEmail(null);
  };

  return (
    <Router>
      <MainLayout isLoggedIn={!!userEmail} onLogout={handleLogout}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route
            path="/Login"
            element={<LoginForm setLoggedInUser={(email) => setUserEmail(email)} />}
          />

          {/* Protected Routes */}
          <Route
            path="/loginhome"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/findseat"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <FindSeat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/visualmap"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <VisualMap />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <UserProfile userEmail={userEmail} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default Routers;
