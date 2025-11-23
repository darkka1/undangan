import React from "react";
import { Heart } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/40 shadow-md py-3">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between text-sm">
        <button
          className="flex items-center space-x-1 font-script text-xl text-pink-600"
          onClick={() => scrollTo("hero")}
        >
          <Heart className="w-5 h-5 animate-heartbeat" />
          <span>Gilang & Intan</span>
        </button>

        <div className="flex space-x-4 font-semibold text-gray-700">
          <button onClick={() => scrollTo("event")} className="hover:text-pink-600 transition">
            Acara
          </button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-pink-600 transition">
            Galeri
          </button>
          <button onClick={() => scrollTo("closing")} className="hover:text-pink-600 transition">
            Penutup
          </button>
        </div>
      </div>
    </nav>
  );
}