
import {FaEnvelope, FaLinkedin} from "react-icons/fa";
import {PiStarFourFill} from "react-icons/pi";
import ProjectTitle from "./ProjectTitle";
import ProjectList from "./project/ProjectList";
import {User} from "../../model/User.ts";
import SkillListMarquee from "./SkillMarquee";
import ExperienceList from "./ExperienceList";
import {userKishan} from "../../constants/KishanUserInformation.ts";

const PortfolioPage2 = ({ user }: { user: User }) => {
  return (
    <div
      className="bg-black   pb-8 mx-auto"
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
      <ContactTable />
    </div>
  );
};

const About = ({ about }: { about: string }) => {
  return (
    <div className="pt-4">
      <ProjectTitle title={"About"} />
      <p className="text-gray-200 px-16 text-lg ">{about}</p>
    </div>
  );
};

const ExpertiseTable = ({ user }: { user: User }) => {
  return (
    <div>
      <SkillListMarquee user={user} />
    </div>
  );
};

const ContactTable = () => {
  const handleClick = (link: string) => {
    if (link.startsWith("mailto:")) {
      // Open email client
      window.location.href = link;
    } else {
      // Open website in a new tab
      window.open(link, "_blank");
    }
  };

  return (
    <div>
      <div className="center">
        <h4 className="text-xl font-bold mb-8 text-white font-spaceGrotesk text-center">
          Connect with me
        </h4>
      </div>
      <table className="min-w-min mb-8 mx-auto text-center border border-gray-700">
        <tbody>
          <tr className="divide-x divide-gray-700">
            {userKishan.connectionsMediums.map((method, index) => (
              <td
                key={index}
                className="w-48 py-4 text-gray-500 font-spaceGrotesk cursor-pointer hover:text-purple-300 transition-colors duration-200 "
                onClick={() => handleClick(method.websiteLink)}
              >
                <div className="flex items-center justify-center space-x-2">
                  {method.websiteName === "LinkedIn" ? (
                    <FaLinkedin className="text-xl" />
                  ) : (
                    <FaEnvelope className="text-xl" />
                  )}
                  <span>{method.websiteName}</span>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const FeaturedWorks = ({ user }: { user: User }) => {
  return (
    <div>
      <Page2Divider color={user.primaryColor} />
      <ProjectTitle title={"Highlights"} />
      <ProjectList/>
    </div>
  );
};
function Page2Divider({ color }: Readonly<{ color: string }>) {
  return (
    <div className="flex justify-center py-24">
      <PiStarFourFill className="text-6xl" style={{ fill: color }} />
    </div>
  );
}
export default PortfolioPage2;
