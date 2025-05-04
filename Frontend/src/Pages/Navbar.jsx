import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-prim p-6 rounded-b-lg">
      <div className=" flex justify-between items-center">
        <Link className="text-white text-xl">
          <span className="text-orange font-bold">C</span>
          <span className="text-blue font-bold">R</span>
          <span className="text-lig font-bold">U</span>
          <span className="text-yellow font-bold">D</span>{" "}
        </Link>
        <div className="hidden md:flex space-x-6 items-end">
          <Link to="/" className="hover:text-white text-sec">
            Home
          </Link>
          {/* <Link to="/about" className="hover:text-white text-sec">About</Link> */}
          <Link to="/services" className="hover:text-white text-sec">
            Services
          </Link>
          {/* <Link to="/contact" className="hover:text-white text-sec">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
