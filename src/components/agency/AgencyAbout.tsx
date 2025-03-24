import { AgencyConstants } from "../../constants/AgencyConstants";
import ProjectTitle from "../portfolio/ProjectTitle";
import TechAnimatedText from "../widgets/GlitchText.tsx";

const AgencyAbout = () => {
    return (
        <section id="services" className=" text-white  space-y-10 md:space-y-20">
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"Who are we?"} />
            </div>
            {/* Slogan */}
            <div className="text-center">
                <TechAnimatedText text={"Code. Create. Innovate"}/>
                {/*<h2 className="text-xl md:text-4xl font-spaceGrotesk tracking-wide">*/}
                {/*    Code. Create. Innovate.*/}
                {/*</h2>*/}
                <p className="mt-1 md:mt-2 text-lg md:text-xl text-gray-300">
                    We turn ideas into seamless digital experiences.
                </p>
            </div>

            <p className="mx-8 md:mx-16 text-lg font-sans"> {AgencyConstants.agencyDescription}</p>

            {/* Core Values */}
            <div className="mx-8 md:mx-16 text-center">
                <h2 className="text-3xl md:text-5xl fo font-spaceGrotesk">
                    Our Core Values
                </h2>                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[
                        { title: "Innovation", desc: "We push boundaries, constantly evolving to create next-gen digital solutions." },
                        { title: "Precision", desc: "Every pixel, every line of code—crafted with perfection and attention to detail." },
                        { title: "Collaboration", desc: "We believe in working closely with our clients to transform visions into reality." }
                    ].map((value, index) => (
                        <div key={index} className="p-6 bg-white/10 rounded-xl shadow-md text-center">
                            <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                            <p className="text-gray-300 mt-3">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyAbout;