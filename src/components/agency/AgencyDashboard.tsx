import { motion } from "framer-motion";
import { VideoAssets } from "../../constants/AssetLocation.ts";
import { AgencyConstants } from "../../constants/AgencyConstants.ts";
import Particles from "../../widgets/Particles/Particles.tsx";
import Orb from "../../widgets/Orb/Orb.tsx";

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
        <div className="w-full h-screen flex items-center justify-center text-center relative overflow-hidden">

            {/* Background Particles */}
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Orb in the center, behind the text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pb-16">
                <Orb 
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={90}
                />
            </div>

            {/* Centered Text (Above Orb) */}
            <div className="relative z-20 text-white px-4 max-w-4xl">
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

                <p className="mt-4 text-lg md:text-xl opacity-90 font-sans">
                    Crafting exceptional digital experiences for brands that matter.
                </p>
            </div>

        </div>
    );
};



export default AgencyDashboard;
