import { motion } from "framer-motion"
import AgencyServices from "./AgencyServices."
import AboutUs from "./AgencyAbout";
import AgencyTeam from "./AgencyTeam";

const AgencyPage2 = () => {
    return <div  className="bg-black  mx-auto"
    style={{
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
    }} >
     {/* Services Section */}
     <AgencyServices />

     <AboutUs/>

     <AgencyTeam/>

     {/* Portfolio Section */}
     <motion.section
         id="portfolio"
         className="py-32 px-10 bg-gray-900 text-white"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
     >
         <h2 className="text-center text-5xl font-bold">Our Work</h2>
         <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
             <motion.div className="h-80 bg-gray-700 rounded-lg" whileHover={{ scale: 1.05 }}></motion.div>
             <motion.div className="h-80 bg-gray-700 rounded-lg" whileHover={{ scale: 1.05 }}></motion.div>
         </div>
     </motion.section>

     {/* Testimonials Section */}
     <section id="testimonials" className="py-32 px-10 bg-black text-white">
         <h2 className="text-center text-5xl font-bold">What Our Clients Say</h2>
         <div className="mt-20 flex justify-center space-x-10">
             {[1, 2].map((i) => (
                 <motion.div
                     key={i}
                     className="p-10 border border-gray-800 rounded-lg w-1/3"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: i * 0.2 }}
                 >
                     <p className="text-lg italic">"They completely transformed our business!"</p>
                     <h4 className="mt-4 font-bold">- CEO, Company {i}</h4>
                 </motion.div>
             ))}
         </div>
     </section>

     {/* Contact Section */}
     <section id="contact" className="py-32 bg-gray-900 text-center text-white">
         <h2 className="text-5xl font-bold">Get in Touch</h2>
         <p className="mt-4 text-lg opacity-75">Let’s collaborate to build something amazing.</p>
         <motion.button
             whileHover={{ scale: 1.1 }}
             className="mt-6 bg-white text-black px-8 py-4 rounded-lg text-lg font-bold"
         >
             Contact Us
         </motion.button>
     </section>

     {/* Footer */}
     <footer className="bg-black text-white text-center py-10 border-t border-gray-800">
         <p>&copy; 2025 Your Agency. All rights reserved.</p>
     </footer>
     </div>
}

export default AgencyPage2;