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
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 bg-white border-b-4 ${
        scrolled
          ? "border-blue-900 shadow-2xl shadow-blue-900/30"
          : "border-blue-900/80 shadow-xl shadow-blue-900/25"
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
  <a href="#home" className="flex items-center group">
    <img
      src="/peshne logo.png"
      alt="Wealth Point Logo"
      className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </a>

  <div className="-ml-3 flex flex-col justify-center">
    <h3 className="text-xl font-bold text-black leading-tight">
      Wealth Point
    </h3>
    <p className="text-[10px] text-gray-400 tracking-widest whitespace-nowrap">
      FINANCIAL CONSULTANT
    </p>
  </div>
</div>

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
        <div className="md:hidden bg-white border-t-2 border-blue-900/20 py-4 px-4 shadow-2xl shadow-blue-900/20">
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
