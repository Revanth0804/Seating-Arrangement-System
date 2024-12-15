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

function Routers() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <Router>
      <MainLayout isLoggedIn={!!userEmail}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route
            path="/Login"
            element={<LoginForm setLoggedInUser={(email) => setUserEmail(email)} />}
          />
          <Route path="/loginhome" element={<Home />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/findseat" element={<FindSeat />} />
          <Route path="/visualmap" element={<VisualMap />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              userEmail ? (
                <UserProfile userEmail={userEmail} />
              ) : (
                <div>Please log in first.</div>
              )
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default Routers;
