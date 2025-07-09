import React from "react";
import cart1 from "../assets/university.png";
import cart2 from '../assets/university.png';
import cart3 from '../assets/school.png';
import cart4 from '../assets/school.png';
function PopularSection() {
  return (
    <section id="popular" className="bg-[#eeeee4]">
      <div className="flex flex-col items-center gap-3 text-center mb-40 md:mb-28">
        <h2 className="title">Education</h2>
       
      </div>
      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* card 1*/}
        <div className=" popular_card bg-[#063970] p-10 pt-24 rounded-md relative">
          <img
            src={cart1}
            alt="cart1"
            className="w-32 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
         <p className="italic">Master of Computer Application-79%
</p><br/>
          <h5>Manonmaniam Sundaranar University, Tirunelveli</h5>
          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          {/* <div className="flex items-center justify-between">
            <p className="text-xl"></p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div> */}
        </div>
        {/* card 1*/}

        <div className=" popular_card bg-[#063970] p-10 pt-24 rounded-md relative">
          <img
            src={cart2}
            alt="cart1"
            className="w-32 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
            <p className="italic">Bachelor of Computer Application-83%
</p><br/>
          <h5>Manonmaniam Sundaranar University Constituent College, Kanyakumari</h5>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          {/* <div className="flex items-center justify-between">
            <p className="text-xl"></p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div> */}
        </div>
        {/* card 1*/}
        <div className=" popular_card bg-[#063970] p-10 pt-24 rounded-md relative">
          <img
            src={cart3}
            alt="cart1"
            className="w-32 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">HSC-76%
</p><br/>
          <h5>Aloysius Hr.Sec. School, Tirunelveli</h5>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          {/* <div className="flex items-center justify-between">
            <p className="text-xl"></p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div> */}
        </div>
        {/* card 1*/}
        <div className=" popular_card bg-[#063970] p-10 pt-24 rounded-md relative">
          <img
            src={cart4}
            alt="cart1"
            className="w-32 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 "
          />
          <p className="italic">SSLC-86%
</p><br/>
          <h5>S.A. Nobel High School, Tirunelveli</h5>

          <div className="text-yellow-500 text-xs py-3 ">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-half-fill"></i>
            <i class="ri-star-line text-gray-400"></i>
            <i class="ri-star-line text-gray-400"></i>
          </div>

          {/* <div className="flex items-center justify-between">
            <p className="text-xl"></p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm  text-xl">
              <i class="ri-shopping-cart-fill"></i>{" "}
            </button>
          </div> */}
        </div>
        
      </div>
    </section>
  );
}

export default PopularSection;
