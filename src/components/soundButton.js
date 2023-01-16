// import React, { useState } from "react";

const SoundButton = (props) => {
  const sound = new Audio(props.audio);

  window.document.onkeydown = (e) => {
    let ind = props.ind + 1;
    if (e.key == ind) {
      sound.play();
    }
  };

  return (
    <div
      className="button-grid-item"
      onClick={() => {
        sound.play();
      }}
    ></div>
  );
};

export default SoundButton;
