import Navbar from "../components/Navbar";
import bgImg from '../assets/bg.png';
import AboutHero from "../components/about/AboutHero";

function AboutPage() {
  const founderImage = "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=800&fit=crop";
  const teamImages = [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=533&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=533&fit=crop",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=533&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=533&fit=crop"
  ];

  const whyChooseItems = [
    {
      title: "Bespoke Solutions",
      description: "Tailored to your vision—each space is uniquely crafted to reflect your story.",
      icon: "01",
      image: "https://images.unsplash.com/photo-1618221042598-df2d56f8ec74?w=800&fit=crop"
    },
    {
      title: "Premium Materials",
      description: "We source only the finest finishes and textures that exude sophistication.",
      icon: "02",
      image: "https://images.unsplash.com/photo-1604147495794-e0b7c0b4b1fc?w=800&fit=crop"
    },
    {
      title: "Expert Installation",
      description: "Our seasoned artisans ensure every piece is flawlessly integrated.",
      icon: "03",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&fit=crop"
    },
    {
      title: "Lifetime Support",
      description: "We stand behind our work with unmatched post-project care and service.",
      icon: "04",
      image: "https://images.unsplash.com/photo-1590648981340-bf3e0babc34c?w=800&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '370px',
        }}
      >
        <div className="absolute top-0 left-0 w-full z-50 text-white"><Navbar /></div>

        <AboutHero />

        {/* <div className="flex flex-col justify-center items-center text-center text-white py-24 animate-fade-in">
          <h1 className="text-4xl sm:text-7xl font-gotham font-bold mb-6 uppercase text-gold drop-shadow-xl">About Us</h1>
          <p className="max-w-3xl text-xl sm:text-2xl px-4 text-white/80 italic font-light animate-fade-in animate-delay-200">A story of timeless craftsmanship, design philosophy, and enduring elegance.</p>
          <div className="mt-8 w-28 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full animate-fade-in animate-delay-300" />
        </div> */}
      </div>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-black" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            From a humble vision to a legacy of refined interiors, Filheim was born out of a passion for timeless design. We blend heritage with innovation to curate luxurious spaces that celebrate individuality and exceptional living.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src={founderImage} alt="Founder" className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-wider text-[#b0984b]" style={{ fontFamily: "'Playfair Display', serif" }}>Marcus Filheim</h3>
            <p className="text-xl font-light italic text-gray-600">Founder & Creative Director</p>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Marcus established Filheim with the belief that true luxury should be personal, purposeful, and enduring. His philosophy is evident in every detail we deliver—meticulous, meaningful, and unmistakably bespoke.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 sm:px-10 bg-black text-white">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose Filheim</h2>
          <p className="text-lg sm:text-xl text-white/80 mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Experience the distinctive elements that define our refined approach.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {whyChooseItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-all duration-300">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end backdrop-blur-sm">
                <h3 className="text-2xl font-gotham font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-10 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Our Team</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            The people behind every signature piece and immersive space.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamImages.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow hover:shadow-xl transition-all">
              <img src={img} alt={`Team member ${i + 1}`} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg text-gray-800">Team Member {i + 1}</h4>
                <p className="text-sm text-gray-500">Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
