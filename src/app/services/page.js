import ServicesHero from '../../components/services/ServicesHero';
import ServicesCusto from '../../components/services/ServicesCusto';
import ServicesCraftmanship from '../../components/services/ServicesCraftmanship';
import ServicesInstallation from '../../components/services/ServicesInstallation';
import ServicesFAQ from '../../components/services/ServicesFAQ';
import Navbar from '../../components/Navbar';
import {
    getBackgroundImages,
    getAsideImages,
    fetchProjects,
} from '../../constants/data';

async function ServicesPage() {
    const [images, asideImages, allProjects] = await Promise.all([
        getBackgroundImages(),
        getAsideImages(),
        fetchProjects(),
    ]);
    const bgImage = images.find((img) => img.name === 'bg4');
    const backgroundImage = bgImage ? bgImage.image : '';
    const craftmanshipImage = asideImages[1]?.image;
    const installationImage = asideImages[2]?.image;
    const customizationProjects = allProjects.slice(11, 16);
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
                <ServicesHero />
            </div>
            <ServicesCusto projects={customizationProjects} />
            <ServicesCraftmanship asideImage={craftmanshipImage} />
            <ServicesInstallation asideImage={installationImage} />
            {/* <ServicesMaintenance /> */}
            <ServicesFAQ />
        </div>
    );
}

export default ServicesPage;
