import React from 'react'

const Contact = () => {
  return (
    
    <div id='form' className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-4" style={{ backgroundImage: "url('banner/Hero_Backgournd.png')"}}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Want to Join with Government Approved Certification</h1>
        <p className="mb-6 text-center">Fill out the form below and our team will connect with you soon.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No:</label>
            <input type="tel" id="mobile" name="mobile" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute Name:</label>
            <input type="text" id="institute" name="institute" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
            <input type="text" id="state" name="state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact