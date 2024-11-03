// src/components/VideoPlayer.jsx

import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url }) {
  return (
    <div className="flex justify-center items-center w-full h-screen p-4 bg-black"> {/* Added bg-black for contrast */}
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%" // Full width
        height="100%" // Full height
        controls={true}
        style={{ borderRadius: '0.5rem' }} // Rounded corners
      />
    </div>
  );
}

export default VideoPlayer;
