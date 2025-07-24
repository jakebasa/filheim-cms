'use client';
import { useState } from 'react';

export default function NewsletterForm() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section className='bg-gray-900 py-12 sm:py-16 text-white text-center px-4 transition-colors duration-500'>
            <h3
                className='text-3xl sm:text-4xl font-bold'
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                Subscribe to Our Newsletter
            </h3>
            <p className='mb-6 text-white/80 text-sm sm:text-base'>
                Get the latest insights, trends, and exclusive offers straight
                to your inbox.
            </p>
            <form
                className='max-w-xl w-full mx-auto flex flex-col sm:flex-row gap-4 justify-center'
                onSubmit={(e) => e.preventDefault()}
            >
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
    );
}
