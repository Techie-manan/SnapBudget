import React from 'react';

const About = () => {
  return (
    <div className="min-h-fit bg-home text-white flex flex-col items-center px-5 py-10">

      {/* Heading */}
      <h1 className="text-5xl font-bold mt-24 mb-8 text-center">
        About <span className="text-amber-400">Us</span>
      </h1>

      {/* Short Description */}
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-16">
        Welcome to our platform! We are passionate about helping you manage your finances easily and smartly. 
        Our mission is to provide simple, yet powerful tools to make budgeting effortless for everyone.
      </p>

      {/* Features / Mission-Vision-Values */}
      <div className="grid grid-cols-1 gap-10">

        {/* Card 1 */}
        <div className="bg-black/70 py-5 p-8 rounded-3xl flex flex-col items-center hover:scale-105 transition-all duration-300">
          <i className="fi fi-sr-bullseye-arrow text-5xl text-amber-400 my-5"></i>
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-400 mb-5 mx-5 text-center">
            Empower individuals to achieve financial freedom through simple and intuitive expense tracking.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black/70 p-8 rounded-3xl flex flex-col items-center hover:scale-105 transition-all duration-300">
          <i className="fi fi-rr-eye text-5xl text-amber-400 my-5"></i>
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-400 text-center mb-5">
            To become the most trusted platform for personal finance management across the globe.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black/70 p-8 rounded-3xl flex flex-col items-center hover:scale-105 transition-all duration-300">
          <i className="fi fi-rr-handshake text-5xl text-amber-400 my-5"></i>
          <h2 className="text-2xl font-bold mb-3">Our Values</h2>
          <p className="text-gray-400 text-center mb-5">
            Integrity, Simplicity, and Innovation are at the heart of everything we build for you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
