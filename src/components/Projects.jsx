const Projects = () => {
  const projects = [
    {
      title: "AgriVet Connect: Smart Livestock Health and Farm Management System",
      description:
        "A web-based system designed to help farmers manage livestock health, farm activities, vaccination records, and animal-related information.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "AquaSports: Water Sports Equipment Store",
      description:
        "An e-commerce platform for water sports equipment, offering a seamless shopping experience with categorized products, secure checkout, and responsive design.",
      technologies: ["HTML", "PHP", "CSS"],
    },
    {
      title: "BookSaw: Online BookStore",
      description:
        "An online bookstore that allows users to browse, search, and purchase books through an intuitive interface with organized categories and a smooth shopping experience.",
      technologies: [".Net", "JavaScript", "MySQL"],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition"
            >

              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects