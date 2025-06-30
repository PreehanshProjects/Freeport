import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  if (isLoginPage) {
    // Render children only (no Navbar or Sidebar)
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  if (isSignup) {
    // Render children only (no Navbar or Sidebar)
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  // Otherwise render full layout
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-6 pt-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
