const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weatherInfo");

const apiKey = "c4f86ece00bc8aa272652ac9065af12d";

function showWeatherDetails(event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  weatherInfo.innerHTML = `<p>Fetching weather for ${city}...</p>`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `City not found or API error (Status: ${response.status})`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (data.cod === 200) {
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} ℃</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
      } else {
        throw new Error(data.message || "An unknown error occurred.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please check the city name and try again.</p>`;
    });
}
weatherForm.addEventListener("submit", showWeatherDetails);
