let weather = {
  apiKey: "Put your api key here",
  fetchWeather: function(city){

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No results");
          throw new Error("No results");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

displayWeather: function (data) {

   const { name } = data;

   const { icon, description } = data.weather[0];

   const { temp, humidity } = data.main;

   const { speed } = data.wind;

   document.querySelector(".city").innerText = name;

   document.querySelector(".icon").src =
     "https://openweathermap.org/img/wn/" + icon + ".png";

   document.querySelector(".description").innerText = description;

   document.querySelector(".temp").innerText = temp + "°C";

   document.querySelector(".humidity").innerText =
     "Humidity: " + humidity + "%";

   document.querySelector(".weather").classList.remove("loading");
 },

 search: function () {

   this.fetchWeather(document.querySelector(".search-bar").value);

 },

};

document.querySelector(".search button").addEventListener("click", function () {
 weather.search();
});

weather.fetchWeather("New Delhi");
