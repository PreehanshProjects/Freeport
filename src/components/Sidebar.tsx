import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Burger menu button - only visible on mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-darkBlue text-white"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-darkBlue text-white p-6 z-40
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 min-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Freeport</h2>

        <nav className="space-y-2">
          <div className="text-sm uppercase text-gray-300 mb-1">Dashboard</div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-primary/80 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)} // close menu on mobile nav click
          >
            Dashboard
          </NavLink>

          <div className="border-t border-white my-4" />

          <div className="text-sm uppercase text-gray-300 mb-1">Others</div>

          <NavLink
            to="/delivery"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-primary/80 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Delivery
          </NavLink>
          <NavLink
            to="/stock"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-primary/80 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Stock
          </NavLink>
        </nav>
      </aside>

      {/* Overlay behind sidebar on mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
