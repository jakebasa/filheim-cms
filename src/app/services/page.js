'use client';

import React from 'react';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesCusto from '../../components/services/ServicesCusto';
import ServicesCraftmanship from '../../components/services/ServicesCraftmanship';
import ServicesInstallation from '../../components/services/ServicesInstallation';
import ServicesMaintenance from '../../components/services/ServicesMaintenance';
import ServicesFAQ from '../../components/services/ServicesFAQ';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { getBackgroundImages } from '../../constants/data';

function ServicesPage() {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const loadBackgroundImage = async () => {
            try {
                const images = await getBackgroundImages();
                if (images && images.length > 0) {
                    setBgImage(images[0].image);
                }
            } catch (error) {
                console.error('Error loading background image:', error);
            }
        };

        loadBackgroundImage();
    }, []);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '50vh',
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <ServicesHero />
            </div>
            <ServicesCusto />
            <ServicesCraftmanship />
            <ServicesInstallation />
            {/* <ServicesMaintenance /> */}
            <ServicesFAQ />
        </div>
    );
}

export default ServicesPage;
