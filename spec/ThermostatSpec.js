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

  // Power saving mode is on by default
  it('has power saving mode on be deafualt', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch powerSavingMode off', function(){
    thermostat.switchOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch powerSavingMode on', function(){
    thermostat.switchOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchOnPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // You can reset the temperature to 20 by hitting the reset button
  it('can be reset to the default temperature', function() {
    for(var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function(){

    // If power saving mode is on, the maximum temperature is 25 degrees
    it('has a maximum temperature of 25 degrees', function(){
      for(var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  });

  describe('when power saving mode is off', function(){

    // If power saving mode is off, the maximum temperature is 32 degrees
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.switchOffPowerSavingMode();
      for(var i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

  // The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
  describe('displays usage levels', function(){

    describe('when the temp is below 18 degrees', function(){
      it('is considered low usage', function(){
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when temp is between 18 and 25 degress', function(){
      it('is considered medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when temp is anything else', function(){
      it('is considered high-usage', function(){
        thermostat.switchOffPowerSavingMode();
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });

  });

});
