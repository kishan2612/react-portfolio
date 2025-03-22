import { AgencyConstants } from "../../constants/AgencyConstants";
import { AppColors } from "../../constants/AppColors";
import Page2Divider from "../PageDivider";
import ProjectTitle from "../portfolio/ProjectTitle";

const AgencyAbout = () => {
    return (
        <section id="services" className=" text-white bg-black">
            {/* Section Title */}
            <div className="w-full text-center">
                <ProjectTitle title={"Who are we?"} />
            </div>
            <p className="mx-8 md:mx-16 py-16 md:py-24 text-lg font-sans"> {AgencyConstants.agencyDescription}</p>
            <Page2Divider color={AppColors.primaryBackground}/>
        </section>
    );
};

export default AgencyAbout;