// src/components/Features.jsx

import React from "react";
import { FaVideo, FaClock, FaFolderOpen, FaChartLine } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaVideo />, title: "Upload Videos", description: "Teachers can easily upload videos to share knowledge." },
    { icon: <FaClock />, title: "Watch Anytime", description: "Students can watch videos at their own pace." },
    { icon: <FaFolderOpen />, title: "Organized Content", description: "All lessons organized by subjects and categories." },
    { icon: <FaChartLine />, title: "Track Progress", description: "Students can track their learning journey." },
  ];

  return (
    <section className="py-20 bg-lightGray text-darkBlue">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-16 h-16 mx-auto mb-6">
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="font-semibold text-2xl mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
