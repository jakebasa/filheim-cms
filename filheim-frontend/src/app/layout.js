export const metadata = {
    title: 'Filheim',
    description: 'Custom Cabinet Solutions',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
