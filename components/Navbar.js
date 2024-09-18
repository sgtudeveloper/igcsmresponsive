import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from "@/public/image/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Image src={logo} width={200} alt="IGCSM" />
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl box-border hidden lg:inline">
          <Image src={logo} width={200} alt="IGCSM" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#form">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4 animate-bounce-slow pr-4">
          <a
            href="mailto:info@igtiindia.org"
            className="hover:text-yellow-300 transition duration-300 underline hidden sm:inline-flex items-center"
          >
            <FaEnvelope className="mr-2" /> info@igtiindia.org
          </a>
          <a
            href="tel:+919818841248"
            className="hover:text-yellow-300 transition duration-300 inline-flex items-center"
          >
            <FaPhone className="mr-2" /> +91 981 884 1248
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;