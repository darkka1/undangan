import React, { useEffect, forwardRef } from "react";

const MusicPlayer = forwardRef((_, ref) => {
  useEffect(() => {
    const audio = ref.current;

    if (audio) {
      const playAudio = () => {
        audio.play().catch(() => {});
      };

      // Coba autoplay ketika komponen muncul
      playAudio();

      // Jika autoplay di-block browser → play ketika user scroll
      window.addEventListener("touchstart", playAudio);
      window.addEventListener("click", playAudio);
      window.addEventListener("scroll", playAudio);

      return () => {
        window.removeEventListener("touchstart", playAudio);
        window.removeEventListener("click", playAudio);
        window.removeEventListener("scroll", playAudio);
      };
    }
  }, [ref]);

  return (
    <audio
      ref={ref}
      loop
      src="/src/assets/music.mp3" // ganti dengan link mp3 jika sudah ada
      style={{ display: "none" }} // tersembunyi
    />
  );
});

export default MusicPlayer;