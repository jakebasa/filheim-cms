'use client';

import { MdOutlineZoomOutMap } from 'react-icons/md';
import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchProjects } from '../../constants/data';

function CollectionCabinets() {
    const [cabinetItems, setCabinetItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load projects on mount
    useEffect(() => {
        const loadProjects = async () => {
            try {
                setIsLoading(true);
                const projects = await fetchProjects();
                console.log("Fetched projects:", projects.length);
                setCabinetItems(projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProjects();
    }, []);

    // Intersection observer for infinite scroll
    const observer = useRef();
    const lastElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && visibleCount < cabinetItems.length) {
                        setVisibleCount((prev) => prev + 6);
                    }
                },
                {
                    root: null,
                    rootMargin: '200px',
                    threshold: 0.1,
                }
            );
            if (node) observer.current.observe(node);
        },
        [isLoading, cabinetItems.length, visibleCount]
    );

    const visibleItems = cabinetItems.slice(0, visibleCount);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section id='collection-cabinets' className='py-24 min-h-screen'>
            <div className='flex justify-center items-center text-center'>
                <div className='w-full max-w-screen-xl px-4'>
                    <div className='space-y-6'>
                        {/* Header */}
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl font-bold' style={{ fontFamily: "'Playfair Display', serif" }}>
                                Bespoke Cabinets
                            </h1>
                            <p className='text-lg max-w-2xl mx-auto' style={{ fontFamily: "'Inter', sans-serif" }}>
                                Handcrafted storage solutions designed exclusively for your space and lifestyle.
                            </p>
                        </div>

                        {/* Masonry Grid */}
                        <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4' style={{ fontFamily: "'Inter', sans-serif" }}>
                            {isLoading
                                ? [...Array(6)].map((_, index) => (
                                      <div key={index} className='break-inside-avoid mb-4 overflow-hidden shadow-md relative'>
                                          <div className='animate-pulse'>
                                              <div className='bg-gray-200 h-64 w-full'></div>
                                              <div className='absolute bottom-4 left-4 bg-gray-200 h-4 w-32 rounded'></div>
                                          </div>
                                      </div>
                                  ))
                                : visibleItems.map((item) => (
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
                                                  className='bg-white/30 text-[#9A7842] p-2 rounded-full hover:bg-white/80 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50'
                                              >
                                                  <MdOutlineZoomOutMap className='w-4 h-4' />
                                              </button>
                                          </div>
                                      </div>
                                  ))}
                        </div>

                        {/* Infinite scroll sentinel */}
                        {!isLoading && visibleCount < cabinetItems.length && (
                            <div ref={lastElementRef} className='h-1 mt-4'></div>
                        )}

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className='flex justify-center mt-8'>
                                <div className='animate-pulse flex space-x-2'>
                                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                                    <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center' onClick={closeModal}>
                    <div className='max-w-4xl w-full px-4' onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt='Fullscreen' className='w-full h-auto rounded-lg shadow-lg' />
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
