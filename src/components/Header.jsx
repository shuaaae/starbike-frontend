import React, { useState, useRef, useEffect } from 'react';
import { PhoneIcon, LocationIcon, WrenchIcon } from './Icons';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <ul className="flex list-none m-0 p-0 gap-4 md:gap-8 items-center">
          <li>
            <Link 
              to="/" 
              className={`font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white ${
                location.pathname === '/' 
                  ? 'text-starbike-blue border-b-2 border-starbike-blue pb-1' 
                  : 'text-gray-800'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white ${
                location.pathname === '/services' 
                  ? 'text-starbike-blue border-b-2 border-starbike-blue pb-1' 
                  : 'text-gray-800'
              }`}
            >
              Services
            </Link>
          </li>
          <li><a href="/book" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">Book Now</a></li>
          <li><a href="/about" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">About</a></li>
          <li><a href="/contact" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white">Contact</a></li>
          <li>
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-starbike-blue focus:ring-opacity-50"
                >
                  {/* Profile Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="hidden md:inline">{user.name || user.email}</span>
                  {/* Dropdown Arrow */}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        Profile
                      </div>
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                        </svg>
                        Settings
                      </div>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                        </svg>
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-800 font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-starbike-blue hover:text-white active:bg-starbike-blue active:text-white">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
