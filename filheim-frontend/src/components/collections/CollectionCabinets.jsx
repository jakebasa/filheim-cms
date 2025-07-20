'use client';

import { MdOutlineZoomOutMap } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../constants/data';

function CollectionCabinets() {
    const [cabinetItems, setCabinetItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedImage, setSelectedImage] = useState(null); // for modal
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setIsLoading(true);
                const projects = await fetchProjects();
                setCabinetItems(projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProjects();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleItems = cabinetItems.slice(0, visibleCount);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    // Cleanup effect to ensure scroll is restored if component unmounts with modal open
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section id='collection-cabinets' className='py-24'>
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
                            {isLoading
                                ? // Skeleton Loading
                                  [...Array(6)].map((_, index) => (
                                      <div
                                          key={index}
                                          className='break-inside-avoid mb-4 overflow-hidden shadow-md relative'
                                      >
                                          <div className='animate-pulse'>
                                              <div className='bg-gray-200 h-64 w-full'></div>
                                              <div className='absolute bottom-4 left-4 bg-gray-200 h-4 w-32 rounded'></div>
                                          </div>
                                      </div>
                                  ))
                                : // Actual content
                                  visibleItems.map((item) => (
                                      <div
                                          key={item.id}
                                          className='break-inside-avoid overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative group cursor-pointer'
                                          onClick={() => openModal(item.image)}
                                      >
                                          <img
                                              src={item.image}
                                              alt={item.title}
                                              className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                                          />
                                          <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
                                          <div className='absolute bottom-4 left-4 text-white font-semibold transition-opacity duration-300 uppercase'>
                                              {item.title}
                                          </div>
                                          <div className='absolute top-4 right-4'>
                                              <button
                                                  className='
                                                bg-white/30 text-[#9A7842] 
                                                p-2 rounded-full 
                                                hover:bg-white/80 hover:shadow-md
                                                transition-all duration-200
                                                focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50
                                            '
                                              >
                                                  <MdOutlineZoomOutMap className='w-4 h-4' />
                                              </button>
                                          </div>
                                      </div>
                                  ))}
                        </div>

                        {/* Load More Button */}
                        {visibleCount < cabinetItems.length && (
                            <div className='flex justify-center mt-8'>
                                <button
                                    onClick={handleLoadMore}
                                    className='text-gray-700 bg-white border border-gray-200 hover:text-[#9A7842] hover:border-[#9A7842]/30 border rounded-sm text-base font-medium px-5 py-2.5 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#9A7842]/30'
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
