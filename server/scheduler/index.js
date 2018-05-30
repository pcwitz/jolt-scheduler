'use strict';

const schedule = require('node-schedule');
const Job = require('./job');

function scheduleEvent(err, event) {

  if (err) {
    console.error(err);
  } else {
    var job = Job.init(event);
    console.log(job);
  }
}

module.exports = {
  scheduleEvent: scheduleEvent
};