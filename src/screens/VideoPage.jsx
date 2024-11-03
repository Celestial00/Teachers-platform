// src/pages/VideoPage.jsx

import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer"; // Ensure the path is correct
import { FaUserCircle } from "react-icons/fa";

function VideoPage() {
  const [comments, setComments] = useState([
    { id: 1, username: "Student1", content: "Great explanation!" },
    { id: 2, username: "Student2", content: "This video helped me a lot, thank you!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, username: "CurrentStudent", content: newComment },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-lightGray min-h-screen flex flex-col items-center py-8 px-4">
      {/* Video Player Section */}
      <VideoPlayer url="https://www.youtube.com/watch?v=wV6kWL5WU78" /> {/* Example YouTube video */}

      {/* Comments Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-darkBlue mb-4">Comments</h2>
        
        {/* Display Existing Comments */}
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3 p-4 border-b border-gray-200">
              <FaUserCircle className="text-gray-500 text-3xl" />
              <div>
                <p className="text-darkBlue font-semibold">{comment.username}</p>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="mt-6 flex items-center space-x-3">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-3 bg-darkBlue text-white rounded-lg font-semibold hover:bg-indigo-600 transition duration-300 shadow-md"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
