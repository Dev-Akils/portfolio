import React from 'react'
import aboutus from '../assets/leaf-3.png';
import plant1 from '../assets/about1.png';
import plant2 from '../assets/about2.png'
function AboutUs() {
  return (
    <section id="about" className='relative overflow-hidden p-4'>
    <div className='absolute -top-8 -right-12 opacity-50'>
    <img src={aboutus} alt="aboutus" className='w-40 md:52 xl:w-64'/>

    </div>
    <div className='flex flex-col items-center gap-3 text-center mb-5 md:mb-10  '>
    <h2 className='title'>About Me</h2>
    <p className='max-w-2xl'> CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.</p>
    </div>
    <div className='container space-y-10 xl:space-y-0 '>
        {/* item 1 */}
        <div className='flex flex-col items-center lg:flex-row gap-5'>
            {/* image */}
            <div className='w-full lg:w-1/2'>
                <img src={plant1} className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx:auto rounded-full' alt="about_image"/>

            </div>
            {/* content */}
            <div className='w-full lg:w-1/2 '> 
                <div className='space-y-5'>
                    <h3>
                   Frontend <span class="text-yellow-500">Frameworks</span>  <br/>


                    </h3>
                    <p className='text-slate-300 font-Lobster'>
                   ⚡ I build responsive Single Page Applications (SPA) using React.js, ensuring smooth navigation and dynamic user experiences.<br/>

⚡ I create fast and responsive static websites with Next.js, optimized for performance and SEO.


                    </p>
                </div>
            </div>
        </div>


         {/* item 2 */}
         <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
            {/* image */}
            <div className='w-full lg:w-1/2'>
                <img src={plant2} className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx:auto rounded-full' alt="about_image"/>

            </div>
            {/* content */}
            <div className='w-full lg:w-1/2 '> 
                <div className='space-y-5'>
                    <h3>
                    UI/UX &
<span class="text-yellow-500"> Styling</span> 


                    </h3>
                    <p className='text-slate-300 font-Lobster'>
                   ⚡ For styling and UI design, I efficiently use Tailwind CSS and Bootstrap to craft clean, modern, and mobile-friendly interfaces.       </p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutUs