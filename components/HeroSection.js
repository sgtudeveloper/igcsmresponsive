"use client"
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 relative md:pl-24 md:pr-24 h-screen"
    >
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-repeat"
        style={{
          backgroundImage:
            "url(/banner/Hero_Backgournd.png)",
        }}
      ></div>
      <div className="flex flex-col items-start md:w-3/4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Join India&apos;s No-1 Franchise Network
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Get a chance to join with us and boost your business.
        </p>
        <button
          className="mx-auto sm:mx-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Contact Us!
        </button>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0 relative z-10">
        <Image
          src="/image/hero_banner.jpg"
          width={300}
          height={300}
          alt="Hero Banner"
          className="animate-bounce-slow"
        />
      </div>
    </div>
  );
};

export default HeroSection;