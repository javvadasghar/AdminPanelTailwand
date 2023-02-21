import "./App.css";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import CreateUser from "./components/CreateUser";
import { Route, Routes } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/user-dashboard" element={<UserDashboard />} />
        <Route exact path="/create-user" element={<CreateUser />} />
        <Route exact path="/application1" element={<App1 />} />
        <Route exact path="/application2" element={<App2 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
