import { SiMaterialformkdocs } from "react-icons/si";
import Img from "../../assets/sc3.jpg";
import { motion } from "framer-motion";

function ServicesCraftmanship() {
  return (
    <section 
      id="collection-cabinets" 
      className="relative pt-16"
      style={{
        backgroundColor: '#EEEEEE',
        minHeight: '880px',
      }}
    >
      <div className="flex justify-center items-start text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-2">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Left Content */}
              <div className="flex flex-col">
                <div>
                  <p className="text-lg text-[#b0984b] text-left">How we work</p>
                  <h1 
                    className="text-4xl font-bold text-left mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Craftmanship and Production
                  </h1>
                  <p className="text-lg max-w-5xl mx-auto text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Precision-crafted using time-tested techniques, where traditional woodworking meets modern engineering. Every detail—from joint to finish—is perfected for enduring beauty and strength.
                  </p>
                </div>

                <div className="w-full pt-12 py-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Material Selection",
                        desc: "Sustainably sourced hardwoods aged for stability, paired with bespoke hardware",
                      },
                      {
                        title: "Production Techniques",
                        desc: "Dovetail joinery, hand-sanded surfaces, and low-VOC finishes applied in controlled environments",
                      },
                      {
                        title: "Quality Assurance",
                        desc: "12-stage inspection process, from grain-matching to final polish",
                      },
                      {
                        title: "Artisan Training",
                        desc: "Master craftsmen with 15+ years of specialized training, preserving heritage methods while innovating for contemporary needs",
                      },
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-xl bg-white p-6 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
                      >
                        <div className="mx-auto flex h-16 w-16 -translate-y-8 transform items-center justify-center rounded-md bg-[#9A7842] shadow-lg shadow-gray-900/40">
                          <SiMaterialformkdocs className="text-white" size={20} />
                        </div>
                        <h1 className="text-darken text-lg font-medium lg:px-14 uppercase">{card.title}</h1>
                        <p className="px-4 text-gray-500 text-sm">{card.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <motion.div
                className="flex justify-end items-end"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={Img}
                  alt="Craftmanship and Production Img"
                  className="h-[740px] w-[500px] rounded-xl object-cover shadow-2xl"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCraftmanship;
