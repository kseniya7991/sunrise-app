import logo from "./logo.svg";
import "./App.css";
/* import { getWeather } from "./utils/api"; */
import respJSON from "./resp.json";

function App() {
  function getData() {
    console.log(respJSON);
    /* getWeather()
      .then((res) => console.log(res, respJSON))
      .catch((err) => console.log(err)); */
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button" onClick={getData}>
          Нажми сюда
        </button>
        <div className="table">Learn React</div>
      </header>
    </div>
  );
}

export default App;
