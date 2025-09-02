import React from 'react';

const Services = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-250px)] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Our Motorcycle Repair Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            We provide comprehensive motorcycle repair services with transparent pricing and expert technicians to get you back on the road safely.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Engine Repair Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
              {/* Gear Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Engine Repair</h3>
              <p className="text-gray-600 mb-6 font-inter">
                Complete engine diagnostics, repair, and maintenance services
              </p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Engine Diagnostics
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Oil Changes
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Tune-ups
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Engine Rebuilds
              </li>
            </ul>
            
            <button className="w-full border-2 border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-starbike-blue hover:text-white hover:border-starbike-blue transition-all duration-300 font-inter mt-auto">
              Book This Service
            </button>
          </div>

          {/* Brake Services Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
              {/* Brake Disc Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Brake Services</h3>
              <p className="text-gray-600 mb-6 font-inter">
                Professional brake inspection, repair and replacement
              </p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Brake Inspection
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Pad Replacement
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Rotor Service
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Brake Fluid
              </li>
            </ul>
            
            <button className="w-full border-2 border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-starbike-blue hover:text-white hover:border-starbike-blue transition-all duration-300 font-inter mt-auto">
              Book This Service
            </button>
          </div>

          {/* Electrical System Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
              {/* Lightning Bolt Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Electrical System</h3>
              <p className="text-gray-600 mb-6 font-inter">
                Electrical repairs and battery services
              </p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Battery Testing
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Alternator Repair
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Starter Service
              </li>
              <li className="flex items-center text-gray-700 font-inter">
                <span className="w-2 h-2 bg-starbike-blue rounded-full mr-3"></span>
                Wiring
              </li>
            </ul>
            
            <button className="w-full border-2 border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-starbike-blue hover:text-white hover:border-starbike-blue transition-all duration-300 font-inter mt-auto">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
