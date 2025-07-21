'use client';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../../constants/data';

function HomepageProducts() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null); // for modal

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

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setIsLoading(true);
                const fetchedProjects = await fetchProjects();

                // Shuffle array and take first 8 items
                const shuffledProjects = fetchedProjects.sort(
                    () => Math.random() - 0.5
                );
                const selectedProjects = shuffledProjects
                    .slice(0, 8)
                    .map((project) => ({
                        id: project.id,
                        image: project.image,
                        title: project.name || 'Featured Project',
                    }));

                setProjects(selectedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadProjects();
    }, []);

    return (
        <section
            id='home-products'
            className='py-20'
            style={{
                backgroundColor: '#EEEEEE',
                minHeight: '500px',
            }}
        >
            <div className='flex justify-center items-center text-center'>
                <div className='w-full max-w-screen-xl px-4'>
                    <div className='space-y-6'>
                        <div className='items-center'>
                            <h1
                                className='text-4xl text-left font-semibold'
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                }}
                            >
                                Featured Projects
                            </h1>
                            <div className='mb-6'>
                                <p
                                    className='text-lg max-w-2xl text-left'
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    Custom designs realized through
                                    collaborative vision and meticulous
                                    craftsmanship.
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery Grid */}
                        <div className='flex flex-col md:flex-row md:flex-wrap gap-3'>
                            {isLoading
                                ? // Loading skeletons
                                  [...Array(8)].map((_, index) => (
                                      <div
                                          key={`skeleton-${index}`}
                                          className={`animate-pulse bg-gray-200 ${
                                              [0, 3, 4, 7].includes(index)
                                                  ? 'md:w-[calc(66.666%_-_0.375rem)]'
                                                  : 'md:w-[calc(33.333%_-_0.375rem)]'
                                          }`}
                                          style={{ height: '256px' }}
                                      />
                                  ))
                                : projects.map((item, index) => {
                                      const isWideItem = [0, 3, 4, 7].includes(
                                          index
                                      );
                                      return (
                                          <div
                                              key={item.id}
                                              className={`group relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                                                  isWideItem
                                                      ? 'md:w-[calc(66.666%_-_0.375rem)]'
                                                      : 'md:w-[calc(33.333%_-_0.375rem)]'
                                              }`}
                                              style={{ height: '256px' }}
                                              onClick={() =>
                                                  openModal(item.image)
                                              }
                                          >
                                              <img
                                                  src={item.image}
                                                  alt={item.title}
                                                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                              />
                                              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
                                              {/* <div className='absolute bottom-4 left-4 text-white transition-opacity duration-300 uppercase'>
                                                  {item.title}
                                              </div> */}
                                              <div className='absolute top-4 right-4'>
                                                  <button
                                                      className='bg-white/90 text-[#9A7842] p-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50'
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          openModal(item.image);
                                                      }}
                                                  >
                                                      <MdOutlineZoomOutMap className='w-4 h-4' />
                                                  </button>
                                              </div>
                                          </div>
                                      );
                                  })}
                        </div>
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

export default HomepageProducts;
