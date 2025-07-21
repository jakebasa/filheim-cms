'use client';
import { useEffect, useState } from 'react';
import { getAsideImages } from '../../constants/data';

function HomepageS2() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const images = await getAsideImages();
                if (images && images.length > 0) {
                    setImage(images[0].image || null); // Ensure null if image is empty string
                }
            } catch (error) {
                console.error('Error loading background image:', error);
            }
        };

        loadImage();
    }, []);
    return (
        <section id='collection-hero' className='py-24'>
            <div className='flex justify-center items-center text-left'>
                <div className='w-full max-w-screen-lg px-4'>
                    <div className='space-y-6'>
                        <div className='flex flex-col items-left'>
                            <div className='flex flex-col'>
                                <div>
                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='text-left'>
                                            <p className='text-lg text-[#b0984b] text-left'>
                                                What we do
                                            </p>
                                            <h1
                                                className='mt-1 text-4xl font-bold mb-4 text-left pb-5 relative'
                                                style={{
                                                    fontFamily:
                                                        "'Playfair Display', serif",
                                                }}
                                            >
                                                All About Filheim
                                                {/* <span className="absolute bottom-0 left-0 w-1/2 h-px bg-[#9A7842]"></span> */}
                                                <div className='absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full animate-fade-in animate-delay-300'></div>
                                            </h1>

                                            <div
                                                style={{
                                                    fontFamily:
                                                        "'Inter', sans-serif",
                                                }}
                                            >
                                                <p className='text-lg max-w-2xl'>
                                                    A luxury furniture brand
                                                    redefining cabinetry and
                                                    home design with world-class
                                                    quality, bespoke catalogues,
                                                    and enduring style.
                                                </p>
                                                <p className='text-lg max-w-2xl mt-2'>
                                                    Filheim appeals to
                                                    design-conscious homeowners
                                                    and interior designers by
                                                    demonstrating that
                                                    Filipino-made cabinetry can
                                                    be bespoke, premium, and
                                                    deeply personal. It
                                                    positions itself as an
                                                    alternative to convenient
                                                    local brands and imported
                                                    European brands, crafted for
                                                    those who value design with
                                                    soul.
                                                </p>
                                            </div>

                                            <div
                                                className='grid grid-cols-2 gap-4 mt-8'
                                                style={{
                                                    fontFamily:
                                                        "'Proxima Nova', sans-serif",
                                                }}
                                            ></div>
                                        </div>

                                        <div className=''>
                                            <div className='flex w-full'>
                                                {image ? (
                                                    <img
                                                        src={image}
                                                        alt='Home About Filheim Img'
                                                        className='h-[500px] w-full object-cover'
                                                    />
                                                ) : (
                                                    <div className='h-[500px] w-full bg-gray-200 animate-pulse' />
                                                )}
                                            </div>
                                        </div>
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

export default HomepageS2;
