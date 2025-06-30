import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';
import Stock from '../pages/Stock';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}
