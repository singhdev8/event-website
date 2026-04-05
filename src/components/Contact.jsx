export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 scroll-mt-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Let&apos;s Plan Your{" "}
            <span className="gold-text">Next Extraordinary</span> Event
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are envisioning a lavish wedding, an impactful corporate event,
            or a vibrant celebration, our team of seasoned professionals is ready to
            transform your vision into a truly unforgettable reality.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <a
            href="tel:+918054321349"
            className="dark-glass-card rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-gold-500/30 transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg mb-1">Call Us</p>
            <p className="text-gray-400 text-sm">+91 80543 21349</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918054321349"
            target="_blank"
            className="dark-glass-card rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/30 transition-shadow">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <p className="text-white font-semibold text-lg mb-1">WhatsApp</p>
            <p className="text-gray-400 text-sm">Chat with us directly</p>
          </a>

          {/* Location */}
          <div className="dark-glass-card rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg mb-1">Location</p>
            <p className="text-gray-400 text-sm">Amritsar, Punjab, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Follow Us</p>
          <div className="flex justify-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/harindersarkaria/"
              target="_blank"
              className="w-12 h-12 rounded-full dark-glass-card flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm0 2h8.5C18.217 4 20 5.783 20 7.75v8.5c0 1.967-1.783 3.75-3.75 3.75h-8.5C5.783 20 4 18.217 4 16.25v-8.5C4 5.783 5.783 4 7.75 4zm8.75 2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=1245900364&ref=NONE_ig_profile_ac"
              target="_blank"
              className="w-12 h-12 rounded-full dark-glass-card flex items-center justify-center hover:bg-blue-600 hover:border-transparent transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.76-1.62 1.54v1.85H16.5l-.4 2.9h-2.54v7.05A10 10 0 0022 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
