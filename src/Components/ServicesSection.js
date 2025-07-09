import React from 'react';
import tech1 from '../assets/tech1.png';
import tech2 from '../assets/htmlcss.png';
import tech3 from '../assets/tech3.png';
import tech4 from '../assets/bootsss.png';
import tech5 from '../assets/tech5.png';
import tech6 from '../assets/tech6.png';
import tech7 from '../assets/tech7.png';
import tech9 from '../assets/tech9.png';

function ServicesSection() {
  return (
    <section id="service">
       
    <div className='bg-white text-[#063970] py-20'>
         <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20 '>
    <h2 className='title'>Tech skills</h2>
   
    </div>
       
        <div className='container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
           {/* cart 1 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-truck-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                 {/*<p className='md:text-lg font-bold'>
                    React js/ Redux
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech1} className=''/>
            </div>

            

            {/* cart 3 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-plant-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                    Html/CSS
                </p>*/}
                </div>
                              {/*  <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */}
                <img src={tech2}/>
            </div>
            {/* cart 4 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-money-dollar-circle-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                   Tailwindcss
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech3}/>
            </div>

            {/* cart 5 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                   JavaScript
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech9} className='object-cover'/>
            </div>

            {/* cart 6 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                   Bootstrap
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech4}/>
            </div>

            {/* cart 7 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                   Git/Github
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech5}/>
            </div>

            {/* cart 8 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                 Node js/Express js
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech6}/>
            </div>

            {/* cart 2 */}
            <div className='border border-[#063970] p-5 cursor-pointer rounded-md hover:-translate-y-1 hover:shadow-2xl duration-300 space-y-5'> 
                <div className='flex items-center gap-5'>
                <i class="ri-customer-service-line" className='text-3xl md:text-4xl xl:text-5xl'></i>
                {/* <p className='md:text-lg font-bold'>
                   mongoDB
                </p>
                </div>
                <p className='font-lobster'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis

                </p> */} </div>
                <img src={tech7}/>
            </div>
            
        </div>
    </div></section>
  )
}

export default ServicesSection