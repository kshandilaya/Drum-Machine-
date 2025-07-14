import { useRef, useEffect } from "react";

function DrumPad({ clipSrc, keyTrigger, label, onPlayed }) {
    const audioRef = useRef(null);

    const playSound = () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        onPlayed(label);

    };

    useEffect(() => {
        const handleKeyPress = e => {
            if (e.key.toUpperCase() == keyTrigger) {
                playSound();
            }
        }
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    },
        [keyTrigger]);
     return (
    <button className="drum-pad" id={label} onClick={playSound}>
      {keyTrigger}
      <audio
        ref={audioRef}
        className="clip"
        id={keyTrigger}
        src={clipSrc}
      />
    </button>
  );
}

export default DrumPad;