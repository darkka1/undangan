import React from "react";
import heroImg from "@assets/hero.jpg"; // pakai alias atau relative import

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center section-padding bg-gradient-to-b from-white to-pink-50"
    >
      <div className="w-40 h-40 mb-6 rounded-full shadow-lg overflow-hidden border-4 border-pink-300">
        <img
          src={heroImg}
          alt="Gilang & Intan"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="font-script text-5xl text-pink-600 mb-2 animate-fadeIn">
        Gilang & Intan
      </h2>

      <p className="text-gray-600 font-medium max-w-md">
        Dengan memohon rahmat serta ridho Allah Subhanahu Wa Ta’ala,
        kami bermaksud menyelenggarakan pernikahan kami.
      </p>
    </section>
  );
}
