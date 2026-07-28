const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gray-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills