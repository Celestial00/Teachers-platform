// src/components/NavbarPrivate.jsx

import React, { useState } from "react";
import { FaUserCircle, FaSearch, FaCog, FaStar, FaHeart, FaSignOutAlt } from "react-icons/fa"; // Importing necessary icons
import { searchData } from "../MockData/searchData";

function NavbarPrivate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Filter search suggestions based on input
  const filteredSuggestions = searchData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(e.target.value.length > 0);
  };

  return (
    <nav className="bg-darkBlue flex justify-between items-center py-4 px-6 shadow-lg relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">EduPlatform</div>

      {/* Search Bar */}
      <div className="relative flex items-center w-1/2">
        <FaSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search for teachers or subjects"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Dropdown for Search Suggestions */}
        {isDropdownOpen && (
          <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(item.name); // Populate the search bar with selected item
                    setIsDropdownOpen(false); // Close dropdown
                  }}
                >
                  <span className="text-indigo-600 font-semibold">{item.type}:</span>
                  <span>{item.name}</span>
                  {item.subject && <span className="text-gray-500">({item.subject})</span>}
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>

      {/* Profile Icon with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaUserCircle />
        </button>

        {isProfileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
            <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FaCog className="mr-2" />
              <a href="/settings">Settings</a>
            </div>
            <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FaStar className="mr-2" />
              <a href="/favorites">Favorites</a>
            </div>
            <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <FaHeart className="mr-2" />
              <a href="/liked">Liked</a>
            </div>
            <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 border-t border-gray-300">
              <FaSignOutAlt className="mr-2 text-red-500" />
              <a href="/logout" className="text-red-500">Sign Out</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarPrivate;
