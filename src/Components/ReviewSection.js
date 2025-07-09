import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Updated import for Swiper modules
import "swiper/css";
import "swiper/css/pagination";
import reviewImage from "../assets/review-1.jpg";
import leafImage from "../assets/leaf-1.png";
import SelfProjects from "./SelfProjects";

function ReviewSection() {
  const reviews = [
    {
      text: "Academy Website-Designed a multi-device responsive layout using Tailwind CSS and Material-UI components like Tabs, Grid, and FormControls and Ensured seamless API integration and smooth user experience",
      name: "Academy Website",
      role: "Designer",
      image: reviewImage,
    },
    {
      text: "Admin Panel-Created a powerful dashboard to manage user KYC,crypto, and fiat transactions using React.js, Redux, and Axios. and Prioritized component reusability and data visualization.",
      name: "Admin Panel",
      role: "Developer",
      image: reviewImage,
    },
    {
      text: "Sports Club Website-Developed a clean, user-friendly website for a local sports club using React.js and Material-UI and Focused on responsive design and intuitive navigation.",
      name: "Sports club website",
      role: "Manager",
      image: reviewImage,
    },
    {
      text: "Fintech Dashboard-Developed UI screens to view active users and display data for modules like E-Pay and Personal Loan.Implemented user filtering functionality and updating user details through dynamic forms.",
      name: "Fintech Dashboard",
      role: "Manager",
      image: reviewImage,
    },
  
  ];

  return (
    <section id="reviewsection" className="relative mb-20 md:mb-28 overflow-hidden">
      {/* Decorative Leaf */}
      <div className="absolute -top-8 -left-12 opacity-50">
        <img src={leafImage} alt="Decorative Leaf" className="w-40 md:w-52" />
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title"> Projects</h2>
        <p className="max-w-2xl">These are my company projects</p>
      </div>

      {/* Swiper Section */}
      <div className="container py-12 ">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-[#eeeee4] rounded-md p-6 text-[#063970]">
                <p className="font-Lobster">{review.text}</p>
                <div className="flex items-center mt-4">
                                    {/* <img
                    src={review.image}
                    alt={`${review.name}'s review`}
                    className="w-12 h-12 rounded-full"
                  /> */}
<div className="ml-4">
                    <p className="text-yellow-500 uppercase">{review.name}</p>
                    {/* <p>{review.role}</p> */}
                  </div>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>


      <div className="flex flex-col items-center gap-3 text-center mb-5 md:mb-5">
        
       <div className="flex flex-col items-center gap-3 text-center mb-8 md:mb-8">
        <h2 className="title"> Projects</h2>
        <p className="max-w-2xl">These are my Self-Projects</p>
        <div className="container py-12">
<SelfProjects/>
        </div>
      </div>
      </div>
        
    </section>
  );
}

export default ReviewSection;
