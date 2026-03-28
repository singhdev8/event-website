export default function Hero() {
    return (
      <section className="h-screen relative">
  
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
          alt="event"
          className="absolute w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/60"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Event Management
          </h1>
  
          <p className="mb-6 text-lg md:text-xl">
            Weddings • Birthdays • Corporate • College Events
          </p>
  
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Book Now
          </a>
  
        </div>
      </section>
    );
  }