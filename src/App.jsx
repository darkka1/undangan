import React, { useState, useRef } from "react";
import ScrollReveal from "@components/ScrollReveal";
import Navbar from "@components/Navbar";
import Cover from "@components/Cover";
import Hero from "@components/Hero";
import Couple from "@components/Couple";
import Event from "@components/Event";
import QuranVerse from "@components/QuranVerse";
import Countdown from "@components/Countdown";
import Gallery from "@components/Gallery";
import Closing from "@components/Closing";
import MusicPlayer from "@components/MusicPlayer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvite = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 600);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-serif">
      {!isOpen && <Cover onOpen={handleOpenInvite} />}

      {isOpen && (
        <>
          <Navbar />
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          <ScrollReveal>
            <QuranVerse />
          </ScrollReveal>
          <ScrollReveal>
            <Couple />
          </ScrollReveal>
          <ScrollReveal>
            <Event />
          </ScrollReveal>
          <ScrollReveal>
            <Countdown />
          </ScrollReveal>
          <ScrollReveal>
            <Gallery />
          </ScrollReveal>
          <ScrollReveal>
            <Closing />
          </ScrollReveal>

          <MusicPlayer ref={audioRef} />
        </>
      )}
    </div>
  );
}