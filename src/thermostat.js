function Thermostat() {
  this.default_temp = 20;
  this.temperature = this.default_temp;
  this.min_temp = 10;
  this.max_temp = 25;
  this.max_temp_mode_off = 32;
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
  if ( this.power_saving_mode === true) {
    if (this.current_temp() < this.max_temp) { this.temperature++ };
  } else {
    if (this.current_temp() < this.max_temp_mode_off) { this.temperature++ };
  }
}

Thermostat.prototype.decrease_temp = function() {
  if (this.current_temp() > this.min_temp) { this.temperature-- };
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

console.log(thermostat.current_temp());