import ProjectTitle from "../portfolio/ProjectTitle.tsx";
import { Colors } from "../../constants/AppColors.ts";
import { FaLayerGroup, FaLightbulb, FaMobileAlt, FaPenNib } from "react-icons/fa";
import { FaLaptopCode, FaPalette } from "react-icons/fa6";
import SpotlightCard from "../../widgets/SpotlightCard/SpotlightCard.tsx";





const services = [
    {
        title: "UI/UX Design",
        icon: <FaPalette />,
        color: Colors.orange,
        description: "Crafting intuitive and visually appealing designs for web & mobile apps.",
        gradient: "bg-gradient-uiux",
        spotlightColor: [255, 209, 196, 0.8] // Light peach


    },
    {
        title: "Mobile App Development",
        icon: <FaMobileAlt />,
        color: Colors.blue,
        description: "Building high-performance Android & IOS tailored to your needs.",
        gradient: "bg-gradient-mobile",
        spotlightColor: [192, 226, 255, 0.8] // Light blue


    },
    {
        title: "Website Development",
        icon: <FaLaptopCode />,
        color: Colors.green,
        description: "Creating fast, responsive, and scalable websites for businesses & startups.",
        gradient: "bg-gradient-web",
        spotlightColor: [198, 246, 213, 0.8] // Soft green


    },
    {
        title: "Design Systems",
        icon: <FaLayerGroup />,
        color: Colors.blue,
        description: "Creating cohesive design systems for consistency and scalability across projects.",
        gradient: "bg-gradient-design",
        spotlightColor: [182, 236, 255, 0.8] // Aqua blue


    },
    {
        title: "Branding",
        icon: <FaPenNib />,
        color: Colors.green,
        description: "Crafting strong brand identities with logo design, typography, and color systems.",
        gradient: "bg-gradient-branding",
        spotlightColor: [200, 255, 201, 0.8] // Light mint


    },
    {
        title: "Technology Consulting",
        icon: <FaLightbulb />,
        color: Colors.orange,
        description: "Providing expert guidance to help businesses leverage the right technology for growth and efficiency.",
        gradient: "bg-gradient-tech",
        spotlightColor: [255, 216, 178, 0.8] // Soft orange


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
                    <SpotlightCard className={`p-4 md:p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out 
                         justify-center rounded-3xl ${service.gradient}`}
                        spotlightColor={`rgba(${service.spotlightColor[0]}, ${service.spotlightColor[1]}, ${service.spotlightColor[2]}, ${service.spotlightColor[3]})`}
                        key={index}>

                        {/* Icon in Circular Container */}
                        <div className="w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full bg-white/20 mb-6">
                            <div className="text-Ò md:text-4xl text-white">
                                {service.icon}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-Ò md:text-2xl font-semibold">{service.title}</h3>

                        {/* Description */}
                        <p className="text-center text-xs md:text-sm mt-3 text-white/80 max-w-xs">
                            {service.description}
                        </p>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default AgencyServices;