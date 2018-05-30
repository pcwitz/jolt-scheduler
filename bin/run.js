'use strict';

const scheduler = require('../server/scheduler');
const service = require('../server/service');
const http = require('http');
const chalk = require('chalk');





/* ADD MICROSERVICE ACTIONS AS NEEDED */
const emailClient = require('../server/services/actions/email');
// const roomClient = require('../server/services/actions/room');
// const cacheClient = require('../server/services/actions/cache');


/* CHANGE INTERVAL SETTINGS AS NEEDED */
const event = {
  name: 'registeruser',
  interval: {days: 0, hours: 0, minutes: 0, seconds: 1},
  action: emailClient.send
};

var eventService = require('../server/services/events/' + event.name);
eventService(event, scheduler.scheduleEvent);







// server stuff...
const server = http.createServer(service);
server.listen(3030);

server.on('listening', function() {
  console.log(`
    JOLT-scheduler is listening on ${server.address().port} in ${service.get('env')} mode.
    Go to the code and change the ${chalk.bgCyanBright.bold('interval')} settings on the
    ${chalk.bgCyanBright.bold('event')} object in ${chalk.bold('bin/run.js')}.

    Event name:  ${event.name}
    Start date:  ${event.start}

    Event interval:
      day(s):    ${event.interval.days}
      hour(s):   ${event.interval.hours}
      minute(s): ${event.interval.minutes}
      second(s): ${event.interval.seconds}

    Recurring: ${event.recurring}`);
});