import { useState } from "react";
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const username = "JohnDoe";

  const toggleDropdown = () => setDropdownOpen((open) => !open);

  const handleLogout = () => {
    setLoggedIn(false);
    setDropdownOpen(false);
    navigate("/login"); // redirect to login after logout
  };

  const handleLogin = () => {
    navigate("/login"); // navigate to login page
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 h-14 flex items-center justify-end z-50">
      {!loggedIn ? (
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition"
          aria-label="Login"
        >
          <User className="w-5 h-5" />
          Login
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-primary"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <User className="w-5 h-5 text-primary" />
            <span className="font-medium text-gray-700">{username}</span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-primary hover:text-white transition"
                role="menuitem"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
