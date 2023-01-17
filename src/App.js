import React, { useState } from "react";
import "./App.css";
import soundArr from "./sounds/sounds";

function App() {
  const soundBoxOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3];
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
    let { key } = e;
    switch (key) {
      case "1":
        new Audio(soundArr[6]).play();
        break;
      case "2":
        new Audio(soundArr[7]).play();
        break;
      case "3":
        new Audio(soundArr[8]).play();
        break;
      case "4":
        new Audio(soundArr[3]).play();
        break;
      case "5":
        new Audio(soundArr[4]).play();
        break;
      case "6":
        new Audio(soundArr[5]).play();
        break;
      case "7":
        new Audio(soundArr[0]).play();
        break;
      case "8":
        new Audio(soundArr[1]).play();
        break;
      case "9":
        new Audio(soundArr[2]).play();
        break;
      default:
        break;
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
                  new Audio(curr).play();
                }}
              >
                <h2>{soundBoxOrder[ind]}</h2>
              </div>
            );
          })}
        </div>
        <div className="controls-container">
          <div className="item1">
            <div className="power-button"></div>
            <h3>POWER</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
