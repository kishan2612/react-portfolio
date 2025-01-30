import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { WorkProject } from "../../../model/user";

const ProjectPage = ({project}:{project:WorkProject}) => {
    const { projectId } = useParams();
  
  
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.img
            src={project.mainImageLocation}
            alt={project.projectName}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.h1 className="text-5xl font-bold z-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {project.projectName}
          </motion.h1>
          <motion.p className="text-lg mt-4 max-w-2xl z-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {project.shortDescription}
          </motion.p>
        </div>
  
        {/* Project Details */}
        <div className="max-w-5xl mx-auto py-20 px-6">
          <motion.div className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg mb-6">{project.longDescription}</p>
            <img src={project.mainImageLocation} alt={project.projectName} className="w-full rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default ProjectPage;
  