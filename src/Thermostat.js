'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function () {
  if(this.isMaximumTemperature()) {
  return
}
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSavingMode = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSavingMode = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature > this.MAX_LIMIT_PSM_ON) {
    return 'high-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'low-usage';
};
