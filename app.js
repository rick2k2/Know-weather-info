const input_city = document.querySelector("#city_input");
const search_btn = document.querySelector("#get_weather_btn");

search_btn.addEventListener("click", get_weather);

async function get_weather() {
  const city = input_city.value;
  if (!city) {
    alert("Please Enter a city name");
    return;
  }

  const apiKey = "9ae47b0ef3700aade68eaa91247d2e91";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City Not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const weatherInfo = document.querySelector("#weather_info");

  weatherInfo.innerHTML = `
    <h2>${data.name},</h2>
    <p><strong>Temperature 🌡️:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather 🌤️:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity ☁️:</strong> ${data.main.humidity} %</p>
    <p><strong>Wind Speed 🍃:</strong> ${data.wind.speed} m/s</p>
  `;
  weatherInfo.classList.add("weather_info");
}
