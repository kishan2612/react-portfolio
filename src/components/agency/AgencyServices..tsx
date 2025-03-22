import { motion } from "framer-motion";
import ProjectTitle from "../portfolio/ProjectTitle.tsx";
import { AppColors, Colors } from "../../constants/AppColors.ts";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode, FaPalette } from "react-icons/fa6";
import { Page2Divider } from "../widgets/SectionDivider.tsx";

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
];

const AgencyServices = () => {
    return (
        <section id="services" className="py-24 text-white bg-black" style={{
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
        }}>
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"What We Offer"} />
            </div>

            {/* Service Cards Grid */}


            <div className="mx-8 md:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 my-24">
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

                        <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{ background: "rgba(255,255,255,0.1)", filter: "blur(15px)" }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        />

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
            <Page2Divider color={AppColors.primaryBackground}/>
        </section>
    );
};

export default AgencyServices;