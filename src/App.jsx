import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from "./pages/AdminDashboard";
import Residences from "./pages/Residences";
import Charges from "./pages/Charges";
import Incident from './pages/Incident';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/charges" element={<Charges />} />
        <Route path="/incidents" element={<Incident />} />
      </Routes>
    </Router>
  );
}

export default App;
