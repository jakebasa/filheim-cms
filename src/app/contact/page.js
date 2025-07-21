'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { getBackgroundImages } from '../../constants/data';
import { toast } from 'sonner';

function ContactPage() {
    const [bgImage, setBgImage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadBackgroundImage = async () => {
            try {
                const images = await getBackgroundImages();
                if (images && images.length > 0) {
                    setBgImage(images[1].image);
                }
            } catch (error) {
                console.error('Error loading background image:', error);
            }
        };

        loadBackgroundImage();
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Invalid email format.';
        if (!formData.message.trim())
            newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                toast.error(data.error || 'Failed to submit the form.');
                setErrors({
                    submit:
                        data.error ||
                        'Failed to submit the form. Please try again later.',
                });
            } else {
                toast.success('Inquiry sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({
                submit: 'Failed to submit the form. Please try again later.',
            });
            toast.error('Failed to submit the form. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='min-h-screen font-sans bg-white text-[#2f2f2f]'>
            {/* Hero + Navbar Section */}
            <section
                className='pt-20 pb-20 text-center text-white bg-cover bg-center relative'
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bgImage})`,
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <div className='h-[1.5px] w-24 mx-auto bg-white/50 mt-12 mb-4 rounded-full'></div>
                <h1
                    className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in'
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                    }}
                >
                    Get in Touch
                </h1>
                <div className='h-1 w-20 mx-auto bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full mb-4 animate-slide-in' />
                <p className='max-w-xl mx-auto text-base sm:text-lg animate-fade-in delay-200'>
                    Connect with our team—experience the artistry and luxury
                    service.
                </p>
            </section>

            {/* Contact Form & Map */}
            <section className='px-4 sm:px-6 py-16 sm:py-20'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
                    <form
                        onSubmit={handleSubmit}
                        className='bg-white text-[#2f2f2f] p-6 sm:p-8 rounded-xl space-y-6 shadow-xl transition-transform duration-500 hover:scale-[1.02] w-full'
                    >
                        <h2
                            className='text-xl sm:text-2xl font-bold mb-4 text-[#b0984b] uppercase'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Inquire Now
                        </h2>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full text-sm p-3 sm:p-4 rounded border border-gray-300 focus:border-[#b0984b] focus:ring-[#b0984b]/40 focus:ring-2'
                                disabled={isLoading}
                                autoComplete='email'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full text-sm p-3 sm:p-4 rounded border border-gray-300 focus:border-[#b0984b] focus:ring-[#b0984b]/40 focus:ring-2'
                                disabled={isLoading}
                                autoComplete='name'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <textarea
                                name='message'
                                placeholder='Message'
                                rows='5'
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full text-sm p-3 sm:p-4 rounded border border-gray-300 focus:border-[#b0984b] focus:ring-[#b0984b]/40 focus:ring-2'
                                disabled={isLoading}
                            ></textarea>
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        {errors.submit && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.submit}
                            </p>
                        )}
                        <button
                            type='submit'
                            disabled={isLoading}
                            className={`text-white font-semibold text-sm px-6 py-3 rounded transition bg-[#9A7842] hover:bg-[#7a5f34] hover:scale-105 ${
                                isLoading ? 'opacity-60 cursor-not-allowed' : ''
                            }`}
                        >
                            {isLoading ? 'Sending Inquiry...' : 'Inquire Now'}
                        </button>
                    </form>

                    <div className='animate-fade-in delay-300 w-full'>
                        <h2
                            className='text-xl sm:text-2xl font-semibold mb-4 text-[#b0984b]'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Showroom Map
                        </h2>
                        <iframe
                            title='Showroom Location'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19809.05091522762!2d-0.12443275!3d51.5074076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb8d6f31a7%3A0x48b4b59e3aa2a027!2sLondon%20Eye!5e0!3m2!1sen!2sph!4v1695017858440!5m2!1sen!2sph'
                            className='w-full h-64 sm:h-80 rounded shadow-md border-0'
                            allowFullScreen=''
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className='bg-gray-900 py-12 sm:py-16 text-white text-center px-4 transition-colors duration-500'>
                <h3
                    className='text-3xl sm:text-4xl font-bold'
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    Subscribe to Our Newsletter
                </h3>
                <p className='mb-6 text-white/80 text-sm sm:text-base'>
                    Get the latest insights, trends, and exclusive offers
                    straight to your inbox.
                </p>
                <form className='max-w-xl w-full mx-auto flex flex-col sm:flex-row gap-4 justify-center'>
                    <input
                        type='email'
                        placeholder='Your email address'
                        className='w-full p-3 sm:p-4 text-sm rounded bg-white/20 text-black focus:outline-none'
                        disabled={isLoading}
                    />
                    <button
                        type='submit'
                        className='text-white font-semibold text-sm px-6 py-3 sm:py-4 hover:scale-105 transition bg-[#9A7842] hover:bg-[#7a5f34]'
                        disabled={isLoading}
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ContactPage;
