import bgKitchen from '../../assets/cc.png';
import bgBathroom from '../../assets/cc-2.jpg';
import bgWardrobe from '../../assets/cc-3.jpg';
import bgLivingArea from '../../assets/cc-4.jpg';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from 'react';

function CollectionCabinets() {
  // Set 'All Cabinets' as the default active filter
  const [activeFilter, setActiveFilter] = useState('All Cabinets');
  
  const cabinetItems = [
    { 
      id: 1,
      category: 'Kitchen',
      image: bgKitchen,
      title: 'Modern Kitchen Cabinets'
    },
    { 
      id: 2,
      category: 'Bathroom',
      image: bgBathroom,
      title: 'Luxury Bathroom Vanities'
    },
    { 
      id: 3,
      category: 'Wardrobe/Closet',
      image: bgWardrobe,
      title: 'Custom Walk-in Closets'
    },
    { 
      id: 4,
      category: 'Living Area',
      image: bgLivingArea,
      title: 'Elegant Entertainment Units'
    },
    { 
      id: 5,
      category: 'Kitchen',
      image: bgKitchen,
      title: 'Traditional Kitchen Design'
    },
    { 
      id: 6,
      category: 'Bathroom',
      image: bgBathroom,
      title: 'Compact Bathroom Storage'
    },
    { 
      id: 7,
      category: 'Kitchen',
      image: bgKitchen,
      title: 'Modern Kitchen Cabinets'
    },
    { 
      id: 8,
      category: 'Bathroom',
      image: bgBathroom,
      title: 'Luxury Bathroom Vanities'
    },
    { 
      id: 9,
      category: 'Wardrobe/Closet',
      image: bgWardrobe,
      title: 'Custom Walk-in Closets'
    },
  ];

  const categories = ['All Cabinets', 'Kitchen', 'Bathroom', 'Wardrobe/Closet', 'Living Area'];

  const filteredItems = activeFilter === 'All Cabinets' 
    ? cabinetItems 
    : cabinetItems.filter(item => item.category === activeFilter);

  return (
    <section 
      id="collection-cabinets" 
      className="py-24"
    >
      <div className="flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <h1 
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bespoke Cabinets
              </h1>
              <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Handcrafted storage solutions designed exclusively for your space and lifestyle.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`${
                    activeFilter === category
                      ? 'text-white bg-[#9A7842] border-[#9A7842]'
                      : 'text-gray-700 bg-white border-gray-200 hover:text-[#9A7842] hover:border-[#9A7842]/30'
                  } border rounded-sm text-base font-medium px-5 py-2.5 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#9A7842]/30`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold transition-opacity duration-300 uppercase">
                    {item.title}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="
                      bg-white/30 text-[#9A7842] 
                      p-2 rounded-full 
                      hover:bg-white/80 hover:shadow-md
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50
                    ">
                      <MdOutlineZoomOutMap className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionCabinets;
