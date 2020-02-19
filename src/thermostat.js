'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.MAX_TEMP_MODE_OFF = 32;
  this.power_saving_mode = true;
}

var thermostat = new Thermostat;

Thermostat.prototype.mode_switcher = function() {
  this.power_saving_mode = (this.power_saving_mode ? false : true); 
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.current_temp = function() {
  return this.temperature;
}

Thermostat.prototype.increase_temp = function() {
  if ( this.power_saving_mode) {
    if (this.current_temp() < this.MAX_TEMP) { this.temperature++ };
  } else {
    if (this.current_temp() < this.MAX_TEMP_MODE_OFF) { this.temperature++ };
  }
}

Thermostat.prototype.decrease_temp = function() {
  if (this.current_temp() > this.MIN_TEMP) { this.temperature-- };
}

Thermostat.prototype.usage_indicator = function() {
  if (this.current_temp() >= 18 && this.current_temp() < 25) {
    return 'medium-usage';
  } else if (this.current_temp() < 18) {
    return 'low-usage';
  } else {
    return 'high-usage';
  };
};

console.log("Thermostat ready!");