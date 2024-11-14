import React from 'react'
import { userKishan } from '../../constants/UserInformation'


const ProjectList = () => {
    return (
        <div className='grid grid-cols-2 gap-x-2 gap-y-2 py-16 px-16'>
            {
                userKishan.workProjects.map((value) =>
                    <div key={value.projectName} className='w-full bg-white rounded-3xl hover:bg-purple-300'>

                        <div className="relative overflow-hidden group">
                            <img src={value.mainImageLocation} alt={value.projectName}
                                className='w-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105 group-hover:translate-y-2' />
                        </div>
                        <h1 className='text-center text-black py-6 px-6 text-4xl flex justify-start items-start'>
                            {value.projectName}
                        </h1>


                    </div>)
            }

        </div>
    )
}

export default ProjectList