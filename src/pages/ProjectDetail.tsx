import {useParams} from "react-router-dom";
import {getUserSelectedProject} from "../components/portfolio/project/UserProject.ts";
import {Project} from "../model/Project.ts";
import PortfolioNavBar from "../components/portfolio/PortfolioNavBar.tsx";
import {userKishan} from "../constants/KishanUserInformation.ts";
import {useState} from "react";
import {motion} from "framer-motion";

const ProjectDetailPage = () => {
    const {projectId} = useParams(); // Extract project ID from URL
    const [selectedImage, setSelectedImage] = useState<string | null>();

    if (projectId) {
        const project: Project | undefined | null = getUserSelectedProject(projectId)

        if (project) {
            return (
                <div className="w-full  min-h-screen bg-black text-white font-sans">
                    Navigation Bar1
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
                                <h2 className="text-2xl font-semibold mb-12 text-gray-200">Project Details</h2>
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
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <button key={screenshot}
                                            onClick={() => setSelectedImage(screenshot)} className="focus:outline-none">
                                        <img
                                            src={screenshot}
                                            alt={`Screenshot ${index + 1}`}
                                            className="w-full h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform"
                                        />
                                    </button>

                                ))}
                            </div>
                        </div>
                        {/* Preview Modal */}
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                onClick={() => setSelectedImage(null)} // Close on background click
                            >
                                <motion.img
                                    src={selectedImage}
                                    alt="Preview"
                                    className="max-w-4xl max-h-[70vh] rounded-3xl shadow-xl"
                                    initial={{scale: 0.8}}
                                    animate={{scale: 1}}
                                    exit={{scale: 0.8}}
                                />
                            </motion.div>
                        )}
                    </div>
                </div>
            );
        } else {
            return <h1>Project Not Found</h1>;
        }
    }


};

export default ProjectDetailPage;
  