// src/components/UploadVideoSection.jsx

import React from "react";

const UploadVideoSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-5 mb-6">
      <h2 className="text-xl font-semibold mb-4">Upload Video</h2>
      <input type="file" className="border border-gray-300 p-2 rounded-lg w-full" />
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Upload
      </button>
    </section>
  );
};

export default UploadVideoSection;
