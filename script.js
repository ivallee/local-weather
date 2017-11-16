$( document ).ready(function() {
  
  var weatherAPI = 'https://fcc-weather-api.glitch.me';
    
  function getWeather(latitude, longitude) {
    
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude.toFixed(2);
      var long = position.coords.longitude.toFixed(2);

      getWeather(lat, long);

    });
  }
  
  });