// Meta information for this page
export const metadata = {
    title: 'Filheim | About',
    description:
        'Learn about Filheim’s story, team, and legacy of excellence in bespoke interiors.',
};
import AboutHero from '../../components/about/AboutHero';
import Navbar from '../../components/Navbar';
import {
    getBackgroundImages,
    fetchProjects,
    getTeamImages,
} from '../../constants/data';

const whyChooseContent = [
    {
        title: 'Bespoke Solutions',
        description:
            'Tailored to your vision—each space is uniquely crafted to reflect your story.',
        icon: '01',
    },
    {
        title: 'Premium Materials',
        description:
            'We source only the finest finishes and textures that exude sophistication.',
        icon: '02',
    },
    {
        title: 'Expert Installation',
        description:
            'Our seasoned artisans ensure every piece is flawlessly integrated.',
        icon: '03',
    },
    {
        title: 'Lifetime Support',
        description:
            'We stand behind our work with unmatched post-project care and service.',
        icon: '04',
    },
];

function shuffleProjects(projects, seed) {
    const seededRandom = (str) => {
        let h = 1779033703 ^ str.length;
        for (let i = 0; i < str.length; i++) {
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
            h = (h << 13) | (h >>> 19);
        }
        return () => {
            h = Math.imul(h ^ (h >>> 16), 2246822507);
            h = Math.imul(h ^ (h >>> 13), 3266489909);
            return (h ^= h >>> 16) >>> 0;
        };
    };

    return [...projects]
        .sort((a, b) => {
            const random = seededRandom(seed + a.id + b.id);
            return 0.5 - random() / 4294967296;
        })
        .slice(0, 4);
}

async function AboutPage() {
    // Fetch all data in parallel
    const [images, projects, teamMembers] = await Promise.all([
        getBackgroundImages(),
        fetchProjects(),
        getTeamImages(),
    ]);

    const bgImage = images.find((img) => img.name === 'bg4');
    const backgroundImage = bgImage ? bgImage.image : '';
    // const ceoData = ceosData.length > 0 ? ceosData[0] : null;
    const chooseProjects = shuffleProjects(projects, 'filheim-choose');

    return (
        <div className='min-h-screen bg-white text-gray-800'>
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
                <AboutHero />
            </div>
            {/* Our Story Section */}
            <section className='py-24 px-4 sm:px-10 bg-white'>
                <div className='max-w-5xl mx-auto text-center space-y-8'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wider text-black'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Story
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-gray-700 leading-relaxed'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        From a humble vision to a legacy of refined interiors,
                        Filheim was born out of a passion for timeless design.
                        We blend heritage with innovation to curate luxurious
                        spaces that celebrate individuality and exceptional
                        living.
                    </p>
                </div>
            </section>
            {/* Founder Section */}
            {/* <section className='py-24 px-4 sm:px-10 bg-gray-50'>
                <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
                    {ceoData ? (
                        <img
                            src={ceoData.image}
                            alt={ceoData.name}
                            className='w-full max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto h-[80vh]'
                        />
                    ) : (
                        <div className='w-full h-[600px] rounded-2xl bg-gray-200' />
                    )}
                    <div className='space-y-6'>
                        <h3
                            className='text-3xl sm:text-4xl font-bold tracking-wider text-[#b0984b]'
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {ceoData ? ceoData.name : 'Loading...'}
                        </h3>
                        <p className='text-xl font-light italic text-gray-600'>
                            Founder & Creative Director
                        </p>
                        <p
                            className='text-gray-700 text-lg leading-relaxed'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Alexander established Filheim with the belief that
                            true luxury should be personal, purposeful, and
                            enduring. His philosophy is evident in every detail
                            we deliver—meticulous, meaningful, and unmistakably
                            bespoke.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* Why Choose Section */}
            <section className='py-24 px-4 sm:px-10 bg-black text-white'>
                <div className='text-center max-w-4xl mx-auto mb-20'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wide'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Why Choose Filheim
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-white/80 mt-4'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Experience the distinctive elements that define our
                        refined approach.
                    </p>
                    <div className='mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto' />
                </div>
                <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    {chooseProjects.map((project, idx) => {
                        const content = whyChooseContent[idx];
                        return (
                            <div
                                key={idx}
                                className='group relative rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-all duration-300'
                            >
                                <img
                                    src={project.image}
                                    alt={content.title}
                                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                                <div className='absolute inset-0 bg-black/60 p-6 flex flex-col justify-end backdrop-blur-sm'>
                                    <h3 className='text-2xl font-gotham font-bold text-white mb-2'>
                                        {content.title}
                                    </h3>
                                    <p className='text-white/90 font-light'>
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SyCip Sister Section */}
            <section className='py-24 px-4 sm:px-10 bg-gray-50'>
                <div className='max-w-6xl mx-auto'>
                    <div
                        className='relative py-16 px-6 sm:px-12 min-h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-xl overflow-hidden'
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/sycip3.png')`,
                        }}
                    >
                        <div className='absolute inset-0 bg-black/30 backdrop-blur-sm'></div>

                        <div className='relative z-10 flex items-center justify-center h-full'>
                            <div className='bg-white/10 backdrop-blur-lg rounded-xl p-8 sm:p-12 max-w-3xl text-center text-white shadow-lg space-y-6'>
                                <h2
                                    className='text-3xl sm:text-4xl md:text-5xl font-bold'
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                >
                                    A Legacy of Excellence
                                </h2>

                                <div className='w-24 h-1 mx-auto bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638]'></div>

                                <p className='text-base sm:text-lg md:text-xl font-light italic leading-relaxed'>
                                    Filheim,{' '}
                                    <span className='font-semibold'>
                                        a sister company of SyCip Builders
                                        Corporation
                                    </span>
                                    , elevates spaces with luxury craftsmanship
                                    and bespoke design, extending SyCip's legacy
                                    of excellence beyond residences to deliver
                                    tailored projects that blend premium quality
                                    with unique client visions.
                                </p>

                                <a
                                    href='https://www.sycipbuilders.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 text-gray-200 shadow-md hover:text-white bg-[#9A7842] hover:bg-[#7a5f34]
              uppercase text-sm py-3 px-6 rounded-lg font-bold tracking-wider transition-all 
              duration-300 hover:translate-y-[-2px] hover:shadow-lg'
                                >
                                    Visit SyCip Builders
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-4 w-4'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='py-24 px-4 sm:px-10 bg-white'>
                <div className='text-center mb-16'>
                    <h2
                        className='text-4xl sm:text-5xl font-bold tracking-wide'
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Team
                    </h2>
                    <p
                        className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4'
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        The people behind every signature piece and immersive
                        space.
                    </p>
                    <div className='mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto'>
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className='group overflow-hidden rounded-xl shadow hover:shadow-xl transition-all'
                        >
                            <div className='aspect-w-4 aspect-h-5 relative'>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className='w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                            <div className='p-4 text-center'>
                                <h4 className='font-semibold text-lg text-gray-800'>
                                    {member.name}
                                </h4>
                                <p className='text-sm text-gray-500'>
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
