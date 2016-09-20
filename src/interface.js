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

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})
