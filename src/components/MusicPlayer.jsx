import React, { useEffect, forwardRef } from "react";

const MusicPlayer = forwardRef((_, ref) => {
  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.volume = 1;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    playAudio();

    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);
    document.addEventListener("scroll", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("scroll", playAudio);
    };
  }, [ref]);

  return (
    <audio
      ref={ref}
      loop
      src="/music.mp3" // pastikan file di folder public
      style={{ display: "none" }}
    />
  );
});

export default MusicPlayer;