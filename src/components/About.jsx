export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 scroll-mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Who We Are
          </p>
          <h2 className="section-heading text-gray-900 mb-6">
            A Legacy of Excellence in{" "}
            <span className="font-display italic text-gold-600">Event Management</span>
          </h2>
          <div className="w-20 h-1 gold-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Content */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With years of distinguished experience as a respected faculty member at a
              leading engineering college, combined with extensive hands-on expertise in
              managing college-level events, we bring an unparalleled blend of discipline,
              academic professionalism, and creative excellence to every occasion we undertake.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our portfolio spans the successful orchestration of large-scale college fests,
              prestigious convocation ceremonies, and culturally rich events — seamlessly
              coordinating renowned artists, accomplished musicians, and complex logistical
              operations with meticulous attention to detail and flawless execution.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Now channeling this proven expertise into the world of professional event
              management, we specialize in curating bespoke weddings, landmark birthday
              celebrations, and high-caliber corporate events — each one designed to deliver
              an extraordinary, memorable experience of the highest standard.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Weddings & Receptions", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { label: "Corporate Events", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { label: "College Fests", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
                { label: "Birthday Celebrations", icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 002 16.75v.203a.75.75 0 00.75.75h18.5a.75.75 0 00.75-.75v-.203c0-.372-.148-.73-.413-.996A1.42 1.42 0 0021 15.546zM12 3v2m0 0l3 3H9l3-3z" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57"
                  alt="Beautifully decorated wedding venue with floral arrangements"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                  alt="Professional corporate event with elegant stage setup"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1515169067865-5387ec356754"
                  alt="Vibrant college fest with enthusiastic audience and performers"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl gold-gradient p-6 flex flex-col justify-center items-center text-white text-center">
                <p className="text-3xl font-bold font-display">10+</p>
                <p className="text-sm font-medium mt-1 opacity-90">Years of Trusted Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
