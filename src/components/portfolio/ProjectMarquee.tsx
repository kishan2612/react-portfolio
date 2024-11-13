import React from 'react'
import Marquee from "react-fast-marquee";


const ProjectMarquee = () => {
  return (
    <div className='py-10'>
        <Marquee direction='left' autoFill={true} speed={35} gradient={true} gradientColor='#000000'>
            <div className=' text-white font-alfaSlab text-3xl px-8'>
            Project Gallery
            </div>
        </Marquee>
    </div>
    );
}

export default ProjectMarquee