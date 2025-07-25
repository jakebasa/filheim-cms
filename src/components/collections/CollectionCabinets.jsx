'use client';

import { MdOutlineZoomOutMap } from 'react-icons/md';
import { useState } from 'react';

function CollectionCabinets({ projects = [] }) {
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedImage, setSelectedImage] = useState(null);

    const visibleItems = projects.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 6, projects.length));
    };

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id='collection-cabinets' className='py-24 min-h-screen'>
            <div className='flex justify-center items-center text-center'>
                <div className='w-full max-w-screen-xl px-4'>
                    <div className='space-y-6'>
                        {/* Header */}
                        <div className='flex flex-col items-center'>
                            <h1
                                className='text-4xl font-bold'
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                Bespoke Cabinets
                            </h1>
                            <p
                                className='text-lg max-w-2xl mx-auto'
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Handcrafted storage solutions designed
                                exclusively for your space and lifestyle.
                            </p>
                        </div>

                        {/* Masonry Grid */}
                        <div
                            className='columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            {visibleItems.map((item) => (
                                <div
                                    key={item.id}
                                    className='break-inside-avoid overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer'
                                    onClick={() => openModal(item.image)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
                                    <div className='absolute bottom-4 left-4 text-white font-semibold transition-opacity duration-300 uppercase'>
                                        {item.title}
                                    </div>
                                    <div className='absolute top-4 right-4'>
                                        <button className='bg-white/30 text-[#9A7842] p-2 rounded-full hover:bg-white/80 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50'>
                                            <MdOutlineZoomOutMap className='w-4 h-4' />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {visibleCount < projects.length && (
                            <div className='flex justify-center mt-8'>
                                <button
                                    onClick={loadMore}
                                    className='bg-[#9A7842] text-white px-6 py-2 rounded-md hover:bg-[#7d6135] transition-colors duration-200'
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'
                    onClick={closeModal}
                >
                    <div
                        className='max-w-4xl w-full px-4'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt='Fullscreen'
                            className='w-full h-auto rounded-lg shadow-lg'
                        />
                        <button
                            onClick={closeModal}
                            className='absolute top-6 right-6 text-white bg-black/50 hover:bg-black/80 px-4 py-2 rounded'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CollectionCabinets;
