$( document ).ready(function() {
  var celsius = true;
  var weatherAPI = 'https://fcc-weather-api.glitch.me/api';
    
  function getWeather(lat, long) {
    var query = weatherAPI + '/current?lat=' + lat + '&lon=' + long;
    $.getJSON(query, function(weatherData) {
      $('.location').html(weatherData.name + ', ' + weatherData.sys.country);
      $('#temp').html(weatherData.main.temp.toFixed(1));
      $('#temp-unit').html('C')
      var img = $('<img id="dynamic">');
      img.attr('src', weatherData.weather[0].icon);
      img.appendTo('.icon');
      $('.loader').toggleClass('hidden');
      $('#temp-button').toggleClass('hidden');
    });
  }

  
  function toggleTempUnit(){
    var temp = $('#temp').html();
    if (celsius) {
      var far = temp * 9 / 5 + 32;
      $('#temp').html(far.toFixed(1));
      $('#temp-unit').html('F');
      celsius = false;
    } else {
      var cel = (temp - 32) * 5 / 9;
      $('#temp').html(cel.toFixed(1));
      $('#temp-unit').html('C');
      celsius = true;
    }
  }

  $('#temp-button').on('click', toggleTempUnit);
  
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude.toFixed(2);
      var long = position.coords.longitude.toFixed(2);
      
      getWeather(lat, long);
      
    });
  }
  
  });