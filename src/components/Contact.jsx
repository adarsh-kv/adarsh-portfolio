const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-10">
          I'm always interested in learning new technologies,
          working on projects, and connecting with other developers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://github.com/adarsh-kv"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="mailto:adarshvkalarickal@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-krishna-v/"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact