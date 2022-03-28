//api.openweathermap.org/data/2.5/onecall?lat=53.893009&lon=27.567444&appid=d9fc31c58eae97112f028920774ddb0f

export const BASE_URL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=53.893009&lon=27.567444&appid=d9fc31c58eae97112f028920774ddb0f";

const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
};

export const getWeather = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};
