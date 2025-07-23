// app/layout.jsx
import '../index.css';
import Footer from '../components/Footer';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
    title: 'Filheim',
    description:
        'Filheim - Premium Custom Cabinets and Luxury Living Solutions. Specializing in high-end cabinet design, craftsmanship, and installation services',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Filheim',
        description:
            'Filheim - Premium Custom Cabinets and Luxury Living Solutions',
        url: 'https://filheim.com',
        siteName: 'Filheim',
        images: [
            {
                url: '/hh.png',
                width: 800,
                height: 600,
                alt: 'Filheim Logo',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Filheim',
        description: 'Premium Custom Cabinets and Luxury Living Solutions',
        images: ['/hh.png'],
    },
};

// ...existing code...
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                {children}
                <Toaster />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
