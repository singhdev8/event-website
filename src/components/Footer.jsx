export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Sarkaria Events. All rights reserved.</p>
        <p className="text-sm mt-2">
          Designed & Developed with professionalism
        </p>
      </footer>
    );
  }