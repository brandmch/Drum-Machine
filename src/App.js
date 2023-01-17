import "./App.css";
import soundArr from "./sounds/sounds";

const SoundButton = (props) => {
  window.document.onkeydown = (e) => {
    let { key } = e;
    if (key === `${props.ind + 1}`) {
      new Audio(props.audio).play();
    }
  };

  return (
    <div
      className="button-grid-item"
      onClick={() => {
        new Audio(props.audio).play();
      }}
    ></div>
  );
};

function App() {
  const SoundButtons = () => {
    return soundArr.map((curr, ind) => {
      return <SoundButton audio={curr} ind={ind} key={curr} />;
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
