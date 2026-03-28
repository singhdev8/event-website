export default function Gallery() {
    const images = [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    ];
  
    return (
      <section id="gallery" className="py-24 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Event Gallery
        </h2>
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md group"
            >
              <img
                src={img}
                alt="event"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }