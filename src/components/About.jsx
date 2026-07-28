import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-linear-to-br from-cyan-500 to-purple-600 rounded-3xl p-2">
                <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden border border-gray-700">
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-6xl">
                    👨‍💻
                  </div>
                </div>
              </div>
              <div className="absolute -inset-6 border border-cyan-400/30 rounded-[2.5rem] -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm an MCA student passionate about building digital experiences 
                that matter. With a strong foundation in full-stack development, 
                I love turning ideas into clean, functional, and beautiful applications.
              </p>

              <p>
                Currently focused on modern web technologies like React, Tailwind, 
                and Node.js. I enjoy solving real-world problems through code — 
                whether it's farm management systems or community platforms.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="glass px-6 py-3 rounded-2xl">
                <span className="block text-cyan-400 text-sm">Currently Learning</span>
                <span className="font-medium">Next.js + TypeScript</span>
              </div>
              <div className="glass px-6 py-3 rounded-2xl">
                <span className="block text-cyan-400 text-sm">Open To</span>
                <span className="font-medium">Internships & Freelance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;