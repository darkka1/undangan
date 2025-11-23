import React, { forwardRef, useEffect } from "react";

const MusicPlayer = forwardRef((_, ref) => {
  useEffect(() => {
    const playOnInteract = () => {
      ref.current?.play();
      document.removeEventListener("click", playOnInteract);
    };

    document.addEventListener("click", playOnInteract);
  }, [ref]);

  return (
    <audio
      ref={ref}
      loop
      autoPlay
      src="https://g.top4top.io/m_3614sjuj11.mp3"
    />
  );
});

export default MusicPlayer;