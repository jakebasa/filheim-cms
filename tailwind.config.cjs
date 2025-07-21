/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                gotham: ['"Montserrat"', 'sans-serif'], // Fallback for Gotham Bold
                playfair: ['"Playfair Display"', 'serif'],
                inter: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
