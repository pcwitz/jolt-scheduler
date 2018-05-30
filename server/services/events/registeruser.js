'use strict';

module.exports = function(event, cb) {
  if (event.name !== 'registeruser') {
    return cb(new Error(`Service unavailable. Expected a registration event and received request for ${event.name}`));
  } else {
    event.start = new Date(Date.now());
    event.recurring = false;
    event.interval.fix = 'after';
    return cb(null, event);
  }
};