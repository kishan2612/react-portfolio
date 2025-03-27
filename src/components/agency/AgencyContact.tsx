import { motion } from "framer-motion";
import SpotlightCard from "../../widgets/SpotlightCard/SpotlightCard";


const AgencyContact = () => {
    return (
        <section id="contact" className="relative py-16">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 w-full h-full"
            />

            <div className="relative text-center space-y-12">
                {/* Title */}
                <h1 className="text-5xl md:text-9xl text-white leading-none font-alfaSlab">
                    Let's Collaborate!
                </h1>
                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg text-white/80">
                    Have a project in mind? We’d love to hear from you!
                    Whether it's a website, app, or design system, let's build something amazing together.
                </p>
                {/* Contact Form */}
                
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl mx-auto "
                >
                    <SpotlightCard className=" bg-white/15 p-8 md:p-12 rounded-2xl shadow-xl space-y-6">
                    {/* Name Field */}
                    <div className="flex flex-col text-left">
                        <label className="text-white text-lg font-medium">Your Name</label>
                        <input
                            type="text"
                            className="mt-2 px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col text-left">
                        <label className="text-white text-lg font-medium">Email</label>
                        <input
                            type="email"
                            className="mt-2 px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                            required
                        />
                    </div>

                    {/* Project Info Field */}
                    <div className="flex flex-col text-left">
                        <label className="text-white text-lg font-medium">Project Information</label>
                        <textarea
                            maxLength={500}
                            className="mt-2 px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all h-32 resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-8 py-4 rounded-full text-lg font-bold text-white bg-white/20 border border-white/50 hover:bg-white/30 transition-all"
                    >
                        Submit
                    </motion.button>
                    </SpotlightCard>
                </motion.form>
            </div>
        </section>
    );
};export default AgencyContact;
