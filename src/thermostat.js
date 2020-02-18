function Thermostat() {
  this.temperature = 20;
  this.min_temp = 10;
  this.max_temp = 25;
  this.power_saving_mode = true;
}

var thermostat = new Thermostat;

Thermostat.prototype.mode_switcher = function() {
  // if (this.power_saving_mode === true) {
  //   this.power_saving_mode = false;
  // } else {
  //   this.power_saving_mode = true;
  // }
  this.power_saving_mode = (this.power_saving_mode ? false : true); 
}

Thermostat.prototype.current_temp = function() {
  return this.temperature;
}

Thermostat.prototype.increase_temp = function() {
  if (this.current_temp() < this.max_temp) { this.temperature++ };
}

Thermostat.prototype.decrease_temp = function() {
  if (this.current_temp() > this.min_temp) { this.temperature-- };
}

console.log(thermostat.current_temp());