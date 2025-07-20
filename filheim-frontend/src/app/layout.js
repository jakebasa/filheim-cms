// app/layout.jsx
import '../index.css';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Filheim',
    description: 'Description of my site',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
