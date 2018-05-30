'use strict';

const schedule = require('node-schedule');

function init (event) {
  return new schedule.Job(event.name, event.action);
}

module.exports = {
  init: init
};