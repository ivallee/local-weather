$( document ).ready(function() {
  
  var weatherAPI = 'https://fcc-weather-api.glitch.me/api';
    
  function getWeather(lat, long) {
    var query = weatherAPI + '/current?lat=' + lat + '&lon=' + long;
    $.getJSON(query, function(weatherData) {
      $('#city').html(weatherData.name);
      $('#country').html(weatherData.sys.country);
      $('#temp').html(weatherData.main.temp.toFixed(1));
      
    });
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude.toFixed(2);
      var long = position.coords.longitude.toFixed(2);

      getWeather(lat, long);

    });
  }
  
  });