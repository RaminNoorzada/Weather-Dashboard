// Variables
var searchButton = $(".searchButton");

var apiKey = "77ea55c3041b31bf1ff7ed59c1e50154";

// For loop for persisting the data onto html page
for (var i = 0; i < localStorage.length; i++); {

    var city = localStorage.getItem(i);

    console.log(localStorage.getItem("City"));
    var cityName = $(".list-groups").addClass("list-group-item");

    cityName.append("<li> + city </li>");
}
// Key count for local storage
var keyCount = 0;
// Search button click en]vent
searchButton.on("click", function () {

    var searchInput = $(".searchInput").val();
    console.log(searchInput)
    giocode(searchInput)

    // Variable for current working weather 
    //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
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
        }).then(function (response) { })
    }
})
function giocode(searchInput) {
    var giourl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=5&appid=${apiKey}`
    fetch(giourl)
        .then(response => response.json())
        .then(function (response) {
            console.log(response)
        })
}