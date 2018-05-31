'use strict';

const constants = require('./config/constants.json');

function intervalToMilliseconds(interval) {

  var seconds = 0;
  if (interval.days) {
    seconds += interval.days * constants.time.SECONDS_IN_DAY;
  } if (interval.hours) {
    seconds += interval.hours * constants.time.SECONDS_IN_HOUR;
  } if (interval.minutes) {
    seconds += interval.minutes * constants.time.SECONDS_IN_MINUTE;
  } if (interval.seconds) {
    seconds += interval.seconds;
  }
  return seconds * constants.time.MILLISECONDS_IN_SECOND;
}

function getMillisecondDifferenceBetweenNowAndFutureAction(eventStartDate, intervalInMilliseconds) {
  var millisecondsTillNow = Date.now();
  var millisecondsTillEvent  = eventStartDate.getTime();
  var millisecondsTillEventFromNow = millisecondsTillEvent - millisecondsTillNow;
  return millisecondsTillEventFromNow - intervalInMilliseconds;
}

function scheduleEvent(err, event) {

  if (err) {
    console.error(err);
  } else {
    var intervalInMilliseconds = intervalToMilliseconds(event.interval);
    if (event.interval.fix === 'before') {
      // difference of seconds between now and future action
      intervalInMilliseconds = getMillisecondDifferenceBetweenNowAndFutureAction(event.start, intervalInMilliseconds);
    }
    if (event.recurring) {
      setInterval(event.action, intervalInMilliseconds);
    } else {
      setTimeout(event.action, intervalInMilliseconds);
    }
  }
}

module.exports = {
  scheduleEvent: scheduleEvent
};
