import "./App.css";
import soundArr from "./sounds/sounds";

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
  }
};

const styles = {
  1: {
    backgroundColor: "#000000",
  },
};

function App() {
  const soundBoxOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className="App">
      <div className="controller">
        <div className="button-grid-container">
          {soundArr.map((curr, ind) => {
            return (
              <div
                key={curr}
                className="button-grid-item"
                onClick={() => {
                  new Audio(curr).play();
                }}
              >
                <h2>{soundBoxOrder[ind]}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
