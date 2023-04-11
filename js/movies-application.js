"use strict";

function createMovie() {
    let title = prompt("What is the title of your movie?");
    let rating = prompt("Who is the rating of this movie?")
    return {title, rating};
}


// fetch("http://localhost:3000/movies")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
function createCards() {
    let html = ""
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            const jsonDataElement = document.getElementById('json-data');
            jsonDataElement.textContent = JSON.stringify(data[0]);
        });


// function createCards(lon, lat) {
//     let html = ""
//     $.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + OPEN_WEATHER_APPID, {
//         // APPID: OPEN_WEATHER_APPID,
//         // q: "Dallas, US",
//         units: "imperial"
//
//     }).done(function (weatherData) {
//         for (let i = 0; i <= 39; i += 8) {
//             // html += ""
//             console.log(weatherData.list[i])
//             //<------Below is the descritption------>
//             weatherData.list[i].weather[0].description
//             //<-------Below is the humidity--------->
//             weatherData.list[i].main.humidity
//             //<--------Below is the wind------------->
//             weatherData.list[i].wind.speed
//             //<--------Below is the preesure---------->
//             weatherData.list[i].main.pressure
//
//             weatherData.list[i].dt_txt
//
// // Split the date and time
// //                 let dateTime = data.list[i].dt_txt.split(' ');
// // Use only the date portion
// //                 let date = dateTime[0];
// // Formats date to Date, month day and year
//             const date = new Date(weatherData.list[i].dt_txt).toDateString();
//             // console.log(date);
//             html += "<div class='col d-flex justify-content-center'>"
//             html += "<div class='card' style='height: 100%; width: 250px'>"
//             html += "<div class='card-header text-center'>" + date + "</div>";
//             html += "<div class='card-body'>"
//             html += "<h5 class='card-title text-center'>" + weatherData.list[i].main.temp_max + "°F / " + weatherData.list[i].main.temp_min + "°F" + "</h5>";
//             html += "<p class='card-text text-center'>" + "<img src='http://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png'></img>" + "</p>";
//             html += "<p class='card-text'>" + "Description: " + weatherData.list[i].weather[0].description + "</p>";
//             html += "<p class='card-text'>" + "Humidity: " + weatherData.list[i].main.humidity + "</p>";
//             html += "<p class='card-text'>" + "Wind: " + weatherData.list[i].wind.speed + "</p>";
//             html += "<p class='card-text'>" + "Pressure: " + weatherData.list[i].main.pressure + "</p>";
//             html += "</div>";
//             html += "</div>";
//             html += "</div>";
//         }
//         $('#cards').html(html);
//         $('#current-city').html(weatherData.city.name)
//         // document.getElementById('search-bar').appendChild(geocoder.onAdd(map));
//     });
// }