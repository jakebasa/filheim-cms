import React from 'react';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesCusto from '../../components/services/ServicesCusto';
import ServicesCraftmanship from '../../components/services/ServicesCraftmanship';
import ServicesInstallation from '../../components/services/ServicesInstallation';
import ServicesMaintenance from '../../components/services/ServicesMaintenance';
import ServicesFAQ from '../../components/services/ServicesFAQ';
import Navbar from '../../components/Navbar';
function ServicesPage() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/bg.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '370px',
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
            <ServicesMaintenance />
            <ServicesFAQ />
        </div>
    );
}

export default ServicesPage;
