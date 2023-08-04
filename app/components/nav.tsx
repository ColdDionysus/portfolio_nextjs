"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">P U K A R G A U T A M</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="nav-link mr-5 hover:text-indigo-600 relative cursor-pointer">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="mr-5 hover:text-indigo-600 focus:outline-none cursor-pointer"
            >
              About Me
            </button>
            {showDropdown && (
              <div className="absolute z-10 bg-white py-2 w-40 rounded-md shadow-lg">
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white cursor-pointer"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white cursor-pointer"
                  href="#experience"
                >
                  Experience
                </a>
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white cursor-pointer"
                  href="#social-links"
                >
                  Social Links
                </a>
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white cursor-pointer"
                  href="#download-cv"
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
          <a className="nav-link mr-5 hover:text-indigo-600 relative cursor-pointer">
            Certifications
          </a>
          <a className="nav-link mr-5 hover:text-indigo-600 relative cursor-pointer">
            Services
          </a>
        </nav>
        <button className="text-white inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
          Contact
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div className="nav-link-underline"></div>
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #6b46c1; /* Change this to your desired underline color */
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform-origin: center;
        }

        .nav-link:hover::after {
          opacity: 1;
          transform: scaleX(1.1); /* Change the value to control the underline thickness */
        }

        .nav-link-underline {
          width: 0;
          height: 2px;
          background-color: #6b46c1; /* Change this to your desired underline color */
          transition: width 0.3s;
        }

        .nav-link:hover ~ .nav-link-underline {
          width: 100%;
        }
      `}</style>
    </header>
    </>
  );
}
