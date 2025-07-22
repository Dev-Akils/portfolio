import React from "react";
import hero from "../assets/hero2.png";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <section id="home" className="relative">
      <div className="container p-4">
        {/* blob 1 */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">

        </div>
        {/* blob 2   (blur)*/}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0">

        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* content */}
          <div className="w-full space-y-5 lg:w-1/2">
            <h1>
              <span class="text-yellow-500">Hi, I'm Akila</span> a Software Engineer.<br />

              {/* <span class="text-yellow-500">exploring </span> new <br />
              technologies. */}
            </h1>
            <p className="text-slate-300 font-Lobster text-lg">
              Specializing in web development using React JS and foundational knowledge of Node.js, Express, and MongoDB.
              I'm passionate about building user-friendly applications and continuously exploring new technologies to enhance my skills.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xs:pt-10 ">
              <a href="https://aboutme-yjrl.vercel.app/"><button className="btn">
                <span>About Me</span>
                <i class="ri-leaf-line"></i>
              </button></a>
              <a href="/Software_Engineer_Akila S.pdf" download>
                <button className="btn">
                  <span>Resume</span>
                  <i className="ri-leaf-line"></i>
                </button>
              </a>

            </div>
            <p className="text-slate-300 font-Lobster text-lg">
              I have 2 years of experience in web development.
            </p>
            {/*social media icons */}
            <div className="flex items-center gap-5 text-lg  lg:pt-10 ">
              <i class="ri-facebook-fill text-slate-300 hover:text-yellow-500  duration-300 cursor-pointer "></i>
              <i class="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer  text-base"></i>
              <i class="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
              <i class="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
          {/* image */}
          <div className="w-full  relative lg:w-1/2">
            <img src={hero} alt="herosecimage" className="rounded-full" />
            {/* leaf */}
            <div className="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
              <i class="ri-leaf-line text-6xl text-yellow-500"></i>
            </div>
            {/* flower*/}
            <div className="absolute  bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
              <i class="ri-flower-line text-6xl text-yellow-500"></i>
            </div>
            {/*plant */}
            <div className="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
              <i class="ri-plant-line text-6xl text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
