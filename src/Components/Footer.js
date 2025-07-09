import React from "react";
import floral from "../assets/floral-1.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



function Footer() {
  return (
    <footer className="bg-gray-50 text-green-950 pt-20 pb-10 md:pt-28 relative">
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
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start w-full bg-gray-50 py-6 mt-10">
        {/* item1 */}
        <div className="text-7xl text-[#063970] text-center inline-block ">
          <div>
            <i class="ri-leaf-fill"></i>
            <p className="font-Lobster text-xl sm:text-2xl  "> Akil's Portfolio</p>
          </div>
        </div>

        {/*  item 2*/}
        <div>
          <p className="mb-5 font-bold text-xl ">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#about">About Me</a>
            <a href="#reviewsection">Projects</a>
            <a href="#popular">Education</a>

          </div>
        </div>

        {/*  item 3*/}
        <div>
          <p className="mb-5 font-bold text-xl ">Social Media</p>
          <div className="flex flex-col gap-1">
            <a href="https://www.linkedin.com/in/akila-s-02a8ab244/" className="flex items-center gap-1">
<TiSocialLinkedin size={20}/>linkedin</a>
            <a href="https://github.com/dev-Akils" className="flex items-center gap-1">
<FaGithub size={20}/>github</a>
           
          </div>
        </div>

        {/*  item 4*/}
        <div>
          <p className="mb-5 font-bold text-xl ">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="tel:+8833378901" className="flex items-center gap-1"><FaPhoneAlt />+91 9025195039</a>
            <a href="mailto:lightcodecamp@gmail.com" className="flex items-center gap-1"><MdEmail />suyambuakila2000@gmail.com</a>
            <br />
            <p className="flex items-center gap-1"> <IoLocation />Koramangala,Bangalore-560034.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
     
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">portfolio</span>. All rights reserved.
          </p>
        </div>
    


      {/* floral image */}
      <div className="absolute bottom-0 lefft-0 opacity-20 pointer-events-none ">
        <img src={floral} alt="footer" className="w-full lg:w-1/2" />
      </div>
    </footer>
  );
}

export default Footer;
