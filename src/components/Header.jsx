import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  .navbar {
    background-color: #05445e;
    padding: 10px 20px;
  }

  #logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  #title {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 10px;
  }

  .navbar-toggler {
    background: transparent;
    border: none;
  }

  .navbar-toggler-icon {
    width: 50px;
    height: 35px;
    background-color: white;
    display: block;
    position: relative;
  }

  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    left: 0;
    transition: transform 0.3s ease;
  }

  .navbar-toggler-icon::before {
    top: 0;
  }

  .navbar-toggler-icon::after {
    bottom: 0;
  }
`;

const MenuCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #05445e;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 1050;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const MenuItem = styled(NavLink)`
  color: white !important;
  font-size: 1rem;
  padding: 15px;
  text-align: left;
  display: block;
  text-decoration: none;

  &:hover {
    color: #80ced7 !important;
    background-color: #033649;
    border-radius: 4px;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

// Header Component
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
    <HeaderContainer>
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
      <MenuCard isOpen={menuOpen}>
        <div>
          <ul className="list-unstyled">
            <li>
              <MenuItem to="/" onClick={toggleMenu}>
                Home
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/Dashboard1" onClick={toggleMenu}>
                Dashboard
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/findseat" onClick={toggleMenu}>
                Find Seat
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/visualmap" onClick={toggleMenu}>
                Map
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/profile" onClick={toggleMenu}>
                Profile
              </MenuItem>
            </li>
            <li>
              <LogoutButton id="logoutbtn" onClick={handleLogout}>
                Logout
              </LogoutButton>
            </li>
          </ul>
        </div>
      </MenuCard>
    </HeaderContainer>
  );
};

export default Header;
