import { motion } from "framer-motion";
import {VideoAssets} from "../../constants/AssetLocation.ts";
import { AgencyConstants } from "../../constants/AgencyConstants.ts";

const wordVariants = {
    hidden: { opacity: 0, y: 20 }, // Start from below
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.5, ease: "linear" },
    }),
};

const AgencyDashboard = () => {
    return (
        <div className="w-full">
        <motion.section
            initial="hidden"
            animate="visible"
            className="relative h-screen flex items-center justify-center text-center"
        >
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={VideoAssets.agencyAbstract} type="video/webm" />
                Your browser does not support the video tag.
            </video>


            {/* Animated Text Content */}
            <div className="relative z-10 text-white px-4">
                <h2 className="text-3xl md:text-8xl font-alfaSlab leading-tight">
                    {AgencyConstants.agencySlogan.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            variants={wordVariants}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                    className="mt-4 text-lg md:text-xl opacity-90 font-sans"
                >
                    Crafting exceptional digital experiences for brands that matter.
                </motion.p>
            </div>
        </motion.section>
        </div>
    );
};

export default AgencyDashboard;
