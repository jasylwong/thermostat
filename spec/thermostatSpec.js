'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('power saving mode', function() {
    it('defaults with power saving mode on', function() {
      expect(thermostat.power_saving_mode).toBe(true);
    });
  
    it('switches power saving mode from on to off', function() {
      thermostat.mode_switcher();
      expect(thermostat.power_saving_mode).toBe(false);
    })

    it('switches power saving mode from off to on', function() {
      thermostat.mode_switcher();
      expect(thermostat.power_saving_mode).toBe(false);
      thermostat.mode_switcher();
      expect(thermostat.power_saving_mode).toBe(true);
    })
  })


  describe('temperature', function() {
    it('starts at twenty degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('has a default min of 10', function() {
      expect(thermostat.min_temp).toEqual(10);
    });

    it('has a default max of 10', function() {
      expect(thermostat.max_temp).toEqual(25);
    });
  });

  describe('current_temp', function() {
    it('returns the current temp', function() {
      expect(thermostat.current_temp()).toEqual(20)
    });
  });

  describe('increase_temp', function() {
    it('increases the temp by one', function() {
      thermostat.increase_temp();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('has a max of 25 degrees when power saving mode on', function() {
      thermostat.temperature = 25;
      expect(thermostat.current_temp()).toEqual(25);
      thermostat.increase_temp();
      expect(thermostat.current_temp()).toEqual(25);
    });
  });

  describe('decrease_temp', function() {
    it('decreases the temp by one', function() {
      thermostat.decrease_temp();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
      thermostat.temperature = 10;
      expect(thermostat.current_temp()).toEqual(10);
      thermostat.decrease_temp();
      expect(thermostat.current_temp()).toEqual(10);
    });
  });
});