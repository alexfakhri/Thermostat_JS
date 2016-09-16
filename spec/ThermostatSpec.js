'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  // Thermostat starts at 20 degrees
  it('Should start at 20 degress', function(){
    thermostat = new Thermostat();
    expect(thermostat.tempreature).toEqual(20);
  });

  // You can increase the temp with the up button
  it('should increase temp by 1', function(){
    thermostat.increaseTemp(1);
    expect(thermostat.tempreature).toEqual(21);
  });

});
