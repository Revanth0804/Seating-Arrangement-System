import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    onLogout(); // Call the logout function
    toggleMenu(); // Close the menu
    navigate("/"); // Redirect to LandingPage
  };

  return (
    <header>
      <nav className="navbar" id="nav">
        <div className="container-fluid">
          <img src="./src/assets/images/logo1.jpeg" alt="Logo" id="logo" />
          <a className="navbar-brand" href="#" id="title">
            Convocation Seating Arrangement
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Side Card Menu */}
      <div
        className={`card menu-card ${menuOpen ? "menu-open" : ""}`}
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="card-body">
          <ul className="list-unstyled">
            <li>
              <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="nav-link" to="/Dashboard" onClick={toggleMenu}>
                Dashboard
              </NavLink>
            </li> */}
            <li>
              <NavLink className="nav-link" to="/Dashboard1" onClick={toggleMenu}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/findseat" onClick={toggleMenu}>
                Find Seat
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/visualmap" onClick={toggleMenu}>
                Map
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admindashboard" onClick={toggleMenu}>
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/profile" onClick={toggleMenu}>
                Profile
              </NavLink>
            </li>
            <li>
              <button id="logoutbtn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
