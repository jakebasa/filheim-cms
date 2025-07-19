import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/intro2.jpg";
import { BiCabinet } from "react-icons/bi";

function HomepageIntro2() {
  return (
    <section
      id="collection-hero"
      className=""
    >
      <div className="flex justify-center items-center text-left">
        <div className="w-full max-w-screen-lg px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-left">
              <div className="flex flex-col">

                <div className="mb-5">
                  <p className="text-lg text-[#b0984b] text-left">Our Tone</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-left">
                      <h1 
                        className="mt-1 text-4xl font-bold text-left relative" 
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Filheim Tone Overview
                      </h1>
                    </div>
                    
                    <div className="">
                      <p className="text-lg max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                        A luxury furniture brand redefining cabinetry and home design with world-class quality, bespoke catalogues, and enduring style. 
                      </p>
                    </div>
                  </div>
                </div>
             
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div 
        className="w-full relative h-[500px] bg-cover bg-center flex justify-center text-left"
        style={{ backgroundImage: `url(${AboutImg})` }}
      >
        <div className="w-full max-w-screen-2xl px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 h-full container mx-auto px-4 flex items-end">
          <div className="md:grid grid-cols-5 gap-8 w-full text-white">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Confident</h3>
              <p className="text-gray-100">Assured • Bold • Authoritative</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Young</h3>
              <p className="text-gray-100">Vibrant • Fresh • Energetic</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Grounded</h3>
              <p className="text-gray-100">Authentic • Natural • Stable</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Contemporary</h3>
              <p className="text-gray-100">Modern • Relevant • Innovative</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Aspirational</h3>
              <p className="text-gray-100">Elevated • Inspiring • Transformative</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageIntro2;