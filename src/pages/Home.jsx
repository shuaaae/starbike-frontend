import React from 'react';
import { CheckIcon, ClockIcon } from '../components/Icons';
import starbikeLogo from '../assets/img/starbikehome.png';

const Home = () => {
  return (
    <div className="bg-starbike-yellow min-h-[calc(100vh-250px)] px-6 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[400px]">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-[600px] text-left lg:ml-[-100px] ml-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 leading-none font-poppins">
            Motorcycle Services<br />
            You Can Trust
          </h1>
          <div className="text-lg lg:text-xl xl:text-2xl text-gray-800 mb-8 leading-relaxed font-inter space-y-1">
            <div className="whitespace-nowrap">Get your motorcycle back on the road quickly.</div>
            <div className="whitespace-nowrap">We offer comprehensive motorcycle repair services</div>
            <div className="whitespace-nowrap">with honest pricing and quality workmanship.</div>
          </div>
          <button className="bg-starbike-blue text-white border-none px-8 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 mb-10 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl font-inter">
            Book Your Appointment
          </button>
          <div className="flex gap-8">
            <div className="flex items-center gap-3 text-lg text-gray-800 font-medium font-inter">
              <CheckIcon className="w-6 h-6" color="#374151" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-800 font-medium font-inter">
              <ClockIcon className="w-6 h-6" color="#374151" />
              <span>Same Day Services</span>
            </div>
          </div>
        </div>
        
        {/* Right Side - Starbike Logo Image - Much Bigger */}
        <div className="flex-1 flex justify-center items-center lg:ml-8">
          <div className="relative">
            <img 
              src={starbikeLogo} 
              alt="Starbike Logo" 
              className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
