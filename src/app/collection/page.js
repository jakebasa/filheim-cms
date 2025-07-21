'use client';

import CollectionCabinets from '../../components/collections/CollectionCabinets';
import CollectionCountertops from '../../components/collections/CollectionCountertops';
import CollectionHero from '../../components/collections/CollectionHero';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { getBackgroundImages } from '../../constants/data';

function CollectionPage() {
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

                <CollectionHero />
            </div>

            <CollectionCabinets />
            {/* <CollectionCountertops /> */}
            <div className='bg-white py-32'></div>
        </div>
    );
}

export default CollectionPage;
