// src/components/Hero.jsx

import React from "react";

function Hero() {
  return (
    <section className="text-center py-48 px-4 bg-gradient-to-br from-darkBlue to-indigo-800 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold uppercase mb-6 tracking-wide">
        Learn and Teach Effortlessly
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Empowering teachers to share knowledge and students to learn seamlessly through engaging video lessons.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
