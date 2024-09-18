import React from 'react'
import { FaHeadset, FaClipboardCheck, FaCheckCircle, FaStar } from 'react-icons/fa'

const CardComponent = () => {
  return (
    <div className="pt-8 bg-gray-100 p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Why Choose Us</h1>
        <p className="text-lg text-gray-600 mt-2">Discover the benefits of our services</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-lg p-6 max-w-sm w-full hover:shadow-xl transition-shadow duration-300 relative">
          <FaStar className="absolute top-2 right-2 text-yellow-300 text-2xl" />
          <h2 className="text-2xl font-bold mb-4 flex items-center"><FaHeadset className="mr-2" /> Online Support</h2>
          <ul className="space-y-2">
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">1. 24/7 Assistance</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">2. Live Chat</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">3. Email Support</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg rounded-lg p-6 max-w-sm w-full hover:shadow-xl transition-shadow duration-300 relative">
          <FaStar className="absolute top-2 right-2 text-yellow-300 text-2xl" />
          <h2 className="text-2xl font-bold mb-4 flex items-center"><FaClipboardCheck className="mr-2" /> Online Examination</h2>
          <ul className="space-y-2">
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">1. Mock Tests</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">2. Real-time Results</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">3. Performance Analysis</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-red-400 to-pink-500 shadow-lg rounded-lg p-6 max-w-sm w-full hover:shadow-xl transition-shadow duration-300 relative">
          <FaStar className="absolute top-2 right-2 text-yellow-300 text-2xl" />
          <h2 className="text-2xl font-bold mb-4 flex items-center"><FaCheckCircle className="mr-2" /> Online Verification</h2>
          <ul className="space-y-2">
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">1. Document Verification</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">2. Identity Check</li>
            <li className="text-lg font-semibold hover:text-white transition-colors duration-300">3. Background Check</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardComponent