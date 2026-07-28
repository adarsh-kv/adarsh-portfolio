const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-gray-400">
            © {currentYear} Adarsh Krishna. All Rights Reserved.
          </div>

          {/* Center */}
          <div className="text-gray-500 text-sm">
            Built with React + Tailwind CSS
          </div>

          {/* Right */}
          <div className="flex gap-6 text-gray-400">
            <a 
              href="https://github.com/adarsh-kv" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/adarsh-krishna-v/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;