var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature);

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
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
