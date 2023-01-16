import React from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

function App() {
  const sounds = soundArr.reduce((acc, curr) => {
    const newAudio = new Audio(curr);
    return [...acc, newAudio];
  }, []);

  return (
    <div className="App">
      {sounds.map((curr, ind) => (
        <button className="button" onClick={() => curr.play()}>
          Play {ind}
        </button>
      ))}
    </div>
  );
}

export default App;
