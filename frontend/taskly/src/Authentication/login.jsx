import { useState } from "react";
import "./style/login.css";

export default function LoginAuth() {
  return (
    <div className="div-login-main">
      <h1>Login</h1>
      <LoginInput />
      <p>Already have an account?</p>
    </div>
  );
}

function LoginInput() {
  const [userName, setUserName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(userName);
    // here is where login logic would go
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label className="user-inputs">
        <p>Username:</p>
        <input
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your username"
        />
      </label>

      <br />

      <label className="user-inputs">
        <p>Password:</p>
        <input
          className="input"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </label>

      <br />

      <button type="submit">Login</button>

      {submittedName && <p>Welcome, {submittedName} 👋</p>}
    </form>
  );
}
