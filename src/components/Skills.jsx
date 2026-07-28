import { motion } from "framer-motion";
import { 
  Code2, Database, Globe, Smartphone, 
  Server, GitBranch 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "cyan"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["Java", "Node.js", "MongoDB", "SQL"],
      color: "purple"
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "emerald"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover:border-cyan-400/50 transition-all group"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-${category.color}-500/10 text-${category.color}-400 mb-6 group-hover:scale-110 transition`}>
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-900 text-gray-300 px-5 py-2 rounded-2xl text-sm hover:bg-gray-800 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;