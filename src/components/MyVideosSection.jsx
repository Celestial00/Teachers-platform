// src/components/MyVideosSection.jsx

import React, { useState } from "react";
import VideoModal from "./VideoModal";

const MyVideosSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const handleVideoClick = (url) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4">My Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Video Card */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200">
            <h3 className="font-semibold">Video Title {index + 1}</h3>
            <p className="text-gray-600">Duration: 10:00</p>
            <p className="text-gray-600">Students: 25</p>
            <button
              onClick={() => handleVideoClick("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} // Replace with actual video URL
              className="mt-2 bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700"
            >
              Watch Video
            </button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal url={currentVideoUrl} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MyVideosSection;
