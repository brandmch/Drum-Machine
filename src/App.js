import React, { useState } from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

function App() {
  const [power, togglePower] = useState(true);
  const [soundTitle, setSoundTitle] = useState("");
  const [volume, setVolume] = useState(1);

  const soundOrder = {
    Hat: 7,
    "Kick Light": 8,
    Kick: 9,
    "Perc-1": 4,
    "Perc-4": 5,
    "Snare Off": 6,
    "Snare Rimshot": 1,
    "Snare Roll Short": 2,
    Tom: 3,
  };

  let styles = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };

  function playsound(ind) {
    let audio1 = new Audio(soundArr[ind]);
    audio1.volume = volume;
    audio1.play();
    setSoundTitle(Object.keys(soundOrder)[ind]);
  }

  window.document.onkeydown = (e) => {
    if (power) {
      playsound(e.key - 1);
    }
  };

  function keydown({ key }) {
    document.getElementById(key).style.backgroundColor = "aqua";
    document.getElementById(key).style.boxShadow = "none";
  }
  function keyup({ key }) {
    document.getElementById(key).style = {};
  }

  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);

  return (
    <div className="App">
      <div className="controller">
        <div className="button-grid-container">
          {Object.keys(soundOrder).map((curr, ind) => {
            return (
              <div
                key={curr}
                id={soundOrder[curr]}
                className="button-grid-item"
                style={styles[ind]}
                onClick={() => {
                  if (power) {
                    playsound(soundOrder[curr] - 1);
                  }
                }}
              >
                <h2>{soundOrder[curr]}</h2>
              </div>
            );
          })}
        </div>
        <div className="controls-container">
          <div className="block2">
            <div
              className="power-button"
              onClick={() => {
                togglePower(!power);
                setSoundTitle("");
              }}
            ></div>
            <h3>POWER</h3>
          </div>
          <div className="block3">
            <div
              className="power-light"
              style={power ? {} : { backgroundColor: "red" }}
            ></div>
          </div>
          <div className="block5">
            <h4>{soundTitle}</h4>
          </div>
          <div className="block8">
            <input
              max={1}
              min={0}
              step={0.01}
              type="range"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <h4>VOLUME</h4>
          </div>
        </div>
      </div>
      <footer>
        <p>Brandon McHugh 2022</p>
        <p>
          <a href="https://github.com/brandmch/Drum-Machine">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
