import React from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-5 py-10 text-white">

      {/* Heading */}
      <h1 className="text-5xl font-bold mt-20 mb-10 text-center">
        Get In <span className="text-amber-400">Touch</span>
      </h1>

      {/* Contact Form */}
      <form className="bg-black/70 rounded-3xl shadow-lg p-10 w-full max-w-lg flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="px-6 mx-5 mt-5 py-4 text-center bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="px-6 mx-5 py-4 bg-gray-800 text-center text-white rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-400"
        />

        <textarea
          placeholder="Your Message"
          className="px-6 py-4 mx-5 h-40 bg-gray-800 text-center text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-400 resize-none"
        />

        <button
          type="submit"
          className="bg-amber-400 w-1/2 mx-32 h-10 mb-5 text-black font-bold py-4 rounded-full hover:bg-amber-500 transition-all duration-300 text-lg justify-self-center"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="flex gap-8 mt-10 text-3xl">
        <i className="fi fi-brands-instagram hover:text-pink-500 cursor-pointer transition-transform hover:scale-110"></i>
        <i className="fi fi-brands-facebook hover:text-blue-500 cursor-pointer transition-transform hover:scale-110"></i>
        <i className="fi fi-brands-twitter-alt hover:text-sky-400 cursor-pointer transition-transform hover:scale-110"></i>
        <i className="fi fi-brands-linkedin hover:text-blue-400 cursor-pointer transition-transform hover:scale-110"></i>
      </div>

    </div>
  );
};

export default Contact;

