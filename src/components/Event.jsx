import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Event() {
  return (
    <section id="event" className="section-padding bg-gray-50 text-center">
      <h2 className="font-script text-4xl text-pink-600 mb-10">Acara Pernikahan</h2>

      {/* Resepsi / Pernikahan */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-center mb-2">
          <Calendar className="text-pink-600 w-6 h-6" />
        </div>

        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
          Pernikahan & Resepsi
        </h3>

        <p className="text-gray-600">Minggu, 31 Mei 2026</p>
        <p className="text-gray-600">Pukul 11.00 WIB - Selesai</p>
        <p className="text-gray-700 font-medium mt-2">
          Gedung Cinta Abadi, Bandung
        </p>

        {/* Lokasi */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-3 bg-pink-600 text-white font-semibold rounded-full shadow hover:bg-pink-700 transition"
        >
          Lihat Lokasi
        </a>

        {/* Add to Calendar - Google */}
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Gilang+%26+Intan&dates=20250615T040000Z/20250615T070000Z&location=Gedung+Cinta+Abadi+Bandung&sf=true&output=xml"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-pink-600 font-semibold hover:underline"
        >
          Tambahkan ke Google Calendar
        </a>

        {/* Add to Calendar - Apple/Outlook */}
        <a
          href="/src/assets/wedding.ics"
          download="Wedding_Gilang_Intan.ics"
          className="block mt-1 text-gray-700 hover:underline"
        >
          Add to Apple / Outlook Calendar
        </a>
      </div>
    </section>
  );
}