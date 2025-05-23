import {useParams} from "react-router-dom";
import {getSelectedUser, getUserSelectedProject} from "../components/portfolio/project/UserProject.ts";
import {Project} from "../model/Project.ts";
import PortfolioNavBar from "../components/portfolio/PortfolioNavBar.tsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {User} from "../model/User.ts";

const ProjectDetailPage = () => {
    const {projectId} = useParams(); // Extract project ID from URL
    const [selectedImage, setSelectedImage] = useState<string | null>();

    const user: User | undefined | null = getSelectedUser(projectId!);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    if (projectId && user) {
        const project: Project | undefined | null = getUserSelectedProject(projectId,user)

        if (project) {
            return (
                <div className="w-full bg-black text-white font-sans">
                    Navigation Bar1
                    <header className="fixed top-0 left-0 w-full">
                        <PortfolioNavBar user={user} showActionItems={false}/>
                    </header>

                    {/* Main Content */}
                    <div className=" px-16 md:px-16 pb-24 pt-20">
                        {/* Project Name */}
                        <h1 className="md:text-6xl font-bold mb-6 md:mb-12 mt-8 md:mt-16 text-start font-alfaSlab text-6xl">{project.projectName}</h1>

                        {/* Short Description */}
                        <p className="text-base md:text-xl text-gray-300 text-start mb-16">{project.shortDescription}</p>

                        {/* Grid Layout for Details */}
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Column: Project Details */}
                            <div>
                                <h2 className=" text-xl md:text-2xl font-semibold mb-6 md:mb-12 text-gray-200">Project Details</h2>
                                <ul className="space-y-2 md:space-y-6 text-base md:text-lg text-gray-400">
                                    <li><strong>Role:</strong> {project.role}</li>
                                    <li><strong>Timeline:</strong> {project.duration}</li>
                                    <li><strong>Technologies:</strong> {project.technologies.join(", ")}</li>
                                </ul>
                            </div>

                            {/* Right Column: Features */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-12 text-gray-200">Features</h2>
                                <ul className="space-y-2 md:space-y-6 text-base md:text-lg text-gray-400">
                                    {project.features.map((feature, _) => (
                                        <li key={feature} className="flex items-center">
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Long Description */}
                        <div className="mt-16">
                            <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-12 text-gray-200">About This Project</h2>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{project.longDescription}</p>
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
  