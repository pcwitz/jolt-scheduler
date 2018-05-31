'use strict';

var addTimeForFutureEvent = 8000; // 432000 is five days

module.exports = function(event, cb) {
  if (event.name !== 'reserveRoom') {
    return cb(new Error(`Service unavailable. Expected a room reservation event and received request for ${event.name}`));
  } else {
    event.start = new Date(Date.now() + addTimeForFutureEvent);
    return cb(null, event);
  }
};
