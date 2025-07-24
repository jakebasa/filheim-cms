import Navbar from '../../components/Navbar';
import { getBackgroundImages } from '../../constants/data';
import ContactSection from '../../components/contact/ContactSection';
import NewsletterForm from '../../components/contact/NewsletterForm';

async function ContactPage() {
    const images = await getBackgroundImages();
    const bg1Image = images.find((img) => img.name === 'bg-contact');
    const bgImage = bg1Image ? bg1Image.image : '';

    return (
        <div className='min-h-screen font-sans bg-white text-[#2f2f2f]'>
            {/* Hero + Navbar Section */}
            <section
                className='pt-20 pb-20 text-center text-white bg-cover bg-center relative'
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bgImage})`,
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>
                <div className='h-[1.5px] w-24 mx-auto bg-white/50 mt-12 mb-4 rounded-full'></div>
                <h1
                    className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in'
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                    }}
                >
                    Get in Touch
                </h1>
                <div className='h-1 w-20 mx-auto bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full mb-4 animate-slide-in' />
                <p className='max-w-xl mx-auto text-base sm:text-lg animate-fade-in delay-200'>
                    Connect with our team—experience the artistry and luxury
                    service.
                </p>
            </section>

            <ContactSection />

            <NewsletterForm />
        </div>
    );
}

export default ContactPage;
