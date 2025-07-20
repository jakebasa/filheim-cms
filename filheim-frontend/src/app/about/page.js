'use client';

import AboutHero from '../../components/about/AboutHero';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import {
    getBackgroundImages,
    fetchProjects,
    getTeamImages,
    getCeosImages,
} from '../../constants/data';

function AboutPage() {
    const [bgImage, setBgImage] = useState('');
    const [chooseProjects, setChooseProjects] = useState([]);
    const [isChooseLoading, setIsChooseLoading] = useState(true);
    const [ceoData, setCeoData] = useState(null);
    const [teamMembers, setTeamMembers] = useState([]);
    const [isTeamLoading, setIsTeamLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Load background image
                const images = await getBackgroundImages();
                if (images && images.length > 0) {
                    setBgImage(images[0].image);
                }

                // Load projects for Why Choose section
                setIsChooseLoading(true);
                const allProjects = await fetchProjects();

                // Create a deterministic shuffle using a seed
                const seed = 'filheim-choose'; // Using a constant seed for consistent randomization
                const seededRandom = (str) => {
                    let h = 1779033703 ^ str.length;
                    for (let i = 0; i < str.length; i++) {
                        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
                        h = (h << 13) | (h >>> 19);
                    }
                    return () => {
                        h = Math.imul(h ^ (h >>> 16), 2246822507);
                        h = Math.imul(h ^ (h >>> 13), 3266489909);
                        return (h ^= h >>> 16) >>> 0;
                    };
                };

                const shuffledProjects = [...allProjects]
                    .sort((a, b) => {
                        const random = seededRandom(seed + a.id + b.id);
                        return 0.5 - random() / 4294967296;
                    })
                    .slice(0, 4);

                setChooseProjects(shuffledProjects);
                setIsChooseLoading(false);

                // Load CEO data
                const ceosData = await getCeosImages();
                if (ceosData.length > 0) {
                    setCeoData(ceosData[0]); // Get the first CEO's data
                }

                // Load team members
                setIsTeamLoading(true);
                const teamData = await getTeamImages();
                setTeamMembers(teamData);
                setIsTeamLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                setIsChooseLoading(false);
                setIsTeamLoading(false);
            }
        };

        loadData();
    }, []);

    const whyChooseContent = [
        {
            title: 'Bespoke Solutions',
            description:
                'Tailored to your vision—each space is uniquely crafted to reflect your story.',
            icon: '01',
        },
        {
            title: 'Premium Materials',
            description:
                'We source only the finest finishes and textures that exude sophistication.',
            icon: '02',
        },
        {
            title: 'Expert Installation',
            description:
                'Our seasoned artisans ensure every piece is flawlessly integrated.',
            icon: '03',
        },
        {
            title: 'Lifetime Support',
            description:
                'We stand behind our work with unmatched post-project care and service.',
            icon: '04',
        },
    ];

    return (
        <div className='min-h-screen bg-white text-gray-800'>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '370px',
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <AboutHero />

                {/* <div className="flex flex-col justify-center items-center text-center text-white py-24 animate-fade-in">
          <h1 className="text-4xl sm:text-7xl font-gotham font-bold mb-6 uppercase text-gold drop-shadow-xl">About Us</h1>
          <p className="max-w-3xl text-xl sm:text-2xl px-4 text-white/80 italic font-light animate-fade-in animate-delay-200">A story of timeless craftsmanship, design philosophy, and enduring elegance.</p>
          <div className="mt-8 w-28 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full animate-fade-in animate-delay-300" />
        </div> */}
            </div>

            {/* Our Story Section */}
            <section className='py-24 px-4 sm:px-10 bg-white'>
                <div className='max-w-5xl mx-auto text-center space-y-8'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wider text-black'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Story
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-gray-700 leading-relaxed'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        From a humble vision to a legacy of refined interiors,
                        Filheim was born out of a passion for timeless design.
                        We blend heritage with innovation to curate luxurious
                        spaces that celebrate individuality and exceptional
                        living.
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className='py-24 px-4 sm:px-10 bg-gray-50'>
                <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
                    {ceoData ? (
                        <img
                            src={ceoData.image}
                            alt={ceoData.name}
                            className='w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500'
                        />
                    ) : (
                        <div className='w-full h-[600px] rounded-2xl bg-gray-200 animate-pulse' />
                    )}
                    <div className='space-y-6'>
                        <h3
                            className='text-3xl sm:text-4xl font-bold tracking-wider text-[#b0984b]'
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {ceoData ? ceoData.name : 'Loading...'}
                        </h3>
                        <p className='text-xl font-light italic text-gray-600'>
                            Founder & Creative Director
                        </p>
                        <p
                            className='text-gray-700 text-lg leading-relaxed'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Marcus established Filheim with the belief that true
                            luxury should be personal, purposeful, and enduring.
                            His philosophy is evident in every detail we
                            deliver—meticulous, meaningful, and unmistakably
                            bespoke.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className='py-24 px-4 sm:px-10 bg-black text-white'>
                <div className='text-center max-w-4xl mx-auto mb-20'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wide'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Why Choose Filheim
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-white/80 mt-4'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Experience the distinctive elements that define our
                        refined approach.
                    </p>
                    <div className='mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto' />
                </div>
                <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    {isChooseLoading
                        ? // Loading skeletons
                          [...Array(4)].map((_, idx) => (
                              <div
                                  key={`skeleton-${idx}`}
                                  className='animate-pulse rounded-2xl overflow-hidden border border-white/10'
                              >
                                  <div className='w-full h-64 bg-gray-700'></div>
                                  <div className='absolute inset-0 bg-black/60 p-6 flex flex-col justify-end'>
                                      <div className='h-6 bg-gray-600 rounded w-1/2 mb-2'></div>
                                      <div className='h-4 bg-gray-600 rounded w-3/4'></div>
                                  </div>
                              </div>
                          ))
                        : chooseProjects.map((project, idx) => {
                              const content = whyChooseContent[idx];
                              return (
                                  <div
                                      key={idx}
                                      className='group relative rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-all duration-300'
                                  >
                                      <img
                                          src={project.image}
                                          alt={content.title}
                                          className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500'
                                      />
                                      <div className='absolute inset-0 bg-black/60 p-6 flex flex-col justify-end backdrop-blur-sm'>
                                          <h3 className='text-2xl font-gotham font-bold text-white mb-2'>
                                              {content.title}
                                          </h3>
                                          <p className='text-white/90 font-light'>
                                              {content.description}
                                          </p>
                                      </div>
                                  </div>
                              );
                          })}
                </div>
            </section>

            {/* Team Section */}
            <section className='py-24 px-4 sm:px-10 bg-white'>
                <div className='text-center mb-16'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wide'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Team
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        The people behind every signature piece and immersive
                        space.
                    </p>
                    <div className='mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto'>
                    {isTeamLoading
                        ? // Loading skeletons
                          [...Array(4)].map((_, i) => (
                              <div
                                  key={`skeleton-${i}`}
                                  className='animate-pulse'
                              >
                                  <div className='bg-gray-200 h-64 sm:h-72 rounded-xl'></div>
                                  <div className='p-4'>
                                      <div className='h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2'></div>
                                      <div className='h-3 bg-gray-200 rounded w-1/2 mx-auto'></div>
                                  </div>
                              </div>
                          ))
                        : teamMembers.map((member, i) => (
                              <div
                                  key={i}
                                  className='group overflow-hidden rounded-xl shadow hover:shadow-xl transition-all'
                              >
                                  <div className='aspect-w-4 aspect-h-5 relative'>
                                      <img
                                          src={member.image}
                                          alt={member.name}
                                          className='w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300'
                                      />
                                  </div>
                                  <div className='p-4 text-center'>
                                      <h4 className='font-semibold text-lg text-gray-800'>
                                          {member.name}
                                      </h4>
                                      <p className='text-sm text-gray-500'>
                                          {member.position}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
