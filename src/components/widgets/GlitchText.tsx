import { motion } from "framer-motion";

const TechAnimatedText = ({ text }: { text: string }) => {
    return (
        <motion.h2
            className="text-xl md:text-4xl font-spaceGrotesk tracking-wide text-white"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            {text}
        </motion.h2>
    );
};

export default TechAnimatedText;
