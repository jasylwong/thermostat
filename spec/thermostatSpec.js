'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('start_temp', function() {
    it('starts at twenty', function() {
      expect(thermostat.start_temp).toEqual(20)
    });
  });
});