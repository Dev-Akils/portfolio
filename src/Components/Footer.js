import React from "react";
import floral from "../assets/floral-1.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



function Footer() {
  return (
    <footer className="bg-gray-50 text-green-950 pt-20 pb-10 md:pt-28 relative p-4">
      {/* newsletter
      <div className="container text-[#063970] absolute top-0 right-0 left-0 -translate-y-1/2">
        <div className="bg-[#eeeee4] px-10 pt-5 pb-10 space-y-5 rounded-md ">
          <h3>
            {" "}
            <span class="text-yellow-500">Subscribe</span> to our newsletter
          </h3>

          <div className="flex flex-col md:flex-row gap-1">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
            />
            <button className="flex items-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
              <span className="text-white">Subscribe</span>
              <i class="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>
      </div> */}

      {/* social icon */}

      <div className="container mt-16 mb-10 ">
        <div className="border-b border-[#063970] relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0  max-w-36 mx-auto">
            <div className=" text-lg text-center space-x-2">
              <i class="ri-facebook-fill  hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i class="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i class="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i class="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 bg-gray-50 text-start  w-full py-10 mt-10 px-4">
        {/* Item 1: Logo and Title */}
        <div className="flex flex-col ">
          <i className="ri-leaf-fill text-7xl text-[#063970] mb-2" />
          <p className="font-Lobster text-2xl text-[#063970]">Akil's Portfolio</p>
        </div>

        {/* Item 2: Quick Links */}
        <div>
          <p className="mb-4 font-bold text-xl text-[#063970]">Quick Links</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <a href="#about" className="hover:text-[#063970] transition">About Me</a>
            <a href="#reviewsection" className="hover:text-[#063970] transition">Projects</a>
            <a href="#popular" className="hover:text-[#063970] transition">Education</a>
          </div>
        </div>

        {/* Item 3: Social Media */}
        <div>
          <p className="mb-4 font-bold text-xl text-[#063970]">Social Media</p>
          <div className="flex flex-col gap-3 text-gray-700">
            <a
              href="https://www.linkedin.com/in/akila-s-02a8ab244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition"
            >
              <TiSocialLinkedin size={22} className="text-blue-600" />
              LinkedIn
            </a>

            <a
              href="https://github.com/dev-Akils"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <FaGithub size={22} className="text-gray-700" />
              GitHub
            </a>
          </div>
        </div>

        {/* Item 4: Contact Info */}
        <div>
          <p className="mb-4 font-bold text-xl text-[#063970]">Contact</p>
          <div className="flex flex-col gap-3  text-gray-700 text-sm">
            <a href="tel:+919025195039" className="flex items-center gap-2 hover:text-green-700 transition">
              <FaPhoneAlt /> +91 90251 95039
            </a>
            <a href="mailto:suyambuakila2000@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition">
              <MdEmail /> suyambuakila2000@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <IoLocation /> Koramangala, Bangalore - 560034
            </p>
          </div>
        </div>
      </div>


      {/* Copyright */}

      <div className="container mx-auto px-4">
        <p className="md:text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">portfolio</span>. All rights reserved.
        </p>
      </div>



      {/* floral image */}
      <div className="absolute bottom-0 lefft-0 opacity-20 pointer-events-none ">
        <img src={floral} alt="footer" className="w-full lg:w-1/2" />
      </div>
    </footer >
  );
}

export default Footer;
