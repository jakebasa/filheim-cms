'use client';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
        <section className='px-4 sm:px-6 py-16 sm:py-20 flex justify-center items-center'>
            <div className='w-full max-w-xl mx-auto'>
                <form
                    onSubmit={handleSubmit}
                    className='bg-white/90 backdrop-blur-xl text-[#2f2f2f] p-5 sm:p-6 rounded-xl space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,120,66,0.3)] border border-white/30 max-w-md mx-auto'
                >
                    <div className='text-center mb-4'>
                        <h2
                            className='text-lg sm:text-xl font-bold mb-1 text-[#9A7842] uppercase tracking-wide'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Inquire Now
                        </h2>
                        <p className='text-gray-600 text-sm'>
                            We'll get back to you within 24 hours
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-700 mb-2 ml-1'
                            >
                                Email Address
                            </label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full text-sm p-3 rounded-lg border-2 border-gray-100 focus:border-[#9A7842] focus:ring-[#9A7842]/10 focus:ring-4 bg-white/50 hover:bg-white/80 transition-all duration-300 placeholder:text-gray-400'
                                disabled={isLoading}
                                autoComplete='email'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-2 ml-1'>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-sm font-medium text-gray-700 mb-2 ml-1'
                            >
                                Full Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                placeholder='Enter your name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full text-sm p-3 rounded-lg border-2 border-gray-100 focus:border-[#9A7842] focus:ring-[#9A7842]/10 focus:ring-4 bg-white/50 hover:bg-white/80 transition-all duration-300 placeholder:text-gray-400'
                                disabled={isLoading}
                                autoComplete='name'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-2 ml-1'>
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='message'
                                className='block text-sm font-medium text-gray-700 mb-2 ml-1'
                            >
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='What can we help you with?'
                                rows='5'
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full text-sm p-3 rounded-lg border-2 border-gray-100 focus:border-[#9A7842] focus:ring-[#9A7842]/10 focus:ring-4 bg-white/50 hover:bg-white/80 transition-all duration-300 placeholder:text-gray-400'
                                disabled={isLoading}
                            ></textarea>
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-2 ml-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                    </div>
                    {errors.submit && (
                        <p className='text-red-500 text-sm mt-4 text-center'>
                            {errors.submit}
                        </p>
                    )}
                    <button
                        type='submit'
                        disabled={isLoading}
                        className={`w-full text-white font-semibold text-sm px-5 py-3 rounded-lg mt-4 transition-all duration-300 bg-gradient-to-r from-[#9A7842] to-[#b0984b] hover:from-[#7a5f34] hover:to-[#9A7842] hover:shadow-xl hover:shadow-[#9A7842]/20 transform hover:-translate-y-0.5 ${
                            isLoading ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'Sending Inquiry...' : 'Inquire Now'}
                    </button>
                </form>
            </div>
        </section>
    );
}
