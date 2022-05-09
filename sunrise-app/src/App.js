import React, { useEffect, useState } from "react";
import { getWeather } from "./utils/api";
import NextMorning from "./components/nextMorning";

function App() {
    const [data, setData] = useState({});
    const [currentDate, setCurrentDate] = useState();

    function getData() {
        getWeather()
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        setCurrentDate(Math.floor(new Date().getTime() / 1000));
        getData();
    }, []);

    return (
        <div className="App">
            <NextMorning currentDate={currentDate} data={data} />

            {/*  <button className="button" onClick={getData}>
          Нажми сюда
        </button> */}
        </div>
    );
}

export default App;
