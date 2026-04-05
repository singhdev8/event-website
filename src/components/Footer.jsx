export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid md:grid-cols-3 gap-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center font-display font-bold text-white text-lg">
                S
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-lg">Sarkaria Events</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500">Premium Event Management</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mt-4">
              Delivering extraordinary event experiences with precision, creativity, and
              professionalism across Amritsar, Punjab, and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-sm hover:text-gold-400 transition-colors">About Us</a>
              <a href="#services" className="block text-sm hover:text-gold-400 transition-colors">Our Services</a>
              <a href="#gallery" className="block text-sm hover:text-gold-400 transition-colors">Event Gallery</a>
              <a href="#contact" className="block text-sm hover:text-gold-400 transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+918054321349" className="block hover:text-gold-400 transition-colors">
                +91 80543 21349
              </a>
              <p>Amritsar, Punjab, India</p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/harindersarkaria/"
                  target="_blank"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm0 2h8.5C18.217 4 20 5.783 20 7.75v8.5c0 1.967-1.783 3.75-3.75 3.75h-8.5C5.783 20 4 18.217 4 16.25v-8.5C4 5.783 5.783 4 7.75 4zm8.75 2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=1245900364&ref=NONE_ig_profile_ac"
                  target="_blank"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.76-1.62 1.54v1.85H16.5l-.4 2.9h-2.54v7.05A10 10 0 0022 12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Sarkaria Events. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Crafted with dedication and professionalism
          </p>
        </div>
      </div>
    </footer>
  );
}
