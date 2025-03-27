import {AgencyConstants} from "../../constants/AgencyConstants.ts";
import Particles from "../../widgets/Particles/Particles.tsx";
import Orb from "../../widgets/Orb/Orb.tsx";
import BlurText from "../../widgets/BlurText/BlurText.tsx";
import SplitText from "../../widgets/SplitText/SplitText.tsx";


const AgencyDashboard = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center text-center relative overflow-hidden">

            {/* Background Particles */}
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Orb in the center, behind the text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pb-16">
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={90}
                />
            </div>

            {/* Centered Text (Above Orb) */}
            <div className="relative z-20 text-white px-4 ">
                <BlurText
                    text={AgencyConstants.agencySlogan}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl md:text-9xl font-alfaSlab leading-tight text-c"
                />
                <div className="mt-4">
                <SplitText
                    text=" Crafting exceptional digital experiences for brands that matter."
                    className=" text-lg md:text-xl opacity-90 font-sans"
                    delay={25}
                    animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                    animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                    threshold={0.5}
                    rootMargin="-50px"
                /></div>


            </div>

        </div>
    );
};


export default AgencyDashboard;
