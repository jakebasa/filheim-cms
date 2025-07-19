import React from 'react';
import HomepageS2 from '../components/Home/HomepageS2';
import HomepageS1 from '../components/home/HomepageS1';
import Navbar from '../components/Navbar';
import bgImg from '../assets/bg.png';
import HomepageCTA from '../components/home/HomepageCTA';
import HomepageProducts from '../components/home/HomepageProducts';
import HomepageIntro2 from '../components/home/HomepageIntro2';
import HomepageOtherLayout from '../components/home/HomepageOtherLayout';

export const Home = () => {
    return (
        <div>
            <div
                style={{
                    // backgroundImage: `url(${bgImg})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImg})`,
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
