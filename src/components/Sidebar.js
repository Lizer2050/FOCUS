"use client"
import { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Noisebackground from './Noisebackground';


export default function Sidebar() {
  // Usestate to Open Sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the Sidebar
  const sidebarRef = useRef(null);

  // The function that handles to opening and closing of the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Creating useEffect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Adding Listeners
    document.addEventListener('mousedown', handleClickOutside);


    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  // MAIN RETURN
  return (
    <div>
      <div className='absolute z-10'>
        
        {/* Button */}
        <button className="text-black text-[30px] font-semibold py-[2px] px-4 m-[5px] cursor-pointer"
          onClick={toggleSidebar}
        >
          ☰
        </button>


        {/* Side Bar */}
        <div
          ref={sidebarRef}
          className={`bg-orange-500 text-black hover:bg-orange-300 fixed top-0 left-0 h-full transition-width duration-300 ${isOpen ? 'w-64' : 'w-0'
            }`}
          style={{ overflowX: 'hidden' }}
        >

          {/* Close button */}
          <div>
            <a
              href="#"
              className="block top-0 text-lg hover:bg-white pt-[10px]"
              onClick={toggleSidebar}
            >
              ☰ &times;
            </a>
          </div>


          {/* Menu List */}
          <div className='pt-16'>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-white">
              Lizer
            </a>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-white">
              Jinadu
            </a>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-white">
              Fumi
            </a>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-white">
              Beautiful
            </a>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-white">
              Yassss
            </a>
          </div>

        </div>
      </div>



      {/* PAGE Content */}
      <div className={`relative z-0 content transition-margin duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <Noisebackground />
        <Nav />
        <Hero />
      </div>

    </div>
  )
}






