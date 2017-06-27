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
