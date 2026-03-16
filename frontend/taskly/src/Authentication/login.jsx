import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/ContextFile";
import FormInput from "./FormInput";
import logo from "./assets/logo.jpg";
import "./style/login.css";

export default function LoginAuth() {
  const navigate = useNavigate();
  const { updateUserInfo } = useGlobalContext();

  const [formData, setFormData] = useState({
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
      const params = new URLSearchParams(formData);

      const response = await fetch("http://localhost:8080/taskly/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();

      localStorage.setItem("firstname", data.firstname);
      localStorage.setItem("lastname", data.lastname);
      localStorage.setItem("workspaceId", data.workspaceId);

      updateUserInfo({
        firstName: data.firstname,
        lastName: data.lastname,
        workspaceId: data.workspaceId,
      });

      navigate(`/workspace/${data.workspaceId}`);
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="div-login-main">
      <div className="main-container">
        <div className="login-part">
          <h1 className="login-header">Login</h1>

          <form className="input-form" onSubmit={handleSubmit}>
            <FormInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>

          <Link to="/signup">
            <p className="link-text">Create an account</p>
          </Link>
        </div>

        <img src={logo} alt="Logo" className="auth-logo" />
      </div>
    </div>
  );
}
