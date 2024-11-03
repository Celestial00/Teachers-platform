import React from "react";
import Navbar from "../components/NavbarPublic";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Starter() {
  return (
    <>
     <div className="bg-lightGray text-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
    </>
  );
}
