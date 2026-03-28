export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-gray-800">
          Sarkaria Events
        </h1>
  
        {/* Links */}
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
  
      </nav>
    );
  }