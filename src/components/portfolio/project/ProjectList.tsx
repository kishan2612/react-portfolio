import {userKishan} from '../../../constants/KishanUserInformation.ts'
import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import { Project } from '../../../model/Project';

const ProjectList = () => {

    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 py-16 px-16">
            {
                userKishan.workProjects.map((value) => (
                   <ProjectCard value={value} key={value.id}/>
                ))
            }
        </div>

    )
}

const ProjectCard=({value}:{value:Project})=>{
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/works/${value.id}`); // Converts "Case 01" to "Case_01"
    };
    return <button
        key={value.id}
        tabIndex={0}
        onClick={handleNavigation}
        className="w-full bg-white rounded-3xl overflow-hidden group transition-colors duration-300"
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = userKishan.primaryColor;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
        }}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.currentTarget.style.backgroundColor = userKishan.primaryColor;
            }
        }}>
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-3xl">
            <img src={value.mainImageLocation}
                 alt={value.projectName}
                 className="w-full object-cover rounded-t-3xl transition-transform duration-500
                                   group-hover:scale-105 group-hover:translate-y-2"
            />
        </div>

        {/* Project Name and Arrow */}
        <h1 className="text-black py-6 px-6 text-3xl flex justify-between items-center relative">
            {/* Project Name */}
            <span>{value.projectName}</span>

            {/* Arrow Icon */}
            <div
                className="text-2xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            >
                <AiOutlineArrowRight/>
            </div>
        </h1>
    </button>
}

export default ProjectList