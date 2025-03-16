import {motion} from "framer-motion";
import ProjectTitle from "../portfolio/ProjectTitle.tsx";
import {Colors} from "../../constants/AppColors.ts";
import {PiStarFourFill} from "react-icons/pi";

const AgencyServices = () => {
    return <section id="services" className="py-24 px-16  text-white">

        <div className=" w-full text-center flex"><ProjectTitle title={"What We Offer"}/></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 my-24">
            {["UI/UX Design", "Mobile App Development", "Website Development", "POS App Solutions"].map((service, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: index * 0.2}}
                    className="p-10 text-center border border-gray-800 rounded-lg hover:bg-white hover:text-black transition duration-500"
                >
                    <h3 className="text-2xl font-semibold">{service}</h3>
                </motion.div>
            ))}
        </div>
        <div className="flex justify-center">
            <PiStarFourFill className="text-6xl" style={{ fill: Colors.blue }} />

        </div>
    </section>
}

export default AgencyServices;