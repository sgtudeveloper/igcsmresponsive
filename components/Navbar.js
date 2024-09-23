import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from "@/public/image/logo.webp";

const Navbar = () => {
  return (
    <div
      className="navbar bg-transparent backdrop-blur-sm
      border top-0 sticky z-50 shadow-md"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <svg
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
            </svg> */}
            <Image src={logo} width={200} alt="IGCSM" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Image src={logo} width={200} alt="IGCSM" />
            </li>
            <li>
              <a className="hover:text-yellow-300 transition duration-300 md:text-xl font-bold underline text-slate">
                Item 1
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-300 transition duration-300 md:text-xl font-bold underline text-slate">
                Parent
              </a>
              <ul className="p-2">
                <li>
                  <a className="hover:text-yellow-300 transition duration-300 md:text-xl font-bold underline text-slate">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-300 transition duration-300 md:text-xl font-bold underline text-slate">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:text-yellow-300 transition duration-300 md:text-xl font-bold underline text-slate">
                Item 3
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost hover:bg-transparent text-xl box-border hidden lg:inline">
          <Image src={logo} width={200} alt="IGCSM" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-5xl">
        <ul className="menu menu-horizontal px-1 space-x-4 text-orange-500">
          <li>
            <a
              href="#home"
              className="font-bold hover:underline hover:bg-transparent transition duration-300 md:text-xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className="font-bold hover:underline hover:bg-transparent transition duration-300 md:text-xl"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#form"
              className="font-bold hover:underline hover:bg-transparent transition duration-300 md:text-xl"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4  pr-4">
          <a
            href="mailto:info@igtiindia.org"
            className="hover:text-orange-500 transition duration-300 underline hidden sm:inline-flex items-center"
          >
            <FaEnvelope className="mr-2" /> info@igtiindia.org
          </a>
          <a
            href="tel:+919818841248"
            className="hover:text-orange-500 transition duration-300 inline-flex items-center underline"
          >
            <FaPhone className="mr-2 text-sm" /> 981 884 1248
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;