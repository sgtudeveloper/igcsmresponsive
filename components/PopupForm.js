"use client"
import React, { useState } from 'react'


const PopupForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    phoneNumber: "",
    email: "",
    institutionName: "",
    districtName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const notification = () => {
  document.getElementById('notification').classList.toggle('hidden');
  setTimeout(() => {
    document.getElementById('notification').classList.toggle('hidden');
  }, 1500);
}
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitdata = await fetch("https://api.igcsm.online/api/franchisee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (submitdata.ok) {
      setFormData({
        yourName: "",
        phoneNumber: "",
        email: "",
        institutionName: "",
        districtName: "",
      });
      document.getElementById('my_modal_4').close();
      notification();
    }
    console.log(formData);
  };

  return (
    <>
      <div id="notification" className="hidden">
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">Form Submitted Successfully!!</span>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal px-4">
        <div
          className="modal-box w-full max-w-lg p-6 shadow-md"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            opacity: "0.9",
            backgroundColor: "#f0f0f0",
          }}
        >
          <h3 className="font-bold text-3xl underline mb-4 text-center text-orange-500">
            Contact Us
          </h3>
          <form className="space-y-4 text-black" onSubmit={handleSubmit}>
            <div>
              <label className="block text-md font-bold">Name</label>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-md font-bold">Contact No</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-md font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-bold">
                Institution Name
              </label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-md font-bold">District</label>
              <textarea
                name="districtName"
                value={formData.districtName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="modal-action">
              <input
                type="submit"
                className="btn bg-green-600 text-white"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default PopupForm