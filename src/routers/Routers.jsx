import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import FindSeat from "../pages/FindSeat";
// import VisualMap from "../pages/VisualMap1";
import SignUpForm from "../pages/SignUpForm";
import LoginForm from "../pages/LoginForm";
import LandingPage from "../pages/LandingPage";
import UserProfile from "../pages/UserProfile";
import VisualMap from "../pages/VisualMap";
import Dashboard1 from "../pages/Dashboard1";
import ProtectedRoute from "../components/ProtectedRouter";

function Routers() {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || null);

  // Persist user email on login
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    } else {
      localStorage.removeItem("userEmail");
    }
  }, [userEmail]);

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
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/login"
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
          {/* <Route
            path="/visualmap"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <VisualMap1 userEmail={userEmail}/>
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/visualmap"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <VisualMap userEmail={userEmail} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard1"
            element={
              <ProtectedRoute isLoggedIn={!!userEmail}>
                <Dashboard1 userEmail={userEmail} />
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
