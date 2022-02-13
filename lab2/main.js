let apiKey = "713fb89153c1665d256c6636dd2a3847";

function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=imperial&APPID=${apiKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      displayWeather(json);
      getForecast(location, json.timezone);
    });
}

function init() {
  const defaultLocation = "salt lake city";
    getWeather(defaultLocation);

    document
      .getElementById("weatherSearch")
      .addEventListener("click", function (event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "") return;

        getWeather(value);
      });
}

init();



function displayWeather(json) {
  let results = "";
  results += `<h1>${json.name}</h1>`;
  results += `<h2>${json.main.temp} &deg;F</h2>`;
  results += `<p3>min/max: (${json.main.temp_min}/${json.main.temp_max})&deg;F</p3><br>`;
  
  for (let i = 0; i < json.weather.length; i++) {
    results += `<img src="http://openweathermap.org/img/w/${json.weather[i].icon}.png"/>`;
  }
  const description = json.weather.map((e) => e.description).join(", ");
  results += `<h4>${description}</h4>`;
  let dir = calcWind(json);
  results += `<br><p2><strong>Wind Speed:</strong> ${json.wind.speed}mph <strong>Wind Direction:</strong> ${dir}(${json.wind.deg}&deg)</p2>`;
  results += `<br><p2><strong>Coordinates(Lat,Long)&deg:</strong> ${json.coord.lat}, ${json.coord.lon}</p2>`;

  document.getElementById("weatherResults").innerHTML = results;
}

function getForecast(location, timezone) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location},US&units=imperial&APPID=${apiKey}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayForecast(json, timezone);
    });
}

function displayForecast(json, timezone) {
  const dailyForecastMap = convertForecast(json, timezone);

  let forecast = `<div class="container">`;
  dailyForecastMap.forEach((times, dateDisplay) => {
    forecast += `<div class="row">`;
    forecast += `<div class="date">${dateDisplay}</div>`;

    times.forEach((hourlyForecast) => {
      forecast += `<div class="col timeCol">`;
      if (!!hourlyForecast.temp) {
        const timeText = hourlyForecast.time.format("h A");
        forecast += `<div class="time">${timeText}</div>`;
        forecast += `<div class="temperature">${hourlyForecast.temp}°F</div>`;
        forecast += `<img src="http://openweathermap.org/img/w/${hourlyForecast.icon}.png"/>`;
      }
      forecast += `</div>`;
    });
    forecast += `</div>`;
  });
  forecast += `</div>`;

  document.getElementById("forecastResults").innerHTML = forecast;
}

function convertForecast(json, timezone) {
  const dailyForecastMap = new Map();
  json.list.forEach((hourlyForecast) => {
    let dateTime = dayjs(hourlyForecast.dt_txt);
    dateTime = dateTime.add(timezone, "second");
    console.log(dateTime);

    const day = dateTime.format("dddd, MMMM D, YYYY");
    let dailyForecast = dailyForecastMap.get(day);
    if (!dailyForecast) {
      dailyForecast = [];
      dailyForecastMap.set(day, dailyForecast);
    }
    dailyForecast.push({
      time: dateTime,
      temp: hourlyForecast.main.temp,
      icon: hourlyForecast.weather[0].icon,
    });
  });
  return dailyForecastMap;
}

function calcWind(json){
  let currDegrees = json.wind.deg;
  let val=Math.floor((currDegrees/22.5)+.5)
    arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    console.log(val);
    console.log(val%16);
    return arr[(val % 16)];
}