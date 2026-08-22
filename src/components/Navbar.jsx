import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Calculators", href: "#calculators" },  
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white py-3 shadow-2xl shadow-blue-900/30 border-b-4 border-blue-900"
          : "bg-white py-4 shadow-xl shadow-blue-900/25 border-b-4 border-blue-900/80"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 10px 25px -3px rgba(30, 58, 138, 0.3), 0 4px 6px -2px rgba(30, 58, 138, 0.15)"
          : "0 8px 20px -3px rgba(30, 58, 138, 0.25), 0 3px 6px -2px rgba(30, 58, 138, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden ring-2 ring-blue-900/20 group-hover:ring-blue-900/40 transition-all">
            <img
              src="/Logo.jpeg"
              alt="Wealth Point Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-900 leading-tight">
              Wealth Point
            </h1>
            <p className="text-[10px] text-gray-500 tracking-widest">
              FINANCIAL CONSULTANT
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="bg-linear-to-r from-blue-900 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white border-t-2 border-blue-900/20 mt-3 py-4 px-4"
          style={{
            boxShadow: "0 15px 30px -5px rgba(30, 58, 138, 0.3)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-700 hover:text-blue-900 font-medium border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center bg-linear-to-r from-blue-900 to-indigo-600 text-white px-6 py-3 rounded-full font-medium"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;