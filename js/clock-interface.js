var Alarm = require('./../js/clock.js').alarmModule;

$(document).ready(function(){
  $('#output').hide();
  $('#time').text(moment());
  $('#set-alarm').submit(function(event) {
    event.preventDefault();
    var timesUp = $('#alarm-input').val();
    var newAlarm = new Alarm();
    var myVar = setInterval(myTimer, 1000);
      function myTimer() {
        console.log(newAlarm.alarmClock(timesUp));
      if (newAlarm.alarmClock(timesUp)===true) {
        $('#output').show();
         clearInterval(myVar);
      }
    }
  });
});
