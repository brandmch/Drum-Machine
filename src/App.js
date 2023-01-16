import React, { useEffect, useState } from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

function App() {
  const SoundButtons = () => {
    return soundArr.map((curr, ind) => {
      const tempAudio = new Audio(curr);

      return <div className="button-grid-item" id={ind}></div>;
    });
  };

  return (
    <div className="App">
      <div className="button-grid-container">
        <SoundButtons />
      </div>
    </div>
  );
}

export default App;
