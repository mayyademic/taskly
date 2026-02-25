import { useState } from "react";
import "./style/login.css";
import logo from "./assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function LoginAuth() {
  return (
    <div className="div-login-main">
      <LoginInput />
    </div>
  );
}

function LoginInput() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const params = new URLSearchParams();
      params.append("username", userName);
      params.append("password", password);

      const response = await fetch("http://localhost:8080/taskly/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();

      localStorage.setItem("workspaceId", data.workspaceId);

      setSubmittedName(data.firstname);
      console.log(data);

      navigate(`/workspace/${data.workspaceId}`);
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="main-container">
      <div className="login-part">
        <h1 className="login-header">Login</h1>
        <form className="input-form" onSubmit={handleSubmit}>
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
            Login
          </button>

          {submittedName && <p>Welcome, {submittedName} 👋</p>}
        </form>
        <Link to="/signup">
          <p className="link-text">Create an account</p>
        </Link>
      </div>

      <img src={logo} alt="Logo" />
    </div>
  );
}
