'use client';
import { useState, useEffect } from 'react';

export const Copyright = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setYear(new Date().getFullYear().toString());
        }
    }, []);

    return (
        <div className='bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex flex-row justify-between max-w-screen-xl px-4'>
                <p>&copy; {year} Filheim. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Copyright;
