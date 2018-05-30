'use strict';

module.exports = function(event, cb) {
  if (event.name !== 'reserveroom') {
    return cb(new Error(`Service unavailable. Expected a room reservation event and received request for ${event.name}`));
  } else {
    event.start = new Date(Date.now() + 86400); // date in the future from client
    event.recurring = false;
    event.interval.fix = 'before';
    return cb(null, event);
  }
};