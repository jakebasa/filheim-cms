import CollectionCabinets from '../../components/collections/CollectionCabinets';
import CollectionCountertops from '../../components/collections/CollectionCountertops';
import CollectionHero from '../../components/collections/CollectionHero';
import Navbar from '../../components/Navbar';
function CollectionPage() {
    return (
        <div>
            <div
                style={{
                    // backgroundImage: `url(${bgImg})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/bg.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '370px',
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>

                <CollectionHero />
            </div>

            <CollectionCabinets />
            <CollectionCountertops />
            <div className='bg-white py-32'></div>
        </div>
    );
}

export default CollectionPage;
