

function AboutHero() {
  return (
    <section
      id="collection-hero"
      className="flex justify-center items-center text-center font-proxima"
    >
      <div className="my-10 md:my-32">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center text-center text-white py-24 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl  font-bold mb-6 uppercase text-gold drop-shadow-xl" style={{ fontFamily: "'Playfair Display', serif" }}>About Us</h1>
              <p className="max-w-lg text-xl sm:text-2xl px-4 text-white/80 italic font-light animate-fade-in animate-delay-200">A story of timeless craftsmanship, design philosophy, and enduring elegance.</p>
              <div className="mt-8 w-28 h-1 bg-gradient-to-r from-[#C0A86B] via-[#FEECCB] to-[#A68638] rounded-full animate-fade-in animate-delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;