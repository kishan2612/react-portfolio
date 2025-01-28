import React from 'react'
import Marquee from "react-fast-marquee";
import { User } from '../../model/user';


const SkillListMarquee = ({user}:{user:User}) => {
    const rows = 3;
    const itemsPerRow = 4;
    // Create skill rows (splitting into 3 rows)
  const skillRows = Array.from({ length: rows }, (_, rowIndex) => 
    user.highlightSkills.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
  );
  return (
    <div className="skill-marquee-container">
      {skillRows.map((rowSkills, index) => (
        <div className=''
          key={index}
          style={{
            backgroundColor: index === 1 ? user.primaryColor : 'transparent', // Second row gets an orange background
            color: index==1 ? "black" : "white"
          }}
        >
          <Marquee direction={index % 2 === 0 ? 'left' : 'right'} autoFill={true} speed={35} gradient={true} gradientColor='#000000'> {/* Alternate direction for odd/even rows */}
            {rowSkills.map((skill, skillIndex) => (
              <div key={skillIndex} className='mx-16 my-8 text-3xl font-spaceGrotesk'>
                {skill}
              </div>
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
}

export default SkillListMarquee