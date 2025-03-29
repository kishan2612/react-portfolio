import {AgencyConstants} from "../../constants/AgencyConstants";
import RotatingText from "../../widgets/RotatingText/RotatingText";
import ProjectTitle from "../portfolio/ProjectTitle";
import SpotlightCard from "../../widgets/SpotlightCard/SpotlightCard.tsx";

const AgencyAbout = () => {
    return (

        <section id="about" className="text-white space-y-10 md:space-y-20">
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"Who are we?"}/>
            </div>

            {/* Slogan */}
            <section className="flex gap-2 items-center text-2xl flex-col">
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="flex flex-row md:flex-row items-center gap-2 md:gap-3">
                        <div className="text-center">
                            <h2 className="text-xl md:text-4xl font-spaceGrotesk tracking-wide">
                                We
                            </h2>
                        </div>

                        {/* Static Blue Box */}
                        <div className=" bg-green-400 text-black  rounded-lg  w-28 md:w-48  overflow-hidden">
                            <RotatingText
                                texts={['Code', 'Create', 'Innovate']}
                                mainClassName="justify-center font-bold text-xl  md:text-4xl font-spaceGrotesk px-2 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2"
                                staggerFrom="last"
                                initial={{y: "100%", opacity: 0}} // Apply only to text
                                animate={{y: 0, opacity: 1}}
                                exit={{y: "-120%", opacity: 0}}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden inline-block" // Ensure only text animates
                                transition={{type: "spring", damping: 30, stiffness: 400}}
                                rotationInterval={2000}
                            />
                        </div>
                    </div>

                    <p className="mt-1 md:mt-2 text-lg md:text-xl font-light text-gray-300">
                        We turn ideas into seamless digital experiences.
                    </p>
                </div>
            </section>
            <p className="mx-8 md:mx-16 text-xl md:text-2xl font-sans"> {AgencyConstants.agencyDescription}</p>

            {/* Core Values */}
            <div className="mx-8 md:mx-16 text-center">
                <h2 className="text-3xl md:text-5xl fo font-spaceGrotesk">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[
                        {
                            title: "Innovation",
                            desc: "We push boundaries, constantly evolving to create next-gen digital solutions."
                        },
                        {
                            title: "Precision",
                            desc: "Every pixel, every line of code—crafted with perfection and attention to detail."
                        },
                        {
                            title: "Collaboration",
                            desc: "We believe in working closely with our clients to transform visions into reality."
                        }
                    ].map((value, index) => (
                        <SpotlightCard key={index} spotlightColor = "rgba(255, 255, 255, 0.5)"
                                       className="p-4 md:p-6 bg-white/10 rounded-xl shadow-md text-center">
                            <h3 className="text-lg md:text-xl font-semibold text-white">{value.title}</h3>
                            <p className="text-gray-300 mt-1 md:mt-3">{value.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyAbout;