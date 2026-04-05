import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${
              scrolled
                ? "gold-gradient text-white shadow-md"
                : "bg-white/20 backdrop-blur text-white border border-white/30"
            }`}
          >
            S
          </div>
          <div>
            <h1
              className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Sarkaria Events
            </h1>
            <p
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                scrolled ? "text-gold-600" : "text-gold-300"
              }`}
            >
              Premium Event Management
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl animate-fade-in-down">
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-gray-700 font-medium text-sm uppercase tracking-wide hover:text-gold-600 transition-colors border-b border-gray-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center gold-gradient text-white py-3 rounded-xl font-semibold text-sm mt-3"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
