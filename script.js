var apiKey = "64bf104f0d53ef5b1bb792bbb0ab27f1"

  function searchCity(city) {
    var settings = {
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=64bf104f0d53ef5b1bb792bbb0ab27f1",
        method: "GET",
    };

    $.ajax(settings).then(function (response) {
        console.log(response)
        //Overall container referenced in HTML
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
        tempPTag.text("Temp: " + temperature + " Kelvin")
        //Humidity Container
        var humid = response.main.humidity
        var humPTag = $('<p>')
        humPTag.text("Humidity: " + humid + "%")
        //Windspeed Container
        var windSpeed = response.wind.speed
        var windPTag = $('<p>')
        windPTag.text("Wind Speed: " + windSpeed + "mph")

        containerDiv.append(cityContainer, tempPTag, humPTag, windPTag)
        weatherDisplay.append(containerDiv)

        var lon = response.coord.lon
        var lat = response.coord.lat

        function indexWeather(lon, lat) {
            var indexSettings = {
                url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=64bf104f0d53ef5b1bb792bbb0ab27f1",
                method: "GET",
            };
            $.ajax(indexSettings).then(function (indexResponse) {
                console.log("Index", indexResponse)
            }
            )
        }
        indexWeather(lon, lat)
    })
}




function forecast(city) {
    var forecastSettings = {
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=64bf104f0d53ef5b1bb792bbb0ab27f1",
        method: "GET",
    }


    $.ajax(forecastSettings).then(function (forecastResponse) {
        console.log(forecastResponse)
        var forecastDisplayDay1 = $(".forecastContainerDay1")
        var forecastDisplayDay2 = $(".forecastContainerDay2")
        forecastDisplayDay1.empty()
        forecastDisplayDay2.empty()

        var day1Date = forecastResponse.list[0].dt_txt
        console.log("Forecast Response Date", day1Date)
        var day1Temp = forecastResponse.list[0].main.temp
        var day1Humdity = forecastResponse.list[0].main.humidity

        var day2Date = forecastResponse.list[7].dt_txt
        var day2Temp = forecastResponse.list[7].main.temp
        var day2Humdity = forecastResponse.list[7].main.humidity

        //Container for day 1
        var day1 = $('<div>')
        day1DateContainer = $('<h1>')
        day1DateContainer.text(day1Date)
        day1TempContainer = $('<p>')
        day1TempContainer.text("Temp: " + day1Temp + " Kelvin")
        day1HumdityContainer = $('<p>')
        day1HumdityContainer.text("Humidity: " + day1Humdity + "%")

        day1.append(day1DateContainer, day1TempContainer, day1HumdityContainer)

        //Container for day 2
        var day2 = $('<div>')
        day2DateContainer = $('<h1>')
        day2DateContainer.text(day2Date)
        day2TempContainer = $('<p>')
        day2TempContainer.text("Temp: " + day2Temp + " Kelvin")
        day2HumdityContainer = $('<p>')
        day2HumdityContainer.text("Humidity: " + day2Humdity + "%")

        day2.append(day2DateContainer, day2TempContainer, day2HumdityContainer)
        //Container for day 3
        var day3 = $('<div>')
        //Container for day 4
        var day4 = $('<div>')
        //Container for day 5
        var day5 = $('<div>')

        forecastDisplayDay1.append(day1)
        forecastDisplayDay2.append(day2)

    })
}

$("#submit").on("click", function () {
    var userInput = $("#searchInput").val()
    searchCity(userInput)
    forecast(userInput)
    console.log(userInput)
}
)

$("#chicago").on("click", function () {
    searchCity("chicago")
    forecast("chicago")
}
)

$("#newYork").on("click", function () {
    searchCity("new york")
    forecast("new york")
}
)

$("#sanFrancisco").on("click", function () {
    searchCity("san francisco")
    forecast("san francisco")
}
)
