import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard";
import ManageEvents from "./Pages/Admin/ManageEvents";
import ManageTrek from "./Pages/Admin/ManageTrek";
import ManageCompletedEvents from "./Pages/Admin/ManageCompletedEvents";
import ManageEnquiries from "./Pages/Admin/ManageEnquiries";
import ProtectedRoute from "./components/ProtectedRoute";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/events" element={<ProtectedRoute><ManageEvents /></ProtectedRoute>} />
        <Route path="/admin/treks" element={<ProtectedRoute><ManageTrek /></ProtectedRoute>} />
        <Route path="/admin/completed-events" element={<ProtectedRoute><ManageCompletedEvents /></ProtectedRoute>} />
        <Route path="/admin/enquiries" element={<ProtectedRoute><ManageEnquiries /></ProtectedRoute>} />
      </Routes>
      <FloatingActions />
    </>
  );
}

export default App;
