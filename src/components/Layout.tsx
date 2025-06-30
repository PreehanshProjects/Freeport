import Sidebar from "./Sidebar";
import Navbar from "./Navbar"; 
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-6 pt-20"> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
