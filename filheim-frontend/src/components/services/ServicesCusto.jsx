'use client';
import { IoArrowForward } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../../constants/data';

function ServicesCusto() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                setIsLoading(true);
                const projects = await fetchProjects();
                // Only take the first 5 images
                setImages(projects.slice(11, 16));
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    // Default images as fallback
    const defaultImages = [
        '/sc5.jpg',
        '/sc1.jpg',
        '/sc2.jpg',
        '/sc3.jpg',
        '/sc4.jpg',
    ];
    const styles = [
        'Transitional',
        'Concord',
        'Classic',
        'Luxor',
        'Minimalist',
    ];

    return (
        <section id='collection-cabinets' className='py-16'>
            <div className='flex justify-center items-center text-left'>
                <div className='w-full max-w-screen-xl px-4'>
                    <div className='space-y-6'>
                        <div className='flex flex-col items-left'>
                            <div className='text-left'>
                                <p className='inline-block text-lg text-[#b0984b] mb-1'>
                                    Why Filheim
                                </p>
                                <h1
                                    className='text-4xl font-bold mb-2'
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                >
                                    Design and Customization
                                </h1>
                                <div
                                    className='justify-between flex md:flex-row flex-col'
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    <p className='text-lg max-w-2xl'>
                                        Custom designs realized through
                                        collaborative vision and meticulous
                                        craftsmanship.
                                    </p>
                                    {/* <button className='flex flex-row gap-2 items-center bg-gray-900 text-white uppercase text-sm p-1 px-4 font-regular hover:font-semibold'>
                                        Read More
                                        <IoArrowForward />
                                    </button> */}
                                </div>
                            </div>

                            <div className='py-4 px-2 mx-auto w-full max-w-screen-xl sm:py-4 lg:px-1'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 h-full'>
                                    {/* First Column - Wines */}
                                    <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col'>
                                        <a
                                            href='#'
                                            className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow'
                                        >
                                            <img
                                                src={images[0]?.image}
                                                alt={
                                                    images[0]?.title ||
                                                    'Concord'
                                                }
                                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                        </a>
                                    </div>

                                    {/* Second Column - Gin and sub-items */}
                                    <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50'>
                                        <a
                                            href='#'
                                            className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 mb-4'
                                        >
                                            <img
                                                src={images[1]?.image}
                                                alt={
                                                    images[1]?.title ||
                                                    'Concord'
                                                }
                                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                        </a>

                                        <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                                            <a
                                                href='#'
                                                className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40'
                                            >
                                                <img
                                                    src={images[2]?.image}
                                                    alt={
                                                        images[2]?.title ||
                                                        'Classic'
                                                    }
                                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                            </a>

                                            <a
                                                href='#'
                                                className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40'
                                            >
                                                <img
                                                    src={images[3]?.image}
                                                    alt={
                                                        images[3]?.title ||
                                                        'Luxor'
                                                    }
                                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col'>
                                        <a
                                            href='#'
                                            className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow'
                                        >
                                            <img
                                                src={images[4]?.image}
                                                alt={
                                                    images[4]?.title ||
                                                    'Minimalist'
                                                }
                                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesCusto;
