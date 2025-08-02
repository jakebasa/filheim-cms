// Meta information for this page
export const metadata = {
    title: 'Filheim | Collections',
    description: 'Browse our collection of cabinets and countertops.',
};

import CollectionCabinets from '../../components/collections/CollectionCabinets';
import CollectionHero from '../../components/collections/CollectionHero';
import Navbar from '../../components/Navbar';
import { getBackgroundImages, fetchProjects } from '../../constants/data';
import CollectionCountertops from '../../components/collections/CollectionCountertops';

async function CollectionPage() {
    // Fetch all data in parallel
    const [images, projects] = await Promise.all([
        getBackgroundImages(),
        fetchProjects(),
    ]);

    const cabinetProjects = projects.filter(
        (project) => !project.name.toLowerCase().includes('countertop')
    );

    const countertopProjects = projects.filter((project) =>
        project.name.toLowerCase().includes('countertop')
    );

    const bgImage = images.find((img) => img.name === 'bg4');
    const backgroundImage = bgImage ? bgImage.image : '';
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${backgroundImage})`,
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

            <CollectionCabinets projects={cabinetProjects} />
            <CollectionCountertops projects={countertopProjects} />
            <div className='bg-white py-32'></div>
        </div>
    );
}

export default CollectionPage;
