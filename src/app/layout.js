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
};

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
