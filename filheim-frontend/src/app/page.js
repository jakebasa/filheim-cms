'use client';

import HomepageS2 from '../components/home/HomepageS2';
import HomepageS1 from '../components/home/HomepageS1';
import HomepageCTA from '../components/home/HomepageCTA';
import HomepageProducts from '../components/home/HomepageProducts';
import HomepageIntro2 from '../components/home/HomepageIntro2';
import HomepageOtherLayout from '../components/home/HomepageOtherLayout';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { getBackgroundImages } from '../constants/data';

export const Home = () => {
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
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '700px',
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <HomepageS1 />
            </div>

            <HomepageS2 />
            <HomepageIntro2 />
            <HomepageProducts />
            <HomepageOtherLayout />
            <HomepageCTA />
        </div>
    );
};

export default Home;
