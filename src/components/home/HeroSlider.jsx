'use client';
import { useState, useEffect } from 'react';

const HeroSlider = ({ images, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Reorder images to have bg4 first
    const orderedImages = [...images].sort((a, b) => {
        if (a.name === 'bg4') return -1;
        if (b.name === 'bg4') return 1;
        return 0;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className='relative w-full min-h-[700px]'>
            {/* Background Slides */}
            {orderedImages.map((img, index) => (
                <div
                    key={img.name}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${img.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Content */}
            <div className='relative z-20'>{children}</div>

            {/* Navigation Indicators */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50'>
                {orderedImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-[#9A7842] w-6' // Matching the "Book Now" button color
                                : 'bg-[#9A7842]/50' // Semi-transparent version
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
