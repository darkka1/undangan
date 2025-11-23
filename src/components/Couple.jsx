import React from "react";
import { Heart } from "lucide-react";

export default function Couple() {
  return (
    <section id="couple" className="section-padding bg-white text-center">
      <h2 className="font-script text-4xl text-pink-600 mb-10">
        Mempelai
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Groom */}
        <div className="flex flex-col items-center bg-pink-50 p-6 rounded-2xl shadow-md">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow border-4 border-pink-300 mb-4">
            <img
              src="/src/assets/placeholder-couple.jpg"
              alt="Gilang"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif font-semibold text-gray-800 text-xl">Gilang</h3>
          <p className="text-sm text-gray-500">(Putra Bapak A & Ibu B)</p>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center bg-pink-50 p-6 rounded-2xl shadow-md">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow border-4 border-pink-300 mb-4">
            <img
              src="/src/assets/placeholder-couple.jpg"
              alt="Intan"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif font-semibold text-gray-800 text-xl">Intan</h3>
          <p className="text-sm text-gray-500">(Putri Bapak C & Ibu D)</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Heart className="text-pink-500 w-10 h-10 animate-pulse" />
      </div>
    </section>
  );
}