/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optimize CSS loading
    experimental: {
        optimizeCss: true,
        optimizeServerReact: true,
    },
    // Improve static asset handling
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://filheim.com' : '',
    staticPageGenerationTimeout: 120,
};

export default nextConfig;
