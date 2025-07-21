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
                        <div className='grid md:grid-cols-2 items-start gap-8'>
                            <div className='flex justify-end items-end'>
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
                            <div>
                                <div className='pl-10'>
                                    <p className='mt-8 mb-2 text-left text-lg text-[#9A7842]'>
                                        Why you should hire us
                                    </p>
                                    <h1
                                        className='text-4xl font-bold text-left mb-3'
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                        }}
                                    >
                                        Technical - leveled Cabinet Installation
                                    </h1>
                                    <p
                                        className='text-lg max-w-2xl mx-auto text-left'
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
                                        className='pl-10 flex flex-row gap-6 mt-4 items-center group transition duration-200'
                                    >
                                        <div className='p-3 bg-gray-300 rounded-md shadow-md group-hover:shadow-xl transition'>
                                            <SiMaterialformkdocs size={20} />
                                        </div>
                                        <p className='text-lg font-semibold group-hover:text-[#9A7842] transition'>
                                            {feature}
                                        </p>
                                    </div>
                                ))}

                                {/* Bottom Floating Stats */}
                                {/* <div className='relative'>
                                    <div
                                        className='bg-gray-300 p-8 mt-10 grid md:grid-cols-3 md:absolute md:left-[-50px] md:bottom-[-110px] md:w-[calc(100%+50px)] rounded-xl shadow-lg'
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                        }}
                                    >
                                        <p className='font-semibold text-3xl'>
                                            15+{' '}
                                            <span className='text-lg font-normal'>
                                                Years Experience
                                            </span>
                                        </p>
                                        <p className='font-semibold text-3xl'>
                                            1000+{' '}
                                            <span className='text-lg font-normal'>
                                                Projects Completed
                                            </span>
                                        </p>
                                        <p className='font-semibold text-3xl'>
                                            100%{' '}
                                            <span className='text-lg font-normal'>
                                                Customer Satisfaction
                                            </span>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesInstallation;
