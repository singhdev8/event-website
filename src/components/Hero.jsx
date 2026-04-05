export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
        alt="Elegant event venue with sophisticated lighting and decor"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-soft"></span>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Amritsar&apos;s Trusted Event Professionals
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Crafting{" "}
            <span className="gold-text">Unforgettable</span>{" "}
            Experiences with Precision
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From grand weddings and milestone birthdays to distinguished corporate
            gatherings and vibrant college fests — every detail is orchestrated to
            perfection by a team that brings years of professional expertise to your
            most cherished occasions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="gold-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Book Your Event
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-white/50 text-sm mt-1">Events Managed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
              <p className="text-white/50 text-sm mt-1">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-white/50 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
