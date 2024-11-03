// src/components/StudentHero.jsx

import React from "react";
import { FaPlayCircle } from "react-icons/fa";

function StudentHero() {
  const videos = [
    {
      thumbnail: "https://via.placeholder.com/300x180",  // Replace with actual video thumbnail
      title: "Introduction to Physics",
      teacher: "John Doe",
      duration: "10:30",
    },
    {
      thumbnail: "https://via.placeholder.com/300x180",
      title: "Advanced Mathematics",
      teacher: "Jane Smith",
      duration: "15:45",
    },
    {
      thumbnail: "https://via.placeholder.com/300x180",
      title: "Chemistry Basics",
      teacher: "Mark Lee",
      duration: "12:20",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Video Thumbnail */}
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-5xl opacity-0 hover:opacity-100 transition-opacity">
                <FaPlayCircle />
              </div>
            </div>

            {/* Video Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-darkBlue">{video.title}</h3>
              <p className="text-gray-600">Teacher: {video.teacher}</p>
              <p className="text-gray-500 text-sm">Duration: {video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentHero;
