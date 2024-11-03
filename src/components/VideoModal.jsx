// src/components/VideoModal.jsx

import React from "react";
import ReactPlayer from "react-player";

const VideoModal = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
      >
        &times;
      </button>
      <div className="w-full h-full">
        <ReactPlayer
          url={url}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoModal;
