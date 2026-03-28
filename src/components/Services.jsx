export default function Services() {
  const services = [
    {
      title: "Pre-Event Planning",
      desc: "Concept development, budgeting, venue selection, and vendor coordination for a flawless start.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      ),
    },
    {
      title: "Event Execution",
      desc: "End-to-end event handling including stage setup, lighting, logistics, and guest management.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 19V6l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      title: "Post-Event Management",
      desc: "Detailed reporting, media coverage, feedback collection, and financial closure.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M18 17V9M13 17V5M8 17v-3" />
        </svg>
      ),
    },
    {
      title: "Specialized Events",
      desc: "Weddings, corporate events, college fests, and hybrid event solutions tailored to your needs.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3l2.9 6.3L22 10l-5 4.9L18.2 21 12 17.8 5.8 21 7 14.9 2 10l7.1-0.7L12 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 scroll-mt-24 bg-gray-50">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
        Our Services
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Comprehensive solutions to make every event seamless and memorable
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}