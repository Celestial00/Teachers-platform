// src/components/NavbarPublic.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

function NavbarPublic() {
  return (
    <nav className="bg-darkBlue flex justify-between items-center py-4 px-6 shadow-lg">
      <Link to="/" className="text-2xl font-bold text-white">EduPlatform</Link>
      <div className="flex space-x-4">
        <Link to="/signin" className="text-white font-semibold px-4 py-2 flex items-center space-x-2 border border-white rounded hover:bg-gray-700 transition-colors">
          <FaSignInAlt />
          <span>Login</span>
        </Link>
        <Link to="/signup" className="text-white font-semibold px-4 py-2 flex items-center space-x-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors">
          <FaUserPlus />
          <span>Sign Up</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarPublic;
