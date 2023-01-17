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

function App() {
  return (
    <div className="App">
      <div className="button-grid-container">
        {soundArr.map((curr) => {
          return (
            <div
              key={curr}
              className="button-grid-item"
              onClick={() => {
                new Audio(curr).play();
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
