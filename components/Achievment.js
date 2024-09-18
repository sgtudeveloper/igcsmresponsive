import Image from 'next/image';
import React from 'react';

const Achievement = () => {
  return (
    <div id="achievements" className="bg-gray-100 px-10 py-6 rounded-lg shadow-md pt-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center pb-4">
        Our Achievements
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/24/National_Agricultural_Cooperative_Marketing_Federation_of_India_Logo.jpg"
              alt="Achievement 1"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-600 text-lg font-semibold italic text-center">
              Empaneled with NAFED - Farmer's Corporation
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="image/ministries.png"
              alt="Achievement 2"
              className="w-full h-40 object-cover mb-4"
            />
            <p className="text-gray-600 text-lg font-semibold italic text-center">Empaneled with 19 Government Ministries</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/image/nsdc.png"
              alt="Achievement 3"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-600 text-lg font-semibold italic text-center">Non-Funded Partnership with NSDC.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/image/titp.jpeg"
              alt="Achievement 4"
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-600 text-lg font-semibold italic text-center">International Collaboration - TITP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;