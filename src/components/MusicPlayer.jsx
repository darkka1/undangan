import React, { forwardRef } from "react";
import { Music } from "lucide-react";

const MusicPlayer = forwardRef((_, ref) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => ref.current?.paused ? ref.current.play() : ref.current.pause()}
        className="p-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        <Music className="w-6 h-6" />
      </button>

      <audio ref={ref} loop src="/src/assets/music.mp3" />
    </div>
  );
});

export default MusicPlayer;