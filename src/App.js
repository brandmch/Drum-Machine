import "./App.css";
import soundArr from "./sounds/sounds";
import SoundButton from "./components/soundButton";

function App() {
  const SoundButtons = () => {
    return soundArr.map((curr, ind) => {
      return <SoundButton audio={curr} ind={ind} key={curr} />;
    });
  };

  window.document.onkeydown = (e) => {
    let { key } = e;
    if (key === "1") {
      console.log("swwwaaagg");
    }
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
