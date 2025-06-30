import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Check if current route is login or signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  if (isAuthPage) {
    // No Navbar or Sidebar on auth pages
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  // Otherwise render full layout
  return (
    <div className="flex">
      <Sidebar />
      {/* Add padding top equal to Navbar height */}
      <div className="flex-1 min-h-screen bg-gray-100 pt-14">
        <Navbar />
        {/* Reduced top padding here, since wrapper has pt-14 */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
