import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getWeather } from "./utils/api";
import NextMorning from "./components/nextMorning";

function App() {
  /* const [timeNextSun, setTimeNextSun] = useState("");
  const [timeToNextSun, setTimeToNextSun] = useState("");
  const [nextMornWeather, setNextMornWeather] = useState("");
  const [nextMornTemp, setNextMornTemp] = useState("");
  const [nextMornHumidity, setNextMornHumidity] = useState("");
  const [nextMornPressure, setNextMornPressure] = useState("");
  const [nextMornWindSpeed, setNextMornWindSpeed] = useState("");
  const [nextMornWindDeg, setNextMornWindDeg] = useState("");
  const [nextMornId, setNextMornId] = useState("");
  const [nextMornClouds, setNextMornClouds] = useState(""); */
  const [data, setData] = useState({});
  const [currentDate, setCurrentDate] = useState();

  /* function getCardinalDirection(angle) {
    const directions = [
      "↑ N",
      "↗ NE",
      "→ E",
      "↘ SE",
      "↓ S",
      "↙ SW",
      "← W",
      "↖ NW",
    ];
    return directions[Math.round(angle / 45) % 8];
  } */

  /* function setInfo(currentDate) {
    const unixTimeNextSun = data.daily[1].sunrise;
    let nextSunHours = (unixTimeNextSun - currentDate) / 60 / 60;
    let mornWeather = data.hourly[Math.round(nextSunHours)].weather;
    let mornTemp = data.hourly[Math.round(nextSunHours)].temp;
    let mornHumidity = data.hourly[Math.round(nextSunHours)].humidity;
    let mornPressure = data.hourly[Math.round(nextSunHours)].pressure;
    let mornWindSpeed = data.hourly[Math.round(nextSunHours)].wind_speed;
    let mornWindDeg = getCardinalDirection(
      data.hourly[Math.round(nextSunHours)].wind_deg
    );
    let mornId = mornWeather[0].id;
    let mornClouds = data.hourly[Math.round(nextSunHours)].clouds;
    setNextMornWeather(
      `${mornWeather[0].main + " " + mornWeather[0].description}`
    );
    setNextMornTemp(mornTemp);
    setNextMornHumidity(mornHumidity);
    setNextMornPressure(mornPressure);
    setNextMornWindSpeed(mornWindSpeed);
    setNextMornWindDeg(mornWindDeg);
    setNextMornId(mornId);
    setNextMornClouds(mornClouds);

    if (unixTimeNextSun) {
      let date = new Date(unixTimeNextSun * 1000);

      let h = date.getHours();
      let m = date.getMinutes();
      setTimeNextSun(`${h}:${m}`);

      let nextSunH = Math.floor(nextSunHours).toString();

      let nextSunM = Math.floor(
        ((unixTimeNextSun - currentDate) / 60) % 60
      ).toString();

      setTimeToNextSun(
        `${nextSunH.length === 1 ? "0" + nextSunH : nextSunH}:${
          nextSunM.length === 1 ? "0" + nextSunH : nextSunM
        }`
      );
    }
  } */

  function getData() {
    getWeather()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }

  /*  useEffect(() => {
    const interval = setInterval(() => {
      setInfo(currentDate, data);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]); */

  useEffect(() => {
    setCurrentDate(Math.floor(new Date().getTime() / 1000));
    getData();
  }, []);

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
        <NextMorning currentDate={currentDate} data={data} />
      </header>
    </div>
  );
}

export default App;
