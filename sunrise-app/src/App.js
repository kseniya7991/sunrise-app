import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
/* import { getWeather } from "./utils/api"; */
import respJSON from "./resp.json";

function App() {
  const [timeNextSun, setTimeNextSun] = useState("");
  const [timeToNextSun, setTimeToNextSun] = useState("");
  const [test, setTest] = useState(0);
  let currentDate = new Date();

  function getData() {
    const unixTimeNextSun = respJSON.daily[1].sunrise;

    if (unixTimeNextSun) {
      let date = new Date(unixTimeNextSun * 1000);
      let h = date.getHours();
      let m = date.getMinutes();
      setTimeNextSun(`${h}:${m}`);
      let nextSunH = Math.floor(
        (date.valueOf() - currentDate.valueOf()) / 1000 / 60 / 60
      ).toString();
      let nextSunM = Math.floor(
        ((date.valueOf() - currentDate.valueOf()) / 1000 / 60) % 60
      );
      let nextSunS = Math.floor(
        ((date.valueOf() - currentDate.valueOf()) / 1000) % 60
      );
      /*   setTimeToNextSun(
        `${nextSunH.length === 1 ? "0" + nextSunH : nextSunH}:${
          nextSunM.length === 1 ? "0" + nextSunM : nextSunM
        }`
      ); */
      setTimeToNextSun(`${nextSunH}, ${nextSunM}`);
    }

    /* getWeather()
      .then((res) => console.log(res, respJSON))
      .catch((err) => console.log(err)); */
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
      setTest(timeToNextSun);
      console.log(timeToNextSun);
    }, 60000);
    return () => clearInterval(interval);
  }, [test]);
  console.log(test);

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
        <ul className="table">
          <li>
            <span>Время следующего рассвета</span>
            <span>{timeNextSun}</span>
          </li>
          <li>
            <span>Время до следующего рассвета</span>
            <span>{test}</span>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
