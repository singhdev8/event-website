export default function About() {
    return (
      <section id="about" className="py-20 px-6 bg-white">
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
  
          {/* LEFT SIDE - TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Us
            </h2>
  
            <p className="text-gray-600 mb-4">
              With years of experience as a respected faculty member at an engineering college, 
              and loads of experience in event management at the college , we bring discipline, professionalism, 
              and excellence to every event.
            </p>
  
            <p className="text-gray-600 mb-4">
              From managing large-scale college fests, convocations, and cultural events to 
              coordinating artists, musicians, and logistics — every event is handled with precision.
            </p>
  
            <p className="text-gray-600">
              Now expanding into professional event management for weddings, birthdays, and corporate events — 
              delivering memorable experiences with perfection.
            </p>
          </div>
  
          {/* RIGHT SIDE - IMAGES */}
          <div className="grid grid-cols-2 gap-4">
  
            <img
              src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57"
              className="rounded-xl shadow-lg"
            />
  
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
              className="rounded-xl shadow-lg"
            />
  
            <img
              src="https://images.unsplash.com/photo-1515169067865-5387ec356754"
              className="rounded-xl shadow-lg col-span-2"
            />
  
          </div>
  
        </div>
  
      </section>
    );
  }