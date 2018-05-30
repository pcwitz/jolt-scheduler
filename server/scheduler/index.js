'use strict';

const schedule = require('node-schedule');
const Job = require('./job');
const constants = require('./config/constants.json');

function createRecurringRule(interval) {

  var rule = new schedule.RecurrenceRule();
  if (interval.days) {

    var hoursOfDay   = interval.hours/constants.time.HOURS_IN_DAY;
    var minutesOfDay = interval.minutes/constants.time.MINUTES_IN_DAY;
    var secondsOfDay = interval.seconds/constants.time.SECONDS_IN_DAY;
    var daysInterval = interval.days + hoursOfDay + minutesOfDay + secondsOfDay;
    rule.dayOfWeek = [new schedule.Range(0, 6, Math.round(daysInterval))];

  } else if (interval.hours) {

    var minutesOfHour = interval.minutes/constants.time.MINUTES_IN_HOUR;
    var secondsOfHour = interval.seconds/constants.time.SECONDS_IN_HOUR;
    var hoursInterval = interval.hours + minutesOfHour + secondsOfHour;
    rule.hour = [new schedule.Range(0, 23, Math.round(hoursInterval))];

  } else if (interval.minutes) {

    var secondsOfMinute = interval.seconds/constants.time.SECONDS_IN_MINUTE;
    var minutesInterval = interval.minutes + secondsOfMinute;
    rule.minute = [new schedule.Range(0, 59, Math.round(minutesInterval))];
    rule.second = 0;
  } else {

    rule.second = [new schedule.Range(0, 59, Math.round(interval.seconds))];

  }
  return rule;
}

function scheduleEvent(err, event) {

  if (err) {
    console.error(err);
  } else {
    var job = Job.init(event);

    if (event.recurring) {
      var rule = createRecurringRule(event.interval);
      job.schedule(rule);
    } else {

      const days = event.interval.days ? event.interval.days * constants.time.SECONDS_IN_DAY : 0;
      const minutes = event.interval.minutes ? event.interval.minutes * constants.time.SECONDS_IN_MINUTE : 0;
      const seconds = event.interval.seconds ? event.interval.seconds * constants.time.MILLISECONDS_IN_SECOND : 0;
      const runTimeIntervalInSeconds = days + minutes + seconds;
      job.schedule(event.start.setSeconds(event.start.getSeconds() + runTimeIntervalInSeconds));
    }
  }
}

module.exports = {
  scheduleEvent: scheduleEvent
};


// second (0-59)
// minute (0-59)
// hour (0-23)
// date (1-31)
// month (0-11)
// year
// dayOfWeek (0-6) Starting with Sunday

// Job {
//   job: undefined,
//   callback: false,
//   name: '<Anonymous Job 1>',
//   trackInvocation: [Function],
//   stopTrackingInvocation: [Function],
//   triggeredJobs: [Function],
//   setTriggeredJobs: [Function],
//   cancel: [Function],
//   cancelNext: [Function],
//   reschedule: [Function],
//   nextInvocation: [Function],
//   pendingInvocations: [Function]
// }