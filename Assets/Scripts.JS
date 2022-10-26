// Variables
var searchButton = $(".searchButton");

var apiKey = "b8ecb570e32c2e5042581abd004b71bb";

// For loop for persisting the data onto html page
for (var i =0; i <localStorage.length; i++); {

    var city = localStorage.getItem(i);

    console.log(localStorage.getItem("City"));
    var cityName = $(".list-groups") .addClass("list-group-item");

    cityName.append("<li> + city </li>");
}
// Key count for local storage
var keyCount = 0;
// Search button click en]vent
searchButton.click(function () {

    var searchInput = $(".searchInput").val();

    // Variable for current working weather
    var urlCurrent = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" + searchInput + "&Appid=" + apiKey + "&units=imerial";
    // Variable for 5 day forecast 
    var urlFiveDay = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m" + searchInput + "&Appid=" + apiKey + "&units=imerial";


    if (searchInput == "") {
        console.log(searchInput);
    }   
    else {
        $.ajax({
            urlCurrent,
            method: "GET"
        })  .then(function (response))
    }
})
