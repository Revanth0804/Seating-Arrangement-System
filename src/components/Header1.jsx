import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Define a styled component for the <p> tag
const StyledParagraph = styled.p`
  font-size: 18px;
  margin: 14px;
  font-weight: bold;
`;

function Header1() {
  const location = useLocation(); // Get current location

  // Check if the current path is the admin login page, student login page, or landing page
  const isAdminLoginPage = location.pathname === '/adminlogin';
  const isStudentLoginPage = location.pathname === '/login';
  const isLandingPage = location.pathname === '/'; // Check for LandingPage

  return (
    <>
      <header1>
        <nav className="navbar navbar-expand-lg" id="nav">
          <img src="./src/assets/images/logo1.jpeg" alt="" id="logo" />
          <a className="navbar-brand" href="/" id="title">
            Convocation Seating Arrangement
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* Hide the Home button if on the landing page */}
              {!isLandingPage && (
                <li className="nav-item active">
                  <NavLink to="/">
                    {/* Apply the styled component here */}
                    <StyledParagraph>Home</StyledParagraph>
                  </NavLink>
                </li>
              )}
              {/* Only show the buttons that are not on the current page */}
              {!isStudentLoginPage && (
                <li className="nav-item active">
                  <NavLink to="/login">
                    <button id="navbtn1">Student Login</button>
                  </NavLink>
                </li>
              )}
              {!isAdminLoginPage && (
                <li className="nav-item active">
                  <NavLink to="/adminlogin">
                    <button id="navbtn1">Admin Login</button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header1>
    </>
  );
}

export default Header1;
