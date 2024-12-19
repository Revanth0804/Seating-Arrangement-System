import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";


const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const FormContainer = styled.form`
  max-width: 600px; /* Limit the width of the form */
  margin: 2rem auto; /* Center the form horizontally with margin */
  padding: 2rem; /* Add some padding inside the form */
  border: 1px solid #507687; /* Light Blue border */
  border-radius: 8px; /* Rounded corners */
  background-color: #fcfaee; /* Light background color */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  min-height: 69vh;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem; /* Space between form fields */
`;

const Input = styled.input`
  width: 100%; /* Full width inputs */
  padding: 0.5rem; /* Padding for inputs */
  border: 1px solid #b8001f; /* Red border for inputs */
  border-radius: 4px; /* Slightly rounded corners for inputs */
  font-size: 1rem; /* Increase font size */
  transition: border-color 0.3s ease; /* Smooth transition for border color */

  &:focus {
    border-color: #507687; /* Light Blue border on focus */
    outline: none; /* Remove default outline */
  }
`;

const Button = styled.button`
  width: 100%; /* Full width button */
  padding: 0.5rem; /* Padding for button */
  background-color: #b8001f; /* Red background for button */
  color: white; /* White text */
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners for button */
  font-size: 1rem; /* Font size for button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition for background color */

  &:hover {
    background-color: #fcfaee; /* Light background on hover */
    color: #b8001f; /* Change text color to Red on hover */
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SignUpForm = ({ setIsLogin, users, setUsers }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", 
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = "https://server-u9ga.onrender.com/Users";

  const addUser = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!newUser.name) errors.name = "Name is required.";
    if (!newUser.email) errors.email = "Email is required.";
    else if (!/\S+@\S+/.test(newUser.email)) errors.email = "Enter a valid email.";
    if (!newUser.password) errors.password = "Password is required.";
    else if (newUser.password.length < 3) errors.password = "Password must be at least 3 characters long.";
    if (!newUser.confirmPassword) errors.confirmPassword = "Confirm Password is required.";
    else if (newUser.password !== newUser.confirmPassword) errors.confirmPassword = "Passwords do not match.";

    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const response = await axios.get(API_URL);
      const usersList = Array.isArray(response.data) ? response.data : [];
      const existingUser = usersList.find((user) => user.email === newUser.email);

      if (existingUser) {
        setErrorMessage("Email already exists. Please use a different email.");
        setSuccessMessage("");
        return;
      }

      const newUserResponse = await axios.post(API_URL, {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      });

      if (newUserResponse.status === 201) {
        setUsers([...users, newUserResponse.data]);
        setNewUser({ name: "", email: "", password: "", confirmPassword: "" });
        setValidationErrors({});
        setSuccessMessage("Signup successful, Please login");

        setTimeout(() => {
          setIsLogin(true);
        }, 2000);

        setErrorMessage("");
      } else {
        setErrorMessage("");
        setSuccessMessage("Signup successful but received an unexpected response.");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage("");
      setSuccessMessage("Signup successful.");
    }
  };

  return (
    <>
      <Title>Student SignUp Form</Title>
      <FormContainer onSubmit={addUser}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          {validationErrors.name && <ErrorMessage>{validationErrors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            placeholder="Enter your Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          {validationErrors.email && <ErrorMessage>{validationErrors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            placeholder="Enter your Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          {validationErrors.password && <ErrorMessage>{validationErrors.password}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            placeholder="Confirm your Password"
            value={newUser.confirmPassword}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
          />
          {validationErrors.confirmPassword && <ErrorMessage>{validationErrors.confirmPassword}</ErrorMessage>}
        </FormGroup>

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Button type="submit">Sign Up</Button>
      </FormContainer>
    </>
  );
};

export default SignUpForm;
