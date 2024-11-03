

import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-darkBlue to-indigo-800 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-darkBlue text-center mb-6">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg">
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
