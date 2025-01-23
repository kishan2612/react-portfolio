import React, { useEffect, useState } from "react";

import Typewriter from "typewriter-effect";

const TypewriterText = ({ text }) => {
    return <div className="text-black font-spaceGrotesk"><Typewriter options={{ loop: true, autoStart: true, delay: 150, strings: [text], deleteSpeed: 100 }}></Typewriter></div>
};

export default TypewriterText;
