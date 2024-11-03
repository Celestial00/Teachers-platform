// src/pages/StudentHome.jsx

import React from "react";
import Navbar from "../components/NavbarPublic";
import StudentHero from "../components/StudentHero";
import NavbarPrivate from "../components/NavbarPrivate";

function StudentHome() {
  return (
    <div className="bg-lightGray min-h-screen">
      <NavbarPrivate/>
      <StudentHero />
    </div>
  );
}

export default StudentHome;
