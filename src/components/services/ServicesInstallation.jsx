'use client';

import { SiMaterialformkdocs } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { getAsideImages } from '../../constants/data';

function ServicesInstallation() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const images = await getAsideImages();
                if (images && images.length > 0) {
                    setImage(images[2].image || null);
                }
            } catch (error) {
                console.error('Error loading background image:', error);
            }
        };

        loadImage();
    }, []);

    return (
        <section
            id='collection-cabinets'
            className='py-24 bg-[#f5f5f5] relative overflow-hidden'
        >
            <div className='flex justify-center items-center text-center'>
                <div className='w-full max-w-screen-xl px-4'>
                    <div className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-8'>
                            {/* Left Image */}
                            <div className='flex justify-center md:justify-end items-end'>
                                {image ? (
                                    <img
                                        src={image}
                                        alt='Installation'
                                        className='h-[500px] w-[450px] object-cover rounded-xl shadow-lg'
                                    />
                                ) : (
                                    <div className='h-[500px] w-[450px] bg-gray-200 animate-pulse rounded-xl' />
                                )}
                            </div>

                            {/* Right Content */}
                            <div>
                                <div className='md:pl-10'>
                                    <p className='mt-4 mb-2 text-left text-lg text-[#9A7842]'>
                                        Why you should hire us
                                    </p>
                                    <h1
                                        className='text-3xl md:text-4xl font-bold text-left mb-3'
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                        }}
                                    >
                                        Technical - leveled Cabinet Installation
                                    </h1>
                                    <p
                                        className='text-base md:text-lg text-left'
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                        }}
                                    >
                                        Precision installation by certified
                                        experts, ensuring seamless integration
                                        with your architecture and flawless
                                        functionality.
                                    </p>
                                </div>

                                {/* Installation Features */}
                                {[
                                    'Professional Measurement & Planning',
                                    'Experienced Installation Team',
                                    'Advanced Tools & Equipment',
                                    'Quality Control & Testing',
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className='md:pl-10 flex flex-col sm:flex-row gap-4 mt-4 items-start sm:items-center group transition duration-200'
                                    >
                                        <div className='p-3 bg-gray-300 rounded-md shadow-md group-hover:shadow-xl transition'>
                                            <SiMaterialformkdocs size={20} />
                                        </div>
                                        <p className='text-base md:text-lg font-semibold group-hover:text-[#9A7842] transition'>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesInstallation;
