import React from "react";
import { Heart } from "lucide-react";

export default function Cover({ onOpen }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-100 to-white text-center px-6 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('/src/assets/placeholder-couple.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 fade-in">
        <h1 className="text-5xl font-script text-pink-600 mb-4">The Wedding of</h1>
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-2">
          Gilang & Intan
        </h2>
        <p className="text-gray-600 mb-8">Minggu, 31 Mei 2026</p>

        <button
          onClick={onOpen}
          className="p-4 px-7 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full inline-flex items-center space-x-2 shadow-lg transition"
        >
          <Heart className="w-5 h-5 animate-heartbeat" />
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
}