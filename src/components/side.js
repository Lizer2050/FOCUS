"use client"
import { useState } from 'react';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      {/* Button to open the sidebar */}
      <button
        className="open-btn bg-green-600 text-white font-semibold py-2 px-4 m-5 cursor-pointer"
        onClick={toggleSidebar}
      >
        ☰ Open Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-gray-800 text-white fixed top-0 left-0 h-full transition-width duration-300 pt-16 ${
          isOpen ? 'w-64' : 'w-0'
        }`}
        style={{ overflowX: 'hidden' }}
      >
        <a
          href="#"
          className="block px-4 py-2 text-lg hover:bg-gray-700"
          onClick={toggleSidebar}
        >
          Close &times;
        </a>
        <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-700">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-700">
          Contact
        </a>
      </div>

      {/* Main content */}
      <div
        className={`content transition-margin duration-300 ${
          isOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <h1 className="p-5">Welcome to My Website</h1>
        <p className="p-5">Click the button to toggle the sidebar.</p>
      </div>
    </div>
  );
}

