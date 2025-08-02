import HomepageS2 from '../components/home/HomepageS2';
import HomepageS1 from '../components/home/HomepageS1';
import HomepageCTA from '../components/home/HomepageCTA';
import HomepageProducts from '../components/home/HomepageProducts';
import HomepageIntro2 from '../components/home/HomepageIntro2';
import HomepageOtherLayout from '../components/home/HomepageOtherLayout';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/home/HeroSlider';
import {
    getBackgroundImages,
    getAsideImages,
    fetchProjects,
} from '../constants/data';

async function Home() {
    const [images, asideImages, allProjects] = await Promise.all([
        getBackgroundImages(),
        getAsideImages(),
        fetchProjects(),
    ]);
    const bg1Image = images.find((img) => img.name === 'bg1');
    const bgImage = bg1Image ? bg1Image.image : '';
    const bgOverviewImage = images.find((img) => img.name === 'bg-overview');
    const overviewImage = bgOverviewImage ? bgOverviewImage.image : '';

    // Filter cabinets and countertops
    const cabinetProjects = allProjects
        .filter((project) => !project.name.toLowerCase().includes('countertop'))
        .slice(0, 8)
        .map((project) => ({
            id: project.id,
            image: project.image,
            title: project.name || 'Cabinet Project',
        }));

    const countertopProjects = allProjects
        .filter((project) => project.name.toLowerCase().includes('countertop'))
        .slice(0, 8)
        .map((project) => ({
            id: project.id,
            image: project.image,
            title: project.name || 'Countertop Project',
        }));

    // Combine both for featured projects
    const featuredProjects = [...cabinetProjects, ...countertopProjects];
    return (
        <div>
            <HeroSlider images={images}>
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <HomepageS1 />
            </HeroSlider>

            <HomepageS2 asideImage={asideImages[0]?.image} />
            <HomepageIntro2 bgImage={overviewImage} />
            <HomepageProducts projects={featuredProjects} />
            <HomepageOtherLayout projects={allProjects} />
            <HomepageCTA />
        </div>
    );
}

export default Home;
