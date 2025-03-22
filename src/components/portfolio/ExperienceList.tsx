import {User} from "../../model/User.ts";
import ProjectTitle from "./ProjectTitle";
import {motion} from "framer-motion";
import {FaBriefcase} from "react-icons/fa";

const ExperienceList = ({ user }: { user: User }) => {
  return (
    <div className="py-8 md:py-16" >
      <ProjectTitle title={"Career"} />
      <CareerTimeline user={user} />
    </div>
  );
};

function CareerTimeline({ user }: Readonly<{ user: User }>) {
    return (
      <div className="max-w-4xl mx-auto pt-4 md:pt-8">
        <div className="relative flex flex-col items-center">
          <div
            className="absolute w-1 bg-gray-300 h-full"
            style={{ backgroundColor: user.primaryColor }}
          ></div>
          {user.workExperiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative w-2/4 md:w-1/2 p-6 md:p-8 shadow-lg rounded-lg ${index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"}`}
            >
              <div
                className="absolute top-8 w-8 h-8 flex items-center justify-center text-white rounded-full shadow-md"
                style={{
                  backgroundColor: user.primaryColor,
                  left: index % 2 === 0 ? "-16px" : "auto",
                  right: index % 2 === 0 ? "auto" : "-16px",
                }}
              >
                <FaBriefcase size={14} />
              </div>
              <h3 className="text-sm md:text-xl text-white font-semibold font-spaceGrotesk">{experience.position}</h3>
              <p className="text-gray-400 text-xs md:text-base">{experience.company}</p>
              <p className="text-xs md:text-sm text-gray-600">
                {experience.startYear} - {experience.endYear}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
export default ExperienceList;
