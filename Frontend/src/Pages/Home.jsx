import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import DB from "../assets/DB_img.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 items-center justify-items-center min-h-screen px-10">
        <div>
          <img
            src={DB}
            alt="Database storage image"
            className="max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Explore the power of{" "}
            <span className="text-orange font-bold">C</span>
            <span className="text-blue font-bold">R</span>
            <span className="text-lig font-bold">U</span>
            <span className="text-yellow font-bold">D</span> operations!
            Click the button below to Create, Read, Update, and Delete data
            seamlessly.
          </h1>
          <Link to="/services">
            <button className="bg-sec hover:bg-red-500 text-prim hover:text-white text-lg py-2 px-6 rounded-lg transition">
              Services
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
