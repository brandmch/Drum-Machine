import React, { useState } from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

function App() {
  const [power, togglePower] = useState(true);
  const [soundTitle, setSoundTitle] = useState("");
  const [volume, setVolume] = useState(1);

  const soundBoxOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const soundTitleOrder = [
    "Hat",
    "Kick Light",
    "Kick",
    "Perc-1",
    "Perc-4",
    "Snare Off",
    "Snare Rimshot",
    "Snare Roll Short",
    "Tom",
  ];
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

  window.document.onkeydown = (e) => {
    if (power) {
      let { key } = e;
      switch (key) {
        case "1":
          new Audio(soundArr[6]).play();
          setSoundTitle(soundTitleOrder[6]);
          break;
        case "2":
          new Audio(soundArr[7]).play();
          setSoundTitle(soundTitleOrder[7]);
          break;
        case "3":
          new Audio(soundArr[8]).play();
          setSoundTitle(soundTitleOrder[8]);
          break;
        case "4":
          new Audio(soundArr[3]).play();
          setSoundTitle(soundTitleOrder[3]);
          break;
        case "5":
          new Audio(soundArr[4]).play();
          setSoundTitle(soundTitleOrder[4]);
          break;
        case "6":
          new Audio(soundArr[5]).play();
          setSoundTitle(soundTitleOrder[5]);
          break;
        case "7":
          new Audio(soundArr[0]).play();
          setSoundTitle(soundTitleOrder[0]);
          break;
        case "8":
          new Audio(soundArr[1]).play();
          setSoundTitle(soundTitleOrder[1]);
          break;
        case "9":
          new Audio(soundArr[2]).play();
          setSoundTitle(soundTitleOrder[2]);
          break;
        default:
          break;
      }
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
          {soundArr.map((curr, ind) => {
            return (
              <div
                key={curr}
                id={soundBoxOrder[ind]}
                className="button-grid-item"
                style={styles[ind]}
                onClick={() => {
                  if (power) {
                    new Audio(curr).play();
                    setSoundTitle(soundTitleOrder[ind]);
                  }
                }}
              >
                <h2>{soundBoxOrder[ind]}</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
