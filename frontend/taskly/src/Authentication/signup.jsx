import { useState } from "react"; // Added useState
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/ContextFile";
import FormInput from "./FormInput";
import logo from "./assets/logo.jpg";
import "./style/login.css";

export default function SignUpAuth() {
  const navigate = useNavigate();
  const { updateUserInfo } = useGlobalContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/taskly/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          firstname: formData.firstName,
          lastname: formData.lastName,
        }),
      });

      if (!response.ok) throw new Error("Signup failed");

      const data = await response.json();

      localStorage.setItem("userId", data.userId);
      localStorage.setItem("workspaceId", data.workspaceId);
      localStorage.setItem("firstname", data.firstname || formData.firstName);
      localStorage.setItem("lastname", data.lastname || formData.lastName);

      updateUserInfo({
        firstName: data.firstname || formData.firstName,
        lastName: data.lastname || formData.lastName,
        workspaceId: data.workspaceId,
      });

      navigate(`/workspace/${data.workspaceId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to create account. Try again!");
    }
  };

  return (
    <div className="div-login-main">
      <div className="main-container">
        <div className="login-part">
          <h1 className="login-header">Sign up</h1>

          <form className="input-form" onSubmit={handleSubmit}>
            <FormInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />

            <FormInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />

            <FormInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />

            <button className="login-btn" type="submit">
              Sign Up
            </button>
          </form>

          <p className="link-text">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>

        <img src={logo} alt="Logo" className="auth-logo" />
      </div>
    </div>
  );
}
