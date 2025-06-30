import { Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/100x100?text=Logo"
            alt="Company Logo"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>

        {/* Headings */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
          <p className="text-sm text-gray-500">Fill in the details below to sign up</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* First and Last Name side by side */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">First Name</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  className="w-full outline-none text-gray-800"
                  placeholder="First name"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">Last Name</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  className="w-full outline-none text-gray-800"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          {/* Email / Username */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email or Username</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full outline-none text-gray-800"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full outline-none text-gray-800"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
