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
        <section className='px-4 sm:px-6 py-16 sm:py-20 flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-gray-100'>
            <div className='w-full max-w-xl mx-auto'>
                <form
                    onSubmit={handleSubmit}
                    className='bg-white text-[#2f2f2f] p-8 sm:p-10 rounded-xl space-y-6 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(154,120,66,0.2)] border border-[#9A7842]/10 backdrop-blur-sm'
                >
                    <div className='text-center mb-8'>
                        <h2
                            className='text-2xl sm:text-3xl font-bold mb-3 text-[#9A7842] uppercase'
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Inquire Now
                        </h2>
                        <p className='text-gray-600'>
                            We'll get back to you within 24 hours
                        </p>
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full text-sm p-4 rounded-lg border border-gray-200 focus:border-[#9A7842] focus:ring-[#9A7842]/20 focus:ring-4 bg-gray-50/50 hover:bg-white transition-colors duration-300'
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
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full text-sm p-4 rounded-lg border border-gray-200 focus:border-[#9A7842] focus:ring-[#9A7842]/20 focus:ring-4 bg-gray-50/50 hover:bg-white transition-colors duration-300'
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
                        <textarea
                            name='message'
                            placeholder='Message'
                            rows='5'
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full text-sm p-4 rounded-lg border border-gray-200 focus:border-[#9A7842] focus:ring-[#9A7842]/20 focus:ring-4 bg-gray-50/50 hover:bg-white transition-colors duration-300'
                            disabled={isLoading}
                        ></textarea>
                        {errors.message && (
                            <p className='text-red-500 text-sm mt-2 ml-1'>
                                {errors.message}
                            </p>
                        )}
                    </div>
                    {errors.submit && (
                        <p className='text-red-500 text-sm mt-4 text-center'>
                            {errors.submit}
                        </p>
                    )}
                    <button
                        type='submit'
                        disabled={isLoading}
                        className={`w-full text-white font-semibold text-sm px-6 py-4 rounded-lg mt-4 transition-all duration-300 bg-gradient-to-r from-[#9A7842] to-[#b0984b] hover:from-[#7a5f34] hover:to-[#9A7842] hover:shadow-lg hover:shadow-[#9A7842]/20 ${
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
