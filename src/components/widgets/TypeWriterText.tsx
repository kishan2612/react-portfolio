
import Typewriter from "typewriter-effect";

const TypewriterText = ({ text }:{text:string}) => {
    return <div className="text-black font-spaceGrotesk text-base md:text-2xl"><Typewriter options={{ loop: true, autoStart: true, delay: 150, strings: [text], deleteSpeed: 100 }}></Typewriter></div>
};

export default TypewriterText;
