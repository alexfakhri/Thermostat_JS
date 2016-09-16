'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it('Should start at 20 degress', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // You can increase the temp with the up button
  it('should increase temp by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // You can decrease the temp with the down button
  it('should decrease temp by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('has a minimum temp of 10 degrees', function(){
    for(var i = 0; i < 11; i++){
      thermostat.decreaseTemp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});

// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
