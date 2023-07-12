const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataElement = document.getElementById("weather-data");
const cityInputElement = document.getElementById("city-input");
const formElemnet = document.querySelector("form");

// async function initialWeatherData() {
//   try {
//     const country = "Philippines";
//     const data = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.weather[0].icon);
//         var icon = data.weather[0].icon;
//         var temperature = Math.round(data.main.temp);
//         var description = data.weather[0].description;
//         var details = [
//           `Feels like: ${Math.round(data.main.feels_like)}`,
//           `Humidity: ${data.main.humidity}`,
//           `Wind speed: ${data.wind.speed}`,
//         ];

//         weatherDataElement.querySelector(
//           ".icon"
//         ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`;
//         weatherDataElement.querySelector(
//           ".temperature"
//         ).textContent = `${temperature} ° C`;
//         weatherDataElement.querySelector(
//           ".description"
//         ).textContent = `${description}`;
//         weatherDataElement.querySelector(".details").innerHTML = details
//           .map((detail) => `<div>${detail}</div>`)
//           .join("");
//       });

//     // const thisData = data.json();
//     // console.log(thisData);
//   } catch (error) {}
// }

// const thisData = data.json();
// console.log(thisData);

formElemnet.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInputElement.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    console.log(res);
    if (!res) {
      throw new Error("Network response error!");
    } else {
      const data = await res.json();
      let details = [
        `Feels like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}`,
        `Wind speed: ${data.wind.speed}`,
      ];
      let icon = data.weather[0].icon;
      let temperature = Math.round(data.main.temp);
      let description = data.weather[0].description;

      weatherDataElement.querySelector(
        ".icon"
      ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`;
      weatherDataElement.querySelector(
        ".temperature"
      ).textContent = `${temperature} ° C`;
      weatherDataElement.querySelector(
        ".description"
      ).textContent = `${description}`;
      weatherDataElement.querySelector(".details").innerHTML = details
        .map((detail) => `<div>${detail}</div>`)
        .join("");
    }
  } catch (error) {}
}
