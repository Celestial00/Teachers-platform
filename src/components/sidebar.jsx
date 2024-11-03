// src/components/Sidebar.jsx

import React from "react";
import { FaUpload, FaVideo, FaUsers, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-darkBlue text-white shadow-lg">
      <div className="p-5 text-2xl font-bold">Teacher Dashboard</div>
      <nav className="mt-10">
        <a
          href="/upload"
          className="flex items-center p-3 hover:bg-blue-600 transition duration-200"
        >
          <FaUpload className="mr-3" />
          Upload Video
        </a>
        <a
          href="/my-videos"
          className="flex items-center p-3 hover:bg-blue-600 transition duration-200"
        >
          <FaVideo className="mr-3" />
          My Videos
        </a>
        <a
          href="/students"
          className="flex items-center p-3 hover:bg-blue-600 transition duration-200"
        >
          <FaUsers className="mr-3" />
          Students
        </a>
        <a
          href="/logout"
          className="flex items-center p-3 hover:bg-red-600 transition duration-200"
        >
          <FaSignOutAlt className="mr-3 text-red-400" />
          Sign Out
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
