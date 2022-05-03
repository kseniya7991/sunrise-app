import React, { useEffect, useState } from "react";
import calcProbability from "./calcProbability";

export default function NextMorning({ currentDate, data }) {
    const [timeNextSun, setTimeNextSun] = useState("");
    const [timeToNextSun, setTimeToNextSun] = useState("");

    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pressure, setPressure] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [windDirection, setWindDirection] = useState("");
    const [id, setId] = useState("");
    const [clouds, setClouds] = useState("");
    const [probability, setProbability] = useState();

    function getCardinalDirection(angle) {
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
    }

    function setInfo(currentDate, data) {
        let unixTimeNext = data.daily[1].sunrise;
        let timeNext = new Date(unixTimeNext * 1000);
        let nextSunHours = (unixTimeNext - currentDate) / 60 / 60;
        let nextMorning = data.hourly[Math.round(nextSunHours)];
        let nextMorningWeather = nextMorning.weather;

        setWeather(`${nextMorningWeather[0].description}`);
        setTemp(nextMorning.temp);
        setHumidity(nextMorning.humidity);
        setPressure(nextMorning.pressure);
        setWindSpeed(nextMorning.windSpeed);
        setWindDirection(getCardinalDirection(nextMorning.windDirection));
        setId(nextMorningWeather[0].id);
        setClouds(nextMorning.clouds);
        setProbability(calcProbability(nextMorningWeather[0].id));

        if (timeNext) {
            let h = timeNext.getHours().toString();
            let m = timeNext.getMinutes().toString();

            setTimeNextSun(`${h}:${m.length === 1 ? "0" + m : m}`);
            let nextSunH = Math.floor(nextSunHours).toString();
            let nextSunM = Math.floor(
                ((unixTimeNext - currentDate) / 60) % 60
            ).toString();

            setTimeToNextSun(
                `${nextSunH}:${
                    nextSunM.length === 1 ? "0" + nextSunM : nextSunM
                }`
            );
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentDate && Object.keys(data).length !== 0) {
                setInfo(currentDate, data);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [data, currentDate]);

    return (
        <ul className="table">
            <li>
                <span>Время следующего рассвета </span>
                <span>{timeNextSun}</span>
            </li>
            <li>
                <span>Время до следующего рассвета </span>
                <span>{timeToNextSun}</span>
            </li>
            <li>
                <span>Погода на утро </span>
                <span>{weather}</span>
            </li>
            <li>
                <span>Температура на утро </span>
                <span>{temp}</span>
            </li>
            <li>
                <span>Влажность на утро </span>
                <span>{humidity}%</span>
            </li>
            <li>
                <span>Давление на утро </span>
                <span>{pressure}</span>
            </li>
            <li>
                <span>Скорость ветра</span>
                <span>{windSpeed} м/с</span>
            </li>
            <li>
                <span>Направление ветра</span>
                <span>{windDirection}</span>
            </li>
            <li>
                <span>id погоды</span>
                <span>{id}</span>
            </li>
            <li>
                <span>Облака</span>
                <span>{clouds}%</span>
            </li>
            <li>
                <span>Вероятность</span>
                <span>{probability}%</span>
            </li>
        </ul>
    );
}
