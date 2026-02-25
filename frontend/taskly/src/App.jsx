import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAuth from "./Authentication/login.jsx";
import SignUpAuth from "./Authentication/signup.jsx";
import WorkspaceShow from "./Workspace/workspace.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAuth />} />
            <Route path="/signup" element={<SignUpAuth />} />
            <Route path="/workspace" element={<WorkspaceShow />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
