/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=9991331c09acc8344c8450fa71f0717a&units=imperial', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);

        document.getElementById('location').innerHTML = cObj.name;
        document.getElementById('weather').innerHTML = cObj.weather[0].description;
        document.getElementById('temperature').innerHTML = cObj.main.temp;
        document.getElementById('desc').innerHTML = "Wind Speed" + cObj.wind.speed;
    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?zip=94040,us&appid=9991331c09acc8344c8450fa71f0717a&units=imperial', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = function() {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);

        var date_raw = fObj.list[8].dt_txt;
        date_raw = date_raw.substring(5, 11);
        document.getElementById('r2c1').innerHTML = date_raw;

        var iconcode = fObj.list[8].weather[0].icon;
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
        document.getElementById("r2c2").src = icon_path;
        document.getElementById("r2c3").innerHTML = fObj.list[8].main.temp_min + "&deg;";
        document.getElementById("r2c4").innerHTML = fObj.list[8].main.temp_max + "&deg;";


        var date_raw = fObj.list[16].dt_txt;
        date_raw = date_raw.substring(5, 11);
        document.getElementById('r3c1').innerHTML = date_raw;

        var iconcode = fObj.list[16].weather[0].icon;
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
        document.getElementById("r3c2").src = icon_path;
        document.getElementById("r3c3").innerHTML = fObj.list[16].main.temp_min + "&deg;";
        document.getElementById("r3c4").innerHTML = fObj.list[16].main.temp_max + "&deg;";

    } //end if
}; //end function




// let network = 'https://jsonplaceholder.typicode.com/photos';

// let network = 'https://api.openweathermap.org/data/2.5/weather?zip={98001},{+1}&appid={9991331c09acc8344c8450fa71f0717a}';


// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
// }

// //PART 2
// const json = response => response.json()

// //PART 3
// fetch(network)
//     .then(status)
//     .then(json)
//     .then(data => {
//         console.log('Request succeeded with JSON response', data);
//         //jsonImageElemment(data[0].url);
//     })
//     .catch(error => {
//         console.log('Request failed', error)
//     }).catch(err => {
//         console.log('err');
//     });