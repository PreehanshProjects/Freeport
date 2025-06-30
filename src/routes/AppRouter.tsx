import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';
import Stock from '../pages/Stock';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}
