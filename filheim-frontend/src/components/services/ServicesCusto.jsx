import sc1 from '../../assets/sc1.jpg';
import sc2 from '../../assets/sc2.jpg'; 
import sc3 from '../../assets/sc3.jpg';
import sc4 from '../../assets/sc4.jpg';
import sc5 from '../../assets/sc5.jpg';
import { IoArrowForward } from "react-icons/io5";

function ServicesCusto() {
  return (
    <section id="collection-cabinets" className="py-16">
      <div className="flex justify-center items-center text-left">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-left">
              <div className="text-left">
                <p className="inline-block text-lg text-[#b0984b] mb-1">Why Filheim</p>
                <h1 
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Design and Customization
                </h1>
                <div className="justify-between flex md:flex-row flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-lg max-w-2xl">
                    Custom designs realized through collaborative vision and meticulous craftsmanship.
                  </p>
                  <button className="flex flex-row gap-2 items-center bg-gray-900 text-white uppercase text-sm p-1 px-4 font-regular hover:font-semibold">
                    Read More
                    <IoArrowForward />
                  </button>
                </div>
              </div>

              <div className="py-4 px-2 mx-auto w-full max-w-screen-xl sm:py-4 lg:px-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 h-full">
                  {/* First Column - Wines */}
                  <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                    <a href="#" className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow">
                      <img 
                        src={sc5}
                        alt="Wine selection" 
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                        Transitional
                      </h3>
                    </a>
                  </div>

                  {/* Second Column - Gin and sub-items */}
                  <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                    <a href="#" className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 mb-4">
                      <img 
                        src={sc1} 
                        alt="Gin selection" 
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                        Concord
                      </h3>
                    </a>
                    
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                      <a href="#" className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                        <img 
                          src={sc2} 
                          alt="Whiskey selection" 
                          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                          Classic
                        </h3>
                      </a>
                      
                      <a href="#" className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                        <img 
                          src={sc3} 
                          alt="Vodka selection" 
                          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                          Luxor
                        </h3>
                      </a>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                    <a href="#" className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow">
                      <img 
                        src={sc4} 
                        alt="Brandy selection" 
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                        Minimalist
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCusto;