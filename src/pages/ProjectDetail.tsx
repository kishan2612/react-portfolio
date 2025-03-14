import {useParams} from "react-router-dom";
import {getUserSelectedProject} from "../components/portfolio/project/UserProject.ts";
import {Project} from "../model/Project.ts";
import PortfolioNavBar from "../components/PortfolioNavBar.tsx";
import {userKishan} from "../constants/KishanUserInformation.ts";

const ProjectDetailPage = () => {
    const {projectId} = useParams(); // Extract project ID from URL

    if (projectId) {
        const project: Project | undefined | null = getUserSelectedProject(projectId)

        if (project) {
            return (
                <div className="w-full  min-h-screen bg-black text-white font-sans">
                     Navigation Bar
                    <header className="fixed top-0 left-0 w-full">
                       <PortfolioNavBar user={userKishan} showActionItems={false}/>
                    </header>

                    {/* Main Content */}
                    <div className=" mx-auto  px-16 md:px-16 pb-24 pt-28">
                        {/* Project Name */}
                        <h1 className="md:text-6xl font-bold mb-12 mt-16 text-start font-alfaSlab" style={
                            {fontSize: "7rem"}
                        }>{project.projectName}</h1>

                        {/* Short Description */}
                        <p className="text-xl text-gray-300 text-start mb-16">{project.shortDescription}</p>

                        {/* Grid Layout for Details */}
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Column: Project Details */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-12 text-gray-200" >Project Details</h2>
                                <ul className="space-y-6 text-lg text-gray-400">
                                    <li><strong>Role:</strong> {project.role}</li>
                                    <li><strong>Timeline:</strong> {project.duration}</li>
                                    <li><strong>Technologies:</strong> {project.technologies.join(", ")}</li>
                                </ul>
                            </div>

                            {/* Right Column: Features */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-12 text-gray-200">Features</h2>
                                <ul className="space-y-6 text-lg text-gray-400">
                                    {project.features.map((feature, _) => (
                                        <li key={feature} className="flex items-center">
                                             <span className="ml-2">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Long Description */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-200">About This Project</h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{project.longDescription}</p>
                        </div>


                        {/* Screenshots Gallery */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Screenshots</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <img
                                        key={screenshot}
                                        src={screenshot}
                                        alt={`Screenshot ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Project Not Found</h1>;
        }
    }


};

export default ProjectDetailPage;
  