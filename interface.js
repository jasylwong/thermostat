$( document ).ready(function() {
  var thermostat = new Thermostat();

  // $.get("http://localhost:4567/temperature", function(data) {
  //   thermostat.temperature = $temperature
  // })
  
  updateTemperature();

  $('#select-city').click(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })     

  $("#increase_temp").click(function() {
    thermostat.increase_temp();
    updateTemperature();
  });

  $("#decrease_temp").click(function(){
    thermostat.decrease_temp();
    updateTemperature();
  });

  $("#mode_switch").click(function(){
    thermostat.mode_switcher();
    updateTemperature();
    alert( "Power mode switched" )
  });

  $("#reset").click(function() {
    thermostat.reset();
    updateTemperature();
  });

  function updateTemperature() {
    $('#show_temp').text(thermostat.current_temp());
    $('#show_usage').text(thermostat.usage_indicator());
    $('#show_temp').attr('class', thermostat.usage_indicator());
    console.log(thermostat.current_temp())
  };

  // $.get("http://localhost:4567/time", function(data) {
  //   $('#current_time').text(data)
  // });

  // $.post("http://localhost:4567/temperature", function() {
  //   $temperature = 
  // })
});