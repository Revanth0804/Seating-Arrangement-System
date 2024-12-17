import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const AdminLoginForm = ({ setLoggedInAdmin }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = "https://server-u9ga.onrender.com/Admin";


  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    clearMessages();

    if (!loginData.email || !loginData.password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.get(API_URL);
      const admins = response.data;

      const admin = admins.find(
        (a) => a.mail === loginData.email && a.password === loginData.password
      );

      if (admin) {
        setSuccessMessage("Login successful! Redirecting...");
        setLoggedInAdmin(admin.mail);
        setTimeout(() => navigate("/admindashboard"), 2000);
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <>
      <Title>Admin Login</Title>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="btn-login">
          Login
        </button>
        <p>
          Not an admin?{" "}
          <Link to="/login" className="link">
            Go to Student Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default AdminLoginForm;
