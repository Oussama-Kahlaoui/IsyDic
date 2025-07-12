import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from "./pages/AdminDashboard";
import Residences from "./pages/Residences";
import Charges from "./pages/Charges";
import Incident from './pages/Incident';
import Residents from './pages/Residents';
import Meetings from './pages/Meetings';
import Documents from './pages/Documents';


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
        <Route path="/residents" element={<Residents />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
