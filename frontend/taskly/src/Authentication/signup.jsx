import { useState } from "react";
import "./style/login.css";
import logo from "./assets/logo.tiff";
import { Link } from "react-router-dom";

export default function SignUpAuth() {
  return (
    <div className="div-login-main">
      <SignUpInput />
    </div>
  );
}

function SignUpInput() {
  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(fistName);
    // here is where sign up logic would go
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
              value={fistName}
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
        <p className="link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <img src={logo} alt="Logo" />
    </div>
  );
}
