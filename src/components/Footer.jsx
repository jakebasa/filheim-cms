import { FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai';
import Link from 'next/link';
import Copyright from './Copyright';

function Footer() {
    return (
        <footer className='bg-gray-100'>
            <div>
                <div className=' text-white pt-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                    <div className='grid gap-2 row-gap-2 mb-12 sm:grid-cols-2 lg:grid-cols-5'>
                        <div className='sm:col-span-2 mb-5'>
                            <Link
                                href='/'
                                aria-label='Go home'
                                title='Company'
                                className='inline-flex items-center'
                            >
                                <img
                                    src={'/FilheimLogoBlack.png'}
                                    alt='Filheim Logo'
                                    className='h-5 w-auto object-contain group-hover:scale-105 transition-transform duration-300'
                                />
                            </Link>
                            <div
                                className='lg:max-w-sm'
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <p className='text-sm text-gray-800'>
                                    LUXE, LOCAL LIVING
                                </p>
                                {/* <p className="text-sm text-gray-800">
                  Cabinets 
                </p> */}
                            </div>
                        </div>

                        <div>
                            <span
                                className='text-base font-bold tracking-wide text-gray-900'
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Social
                            </span>
                            <div className='flex items-center mt-1 space-x-2'>
                                <a
                                    href='https://www.instagram.com/filheim_ph'
                                    aria-label='Instagram'
                                    target='_blank'
                                >
                                    <AiFillInstagram
                                        className='text-gray-900'
                                        size={24}
                                    />
                                </a>

                                <a
                                    href='https://www.facebook.com/people/Filheim/61576680338319/#'
                                    aria-label='Facebook'
                                    target='_blank'
                                >
                                    <FaFacebookSquare
                                        className='text-gray-900'
                                        size={24}
                                    />
                                </a>
                            </div>
                        </div>

                        <div>
                            <span
                                className='text-base font-bold tracking-wide text-gray-900'
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Quick Links
                            </span>
                            <div
                                className='flex flex-col items-start mt-1 text-gray-900'
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <Link
                                    href='/'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Home
                                </Link>
                                <Link
                                    href='/collection'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Collection
                                </Link>
                                <Link
                                    href='/services'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Services
                                </Link>
                                <Link
                                    href='/about'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    About
                                </Link>
                            </div>
                        </div>

                        <div className='space-y-2 text-sm'>
                            <p
                                className='text-base font-bold tracking-wide text-gray-900'
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Contacts
                            </p>
                            <div
                                style={{
                                    fontFamily: "'Proxima Nova', sans-serif",
                                }}
                            >
                                <div className='flex gap-2 items-center'>
                                    <FaPhoneAlt className='text-gray-900' />
                                    <a
                                        href='tel:850-123-5021'
                                        aria-label='Our phone'
                                        title='Our phone'
                                        className='text-black'
                                    >
                                        +639171879298
                                    </a>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdEmail className='text-gray-900' />
                                    <a
                                        href='mailto:info@filheim.com'
                                        aria-label='Our email'
                                        title='Our email'
                                        className='text-black'
                                    >
                                        info@filheim.com
                                    </a>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaLocationDot className='text-gray-900' />
                                    <a
                                        href='tel:850-123-5021'
                                        aria-label='Our phone'
                                        title='Our phone'
                                        className='text-black'
                                    >
                                        Metro Manila, Philippines
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <Copyright />
        </footer>
    );
}

export default Footer;
