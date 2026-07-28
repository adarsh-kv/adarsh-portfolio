import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-500"
          onClick={closeMenu}
        >
          Adarsh
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-5">
          <div className="flex flex-col gap-4">

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar