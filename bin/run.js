'use strict';

const scheduler = require('../server/scheduler');
const service = require('../server/service');
const http = require('http');
const chalk = require('chalk');
const events = require('../public/settings/events.json');

/* CHANGE EVENT SETTINGS IN public/settings/events.json AS NEEDED */
events.forEach(function(event) {
  var eventService = require('../server/services/events/' + event.name);
  event.action = require('../server/services/actions/' + event.action);
  eventService(event, scheduler.scheduleEvent);
  consoleLog(event);
});

// server stuff...
const server = http.createServer(service);
server.listen(3030);

server.on('listening', function() {
  console.log(`
    JOLT-scheduler is listening on ${server.address().port} in ${service.get('env')} mode.
    Go to the code and change the ${chalk.bgCyanBright.bold('interval')} settings on the
    ${chalk.bgCyanBright.bold('event')} object in ${chalk.bold('bin/run.js')}.`);
});

function consoleLog(event) {
  console.log(`
    Event name:  ${event.name}
    Start date:  ${event.start}

    Event interval:
      day(s):    ${event.interval.days}
      hour(s):   ${event.interval.hours}
      minute(s): ${event.interval.minutes}
      second(s): ${event.interval.seconds}

    Recurring: ${event.recurring}`);
}