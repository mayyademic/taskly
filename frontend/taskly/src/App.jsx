import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAuth from "./Authentication/login.jsx";
import SignUpAuth from "./Authentication/signup.jsx";
import WorkspaceShow from "./Workspace/workspace.jsx";
import { GlobalProvider } from "./context/ContextFile.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginAuth />} />
              <Route path="/signup" element={<SignUpAuth />} />
              <Route
                path="/workspace/:workspaceID"
                element={<WorkspaceShow />}
              />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      </header>
    </div>
  );
}

export default App;
