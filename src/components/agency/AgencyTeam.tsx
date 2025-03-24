import {AgencyConstants} from "../../constants/AgencyConstants";
import ProjectTitle from "../portfolio/ProjectTitle";
import AssetLocation from "../../constants/AssetLocation.ts";
import {motion} from "framer-motion";

const teamMembers = [
    {
        name: "John Doe",
        role: "Full-Stack Developer",
        image: AssetLocation.kishanProfileImage, // Replace with actual image paths
    },
    {
        name: "Jane Smith",
        role: "UI/UX & Frontend Engineer",
        image: AssetLocation.kishanProfileImage,
    },
    {
        name: "Alex Johnson",
        role: "Mobile & Backend Specialist",
        image: AssetLocation.kishanProfileImage,
    },
];
const AgencyTeam = () => {


    return (
        <section id="services" className=" text-white space-y-10 md:space-y-20">
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"Meet the team"}/>
            </div>
            <p className="mx-8 md:mx-16 text-lg font-sans"> {AgencyConstants.agencyDescription}</p>


            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 md:mx-28">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index.toFixed()}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.4}}
                        className=" backdrop-blur-lg rounded-2xl shadow-lg text-center mb-4 mx-1 relative overflow-hidden"
                    >

                        {/* Name & Role Container */}
                        <div className="absolute bottom-3 left-3 right-3 bg-white/40 backdrop-blur-sm rounded-2xl p-2 md:p-4">
                            <h3 className="text-xl md:text-2xl font-alfaSlab text-black">{member.name}</h3>
                            <p className="text-xs md:text-sm font-sans text-gray-900">{member.role}</p>
                        </div>
                        {/* Profile Image */}

                        <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-3xl "/>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AgencyTeam;