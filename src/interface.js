var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature);

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

$('#temperature-up').click(function() {
 thermostat.increaseTemp();
 updateTemperature();
});

$('#temperature-down').click(function() {
  thermostat.decreaseTemp();
  updateTemperature();
});

$('#temperature-reset').click(function() {
 thermostat.resetTemp();
 updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.switchOnPowerSavingMode();
  $('#power-saving-status').text(' on')
  updateTemperature();
});

$('#powersaving-off').click(function() {
  thermostat.switchOffPowerSavingMode();
  $('#power-saving-status').text(' off')
  updateTemperature();
});

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
};

$('#current-city').change(function() {
  var city = $('#current-city').val();
  displayWeather(city);
})
