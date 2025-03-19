
import {PiStarFourFill} from "react-icons/pi";
import ProjectTitle from "./ProjectTitle";
import ProjectList from "./project/ProjectList";
import {User} from "../../model/User.ts";
import SkillListMarquee from "./SkillMarquee";
import ExperienceList from "./ExperienceList";
import ContactSection from "./Contact.tsx";

const PortfolioPage2 = ({ user }: { user: User }) => {
  return (
    <div
      className="bg-black  mx-auto"
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      <About about={user.longDescription} />
      <Page2Divider color={user.primaryColor} />

      <ExperienceList user={user} />
      <Page2Divider color={user.primaryColor} />

      <ExpertiseTable user={user} />
      <FeaturedWorks user={user} />
      <ContactSection user={user} />
    </div>
  );
};

const About = ({ about }: { about: string }) => {
  return (
      <section id="/about">

      <div className="py-8 md:py-16">
      <ProjectTitle title={"About"} />
      <p className="text-gray-300 px-8 md:px-16 pt-4 md:pt-8 text-base md:text-lg">{about}</p>
    </div>
      </section>
  );
};

const ExpertiseTable = ({ user }: { user: User }) => {
  return (
    <div>
      <SkillListMarquee user={user} />
    </div>
  );
};

const FeaturedWorks = ({ user }: { user: User }) => {
  return (
      <section id="/works">
    <div>
      <Page2Divider color={user.primaryColor} />
        <div className="py-8 md:py-16">
      <ProjectTitle title={"Highlights"} />
      <ProjectList/>
        </div>
    </div>
      </section>
  );
};
function Page2Divider({ color }: Readonly<{ color: string }>) {
  return (
    <div className="flex justify-center py-16 md:py-24">
      <PiStarFourFill className=" text-4xl md:text-6xl" style={{ fill: color }} />
    </div>
  );
}
export default PortfolioPage2;
