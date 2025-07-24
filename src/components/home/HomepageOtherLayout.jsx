'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function HomepageOtherLayout({ projects }) {
    return (
        <section id='home-products' className='py-20'>
            <div className='flex justify-center items-center text-center'>
                <div className='w-full max-w-screen-lg px-4'>
                    <div className='space-y-6'>
                        <div className=' items-center'>
                            <h1
                                className='text-4xl text-center  font-semibold'
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                Your Visual Moodboard by Filheim
                            </h1>
                            <div
                                className='flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4 md:gap-0'
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery Grid */}
            <div className='bg-white px-12'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    className='mySwiper'
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className='h-96 rounded-sm overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title || 'Project Image'}
                                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* <div className="bg-white px-12">
      <Swiper
        ref={swiperRef}
        spaceBetween={2}
        slidesPerView={5}
        initialSlide={2} // Start with center slide
        centeredSlides={true} // Helps with the centered effect
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
        }}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className="h-96 flex flex-col items-center">
              <div className={`${getSlideHeight(index)} bg-gray-200 mb-4 rounded-lg overflow-hidden transition-all duration-300`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm uppercase tracking-wider text-gray-500">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}
        </section>
    );
}

export default HomepageOtherLayout;
