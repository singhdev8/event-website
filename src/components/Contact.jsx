export default function Contact() {
    return (
      <section
        id="contact"
        className="py-24 scroll-mt-24 bg-gray-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
  
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Plan Your Next Event
          </h2>
  
          <p className="text-gray-400 mb-12">
            Professional event management tailored to create unforgettable experiences.
          </p>
  
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10">
  
            {/* Phone */}
            <a
              href="tel:+918054321349"
              className="block text-lg mb-6 hover:text-yellow-400"
            >
              📞 +91 80543 21349
            </a>
  
            {/* WhatsApp */}
            <a
              href="https://wa.me/918054321349"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold mb-8"
            >
              💬 Chat on WhatsApp
            </a>
  
            {/* Social */}
<div className="flex justify-center gap-8 mt-6">

{/* Instagram */}
<a
  href="https://www.instagram.com/harindersarkaria/"
  target="_blank"
  className="flex items-center gap-2 hover:text-pink-400 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm0 2h8.5C18.217 4 20 5.783 20 7.75v8.5c0 1.967-1.783 3.75-3.75 3.75h-8.5C5.783 20 4 18.217 4 16.25v-8.5C4 5.783 5.783 4 7.75 4zm8.75 2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
  Instagram
</a>

{/* Facebook */}
<a
  href="https://www.facebook.com/profile.php?id=1245900364&ref=NONE_ig_profile_ac"
  target="_blank"
  className="flex items-center gap-2 hover:text-blue-400 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.76-1.62 1.54v1.85H16.5l-.4 2.9h-2.54v7.05A10 10 0 0022 12z"/>
  </svg>
  Facebook
</a>

</div>
            
  
          </div>
        </div>
      </section>
    );
  }