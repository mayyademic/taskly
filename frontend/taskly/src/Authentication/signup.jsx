import { useState } from "react";
import "./style/login.css";
import logo from "./assets/logo.tiff";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpAuth() {
  return (
    <div className="div-login-main">
      <SignUpInput />
    </div>
  );
}

function SignUpInput() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Example in SignUpAuth.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/taskly/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
      });

      if (!response.ok) throw new Error("Signup failed");

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("workspaceId", data.workspaceId);

      setSubmittedName(firstName);

      navigate(`/workspace/${data.workspaceId}`);
    } catch (error) {
      console.error(error);
      alert("Failed to create account. Try again!");
    }
  };

  return (
    <div className="main-container">
      <div className="login-part">
        <h1 className="login-header">Sign up</h1>
        <form className="input-form" onSubmit={handleSubmit}>
          <label className="user-inputs">
            <p className="inputs-header">First Name</p>
            <input
              className="custom-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <label className="user-inputs">
            <p className="inputs-header">Last Name</p>
            <input
              className="custom-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <label className="user-inputs">
            <p className="inputs-header">Username</p>
            <input
              className="custom-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
            />
          </label>

          <label className="user-inputs">
            <p className="inputs-header">Password</p>
            <input
              className="custom-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>

          <button className="login-btn" type="submit">
            Sign Up
          </button>

          {submittedName && <p>Welcome, {submittedName} 👋</p>}
        </form>
        <p className="link-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>

      <img src={logo} alt="Logo" />
    </div>
  );
}
