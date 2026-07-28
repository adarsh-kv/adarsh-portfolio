import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#22d3ee_0%,transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#a855f7_0%,transparent_50%)] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg md:text-xl mb-4 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            Adarsh Krishna V
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-300 min-h-15 mb-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
            Building modern web experiences with clean code and creative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl text-lg transition-all glow-cyan"
            >
              View My Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-400 hover:border-white px-8 py-4 rounded-2xl text-lg transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;