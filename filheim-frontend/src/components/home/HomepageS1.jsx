import Logo from "../../assets/hh.png";
import { Link } from "react-router-dom";

function HomepageS1() {
  return (
    <section
      id="homepage-s1"
      className="flex justify-center items-center text-center"
    >
      <div className="mt-36 md:mt-60">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Filheim Logo" className="w-auto max-h-12 object-cover transition-transform duration-300" />
            <h1
              className="my-2 text-6xl font-bold text-white uppercase"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Filheim 
            </h1>

            <p className="max-w-3xl text-x sm:text-2xl px-4 text-white/80 font-light animate-fade-in animate-delay-200 italic">
              LUXE, LOCAL LIVING 
            </p>

            <Link 
              to="/contact" 
              className="mt-10 md:mt-28 flex h-10 px-8 font-semibold text-gray-200 shadow-md hover:text-white bg-[#9A7842] hover:bg-[#7a5f34] items-center justify-center hover:scale-105 transition-transform duration-300 uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Book Now
            </Link>

            {/* <div
              className="mt-20 w-full max-w-[900px] mx-auto text-white bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 font-semibold rounded-sm text-sm px-4 py-16 text-center dark:bg-white/10 dark:hover:bg-white/20 dark:focus:ring-white/30 border border-white"
            >
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageS1;