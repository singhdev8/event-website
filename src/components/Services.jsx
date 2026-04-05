export default function Services() {
  const services = [
    {
      title: "Pre-Event Planning",
      desc: "From initial concept development and strategic budgeting to meticulous venue selection and seamless vendor coordination — we lay the groundwork for a flawless event well before the first guest arrives, ensuring every detail aligns with your vision.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Event Execution",
      desc: "Comprehensive end-to-end event handling that encompasses professional stage design, atmospheric lighting, intricate logistics management, and attentive guest coordination — all executed with military precision and creative flair to bring your event to life.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      title: "Post-Event Management",
      desc: "Thorough post-event services including detailed reporting and documentation, professional media coverage compilation, structured feedback collection and analysis, and complete financial closure — providing you with a comprehensive wrap-up of your event's success.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Specialized Events",
      desc: "Bespoke event solutions tailored precisely to your unique requirements — from elegant weddings and distinguished corporate gatherings to dynamic college fests and innovative hybrid event formats, each one meticulously crafted to exceed your expectations.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 scroll-mt-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            What We Offer
          </p>
          <h2 className="section-heading text-gray-900 mb-6">
            Comprehensive Solutions for{" "}
            <span className="font-display italic text-gold-600">Every Occasion</span>
          </h2>
          <p className="section-subheading">
            From the very first spark of an idea to the final farewell, our full-spectrum
            event management services ensure every moment is seamless, memorable, and
            executed to the highest professional standard.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="w-14 h-14 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center mb-6 group-hover:gold-gradient group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-gold-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
