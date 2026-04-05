export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      alt: "Professional corporate conference with modern stage design",
      label: "Corporate Events",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      alt: "Grand wedding celebration with elegant decor and warm lighting",
      label: "Weddings",
    },
    {
      src: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
      alt: "Beautifully arranged celebration with floral centerpieces",
      label: "Celebrations",
    },
    {
      src: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
      alt: "Vibrant college fest with energetic crowd and performances",
      label: "College Fests",
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      alt: "Spectacular event with professional lighting and atmosphere",
      label: "Stage & Lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      alt: "Outdoor event setup with artistic decorations and ambiance",
      label: "Outdoor Events",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Portfolio
          </p>
          <h2 className="section-heading text-gray-900 mb-6">
            A Glimpse Into Our{" "}
            <span className="font-display italic text-gold-600">Finest Events</span>
          </h2>
          <p className="section-subheading">
            Every photograph tells a story of meticulous planning, creative vision, and
            flawless execution — explore a selection of the memorable occasions we have
            had the privilege of bringing to life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-md cursor-pointer ${
                index === 0 || index === 5 ? "md:row-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <p className="text-white font-semibold text-lg">{img.label}</p>
                  <div className="w-8 h-0.5 gold-gradient mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
