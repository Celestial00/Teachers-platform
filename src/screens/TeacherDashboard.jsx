// src/pages/TeacherDashboard.jsx

import React from "react";
import NavbarPrivate from "../components/NavbarPrivate";
import Sidebar from "../components/Sidebar";
import UploadVideoSection from "../components/UploadVideoSection";
import MyVideosSection from "../components/MyVideosSection";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen h-[100vh] bg-gray-100">
      <NavbarPrivate />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
          <UploadVideoSection />
          <MyVideosSection />
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
