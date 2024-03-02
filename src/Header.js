import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "./logo.png";
const Header = () => {
  return (
    <div className="head sticky top-0 flex flex-wrap justify-between items-center ">
      <div className=" flex items-center">
        <img src={logo} alt="Logo" className="border-sky-900 logo" />
        <h1 className="text-4xl title">RECRUITMENT SYSTEM</h1>
      </div>
      <nav className="flex items-end">
        <a href="/" className="mr-6 hover:none">
          Home
        </a>
        <a href="/" className="mr-6 hover:none">
          Jobs
        </a>
        <a href="/" className="mr-6 hover:none">
          Jobs Applied
        </a>
        <a href="/" className="mr-6 hover:none">
          About Us
        </a>
        <FaUserCircle className="text-5xl mx-4" />
      </nav>
    </div>
  );
};

export default Header;
