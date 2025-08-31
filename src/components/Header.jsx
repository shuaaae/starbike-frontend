import React from 'react';
import { PhoneIcon, LocationIcon, WrenchIcon } from './Icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-50 px-5 py-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 border-b border-gray-200 gap-2.5 md:gap-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-5">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" color="#374151" />
            <span>0946-567-4960</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon className="w-5 h-5" color="#374151" />
            <span>T.DE CASTRO ST.ZONE 8 BULAN SORSOGON</span>
          </div>
        </div>
        <div className="font-medium">
          <span>Mon-Fri: 8AM-5PM | Sat: 8AM-4PM | Sun: Closed</span>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="px-5 py-5 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <div className="flex items-center gap-4">
          <WrenchIcon className="w-8 h-8" color="#374151" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 m-0 font-poppins">Starbike</h1>
            <p className="text-sm text-gray-600 font-medium m-0 font-poppins">Expert Motor Repair</p>
          </div>
        </div>
        <ul className="flex list-none m-0 p-0 gap-4 md:gap-8">
          <li><a href="/" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white active:bg-starbike-blue active:text-white">Home</a></li>
          <li><a href="/services" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">Services</a></li>
          <li><a href="/book" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">Book Now</a></li>
          <li><a href="/about" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">About</a></li>
          <li><a href="/contact" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
