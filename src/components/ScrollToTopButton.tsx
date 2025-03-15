import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai"; // Import arrow icon

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => scroll.scrollToTop({ smooth: true, duration: 800 })}
            className={`fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg transition-all ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <AiOutlineArrowUp size={24} />
        </button>
    );
};

export default ScrollToTopButton;
