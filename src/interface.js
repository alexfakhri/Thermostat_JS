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
