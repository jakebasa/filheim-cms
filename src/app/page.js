import HomepageS2 from '../components/home/HomepageS2';
import HomepageS1 from '../components/home/HomepageS1';
import HomepageCTA from '../components/home/HomepageCTA';
import HomepageProducts from '../components/home/HomepageProducts';
import HomepageIntro2 from '../components/home/HomepageIntro2';
import HomepageOtherLayout from '../components/home/HomepageOtherLayout';
import Navbar from '../components/Navbar';
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

    // Take first 8 projects for HomepageProducts
    const featuredProjects = allProjects.slice(0, 8).map((project) => ({
        id: project.id,
        image: project.image,
        title: project.name || 'Featured Project',
    }));
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${bgImage})`,
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

            <HomepageS2 asideImage={asideImages[0]?.image} />
            <HomepageIntro2 bgImage={overviewImage} />
            <HomepageProducts projects={featuredProjects} />
            <HomepageOtherLayout projects={allProjects} />
            <HomepageCTA />
        </div>
    );
}

export default Home;
