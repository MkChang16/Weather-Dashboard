var apiKey = "64bf104f0d53ef5b1bb792bbb0ab27f1"

function searchCity(city){
var settings = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=64bf104f0d53ef5b1bb792bbb0ab27f1",
    method: "GET",
  };

  $.ajax(settings).then(function(response) {
      console.log(response)
      var weatherDisplay = $(".cityWeatherDisplay")
      weatherDisplay.empty()
      var temperature = response.main.temp 
      var containerDiv = $('<div>')
      var cityContainer =$('<h2>')
      var cityName = response.name
      cityContainer.text(cityName)
      var tempPTag = $('<p>')
      tempPTag.text("Temp:" + temperature)
      containerDiv.append(cityContainer, tempPTag)
      weatherDisplay.append(containerDiv)
      console.log(temperature)
  })}

  $("#submit").on("click",function(){
    var userInput = $("#searchInput").val()
    searchCity(userInput)
    console.log(userInput)
  }
  )

  $("#chicago").on("click",function(){
      searchCity("chicago")
  }
  )

  //JS temp converter
  // UV index, Coodinates will be parameter