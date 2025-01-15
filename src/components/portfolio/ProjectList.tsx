import React from 'react'
import { userKishan } from '../../constants/UserInformation'
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from 'framer-motion';

const ProjectList = () => {
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 py-16 px-16">
            {
                userKishan.workProjects.map((value) => (
                    <div
                        key={value.projectName}
                        className="w-full bg-white rounded-3xl hover:bg-purple-300 hover:rounded-3xl overflow-hidden group"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-t-3xl">
                            <img
                                src={value.mainImageLocation}
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
                                <AiOutlineArrowRight />
                            </div>
                        </h1>
                    </div>
                ))
            }
        </div>

    )
}

export default ProjectList