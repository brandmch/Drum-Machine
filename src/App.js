import React, { useEffect, useState } from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

const useAudio = (sound) => {
  const audio = useState(sound);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

const SoundButton = (props) => {
  const [playing, toggle] = useAudio(props.tempAudio);

  return (
    <div className="button-grid-item" onClick={toggle}>
      <h2>{playing ? "Pause" : "Play"}</h2>
    </div>
  );
};

function App() {
  const SoundButtons = () => {
    return soundArr.map((curr, ind) => {
      const tempAudio = new Audio(curr);
      return <SoundButton tempAudio={tempAudio} />;
    });
  };

  return (
    <div className="App">
      <div className="button-grid-container">
        <h1>HEAD</h1>
        <SoundButtons />
      </div>
    </div>
  );
}

export default App;
