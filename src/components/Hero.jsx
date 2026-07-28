
const Hero = () => {
  return (
     <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6 pt-24"
    >
      <div className="text-center">

        <p className="text-blue-500 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Adarsh Krishna
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          MCA Student & Aspiring Full Stack Developer
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          I enjoy building modern web applications and learning
          new technologies to solve real-world problems.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero