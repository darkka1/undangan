import React from "react";

export default function Gallery() {
  const photos = [
    "/src/assets/gallery-1.jpg",
    "/src/assets/placeholder-couple.jpg",
    "/src/assets/placeholder-couple.jpg",
    "/src/assets/placeholder-couple.jpg",
  ];

  return (
    <section id="gallery" className="section-padding text-center bg-white">
      <h2 className="font-script text-4xl text-pink-600 mb-10">Galeri Cinta</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow">
            <img src={src} className="object-cover w-full h-40 hover:scale-110 transition duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}