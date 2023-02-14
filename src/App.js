import "./App.css";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/user-dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
