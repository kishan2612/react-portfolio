import { motion } from "framer-motion";
import ProjectTitle from "../portfolio/ProjectTitle.tsx";
import { Colors } from "../../constants/AppColors.ts";
import {FaLayerGroup, FaLightbulb, FaMobileAlt, FaPenNib} from "react-icons/fa";
import { FaLaptopCode, FaPalette } from "react-icons/fa6";

const services = [
    {
        title: "UI/UX Design",
        icon: <FaPalette />,
        color: Colors.orange,
        description: "Crafting intuitive and visually appealing designs for web & mobile apps.",
        gradient: "linear-gradient(135deg, #FF998C, #FF6A5E, #E0563D)"
    },
    {
        title: "Mobile App Development",
        icon: <FaMobileAlt />,
        color: Colors.blue,
        description: "Building high-performance Android & IOS tailored to your needs.",
        gradient: "linear-gradient(135deg, #90cdf8, #6094D8, #3C6CB1)"
    },
    {
        title: "Website Development",
        icon: <FaLaptopCode />,
        color: Colors.green,
        description: "Creating fast, responsive, and scalable websites for businesses & startups.",
        gradient: "linear-gradient(135deg, #93E9BE, #5AC888, #36A678)"
    },
    {
        title: "Design Systems",
        icon: <FaLayerGroup />,
        color: Colors.blue,
        description: "Creating cohesive design systems for consistency and scalability across projects.",
        gradient: "linear-gradient(135deg, #90E0F8, #60B0D8, #3C90B1)"
    },
    {
        title: "Branding",
        icon: <FaPenNib />,
        color: Colors.green,
        description: "Crafting strong brand identities with logo design, typography, and color systems.",
        gradient: "linear-gradient(135deg, #A0F3A1, #60C878, #329856)"},
    {
        title: "Technology Consulting",
        icon: <FaLightbulb />,
        color: Colors.orange,
        description: "Providing expert guidance to help businesses leverage the right technology for growth and efficiency.",
        gradient: "linear-gradient(135deg, #FFAA80, #FF7A50, #E05A30)"
    }
    ];

const AgencyServices = () => {
    return (
        <section id="services" className=" text-white  space-y-10 md:space-y-20">
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"What We Offer"} />
            </div>

            {/* Service Cards Grid */}


            <div className="mx-8 md:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, }}
                        className="p-4 md:p-8 flex flex-col items-center justify-center rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                        style={{ background: service.gradient }}
                    >


                        {/* Icon in Circular Container */}
                        <div className="w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full bg-white/20 mb-6">
                            <div className="text-xl md:text-4xl text-white"

                            >
                                {service.icon}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>

                        {/* Description */}
                        <p className="text-center text-xs md:text-sm mt-3 text-white/80 max-w-xs">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AgencyServices;