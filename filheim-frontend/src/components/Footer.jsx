import { FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai';
import FilheimLogo from '../assets/FilheimLogoBlack.png';

function Footer() {
    return (
        <footer className='bg-gray-100'>
            <div>
                <div className=' text-white pt-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                    <div className='grid gap-2 row-gap-2 mb-12 sm:grid-cols-2 lg:grid-cols-5'>
                        <div className='sm:col-span-2 mb-5'>
                            <a
                                href='/'
                                aria-label='Go home'
                                title='Company'
                                className='inline-flex items-center'
                            >
                                <img
                                    src={FilheimLogo}
                                    alt='Filheim Logo'
                                    className='w-full h-5 object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            </a>
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
                                    fontFamily: "'Gotham Bold', sans-serif",
                                }}
                            >
                                Social
                            </span>
                            <div className='flex items-center mt-1 space-x-2'>
                                <a href='#' aria-label='Twitter'>
                                    <FaTwitter
                                        className='text-gray-900'
                                        size={24}
                                    />
                                </a>
                                <a href='#' aria-label='Instagram'>
                                    <AiFillInstagram
                                        className='text-gray-900'
                                        size={24}
                                    />
                                </a>
                                <a href='#' aria-label='TikTok'>
                                    <AiFillTikTok
                                        className='text-gray-900'
                                        size={24}
                                    />
                                </a>
                                <a href='#' aria-label='Facebook'>
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
                                    fontFamily: "'Gotham Bold', sans-serif",
                                }}
                            >
                                Quick Links
                            </span>
                            <div
                                className='flex flex-col items-start mt-1 text-gray-900'
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                <a
                                    href='/'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Home
                                </a>
                                <a
                                    href='/collection'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Collection
                                </a>
                                <a
                                    href='/services'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    Services
                                </a>
                                <a
                                    href='/about'
                                    className='block md:p-0 font-normal hover:font-semibold'
                                >
                                    About
                                </a>
                            </div>
                        </div>

                        <div className='space-y-2 text-sm'>
                            <p
                                className='text-base font-bold tracking-wide text-gray-900'
                                style={{
                                    fontFamily: "'Gotham Bold', sans-serif",
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
                                        (02)123-5021
                                    </a>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdEmail className='text-gray-900' />
                                    <a
                                        href='tel:850-123-5021'
                                        aria-label='Our phone'
                                        title='Our phone'
                                        className='text-black'
                                    >
                                        cabinets.by.filheim@gmail.com
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
                                        123 Abc St. Manila, PH
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-white p-4'>
                <div className='container mx-auto flex flex-row justify-between max-w-screen-xl px-4'>
                    <p>
                        &copy; {new Date().getFullYear()} Filheim. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
