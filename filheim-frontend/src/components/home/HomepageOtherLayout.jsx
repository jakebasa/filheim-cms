import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bgKitchen from '../../assets/cc.png';
import bgBathroom from '../../assets/cc-2.jpg';
import bgWardrobe from '../../assets/cc-3.jpg';
import bgLivingArea from '../../assets/cc-4.jpg';

import { projects } from '../../constants/data';

function HomepageOtherLayout() {
    const [activeIndex, setActiveIndex] = useState(2); // Start with center slide active
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const getSlideHeight = (slideIndex) => {
        const distanceFromCenter = Math.abs(slideIndex - activeIndex);

        if (distanceFromCenter === 0) {
            return 'h-80'; // Center slide - shortest
        } else if (distanceFromCenter === 1) {
            return 'h-96'; // Adjacent slides - medium
        } else if (distanceFromCenter === 2) {
            return 'h-80'; // Next adjacent - shorter again
        } else {
            return 'h-96'; // All others - default height
        }
    };

    useEffect(() => {
        // Initialize Swiper instance when component mounts
        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }
    }, []);

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
                    modules={[]}
                    spaceBetween={2}
                    slidesPerView={5}
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
                            <div className='h-full'>
                                <div className='h-96 bg-gray-200 mb-4 rounded-sm overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                                    />
                                </div>
                                <span className='text-sm uppercase tracking-wider text-gray-500'>
                                    {project.category}
                                </span>
                                <h3 className='text-2xl font-bold mt-2'>
                                    {project.title}
                                </h3>
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
