var apiKey = "64bf104f0d53ef5b1bb792bbb0ab27f1"

function searchCity(city) {
    var settings = {
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=64bf104f0d53ef5b1bb792bbb0ab27f1",
        method: "GET",
    };

    $.ajax(settings).then(function (response) {
        console.log(response)
        var weatherDisplay = $(".cityWeatherDisplay")
        weatherDisplay.empty()
        //Container to be appended to show in the Weather Display
        var containerDiv = $('<div>')
        //City Name Container
        var cityName = response.name
        var cityContainer = $('<h2>')
        cityContainer.text(cityName)
        //Temperature Container 
        var temperature = response.main.temp
        var tempPTag = $('<p>')
        tempPTag.text("Temp:" + temperature)
        //Humidity Container
        var humid = response.main.humidity
        var humPTag = $('<p>')
        humPTag.text("Humidity:" + humid + "%")
        //Windspeed Container
        var windSpeed = response.wind.speed
        var windPTag = $('<p>')
        windPTag.text("Wind Speed:" + windSpeed + "mph")

        containerDiv.append(cityContainer, tempPTag, humPTag, windPTag)
        weatherDisplay.append(containerDiv)
        console.log(temperature)
    })
}

$("#submit").on("click", function () {
    var userInput = $("#searchInput").val()
    searchCity(userInput)
    console.log(userInput)
}
)

$("#chicago").on("click", function () {
    searchCity("chicago")
}
)

$("#newYork").on("click", function () {
    searchCity("new york")
}
)

$("#sanFrancisco").on("click", function () {
    searchCity("san francisco")
}
)
  //JS temp converter
  // UV index, Coodinates will be parameter