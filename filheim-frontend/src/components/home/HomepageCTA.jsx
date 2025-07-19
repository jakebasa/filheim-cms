import React from "react";
import { Link } from "react-router-dom";

function HomepageCTA() {
  return (
    <section id="home-cta" className="pt-6">
      <div className="flex justify-center items-center text-center">
        <div className="w-full">
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-sm shadow-lg py-4">
              <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 items-center">
                <h2 
                  className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-4xl"  
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Get your Dream Cabinetry into Reality
                </h2>
                    
                <p className="text-white/80 md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Ready to transform your space? Schedule a free consultation with our design experts <br />today and let's bring your vision to life.
                </p>
                
                <div className="flex justify-center items-center mt-5">
                  <div className="flex justify-center">
                    <Link 
                      to="/contact" 
                      className="flex h-12 px-6 font-semibold text-gray-200 shadow-md hover:text-white bg-[#9A7842] hover:bg-[#7a5f34] items-center justify-center hover:scale-105 transition-transform duration-300 uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Book Your Appointment
                    </Link>
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

export default HomepageCTA;















// OTHER CTA DESIGN
// import React from "react";

// function HomepageCTA() {
//   return (
//     <section id="home-cta" className="pt-6 pb-12">
//       <div className="flex justify-center items-left text-left">
//         <div className="w-full max-w-screen-xl px-4">
//           <div className="space-y-6">
//             <div className="bg-gray-800 rounded-sm shadow-lg">
//               <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//                   <div className="md:w-1/2">
//                     <h2 className="mb-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
//                       Book a Consultation
//                     </h2>
//                     <p className="text-white md:text-md">
//                       Ready to transform your space? Schedule a free consultation with our design experts today and let's bring your vision to life.
//                     </p>
//                   </div>
//                   <div className="md:w-1/2">
//                     <form className="flex flex-col sm:flex-row gap-4 w-full">
//                       <input
//                         placeholder="Email"
//                         required
//                         type="email"
//                         className="flex-grow h-12 px-4 text-white transition duration-200 border-2 border-transparent rounded bg-gray-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                       />
//                       <button
//                         type="submit"
//                         className="h-12 px-6 font-semibold text-gray-200 transition duration-200 rounded shadow-md hover:text-white bg-[#9A7842] hover:bg-[#7a5f34] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//                       >
//                         Subscribe
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomepageCTA;