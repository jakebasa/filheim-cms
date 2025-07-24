'use client';

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const getCachedData = (key) => {
    if (typeof window === 'undefined') return null;

    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { value, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
    }

    return value;
};

export const setCachedData = (key, value) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem(
        key,
        JSON.stringify({
            value,
            timestamp: Date.now(),
        })
    );
};
