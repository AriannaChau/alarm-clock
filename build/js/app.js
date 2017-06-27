(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/clock.js":2}],2:[function(require,module,exports){
function Alarm(time) {
  this.setTime = time;
}

Alarm.prototype.alarmClock = function(timesUp) {
  var alarm = false;
  console.log(moment(this.time).format("HH:mm"));
  console.log(timesUp);
  // console.log(moment(this.time).isSame(timesUp));
  if ((moment(this.time).format("HH:mm")) === timesUp) {
    alarm = true;
  }
  // return alarm = moment(this.time).format("HH:mm").isSame(timesUp);
  return alarm;
}



exports.alarmModule = Alarm;

},{}]},{},[1]);
