import AgencyServices from "./AgencyServices."
import AboutUs from "./AgencyAbout";
import AgencyTeam from "./AgencyTeam";
import AgencyPageDivider from "../AgencyPageDivider.tsx";
import {AppColors} from "../../constants/AppColors.ts";
import AgencyContact from "./AgencyContact.tsx";
import {AgencyConstants} from "../../constants/AgencyConstants.ts";

const AgencyPage2 = () => {
    return <div className="bg-black  mx-auto space-y-16 md:space-y-24 pt-16 md:pt-24"
                style={{
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                }}>
        {/* Services Section */}
        <AgencyServices/>
        <AgencyPageDivider color={AppColors.primaryBackground}/>

        <AboutUs/>
        <AgencyPageDivider color={AppColors.primaryBackground}/>

        <AgencyTeam/>
        <AgencyPageDivider color={AppColors.primaryBackground}/>
        <AgencyContact/>
        {/*/!* Portfolio Section *!/*/}
        {/*<motion.section*/}
        {/*    id="portfolio"*/}
        {/*    className="py-32 px-10 bg-gray-900 text-white"*/}
        {/*    initial={{ opacity: 0 }}*/}
        {/*    whileInView={{ opacity: 1 }}*/}
        {/*    transition={{ duration: 1 }}*/}
        {/*>*/}
        {/*    <h2 className="text-center text-5xl font-bold">Our Work</h2>*/}
        {/*    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">*/}
        {/*        <motion.div className="h-80 bg-gray-700 rounded-lg" whileHover={{ scale: 1.05 }}></motion.div>*/}
        {/*        <motion.div className="h-80 bg-gray-700 rounded-lg" whileHover={{ scale: 1.05 }}></motion.div>*/}
        {/*    </div>*/}
        {/*</motion.section>*/}

        {/* Contact Section */}

        {/* Footer */}
        <footer className="bg-black text-white text-center py-10 border-t border-gray-800">
            <p>&copy; 2025 {AgencyConstants.agencyName}. All rights reserved.</p>
        </footer>
    </div>
}

export default AgencyPage2;