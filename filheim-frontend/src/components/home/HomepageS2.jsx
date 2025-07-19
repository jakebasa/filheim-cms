import { IoArrowForward } from 'react-icons/io5';
import AboutImg from '../../assets/sc5.jpg';
import { BiCabinet } from 'react-icons/bi';

function HomepageS2() {
    return (
        <section id='collection-hero' className='py-24'>
            <div className='flex justify-center items-center text-left'>
                <div className='w-full max-w-screen-lg px-4'>
                    <div className='space-y-6'>
                        <div className='flex flex-col items-left'>
                            <div className='flex flex-col'>
                                <div>
                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='text-left'>
                                            <p className='text-lg text-[#b0984b] text-left'>
                                                What we do
                                            </p>
                                            <h1
                                                className='mt-1 text-4xl font-bold mb-4 text-left pb-5 relative'
                                                style={{
                                                    fontFamily:
                                                        "'Playfair Display', serif",
                                                }}
                                            >
                                                All About Filheim
                                                {/* <span className="absolute bottom-0 left-0 w-1/2 h-px bg-[#9A7842]"></span> */}
                                                <div className='absolute bottom-0 left-0 w-2/3 h-px bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full animate-fade-in animate-delay-300'></div>
                                            </h1>

                                            <div
                                                style={{
                                                    fontFamily:
                                                        "'Inter', sans-serif",
                                                }}
                                            >
                                                <p className='text-lg max-w-2xl'>
                                                    A luxury furniture brand
                                                    redefining cabinetry and
                                                    home design with world-class
                                                    quality, bespoke catalogues,
                                                    and enduring style.
                                                </p>
                                                <p className='text-lg max-w-2xl mt-2'>
                                                    Filheim appeals to
                                                    design-conscious homeowners
                                                    and interior designers by
                                                    demonstrating that
                                                    Filipino-made cabinetry can
                                                    be bespoke, premium, and
                                                    deeply personal. It
                                                    positions itself as an
                                                    alternative to convenient
                                                    local brands and imported
                                                    European brands, crafted for
                                                    those who value design with
                                                    soul.
                                                </p>
                                            </div>

                                            <div
                                                className='grid grid-cols-2 gap-4 mt-8'
                                                style={{
                                                    fontFamily:
                                                        "'Proxima Nova', sans-serif",
                                                }}
                                            >
                                                <div className='flex flex-row items-center gap-2'>
                                                    <BiCabinet size={26} />
                                                    <span className='text-lg'>
                                                        Custom Cabinets
                                                    </span>
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <BiCabinet size={26} />
                                                    <span className='text-lg'>
                                                        Custom Cabinets
                                                    </span>
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <BiCabinet size={26} />
                                                    <span className='text-lg'>
                                                        Custom Cabinets
                                                    </span>
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <BiCabinet size={26} />
                                                    <span className='text-lg'>
                                                        Custom Cabinets
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className='flex w-full'>
                                                <img
                                                    src={AboutImg}
                                                    alt='Home About Filheim Img'
                                                    className='h-[500px] w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomepageS2;
